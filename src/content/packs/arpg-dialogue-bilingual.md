---
title: "ARPG 男主台词库·中英对照"
subtitle: "Bilingual Dialogue Pack for ARPG Protagonists"
description: "100 条为 ARPG 男主量身打磨的中英对照台词，覆盖 17 类高频场景（战斗全周期、boss、低血量、阵亡、复活、探索、升级、装备、NPC、受击、任务、队友、营地、拾取、精英等）。英文经母语级润色，可直接落进项目；附情绪与场景标签，便于按状态触发。"
price: 29
originalPrice: 49
category: "dialogue"
tags: ["ARPG", "男主", "中英对照", "战斗台词", "叙事", "出海"]
samplePath: "/samples/arpg-dialogue-sample.csv"
sampleCount: 8
applicableGenres: ["ARPG", "动作", "角色扮演", "独立游戏"]
license: "商用授权：可应用于商业项目，可用于项目内对话系统。禁止将本资产包本身转售或二次分发。资产为可迁移模板，不绑定任何具体 IP。"
entryCount: "100 条中英对照台词（v1.1），覆盖 17 类场景，持续扩充"
languages: ["zh", "en"]
featured: true
publishedAt: 2026-09-20
updatedAt: 2026-09-20
---

> **关于这个 Pack**
> 这是 Loreline 的首个旗舰资产包。100 条台词由资深游戏叙事设计师打磨，覆盖 ARPG 男主在战斗全周期与探索交互里最常被触发的对话状态。每一条英文都按"母语者不出戏"标准润色——避开直译陷阱、机翻味、过度书面化三类常见问题。

## 用例与适用场景

适合以下情况：

- 原型期 / Demo 提交前，需要一批说得过去的中英双语台词快速填进对话系统。
- 项目本地化预算有限，定制外包只覆盖主线剧情，支线/战斗/系统台词需要高性价比填充来源。
- 多人译员风格漂移严重，需要一批"基准调性"台词校准后续外包交付。

不适合的情况：

- 需要绑定具体 IP 角色、世界观、剧情节点的定制台词——这类应走定制委托。
- 需要女性向/乙女向特定语气的男主——本 Pack 调性偏坚毅冷静，后续会出针对性版本。

## 字段结构

每条台词包含：`id` / `scene` / `emotion` / `zh` / `en` / `note`。CSV / JSON 双格式交付，便于直接 import 进对话系统或表格工具。

## 使用建议

1. **先按场景筛选**：把对话系统触发钩子与 `scene` 字段对齐，按状态机取用。
2. **校准调性**：把这批台词当作"基准调性"——外包译员交付前先让他们读 5 条，统一语气。
3. **混合使用**：不要整段照搬同一场景的多条连续触发，会显得机械；建议同场景随机抽 1 条 + 间隔。
4. **英文二次校对**：本 Pack 的英文已达到母语级，但落地前仍建议在上下文里通读一遍，确保与角色设定的细微气质一致。

## 台词预览（完整 100 条见交付文件）

### 场景 1 · 战斗开始 (combat-start)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 01 | determined | 来吧，我一向喜欢主动开场。 | Come on. I like opening with the first move. |
| 02 | calm | 别拖太久，速战速决。 | Don't drag it out. Quick and clean. |
| 03 | tense | 这一仗躲不过去了。 | No getting around this one. |
| 04 | wry | 又是这种活。行吧，动起来。 | This kind of work again. Fine. Let's move. |
| 05 | flat | 准备好了？那就别愣着。 | Ready? Then stop standing there. |

### 场景 2 · Boss 遭遇 (boss)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 06 | grave | 这家伙……不在同一个量级。 | This one's on a whole different level. |
| 07 | defiant | 大也好。我打的从来都是大块头。 | Big deal. I've always had a thing for big targets. |
| 08 | wary | 别急着上，先看清它的路数。 | Hold on. Let's read its moves before we commit. |
| 09 | flat | 它不怕我。我也不怕它。公平。 | It's not scared of me. I'm not scared of it. Even. |
| 10 | bitter | 又一个以为体型能解决一切的。 | Another one who thinks size settles everything. |

### 场景 3 · 低血量 (low-hp)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 11 | strained | 还没倒下……就还能打。 | Still on my feet. Still in this. |
| 12 | bitter | 一点点血，撑到下次抬手就够。 | A sliver's all I need to land the next blow. |
| 13 | resolute | 痛归痛，倒不下就行。 | It hurts. But hurt isn't down. |
| 14 | wry | 别催，我自己有数。 | Don't rush me. I know the count. |
| 15 | defiant | 留这点血，够送你上路了。 | This last sliver's enough to see you off. |

### 场景 4 · 击杀确认 (victory)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 16 | relieved | 收工。下一场什么时候来？ | Done. When's the next one? |
| 17 | flat | 嗯，结束了。 | Yeah. It's done. |
| 18 | amused | 比我想的脆。 | Thought you'd put up more of a fight. |
| 19 | steady | 一场结束，下一场照旧。 | One down. Same routine for the next. |
| 20 | dry | 别躺太久，地上凉。 | Don't lie there too long. Ground's cold. |

