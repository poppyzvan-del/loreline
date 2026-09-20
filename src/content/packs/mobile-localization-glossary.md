---
title: "手游本地化术语表·ARPG+女性向"
subtitle: "Mobile Game Localization Glossary"
description: "50 条手游本地化高频术语，覆盖系统 UI、战斗、养成、社交、剧情与女性向专用词，中英对照 + 风格注释 + 常见误译提醒。出海落地的第一份基准术语表。"
price: 12
originalPrice: 18
category: "glossary"
tags: ["本地化", "术语表", "ARPG", "女性向", "出海", "手游"]
samplePath: "/samples/localization-glossary-sample.csv"
sampleCount: 8
applicableGenres: ["ARPG", "女性向", "SLG", "通用"]
license: "商用授权：可应用于商业项目本地化工作流。禁止将本资产包本身转售或二次分发。"
entryCount: "50 条术语 + 风格注释（v1.0），持续扩充"
languages: ["zh", "en"]
featured: false
publishedAt: 2026-09-20
updatedAt: 2026-09-20
---

> **关于这个 Pack**
> 一份给手游出海团队用的基准术语表。50 条术语来自一线本地化实践，按系统/战斗/养成/社交/剧情/女性向六组分类，附风格注释与常见误译提醒。可作为术语库种子、外包译员校准基准、产品经理与译员之间的对齐字典。

## 用例

- **作为术语库种子**：导入 CAT 工具（如 Crowdin / POEditor），作为项目术语库初始数据。
- **外包校准**：外包译员开工前先过一遍，统一关键术语的译法，避免"抽卡"在不同交付里被译成 gacha / draw / summon / pull 四种。
- **PM-译员对齐**：产品经理和译员对需求时，用本表统一指代，减少沟通歧义。

## 字段结构

| 字段 | 说明 |
|---|---|
| `id` | 唯一编号 |
| `category` | 分类（system-ui / combat / progression / social / narrative / otome） |
| `zh` | 中文术语 |
| `en` | 推荐英文译法 |
| `style_note` | 风格注释：语气、上下文、是否全大写等 |
| `pitfall` | 常见误译/注意点 |

## 术语表（完整 50 条）

### 1 · 系统 UI (system-ui)

| ID | 中文 | 英文 | 风格注释 | 注意点 |
|---|---|---|---|---|
| 01 | 体力 | Stamina | UI 全大写时用 STAMINA | 不要译 Energy，Energy 多用于能量槽 |
| 02 | 抽卡 | Gacha | 名词统一 Gacha | 动作"抽一次"用 pull / draw，不要混用 |
| 03 | 签到 | Daily Check-in | 首字母大写 | 不要译 Sign-in（与登录混淆） |
| 04 | 公告 | Notices | UI 标题用复数 | 单条公告用 Notice |
| 05 | 设置 | Settings | UI 标题复数 | 不要用 Setup |
| 06 | 邮件 | Mail | 通用 | 不要用 Email（暗示外部电邮） |
| 07 | 商店 | Shop | 通用 | 充值入口用 Top-up，不要混 |
| 08 | 充值 | Top-up | 动作 | 金额充值用 Top-up，不要用 Recharge |
| 09 | 月卡 | Monthly Pass | 专有名 | 也常见 30-Day Pass，全项目统一一种 |
| 10 | 红点 | Badge | 通用 | 不要直译 red dot |

### 2 · 战斗 (combat)

| ID | 中文 | 英文 | 风格注释 | 注意点 |
|---|---|---|---|---|
| 11 | 暴击 | Critical Hit | 战斗内简称 Crit | 暴击率 Critical Rate |
| 12 | 连招 | Combo | 通用 | 连击数 Combo Count |
| 13 | 仇恨 | Aggro | MMORPG 术语 | 副本里"拉仇恨"用 pull aggro |
| 14 | 闪避 | Dodge | 通用 | 数值"闪避率"用 Dodge Rate |
| 15 | 格挡 | Block | 通用 | 不要译 Parry（招架，是另一概念） |
| 16 | 招架 | Parry | 通用 | 不要与 Block 混 |
| 17 | 击退 | Knockback | 通用 | 战术效果，全项目统一 |
| 18 | 治疗量 | Healing Done | 数值 | 不要直译 heal amount |
| 19 | 持续伤害 | DoT (Damage over Time) | 缩写 | 玩家社群已通用 DoT |
| 20 | 范围伤害 | AoE (Area of Effect) | 缩写 | 玩家社群已通用 AoE |

