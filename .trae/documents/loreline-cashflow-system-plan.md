# Loreline — 游戏本地化/叙事 Asset Pack 现金流系统

> 品牌名暂定「Loreline」（lore + line，叙事资产流水线），可在实施前替换。

## Context（背景与目标）

用户要搭一个**线上现金流系统**，约束已通过 AskUserQuestion 三轮对齐收敛：

- 1 个月内见到第一笔现金
- $500 以内一次性启动成本
- 前期用用户的稀缺技能（游戏叙事设计 + 中英本地化 + 手模）做种子内容，后期资产化脱钩
- 独立产品品牌定位（不绑定个人，未来可转让/扩展）
- 用户不会写代码，完全不需要自己加 Pack——后期新增全交给 AI 自动化生产 + 人工审核
- 目标客户：独立游戏开发者 / 中小手游团队 / 本地化外包商

**原创核心逻辑**：把用户独有的三技能组合打包成数字资产包，做成垂直微型售卖/订阅站。这不是 dropshipping、不是联盟营销、不是课程售卖——是把稀缺专业技能资产化，可无限次复售。市面上没有"游戏叙事 + 本地化 + 手模"三合一 asset pack 供应商，技能组合本身即护城河。

**版权判断**：用户过往雇主作品（Tencent、IGG、《时光公主》）的具体台词/素材版权归雇主，不可抽取售卖。本系统所有 Pack 必须**全新创作**，只卖可迁移的"技法模板/术语结构/对话样本"，不复用具体角色名/世界观，保留创作过程留痕。

## 方案概述（两阶段上线策略）

**核心架构权衡**（经 Plan agent 验证）：1 个月见现金的瓶颈不是"有没有站"，而是"有没有可买的链接 + 流量"。因此采用两阶段：

- **D1（W1 第 1 天）**：Lemon Squeezy 原生 Checkout 跑通销售闭环——开户 + 建首个 Product + 拿 Checkout Link，1 小时内即可收款。Astro 站未就绪前，引流直接指向 LS Checkout 链接。
- **W2-W3**：Astro 品牌站并行搭建，复用 LS 的 Product ID / Buy Button（切站只换按钮位置，不重做产品与支付配置）。
- **W3 末**：品牌域名 CNAME 从 LS 店铺切到 Astro 站，保持同域名 + 301，索引不丢。

## 技术栈选型

| 层 | 选型 | 理由 |
|---|---|---|
| 前端 | Astro + Tailwind | 静态站，性能极佳，SEO 友好，天然适合内容/资产站 |
| 内容驱动 | Astro Content Collections（`src/content/packs/*.md`） | 新增 Pack = 加一个 markdown 文件 + git push + Vercel 自动部署，用户零代码 |
| 支付/交付 | **Lemon Squeezy** | Merchant of Record（代收全球 VAT/销售税），个人即可开户，支持订阅，费率 5%+$0.50，自动交付邮件，零月费 |
| 部署 | Vercel 免费 tier | 自定义域名 + 自动部署 |
| 邮件收集 | ConvertKit 免费 tier（≤1000 订阅者） | 免费样例换邮箱 + 后期自动化序列 |
| 分析 | Cloudflare Analytics 免费 | 隐私友好，无 cookie |
| 域名 | Namecheap/Cloudflare | ~$12/年 |

**支付平台排序**：Lemon Squeezy > Paddle > Gumroad > Stripe Payment Link。LS 是唯一同时满足"全球税务合规 + 个人无实体 + 订阅可扩展 + 自动交付"的选项。

## 4 周实施排期（已根据风险调整）

原排期偏乐观（W1 创 3 个 Pack + W3 写 3 篇深度文不现实），调整如下：

