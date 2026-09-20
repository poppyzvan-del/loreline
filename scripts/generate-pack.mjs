// Pack 生成器 —— 被 .github/workflows/generate-pack.yml 调用
// 读 prompts/<pack_type>.md 作为系统 prompt + 填槽指令
// 调 LLM（TapTap MCP endpoint 或 OpenAI-compatible API）生成 markdown + CSV
// 写入 src/content/packs/<slug>.md 与 public/samples/<slug>-sample.csv
//
// 这是第二阶段的脚手架。实际 TapTap MCP 接口需根据用户实际使用的 endpoint 调整。
// 优先用 TAPTAP_ENDPOINT（用户 memory 提到使用 TapTap MCP）；无则降级用 OpenAI-compatible API。
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const PACK_TYPE = process.env.PACK_TYPE || 'dialogue';
const SLUG_HINT = process.env.SLUG_HINT || '';
const TAPTAP_ENDPOINT = process.env.TAPTAP_ENDPOINT;
const LLM_API_KEY = process.env.LLM_API_KEY;

if (!LLM_API_KEY && !TAPTAP_ENDPOINT) {
  console.error('缺少 LLM_API_KEY 或 TAPTAP_ENDPOINT');
  process.exit(1);
}

// 读 prompt 模板
const promptPath = join(process.cwd(), 'prompts', `${PACK_TYPE}.md`);
let systemPrompt;
try {
  systemPrompt = readFileSync(promptPath, 'utf8');
} catch {
  console.error(`找不到 prompt 模板: ${promptPath}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const slugBase = SLUG_HINT || `${PACK_TYPE}-pack-${today.replace(/-/g, '')}`;
const slug = slugBase.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

// 用户填槽指令（告诉 LLM 要生成什么主题）
const userInstruction = `请按模板生成一个 Pack。
- pack_theme: 由你判断一个有市场价值的主题（ARPG/女性向/SLG/休闲任选，避开与已有 Pack 重复）
- slug: ${slug}
- publishedAt: ${today}
输出两部分：
1. 完整的 markdown 文件内容（含 frontmatter + 正文），我会写入 src/content/packs/${slug}.md
2. 8 条样例 CSV 内容，我会写入 public/samples/${slug}-sample.csv

请严格用以下分隔标记输出，便于我解析：
===MARKDOWN_START===
（markdown 内容）
===MARKDOWN_END===
===CSV_START===
（csv 内容，含表头）
===CSV_END===`;

// 选 endpoint：TapTap 优先，否则 OpenAI-compatible
const endpoint = TAPTAP_ENDPOINT || 'https://api.openai.com/v1/chat/completions';

async function generate() {
  const body = JSON.stringify({
    model: TAPTAP_ENDPOINT ? 'taptap-default' : 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userInstruction },
    ],
    temperature: 0.7,
  });

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LLM_API_KEY}`,
    },
    body,
  });

  if (!res.ok) {
    console.error('LLM 请求失败:', res.status, await res.text());
    process.exit(1);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content ?? '';

  // 解析分隔标记
  const mdMatch = content.match(/===MARKDOWN_START===\s*([\s\S]*?)\s*===MARKDOWN_END===/);
  const csvMatch = content.match(/===CSV_START===\s*([\s\S]*?)\s*===CSV_END===/);

  if (!mdMatch || !csvMatch) {
    console.error('LLM 输出未包含分隔标记，无法解析。原始输出：\n', content);
    process.exit(1);
  }

  const markdown = mdMatch[1].trim();
  const csv = csvMatch[1].trim();

  // 写入文件
  const packsDir = join(process.cwd(), 'src', 'content', 'packs');
  const samplesDir = join(process.cwd(), 'public', 'samples');
  mkdirSync(packsDir, { recursive: true });
  mkdirSync(samplesDir, { recursive: true });

  const mdPath = join(packsDir, `${slug}.md`);
  const csvPath = join(samplesDir, `${slug}-sample.csv`);
  writeFileSync(mdPath, markdown, 'utf8');
  writeFileSync(csvPath, csv, 'utf8');

  console.log(`✓ 生成 Pack: ${mdPath}`);
  console.log(`✓ 生成样例: ${csvPath}`);
  console.log(`  请在 GitHub PR 里人工审核，改写 ≥30% 后 merge。`);
}

generate().catch((e) => {
  console.error(e);
  process.exit(1);
});