### 3 · 养成 (progression)

| ID | 中文 | 英文 | 风格注释 | 注意点 |
|---|---|---|---|---|
| 21 | 等级 | Level | 缩写 Lv. | 不要用 Lvl.（长度不一致） |
| 22 | 经验值 | EXP | 全大写 | 不要用 XP 混用，全项目统一一种 |
| 23 | 突破 | Ascension | 通用 | 突破材料 Ascension Material |
| 24 | 升星 | Star-up | 通用 | 也常见 Star Enhancement，统一一种 |
| 25 | 觉醒 | Awakening | 通用 | 不要译 Evolve |
| 26 | 潜能 | Potential | 数值 | 潜能点 Potential Points |
| 27 | 命座 | Constellation | 通用 | 个别项目用 Resonance，按项目设定 |
| 28 | 天赋 | Talent | 通用 | 天赋树 Talent Tree |
| 29 | 装备 | Gear | 通用 | 不要用 Equipment（偏正式） |
| 30 | 强化 | Enhancement | 通用 | 武器强化 Weapon Enhancement |

### 4 · 社交 (social)

| ID | 中文 | 英文 | 风格注释 | 注意点 |
|---|---|---|---|---|
| 31 | 公会 | Guild | 通用 | 不要译 Clan（部落感） |
| 32 | 好友 | Friend | 通用 | 好友列表 Friends List |
| 33 | 私聊 | DM (Direct Message) | 缩写 | 不要用 Whisper（已过时） |
| 34 | 世界频道 | World Chat | 通用 | 不要直译 global channel |
| 35 | 组队 | Party | 通用 | 队长 Party Leader |
| 36 | 申请入队 | Request to Join | 动作 | 不要用 apply（书面化） |
| 37 | 屏蔽 | Block | 动作 | 名词屏蔽列表 Blocklist |
| 38 | 举报 | Report | 动作 | 不要用 flag |
| 39 | 点赞 | Like | 通用 | 不要用 thumb-up |
| 40 | 头像 | Avatar | 通用 | 不要用 Profile Pic |

### 5 · 剧情 (narrative)

| ID | 中文 | 英文 | 风格注释 | 注意点 |
|---|---|---|---|---|
| 41 | 主线 | Main Quest | 通用 | 不要用 Main Story（更宽泛） |
| 42 | 支线 | Side Quest | 通用 | 不要用 Sub Quest |
| 43 | 日常 | Daily Quest | 通用 | 不要用 Daily Mission |
| 44 | 剧情 CG | Cutscene | 通用 | 不要用 CG（英文玩家不熟） |
| 45 | 对白 | Dialogue | 通用 | 对话系统 Dialogue System |
| 46 | 跳过 | Skip | 通用 | 战斗跳过 Skip Battle |

### 6 · 女性向专用 (otome)

| ID | 中文 | 英文 | 风格注释 | 注意点 |
|---|---|---|---|---|
| 47 | 羁绊 | Bond | 通用 | 不要用 Connection |
| 48 | 好感度 | Affinity | 数值 | 也常见 Intimacy，按项目统一 |
| 49 | 约会 | Date | 通用 | 约会事件 Date Event |
| 50 | 卡牌 | Card | 通用 | 角色卡 Character Card |

## 风格总原则

1. **统一性优先**：同一术语在全项目内只保留一种译法，混用比译错更伤体验。
2. **玩家社群语言**：能用玩家已约定俗成的缩写（DoT / AoE / aggro）就用，别强行"标准化"成长版。
3. **UI 大小写规则**：UI 标题用 Title Case，数值标签用 Title Case，战斗内浮动文字可全大写。
4. **避免书面化**：手游玩家阅读节奏快，能短则短，别译成说明书口吻。
5. **文化专有词**：女性向的"羁绊"等词，英文选 Bond 而非 Connection，是因为 Bond 在英语情感语境里更有"情感联结"的厚度。

---

> **交付格式**：完整版含 CSV（CAT 工具导入）+ JSON（程序读取）+ Markdown（人工校对）。购买后通过邮件自动发送下载链接。