### 场景 5 · 阵亡 (death)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 21 | regret | 这次……换我倒在前面了。 | This time, I'm the one who goes down first. |
| 22 | bitter | 别……停下。替我打完。 | Don't... stop. Finish it for me. |
| 23 | calm | 嘿，至少我没退。 | Hah. At least I didn't flinch. |
| 24 | tired | 这次没扛住……下次会。 | Didn't hold this time. Next time, I will. |
| 25 | wry | 倒得……不算难看吧。 | Not a bad way to go down. Was it? |

### 场景 6 · 复活/重返 (respawn)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 26 | wry | 又站起来了。看来还没轮到我歇着。 | Back up. Guess it's not my turn to rest yet. |
| 27 | determined | 重来一遍也没关系，结果不会变。 | Going again changes nothing. Same ending. |
| 28 | steady | 喘口气，然后接着来。 | One breath. Then back to it. |
| 29 | flat | 没死成就行。继续。 | Not dead yet. Good enough. Move on. |
| 30 | bitter | 醒来第一件事——记住刚才怎么倒的。 | First thing back on my feet—remember how I went down. |

### 场景 7 · 探索/Idle (exploration / idle)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 31 | musing | 这地方……以前应该有人住过。 | Someone lived here once. You can feel it. |
| 32 | flat | 没动静。也许是好事。 | Nothing moving. Could be a good sign. |
| 33 | wry | 走了这么久，连个岔路都没有——这不叫探索，叫赶路。 | This long without a fork in the road isn't exploring. It's commuting. |
| 34 | wary | 墙上有划痕。新的。 | Marks on the wall. Fresh ones. |
| 35 | tired | 歇一会儿。腿不是铁打的。 | Short rest. Legs aren't made of iron. |
| 36 | musing | 风里有味儿。不是这地方该有的。 | Something in the wind. Doesn't belong here. |
| 37 | flat | 路到头了。要么回头，要么翻墙。 | Road ends here. Back, or over the wall. |
| 38 | dry | 又一条死路。这地方的特产。 | Another dead end. Local specialty. |
| 39 | wary | 太静了。静得像有人在听。 | Too quiet. Quiet like someone's listening. |
| 40 | steady | 走慢点，看清脚下。 | Slow down. Watch the footing. |

### 场景 8 · 升级 (level-up)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 41 | steady | 力量回来了。但别因此乱来。 | Strength's back. Don't get reckless with it. |
| 42 | confident | 比昨天强一点，就够了。 | A little sharper than yesterday. That's enough. |
| 43 | flat | 升了一档。别浪费。 | One step up. Don't waste it. |
| 44 | wry | 终于跟得上自己的手了。 | Finally keeping up with my own hands. |
| 45 | resolute | 强一点，就多担一点。 | Stronger means more to carry. Fine. |

### 场景 9 · 装备切换 (equip)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 46 | appraising | 顺手。就先信它一阵。 | Feels right. I'll trust it for now. |
| 47 | flat | 趁手就行，好不好看无所谓。 | As long as it handles, I don't care how it looks. |
| 48 | wry | 这玩意儿……比我前一把沉三倍。赌它值。 | This one's three times the weight of the last. Betting it's worth it. |
| 49 | dry | 新刀旧刀，砍得断就行。 | New blade, old blade—cuts the same. |
| 50 | steady | 换装备也是换习惯。慢点来。 | New gear means new habits. Take it slow. |

### 场景 10 · NPC 对话/任务 (npc-talk)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 51 | measured | 把话说完，我再决定帮不帮。 | Finish what you're saying. Then I decide if I'm in. |
| 52 | dry | 又是"只有你能办到"？这话我今年听了不下十回。 | "Only you can do this." Tenth time I've heard that this year. |
| 53 | guarded | 报酬先说清楚。我不接口头承诺。 | Name the price first. I don't take promises. |
| 54 | tired | 等等——你刚才说"最后一趟"？上次你也这么说。 | Wait—did you just say "one last errand"? That's what you said last time. |
| 55 | flat | 救急可以。但别养成习惯。 | Bailing you out once is fine. Don't make it a habit. |
| 56 | wry | 你这年纪还干这行？比我还能熬。 | You're still in this line at your age? Outlasting me already. |
| 57 | guarded | 别套近乎。说重点。 | Skip the charm. Get to the point. |
| 58 | dry | "包在我身上"——这话从我嘴里说出来，我自己都不太信。 | "Consider it done." Even I don't believe me when I say that. |
| 59 | tired | 又是催命的活。行，加钱。 | Another rush job. Fine. Extra cost. |
| 60 | steady | 帮你可以。问归问，事归事。 | I'll help. Ask your questions, but the job still gets done. |

### 场景 11 · 受击反应 (hit-react)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 61 | strained | 唔——找准位置了是吧。 | Ngh—so you found the spot. |
| 62 | irritated | 别再打同一个地方。 | Don't keep hitting the same place. |
| 63 | bitter | 这一下，记账了。 | That one goes on the tab. |
| 64 | defiant | 就这？ | That all? |
| 65 | strained | 还……还站着。 | Still... still standing. |

