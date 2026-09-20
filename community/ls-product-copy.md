# Lemon Squeezy Product 文案 + 域名清单

> 用途：在 Lemon Squeezy 后台为两个 Pack 建 Product 时，直接复制粘贴的标题与描述。英文为主（面向海外买家），关键卖点配中文便于你自己核对。LS 描述支持基础 Markdown。

---

## Pack 1 · 旗舰 ARPG 男主台词库

**Product name（直接填）**

```
ARPG Bilingual Dialogue Pack — 100 Lines (CN/EN)
```

**Short description（LS 后台 "Description" 字段，可粘贴 Markdown）**

```
100 ready-to-drop bilingual dialogue lines (Chinese + English) for an ARPG male protagonist, covering 17 high-frequency combat and exploration scenes: combat-start, boss, low-hp, victory, death, respawn, exploration/idle, level-up, equip, NPC talk, hit-react, quest accept/complete, companion, camp, loot, and elite encounters.

Each line ships with scene + emotion tags, so you can wire them straight into a dialogue/state system and trigger by state. The English is polished to native-speaker standard — no translation smell, no passive-voice overload, no forced word-for-word mood-word matches. Written by a narrative designer with 4+ years on AAA ARPG and mobile titles.

Use it to: fill a prototype before a demo deadline, cover combat/system lines your localization budget can't reach, or calibrate freelance translators against a baseline tone.

What you get: CSV (CAT/sheet import) + JSON (direct program read) + Markdown (human review). Commercial license — use in any project, just don't resell the pack itself.

$29 (launch, was $49).
```

**中文核对要点**（不要粘进 LS，自己核对用）
- 100 条中英对照台词，覆盖 17 类高频场景，含 scene/emotion 标签。
- 英文母语级润色，可直接落进对话系统按状态触发。
- 适用：原型期填线、本地化预算覆盖不到的战斗/系统台词、外包译员调性基准。
- 交付：CSV + JSON + Markdown，商用授权，禁转售。

**Variant / Price 设置**
- Variant name：`Full Pack (v1.1)` — Price `29` USD — Compare at `49`。
- Upload files：`arpg-dialogue-full.csv`、`arpg-dialogue-full.json`（Markdown 版即站内的 pack 详情页，可选附）。

---

## Pack 2 · 手游本地化术语表

**Product name（直接填）**

```
Mobile Game Localization Glossary — 50 Core Terms (ARPG + Otome)
```

**Short description（LS 后台 "Description" 字段，可粘贴 Markdown）**

```
A baseline glossary of 50 high-frequency mobile game terms across six groups: system UI, combat, progression, social, narrative, and otome-specific. Each entry carries a recommended English translation, a style note (capitalization, abbreviation usage), and a common-mistranslation warning — so your team stops arguing whether "抽卡" is gacha, draw, summon, or pull.

Use it as: a seed for your CAT tool (Crowdin / POEditor), a calibration baseline before freelance translators start, or a shared dictionary between PMs and translators to cut review-round friction.

Built from frontline localization practice on ARPG and otome mobile titles. Covers the words that actually drift between deliverables — aggro, DoT, ascension, constellation, affinity — and pins each to one recommended form so mixed usage doesn't ship.

What you get: CSV (CAT import) + JSON (program read) + Markdown (review). Commercial license — use in any project workflow, just don't resell the pack itself.

$12 (launch, was $18).
```

**中文核对要点**（不要粘进 LS，自己核对用）
- 50 条手游本地化高频术语，6 组分类，附推荐译法 + 风格注释 + 常见误译提醒。
- 适用：CAT 工具术语库种子、外包译员开工前校准、PM 与译员对齐字典。
- 交付：CSV + JSON + Markdown，商用授权，禁转售。

**Variant / Price 设置**
- Variant name：`Glossary (v1.0)` — Price `12` USD — Compare at `18`。
- Upload files：`mobile-localization-glossary-full.csv`、`mobile-localization-glossary-full.json`。

---

## 上传文件清单（对应 public/assets/）

| Pack | 上传到 LS 的 downloadable 文件 |
|---|---|
| ARPG 台词库 | `public/assets/arpg-dialogue-full.csv` + `arpg-dialogue-full.json` |
| 本地化术语表 | `public/assets/mobile-localization-glossary-full.csv` + `mobile-localization-glossary-full.json` |

> 上传后复制每个 Product 的 Buy 按钮 URL，回填到对应 pack markdown 的 frontmatter `lsCheckoutUrl:`。

---

## 域名候选清单

优先级从上到下。注册前先在 Namecheap / Cloudflare 搜一次确认实时可用性（下面的"状态"是写本文时的判断，可能已变）。

| 候选 | 状态判断 | 说明 |
|---|---|---|
| `loreline.com` | 大概率被占 | 最理想，但 .com 短词几乎都不空。先搜，若可注册立即拿下。 |
| `loreline.io` | 中等可能 | .io 在开发者/工具圈认知好，适合 Asset Pack 站。第二选择。 |
| `loreline.dev` | 大概率可用 | .dev 直扣"开发者向"，SEO 语义匹配。需 HTTPS（.dev 强制 HSTS，Vercel 默认满足）。 |
| `getloreline.com` | 大概率可用 | `get` 前缀是 SaaS 常见退路，.com 通常有空。 |
| `loreline-pack.com` | 几乎必可用 | 直接带品类词，SEO 友好但稍长。兜底选择。 |

**建议**：依次试 `loreline.com` → `loreline.io` → `loreline.dev`，第一个能注册的就拿下（预算 ~$12/年）。不要纠结拿不到 .com，品牌词 + .io/.dev 在海外开发者市场完全够用。

注册后先不解析，等 Vercel 部署完成再在 Vercel Domains 绑定，并回填到 `astro.config.mjs` 的 `site:`。