### W1 — 销售闭环 + 旗舰资产
- **D1**：Lemon Squeezy 开户 + KYC + 建首个 Product + 拿 Checkout Link（销售闭环跑通，可收款）
- **D1**：买品牌域名，先指向 LS 店铺
- **D2-D7**：产出 **1 个旗舰 Pack + 1 个轻量变体**（不是 3 个）：
  - 旗舰：`arpg-dialogue-bilingual` — "ARPG 男主台词库·中英对照 100 条"（含情绪/场景标签，全新创作）
  - 轻量变体：`mobile-localization-glossary` — "手游本地化术语表·ARPG+女性向 300 词"（含风格注释）
- 每个 Pack 含：完整版（付费，$19-29）+ 免费样例（5-10 条，邮箱收集后下载）+ 用例说明 + 商用授权说明

### W2 — Astro 品牌站搭建（与 Pack 创作并行）
- 套 Astro 博客/产品模板 + Tailwind
- 建首页 / Pack 列表页 / Pack 详情页 / About 页 / Blog 页
- 集成 LS Buy Button（复用 W1 的 Product ID）
- 集成 ConvertKit 免费样例下载表单
- 旗舰 Pack 在 W2 末上线售卖

### W3 — 引流旗舰长文（与建站收尾并行）
- 写 **1 篇旗舰长文**（不是 3 篇，1500-2500 字）：
  - "如何给 ARPG 写中英双语台词：5 个让英文母语者不出戏的原则"
  - 自站首发 + 同步 Medium / 知乎 / dev.to / Mirror
- 文末 CTA 引到旗舰 Pack 的免费样例下载（邮箱收集）
- 准备 2 篇短帖（W4 在社区发，引流用）

### W4 — 精准冷启动
- Indie 游戏开发 Discord / Reddit r/gamedev / r/IndieDev / TapTap 开发者社区"give first"——先发价值内容，链接放个人 profile，不硬广
- 给 5 个独立游戏团队免费送旗舰 Pack 换 review
- Product Hunt 发布
- W3 末或 W4 见首笔现金（保守预期 3-10 笔交易，$50-300）

## 目录结构

