# Loreline — 游戏本地化与叙事 Asset Pack 站

一个把稀缺叙事/本地化技能资产化的垂直微型售卖+订阅站。技术栈：Astro + Tailwind + Lemon Squeezy + Vercel。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产出 dist/
npm run preview  # 预览构建产物
```

未配置任何外部服务时，站点仍可正常构建与预览：购买按钮显示"购买即将开放"占位，免费样例直接下载（不收集邮箱）。配置后自动启用对应功能。

## 项目结构

```
src/
├── content/
│   ├── config.ts          # Pack / Blog 的 schema
│   └── packs/             # 每个 .md 即一个 Pack，新增即上架
├── pages/                 # 首页 / packs/[slug] / blog / about / success / 404
├── components/            # PackCard / BuyButton / FreeSampleDownload / Newsletter
├── layouts/BaseLayout.astro
└── styles/global.css
public/
├── samples/               # 免费样例 CSV
└── favicon.svg
.github/workflows/generate-pack.yml   # 后期 AI 生产管线
prompts/dialogue.md                   # Pack 生成 prompt 模板
scripts/generate-pack.mjs             # 生成脚本
```

## 新增一个 Pack（你不需要做，但这是上架路径）

1. 在 `src/content/packs/` 加一个 markdown 文件，frontmatter 遵循 `src/content/config.ts`。
2. 在 Lemon Squeezy 后台建对应 Product，复制 Buy 链接填入 frontmatter 的 `lsCheckoutUrl`。
3. 在 `public/samples/` 放免费样例 CSV，frontmatter 的 `samplePath` 指向它。
4. `git push` → Vercel 自动部署。

后期这条路径由 AI 管线自动产出初稿 + 开 PR，你只审核。

## 接下来你要做的外部操作清单

按顺序完成。每完成一项，对应功能即启用。

### 1. 域名（~$12）
- 在 Namecheap 或 Cloudflare 买域名（建议 loreline.com / loreline.io，被占就用 loreline-pack.com）。
- 暂时先不解析，等 Vercel 部署后再连。

### 2. Lemon Squeezy（支付，$0 开户）
- 注册 https://lemonsqueezy.com，完成 KYC（身份验证，W1 立即做，新账号风控概率不低）。
- 建 Store，记下 store slug。
- 为旗舰 Pack `arpg-dialogue-bilingual` 建 Product：价格 $29，变体；上传完整资产包文件为 downloadable 文件。
- 复制 Product 的 **Buy 按钮 URL**（形如 `https://yourstore.lemonsqueezy.com/checkout/buy/xxxx`），粘到 `src/content/packs/arpg-dialogue-bilingual.md` 的 frontmatter `lsCheckoutUrl:`。
- 对 `mobile-localization-glossary` 重复（价格 $12）。
- 用测试卡跑一笔自购，确认收到自动交付邮件 + 下载链接可访问。

### 3. ConvertKit（邮箱收集，免费 tier）
- 注册 https://convertkit.com，建一个 Form。
- 在 Form 设置里把"感谢页"指向 `https://你的域名/success`。
- 复制 Form ID（URL 里的数字）。
- 在仓库根目录 `.env`（复制 `.env.example`）填 `PUBLIC_CONVERTKIT_FORM_ID=你的ID`。

### 4. GitHub 仓库 + Vercel 部署
- 把本项目推到一个 GitHub 仓库。
- 在 https://vercel.com 用 GitHub 账号登录，Import 该仓库。
- Framework Preset 自动识别为 Astro；Build Command `npm run build`；Output Directory `dist`。
- 在 Vercel 项目 Settings → Environment Variables 加 `PUBLIC_CONVERTKIT_FORM_ID`。
- 部署成功后，在 Vercel Domains 绑定你的域名（修改域名注册商的 DNS 指向 Vercel）。
- 把 `astro.config.mjs` 里 `site:` 改为真实域名（影响 sitemap/RSS/OG）。

### 5. AI 生产管线（第二阶段，可选）
- 在 GitHub repo Settings → Secrets 加：
  - `LLM_API_KEY`（OpenAI-compatible API key）或 `TAPTAP_ENDPOINT`（你的 TapTap MCP endpoint）
- 手动触发：repo → Actions → Generate Pack (AI) → Run workflow，选 pack-type。
- 生成器会开 PR，你在 GitHub UI 审核 + 改写 ≥30% 后 merge，Vercel 自动部署。

## 验证清单（端到端）

部署后逐项验证：

- [ ] 首页 `/` 正常渲染，Hero + 精选 Pack + 价值主张 + 免费样例 CTA
- [ ] `/packs` 列出 2 个 Pack
- [ ] `/packs/arpg-dialogue-bilingual` 详情页：BuyButton 显示价格 + 跳转 LS checkout
- [ ] 用测试卡完成一笔购买，收到自动交付邮件 + 下载链接可访问
- [ ] `/blog` 列出 1 篇文章
- [ ] `/blog/five-principles-bilingual-arpg-dialogue` 文末显示免费样例下载
- [ ] 配置 ConvertKit 后，免费样例表单提交 → 跳转 `/success`
- [ ] 域名 HTTPS 正常
- [ ] （可选）部署后如需 sitemap，可加回 `@astrojs/sitemap` 较新版本或手动放 `/public/sitemap.xml`

## 预算

| 项 | 启动期 | 月运营 |
|---|---|---|
| 域名 | $12 | - |
| Lemon Squeezy | $0（5%+$0.50/笔） | 按交易 |
| Vercel | $0 | $0 |
| ConvertKit | $0（≤1000 订阅） | $0 |
| 精准投放（可选） | $50-100 | - |
| AI 生产 API（第二阶段） | - | $20-50 |
| **合计** | **~$70-120** | **~$20-50** |