### 场景 12 · 接任务 (quest-accept)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 66 | flat | 行，接了。别中途改条件。 | Fine. Taken. Don't change terms mid-way. |
| 67 | wry | 又是没人愿意干的活。加钱。 | Another job no one wants. Extra. |
| 68 | steady | 条件清楚就走。 | Terms clear? Then I'm moving. |
| 69 | guarded | 先付一半。回来再结。 | Half up front. The rest when I'm back. |
| 70 | dry | 帮你这一次，下不为例……大概。 | Helping this once. Never again... probably. |

### 场景 13 · 完任务 (quest-complete)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 71 | flat | 办完了。结账。 | Done. Settle up. |
| 72 | wry | 比预想的麻烦。加价的事一会儿说。 | Trickier than billed. We'll talk about the extra. |
| 73 | steady | 东西在这。人没少。货没损。 | Goods here. Me in one piece. Goods in one piece. |
| 74 | dry | 下次找别人。这次算我欠你的——不，你欠我的。 | Next time, find someone else. This one's me owing you—no, you owe me. |
| 75 | tired | 完事了。别再追加。 | Wraps up. No add-ons. |

### 场景 14 · 队友互动 (companion)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 76 | flat | 你 flank 左，我正面。别抢戏。 | You take left flank, I take the front. Don't steal the show. |
| 77 | wry | 你那刀该磨了。钝刀不如棍子。 | That blade needs grinding. A dull edge is just a stick. |
| 78 | steady | 我断后。你先走。 | I'll hold the rear. You go first. |
| 79 | dry | 别废话，盯紧你的方向。 | Less talk. Watch your lane. |
| 80 | amused | 你这一嗓门，比号角还管用。 | That yell of yours beats any war horn. |
| 81 | guarded | 信你这一回。下回别掉链子。 | Trusting you this once. Don't drop it next time. |
| 82 | bitter | 你又是这套。先承诺，后变卦。 | Same old with you. Promise first, pivot after. |
| 83 | flat | 分赃的时候再吵。先打完。 | Argue about the split later. Fight first. |
| 84 | wry | 你这毛病，比敌人还难对付。 | Your habits are harder to handle than the enemy. |
| 85 | steady | 走我后面。别抢前。 | Walk behind me. Don't jump ahead. |

### 场景 15 · 营地/治疗 (camp / heal)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 86 | tired | 歇会儿。伤口不等人。 | Rest a bit. Wounds don't wait. |
| 87 | guarded | 火别太大。这地方不缺眼睛。 | Keep the fire low. No shortage of eyes out here. |
| 88 | wry | 治疗的活儿你来。我只负责挨。 | You do the patching. I do the getting hit. |
| 89 | flat | 睡一会儿。轮值守夜。 | Sleep in shifts. One keeps watch. |
| 90 | steady | 伤好再走。急也急不来。 | Move when it heals. Rushing won't help. |

### 场景 16 · 拾取/发现 (loot / discovery)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 91 | appraising | 这箱子……锁着，但不算结实。 | This chest's locked. Lock's not sturdy though. |
| 92 | wry | 又是破铜烂铁。这地方穷得实在。 | More scrap. This place is broke in earnest. |
| 93 | flat | 有用的留下，没用的别占地方。 | Keep what works. Don't haul dead weight. |
| 94 | musing | 这物件……不像本地货。 | This piece... not from around here. |
| 95 | dry | 别贪。拿了就走。 | Don't get greedy. Take and leave. |

### 场景 17 · 精英/小头目 (elite / mini-boss)

| ID | 情绪 | 中文 | 英文 |
|---|---|---|---|
| 96 | wary | 这个不一样。脚步有章法。 | This one's different. Footwork has form. |
| 97 | grave | 不是杂兵。认真点。 | Not a grunt. Take it seriously. |
| 98 | defiant | 装备比我好？那正好，打完归我。 | Better geared than me? Good. Comes mine after. |
| 99 | bitter | 又一个练过的。这地方专出这种。 | Another trained one. This place breeds them. |
| 100 | steady | 别轻敌，但也别怕。按节奏来。 | Don't underestimate. Don't fear. Work the rhythm. |

## 备注：常见本地化陷阱与处理

| 陷阱 | 在本 Pack 里的处理 |
|---|---|
| 直译"果然" / "原来" 等语气词 | 英文版改用语义等价的语序调整或省略，不强行对应 |
| 中式谦辞/敬语 | 男主调性偏直白，避免生硬的 "I humbly..." 之类 |
| 成语直译 | 一律意译或替换为英文等价习语 |
| 文化专有词（如"江湖"） | 视场景意译为 "the life" / "this line of work" 等 |
| 机翻味句法（被动泛滥、定语过长） | 主动化、短句化，贴近英语口语节奏 |
| "最后一趟" / "下不为例" 等口头禅 | 用 "one last errand" / "never again... probably" 等带反讽的母语表达 |

---

> **交付格式**：完整版含 CSV（便于表格/系统导入）+ JSON（便于程序直接读取）+ Markdown（便于人工阅读校对）。购买后通过邮件自动发送下载链接。