```
loreline/
├── src/
│   ├── content/
│   │   ├── config.ts              # Content Collections schema（Pack 数据结构）
│   │   └── packs/
│   │       ├── arpg-dialogue-bilingual.md
│   │       └── mobile-localization-glossary.md
│   ├── pages/
│   │   ├── index.astro            # 首页：品牌 + Pack 列表 + 引流
│   │   ├── packs/
│   │   │   ├── index.astro         # Pack 列表页
│   │   │   └── [slug].astro        # Pack 详情页（含 LS Buy Button）
│   │   ├── about.astro             # 品牌故事（独立品牌，透明但品牌化）
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── success.astro           # 购买后引导页
│   ├── components/
│   │   ├── PackCard.astro
│   │   ├── BuyButton.astro         # LS Checkout 嵌入
│   │   ├── FreeSampleDownload.astro  # 免费样例（ConvertKit 邮箱收集）
│   │   └── Newsletter.astro
│   └── layouts/
│       └── BaseLayout.astro
├── public/
│   ├── samples/                   # 免费样例文件（PDF/CSV 片段）
│   └── og/                        # 社交分享图
├── .github/workflows/
│   └── generate-pack.yml          # AI 自动化生产管线
├── .env.example                   # LS_API_KEY / CONVERTKIT_KEY / TAPTAP_ENDPOINT
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## 关键文件清单（实施阶段创建）

- `src/content/config.ts` — Content Collections schema，定义 Pack 的 frontmatter 结构（slug/title/price/description/samplePath/lsProductId/适用品类/商用授权）
- `src/content/packs/*.md` — 每个 Pack 一个 markdown，新增即上架（用户零代码）
- `astro.config.mjs` — Astro + Tailwind + `@astrojs/vercel` 适配器 + `@astrojs/mdx`
- `src/components/BuyButton.astro` — 嵌入 LS Checkout link，按 `lsProductId` 渲染
- `src/components/FreeSampleDownload.astro` — ConvertKit 表单 + 成功后返回样例下载链接
- `.github/workflows/generate-pack.yml` — 后期 AI 自动化生产管线
- `.env.example` — 密钥占位

## 后期 AI 自动化生产管线（第二阶段，2-6 月）

推荐架构（经 Plan agent 验证）：

**GitHub Actions workflow（`generate-pack.yml`）**：
- 双触发：`schedule`（cron，如每周一次）+ `workflow_dispatch`（手动）
- Workflow 内启动一个 Agent，通过 TapTap MCP（用户 memory 确认在用）调 LLM 生成 Pack 初稿
- Agent 按 Pack 类型模板 Prompt **填槽**（非自由发挥），输出符合 Content Collections schema 的 `src/content/packs/*.md`
- Agent 提交新分支 + `gh pr create` 开 PR
- 用户在 GitHub UI 审核 → merge 触发 Vercel 自动部署
- **人工审核是付费资产的非可协商质量门，永不跳过**
- 每个 Pack 类型配一个模板 Prompt 文件（`prompts/*.md`）

**质量护栏**：每 Pack 人工改写 ≥30%；月上限上新 2-3 个；审核清单（独特性/实用性/无幻觉）。

## 预算分解（$500 内）

| 项 | 成本 |
|---|---|
| 域名 | $12 |
| Lemon Squeezy | $0（按交易抽成 5%+$0.50） |
| Vercel | $0（免费 tier） |
| Astro/Tailwind | $0 |
| ConvertKit | $0（≤1000 订阅者） |
| Cloudflare Analytics | $0 |
| 精准投放（Reddit Ads / Indie 社区 sponsor） | $50-100 |
| AI 生产辅助 API（后期运营成本） | $20-50/月 |
| **启动期合计** | **~$70-120**，留充足余量 |

## 风险与缓解（Top 5）

1. **版权/雇主 IP**：全新创作，不复用具体角色名/世界观，只卖可迁移技法模板，保留创作留痕。
2. **支付风控冻结**：新 LS 账号触发风控概率不低。W1 立即完成 KYC，首笔小额自测，首月不接大单。
3. **冷启动被社区封禁**：r/gamedev 和 Discord 对 self-promo 极敏感。先"give first"（免费小 Pack 换邮箱进 ConvertKit），再 soft-sell；社区只发价值内容，链接放个人 profile。
4. **卖方个税/结汇**：MoR 只解决买方税，所得税和外汇结汇自理。预留收入 20% 税备，厘清个人经营所得申报路径。
5. **AI 生产质量滑坡**：批量生成→同质化→掉价。每 Pack 人工改写 ≥30%，月上限上新 2-3 个，设审核清单。

## Verification（端到端验证）

实施完成后按以下顺序验证整个系统：

1. **支付闭环**：用测试卡在 LS Checkout 完成一笔购买，确认收到自动交付邮件 + 下载链接可访问。
2. **本地构建**：`npm run dev` 起本地站，访问 `/` `/packs` `/packs/[slug]` `/about` `/blog` 全部正常渲染。
3. **构建产物**：`npm run build` 成功，`npm run preview` 可访问。
4. **内容驱动验证**：在 `src/content/packs/` 新增一个测试 markdown 文件，确认 Pack 列表/详情页自动出现新 Pack（验证"用户零代码加 Pack"路径——虽然用户不加，但这是 AI 管线上架的最后一步）。
5. **邮件收集**：在免费样例表单填测试邮箱，确认 ConvertKit 收到订阅 + 返回样例下载链接。
6. **部署**：推 main 分支，确认 Vercel 自动部署成功，自定义域名可访问。
7. **AI 管线（第二阶段）**：手动触发 `workflow_dispatch`，确认 Agent 生成 markdown + 开 PR；merge 后确认 Vercel 自动部署新 Pack。
8. **SEO/分享**：用社交平台调试器验证 OG 图、meta 标签正确。
