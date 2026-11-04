# dsh-theme-studio · 主题工坊

给 DeepSeek Harness（DSH）桌面版 / Web 版的**外观工坊**：一整窗的壁纸 + 分级磨砂玻璃 + 自定义强调色，
右下角一枚 🎨 悬浮按钮，点开就是实时调整面板。零构建、纯 ESM + 手写 client bundle（`window.__ModuleLoader__` 工厂格式），
不引入任何依赖。

> 适用 DSH `0.2.1-rc.5`（`dsh.client` v1 manifest）。

## 功能

| 分组 | 内容 |
| --- | --- |
| 壁纸 | 10 套纯 CSS 渐变壁纸（极光 / 深海 / 樱暮 / 余烬 / 墨夜 / 苔林 / 桃晓 / 石墨 / 霓紫 / 暖沙），整窗铺满、fixed 不随滚动 |
| 自定义壁纸 | 上传本地图片：浏览器端缩到最长边 2560px 再压成 JPEG，存进 localStorage（压缩后需 < 2.6MB），可一键清除 |
| 强调色 | 10 个预设色 + 系统取色器；覆盖 `--dsw-static-deepseek-400/450/500` 品牌阶与 business/link/info/focus-ring/选择色一族 |
| 材质 | 壁纸亮度、暗化（scrim）、磨砂（backdrop-filter）、对话区地板（玻璃不透明度）四个滑杆，实时生效 |
| 持久化 | 配置写入 `localStorage['dsh.theme-studio.v2']`，刷新 / 重启后自动恢复 |
| 主题兼容 | 深色 / 浅色两套调色板分别推导（浅色用白色系地板，深色跟随壁纸 tint），菜单 / 弹窗保持近实心，保证可读性 |
| 清理 | 卸载插件即整张样式表、面板、监听器一起移除（`ctx.effect` 返回的清理函数） |

## 面板

右下角 🎨 → 面板：壁纸九宫格、强调色色卡、材质滑杆、上传 / 恢复默认。
`Esc` 或点击面板外部收起；滑杆改动即时应用，无需确认。

调试接口（可选）：`window.__dts.getState() / setState({...}) / open() / close()`。

## 安装

```powershell
# 在 profile 目录里把本仓库 link 进依赖（profile 的 dsh.profile.bundles 里也要加 "dsh-theme-studio"）
dsh plugin --profile desktop add link:C:/Users/35820/Desktop/metro-data/_plugins/dsh-theme-studio
# 或者在 profile/package.json 的 dependencies 加 link: 后 pnpm install
```

装好后**重启一次 DSH**（新 plugin bundle 需要重新组合）。

## 实现要点

- 壁纸层：`html::before` fixed + 三层背景（暗化 scrim → SVG feTurbulence 颗粒 → 渐变壁纸），
  `z-index:0`；应用根 `#root` 抬到 `z-index:1`。**不要用负 z-index**：会被画布底色吃掉（同类插件踩过的坑）。
  层必须保持不透明（scrim 用渐变而不是 opacity），否则 `.mP3x-q_frame` 等元素的 `backdrop-filter` 会静默失效。
- 表面材质：只改 token，不改结构。`--dsw-alias-bg-base`（frame / 对话区 / bottom row）、
  `--dsw-specific-sidebar-fill`（侧栏 + 40px 标题条）、`--dsw-specific-input-major`（输入框）、
  `--dsw-alias-bg-layer-1/2/3`、`--dsw-specific-bubble`、`--dsw-alias-settings-card-fill`。
  菜单 / 遮罩 / 代码块保持近实心；设置弹窗走 layer-2（0.93+）避免调低地板把设置页调透。
- 分级兜底：对话区地板 12%–85%、侧栏 = 地板 −12%、卡片 88–94%、输入框 93%，所以滑杆拉到最透也不会读不清。
- 强调色：`!important` 覆盖（ThemePresenter 会把注册过的 token 写成 body 内联样式，普通优先级压不住）。
- 玻璃：**不要把 `backdrop-filter` 挂在 `_sidebarCol` / `_centerCol` / `_rightbarCol` 这些列容器上**。
  实测（2026-11-04）：挂到侧栏后，侧栏里 `position:fixed` 的「收起侧边栏」按钮会把侧栏当包含块，
  折叠状态下直接往上飞 40px、被标题条裁掉。`backdrop-filter` 是**包含块陷阱**，和 `transform: / filter: / contain:` 同族。
  现在的做法：磨砂只作用在壁纸层（`html::before` 的 `filter: ... blur(Npx)` + `transform: scale(1.035)` 防边缘露出），
  面板本身的玻璃用 `rgba` token 完成，不碰任何 fixed 子元素。

## 桌面外壳的四个坑（实测记录）

1. **backdrop-filter 的包含块陷阱**：挂在 `_sidebarCol` 上会让侧栏里 `position:fixed` 的收起按钮认错包含块，折叠时往上飞 40px。→ 磨砂只放壁纸层，列容器不碰。
2. **页面被意外滚动**：内容视图里某次聚焦/滚动把 document 滚了 24px，整个应用容器 top=-24，标题行滑进原生标题栏区域，看起来就像“两行重合”。→ 插件加 `html,body{overflow:hidden !important}`，apply 时 `scrollTo(0,0)`。
3. **原生标题栏叠在网页之上**：win32 的窗口按钮由 Electron 画在页面之上，网页决定不了它的底色；标题栏那 40px（`--dsh-windows-titlebar-height`）里如果透出彩色壁纸，就会和按钮的深色块拼成“重合/割裂”。→ 用 `html::after` 在标题栏高度铺一条 88% 深色带（z-index 0，在内容之下），底部 6% 白线分隔；内容行自然落在带子下面。
4. **主内容列自带 16px 圆角**：框架底和侧栏必须和对话区地板同档透明度，否则圆角缺口会“描边”。→ `--dsw-specific-sidebar-fill` 与 `--dsw-alias-bg-base` 同 alpha，再用 1px 发丝线区分侧栏。

## 圆角与层叠（最终方案）

对话列的 `.mP3x-q_centerCol` 自带 `border-radius:16px`。之前框架、侧栏、列三层都用半透明 tint 叠着涂，列里实际是两层叠加（更暗），圆角缺口处只有一层（更亮），圆角就被“描边”暴露出来了。
现在的做法是**只留一层 tint**：

- `--dsw-alias-bg-base: transparent`，`_centerCol/_sidebarCol/_rightbarCol` 背景清空；
- 唯一的一层 tint 由 `.mP3x-q_frame` 提供（`rgba(tint, canvas)`）；
- 列容器的 `border-radius` 在主题里清零，圆角不再有“缺口”；侧栏用 1px 发丝线分隔；
- 标题栏 40px 用 `html::after` 深色带（`html:has(...)` 区分深浅色），内容行落在带子下方；
- `html,body{overflow:hidden}` + apply 时 `scrollTo(0,0)`，避免 document 被滚走导致内容行钻进标题栏。

## 代码块 / 行内代码 / 深浅色冲突（最终数值）

之前代码块是黑块、行内代码也是黑底，原因有两个：

- `--dsw-alias-markdown-code-block` 用了 tint 的 0.9 alpha，基本等于纯黑；
- 行内代码的 `--dsw-alias-markdown-inline-code` 是**写死的 #292929**，主题默认根本不覆盖它。

现在（深色板）：code-block 0.62、banner 0.72、inline-code/tag/citation 0.55、code-segment 0.5 / 选中 0.68；浅色板对应改成白色系。
另外每套壁纸的 `dim` 恢复为预设自带值，画布地板默认 0.58。

**深色主题下各预设的最坏点对比度**（文字 #f9fafb / 次要 #c3c8d0，含壁纸亮度、scrim、tint 合成）：

| 预设 | 画布底色 | 正文 | 次要 | 代码块 | 行内代码 |
| --- | --- | --- | --- | --- | --- |
| aurora / deep-ocean / sakura / sunset-ember / midnight-ink / forest-moss / graphite / cyber-violet | 深色 | 18.5–19.2:1 | 11.5–12.0:1 | 18.3–19.1:1 | 18.3–19.1:1 |
| peach-dawn / warm-sand（浅色预设用在深色板） | 22,24,28 | 17.0:1 | 10.6:1 | 18.1:1 | 18.1:1 |

浅色预设用在深色板时，强制使用**深色 tint + 0.86 暗色 scrim**（否则会用它们自带的白色 tint，画布变浅、白字直接糊掉）；反之浅色板配深色预设时用 0.8 白色 scrim。

## 皮肤自带明暗（浅色壁纸不再被压黑）

每套壁纸声明了 `mode: dark | light`。切到某套壁纸时，插件会把应用外观切到对应模式：

- 选 **桃晓 / 暖沙** → 去掉 `body[data-ds-dark-theme]`，应用变浅色，浅色壁纸、白色玻璃、深色文字；
- 选其他深色壁纸 → 重新加上该属性，回到深色外观；
- 上传的自定义图片不强制翻转，保持你当前的外观。

浅色板下「暗化」「对话区地板」滑杆同样生效：`lightDim = max(0.02, dim)`（白色 scrim），框架白玻璃 alpha = `canvas * 0.35`（默认约 20%），壁纸层 `saturate(1.15)`。浅色壁纸本身是淡色（#fff6ee / #f7f0e4 系），玻璃一厚就会被洗成白色——所以浅色板的玻璃刻意做得比深色板薄。地板拉到 12% 左右时桃晓的暖色最明显。

之前把浅色预设强行套深色 tint + 0.86 黑 scrim 的做法已废弃（那会把浅色壁纸直接压成近黑——“变空了”的元凶）。

## UI 设计约束（anti-AI-slop）

面板按社区总结的「反 AI 味」清单重做（来源见文末）：

- 去掉标题里的 emoji、渐变图标/FAB、圆锥彩虹取色块、玻璃模糊、霓虹描边、hover 抬升、彩色滑杆拇指；
- 中性实色面板（深色 #15181d / 浅色 #fbfbfc）+ 1px 描边 + 6/8px 圆角，不用 backdrop-filter（顺手把性能也修了：原面板的 30px 模糊在低端 GPU 上很吃帧）；
- 字号/字重分级：12.5 标题、10.5 小字标签（letter-spacing）、11px 数值（tabular-nums），数值右对齐；
- 强调色只用于「选中态/当前值」两处，其余中性；
- **取色器不再用原生 `<input type=color>`**（Electron 里打开系统取色面板会卡），改成色卡 + 行内 #RRGGBB 输入框，回车/失焦生效，非法值自动回滚。

参考：
- [Anti-Slop: Frontend DON'Ts](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-code/skills/taste/SKILL.md)（negative constraints 清单）
- [ifq-design-skills · anti-ai-slop.md](https://github.com/peixl/ifq-design-skills/blob/main/references/anti-ai-slop.md)（紫渐变/glass/emoji/九宫格等禁令）
- [awesome-design-principles](https://github.com/robinstickel/awesome-design-principles)（视觉原则索引）

## 全量排查记录（2026-11-04）

| 现象 | 根因 | 处理 |
| --- | --- | --- |
| 背景被切成 10+ 个方块、叠浅蓝 | 壁纸层里那层 SVG `feTurbulence` 噪点按 180px 平铺，低模糊时接缝可见，叠加 `cover` 拉伸后变成方块 | 删掉噪点层；壁纸只剩「暗化 scrim + 壁纸」两层，`background-size: cover`、`no-repeat` 显式声明 |
| 原生标题栏割裂 | Electron 用**不透明**颜色（实测 #10071C）把系统标题栏画在网页之上，网页 CSS 改不了它；任何形状/颜色都对不上 | 在标题栏下方 56px 做同色渐变过渡（`top: var(--dsh-windows-titlebar-height)`，#10071C → 透明），硬边消失 |
| 面板卡 | 原生 `<input type=color>` 会拉起系统取色面板；面板 30px 磨砂也吃 GPU | 换成行内 hex 输入；面板改实色、去掉 backdrop-filter |

运行时自检（每次 apply 后）：`#dts-root` 1 个、`#dts-panel` 1 个、`#dsh-theme-studio` 1 个，无残留探针，`scrollY=0`，`html/body overflow:hidden`，`_centerCol` 圆角 0，代码块/行内代码 token 生效，无遗留旧规则。

## 侧边栏与输入框（2026-11-04 二次优化）

- **侧边栏**：不再跟画布同色。深色板用 `rgba(tint, 0.42)`、浅色板 `rgba(252,252,253,0.52)` 的独立底色，外加 1px 发丝线；壁纸仍透得出来，但和对话区有明确分层。
- **输入框（液态玻璃）**：`.GRgSLq_card` 改成 iOS 26 式玻璃——`rgba(tint,0.42)` 填充 + `blur(30px) saturate(2)`、1px 亮边、顶部高光 inset、左右侧内高光、20px 外投影；圆角保持 28px。浅色板用白色玻璃（`rgba(255,255,255,0.55)` + 白色高光）。
- 注意：`backdrop-filter` 只挂在这一个输入框元素上（不是列容器），不会触发之前那个「固定定位元素认错包含块」的坑。

## 排队消息栏（queue dock）也做成玻璃

输入框上方的「排队消息」条（`[data-queue-dock] > .F07MqG_panel`）原本用 `--dsw-specific-menu`（菜单专用、必须接近实心的 token）+ `--dsw-menu-backdrop-filter`，所以看着是实心深色。

现在只针对这个 dock 覆盖它的 `::before`：`rgba(tint, 0.42)` 填充 + `blur(28px) saturate(1.8)`、1px 亮边、顶部 inset 高光——菜单/弹窗仍保持实心，不受影响。

## 用户消息气泡（2026-11-04）

原来 `--dsw-specific-bubble` 是 `rgba(提亮后的 tint, 0.72)`：壁纸亮度一高（比如 180%），气泡就被冲淡，白字对比度掉得厉害。
现在改成 `rgba(tint, 0.92)`（深色板）/ `rgba(237,243,254,0.95)`（浅色板），气泡不再随壁纸明暗漂移，正文对比度稳定在 ~15:1。

## 浅色外观「看着像官方浅色」的原因（2026-11-04）

桃晓/暖沙的壁纸底色本来就极淡（`#fff6ee` / `#f7f0e4`）。之前浅色外观用白色玻璃 `bg-base 0.5 / 侧栏 0.48 / 框架 canvas×0.5`，再叠用户把「壁纸亮度」拉到 188%，淡桃色直接裁切成纯白——于是和 DSH 官方浅色模式没区别。

现在：
- 浅色外观的亮度上限被夹到 `1.12`（`Math.min(1.12, brightness)`），再高也不会把淡色洗白；
- 白色玻璃大幅减薄：`bg-base 22%`、侧栏 `30%`、框架 `canvas×0.15`；
- 壁纸层浅色板额外 `saturate(1.9) contrast(1.08)`，桃/沙的暖色才显出来。

推荐参数：壁纸亮度 100–120%、暗化 0、磨砂 8–14px、对话区地板 20–40%。

## 表面色阶表（消除接缝，2026-11-04）

之前接缝多，是因为四个区域各用一组 alpha：框架 `canvas×0.15`、对话区 `0.22`、侧栏 `0.30`、卡片 `0.78–0.95`，交界处自然出现色阶台阶。

现在收敛成一张表（`a = canvas` 滑杆值）：

| 表面 | 深色 | 浅色 |
| --- | --- | --- |
| 框架 / 对话区 | `rgba(tint, a)` | `rgba(255,255,255, a)` |
| 侧栏 | `rgba(tint, a+0.06)` | `rgba(252,252,253, a+0.08)` |
| 卡片 / 设置 | `0.78 / 0.94` | `0.78 / 0.95` |
| 输入框 | 固定玻璃 0.42 + blur | 白色玻璃 0.55 + blur |

框架、对话区、列容器共享同一个 alpha，所以相邻区域颜色连续；只有卡片/输入框是有意抬高的表面。标题栏过渡也从 56px 拉长到 96px，并继续按模式取 `#10071c` / `#faf9f9`。

## 标题栏与滚动条（2026-11-04）

- **标题栏**：之前的过渡层 `html::after` 在 `#root` 之下、又被应用表面盖住，实际看不出效果。现在把过渡直接烘进壁纸层（`html::before` 的第一层背景）：`#faf9f9`（浅）/ `#10071c`（深）→ 40px 处 82–90% → 150px 处透明，所有半透明表面都能透出这段渐变，交界变成柔和过渡。
- **滚动条**：`::-webkit-scrollbar` 轨道改透明、thumb 改成半透明圆角（深色 `rgba(255,255,255,0.22)`、浅色 `rgba(20,24,30,0.18)`，2px 透明边框做内缩），不再出现那条亮色竖带。

## 原生窗口按钮（三大金刚）怎么处理的

那三个按钮（最小化/最大化/关闭）是 Electron 的 `titleBarOverlay` 窗口控件，页面 CSS 既不能删也不能换。

但离线读了 `app.asar/lib/preload-app.cjs` 发现：桌面预载脚本会创建一个隐藏探针 `span`，读两个 CSS 变量——

- `--dsw-specific-sidebar-fill` → 窗口控件区的**底色**
- `--dsw-alias-label-primary` → 控件的**符号色**

然后经 canvas 采样把颜色通过 `windowsAppearance` IPC 发给主进程 `setTitleBarOverlay()`。所以把 `--dsw-specific-sidebar-fill` 设成 `rgba(0,0,0,0)`，控件区底色就透明了——按钮直接浮在主题背景上，不再有那块白/灰底板；符号色继续用主题的 `label-primary`，深浅色都自动可读。

副作用：这个 token 原本还负责画侧栏，所以侧栏改成用显式规则 `[class*="_sidebarCol"]` 上色（见上表）。

想要**完全自绘**（去掉系统按钮、自己画）必须改 Electron 主进程（`frame:false` + preload IPC + 自绘按钮），主题插件做不到，且下次升级会被覆盖。

## 标题栏不再写死颜色（每个主题自动匹配）

窗口按钮区透明之后，标题栏那 40px 已经没有需要“对齐”的固定底色了，所以之前那层 `#10071c` / `#faf9f9` 的硬编码过渡也删掉了——标题栏直接显示**同一层壁纸**，10 套主题全部自动同色，不需要逐套调。

如果个别主题看着还有细差，那不来自标题栏，而来自内容区那层薄玻璃（`bg-base` 的 alpha），色相是一致的。

## 图标

悬浮按钮和插件包图标（`icon.svg`）都换成**半填充的外观圆**（左圈右实心）——这是系统设置里“外观/明暗”的通用符号，单色、无渐变；原来的“圆圈 + 五个彩色点”（调色盘）太像 emoji，已弃用。

## 标题栏与内容「同色」的真正修法（2026-11-04）

之前标题栏和下面标题行有色差，根因是**双重 tint**：

- `.mP3x-q_frame` 涂了一层 `rgba(tint, a)`；
- 对话区 `.an3WzG_root` 又涂了一层同样的 `--dsw-alias-bg-base`（也是 `rgba(tint, a)`）；
- 结果：标题栏（框架单层，`a`）比内容区（两层，等效 `2a-a²`）更亮，在 y=40 处形成台阶。

修法：框架背景改成透明，只用 `box-shadow: inset 0 40px 0 rgba(tint,a)` 画那 40px 标题条；内容仍由 `--dsw-alias-bg-base` 涂一层。两边都只有**一层**同样的 tint，交界自然连续（实测像素差 <6）。

## 只保留深色 + 消息气泡排版（2026-11-04）

- **只留深色**：`PRESETS` 在插件里过滤掉 `mode==='light'` 的皮肤（桃晓 / 暖沙），面板只剩 8 套深色；默认皮肤改为**深海**；`followPresetAppearance` 固定 `data-ds-dark-theme`，不再跟随皮肤切浅色。
- **消息气泡排版**：用户消息的时间戳移到**气泡上方**（右对齐），复制按钮移到**气泡下方**（右对齐），只作用于 `.LOmM4q_userRow`，助手消息不受影响。

## 「思考」折叠条的底色（2026-11-04）

`--dsw-linear-gradient-think` 之前为了防透字改成了 0.97 不透明，结果折叠条变成一条近黑横条。现在改成**和画布同档**：`rgba(tint, min(0.92, a+0.06)) → rgba(tint, a)`，和内容区只差 6%，既不再透字，也不会像黑条。

## 「思考」粘性标题的真正身份（2026-11-04）

那个折叠条不是普通行——它是 `_header_k7ery_*` 的 **`position: sticky`** 标题（`z-index:1`），滚动时粘在消息顶部、盖住下方文字。之前它透出下层文字，看起来就像“文字重叠/黑条”。

现在给粘性标题单独的毛玻璃：`rgba(tint,0.72)` + `backdrop-filter: blur(14px) saturate(1.4)` + 底部 1px 内高光。粘住时下方文字被**磨砂**而不是直接透出来，也不再是黑条。

## 信息栏移到标题栏右下角 + 思考折叠改按钮（2026-11-04）

- **信息栏**：`.GRgSLq_dock`（轮次 / tok / 缓存 / 用量）从输入框下方挪到窗口标题条右侧（`position:fixed; top:6px; right:150px; scale(0.76)`），不再占底部空间、也不会压到消息文字。
- **思考折叠**：之前是 `position:sticky` 的**全宽标题条**，带底色就是一条黑边。现在把 `--dsw-linear-gradient-think` 设成 `transparent`，标题条本身透明，内层 `VJlF5q_row` 改成 `inline-flex + 1px 透明描边 + cursor:pointer` 的**紧凑文字按钮**（∧ 思考），不再是一长条。
- 另外修了上一版选择器泄漏：`[class*="_header_k7ery_"]` 命中了 290 个通用行标题，导致轨迹里每行都加了深色底；现在限定在 `[class*="VJlF5q_root"]` 下（110 个思考块），其他行恢复无底色。

## 粘性取消 / 信息栏对齐 tab 行 / 字号（2026-11-04 末轮）

- 「思考」标题从 `position: sticky` 改回**普通流**（`static`），随内容一起滚走，不再贴顶、也不再挡圆角；展开内容容器补了 10px 圆角。
- 信息栏贴在 **对话/轨迹 这一行的右侧**：`top: calc(--dsh-windows-titlebar-height + 51px); right:18px`，字号 11px、不再缩放（之前 scale 0.8 显得字很小），且恢复 `pointer-events:auto`——点击仍能弹出「会话统计」浮层。
- 字号统一：注入控件统一 11–12.5px 档，移除缩放变换，避免同一条信息栏出现 8.8px 的“小字”。

## 滚动条与浮层（2026-11-04）

- **代码块滚动条**：之前全局覆写 `::-webkit-scrollbar`（宽 10px、透明轨道）会让代码块的滚动条占用布局宽度、跑到卡片圆角外。已整组移除，恢复应用自己的滚动条（在卡片内部）。窗口边缘那个亮带其实来自窗口边框，与滚动条无关。
- **浮层位置**：目前信息栏点击弹出的「会话统计」是应用自己定位的 popover（相对触发元素），主题插件只能改它的外观、不能改弹出方向。

## 滚动条最终方案

代码块外侧那条灰条其实是**对话滚动容器**的滚动条（在窗口右缘），不是代码块的。现在只对两个容器作用域化：`[class*="an3WzG_scrollBody"]` 与 `.md-code-block [class*="_plain_"]`，轨道透明、thumb 8px 半透明白（`rgba(255,255,255,0.16–0.18)`）+ 4px 圆角；代码块自己的滚动条落在卡片内部，对话滚动条也不再是亮带。

## 代码块 / 行内代码不再是黑底

之前 code 系列 token 直接用 `rgba(tint, α)`，tint 本身接近黑（深海 `rgb(4,12,24)`），叠出来就是黑块。现在引入**提亮 26% 的 tint**（`darkCode = mix(tint, 0.26)`）：

| token | 值（深海为例） |
| --- | --- |
| code-block | `rgba(69,75,84,0.55)` |
| banner | `rgba(69,75,84,0.66)` |
| inline-code / tag / citation | `rgba(69,75,84,0.5)` |
| segment 未选/选中 | `0.45 / 0.62` |

因为是按每套皮肤的 tint 计算的，8 套主题自动得到各自色调的“板岩灰”，不再是纯黑。

滚动条：对话滚动容器 `scrollbar-width:none`（实测 gutter=0），长代码块旁边那条灰条消失；代码块内部保留 8px 细 thumb。

## 代码块最终配色（全部主题自动适配）

- 代码块底色：`mix(tint, 0.12) @ 0.82`（深海实测 `rgba(34,41,52,0.82)`）——保留主题色的深板岩，不再是黑块；banner 0.92；
- 行内代码 / tag / 引用：中性 `rgba(255,255,255,0.08/0.07)` 的浅色 chip，避免和语法高亮的绿/红/蓝打架；
- 代码块与对话区滚动条**全部隐藏**（`scrollbar-width:none` + webkit 0），滚动靠滚轮/触控板；
- 底色由每套皮肤的 tint 计算，8 套主题各自得到同色系的深底。

## 滚动条归位 / 代码块自动展开

- 对话滚动条**恢复**（实测 gutter = 7px），之前的 `scrollbar-width:none` 加错了对象；
- 代码块内部滚动条隐藏（gutter = 0），因为代码块改成**自动完全展开**：`_plain_` 的 `max-height:none`、`overflow:visible`，并隐藏 fold/expand 辅助元素；
- 语法高亮本身没有改动；流式生成中的代码块在完成前是纯文本，高亮在渲染完成后才出现。

## 会话统计浮层下移

`.xXe6ja_panel` 是信息栏点击后弹出的统计 popover（`position:fixed; top:60px`），会盖住标题栏右半部分。给它加 `transform: translateY(64px)` 后整块下移，落在 tab 行下方，不再压标题栏。

## 过程明细消失的根因（2026-11-04）

为了隐藏代码块的折叠按钮，我写了一条**全局**规则：`[class*="_fold"],[class*="_expand"],[class*="collapse"]{display:none}`。`collapse` 这个词命中了对话里「过程明细」的折叠容器，导致只显示「已完成，用时 X」的汇总卡、看不到 思考/工具 明细。
现在把规则作用域收回到 `.md-code-block` 内部，过程明细恢复显示。教训同上一轮：**凡是用 `[class*=]` 的规则必须限定在具体模块根节点下**。

## 助手输出也加气泡（2026-11-04）

选择器：`[class*="xMeOpW_root"]:has([class*="_markdown_"])` —— 只命中「带 markdown 正文」的助手消息行，不碰思考/工具元信息行。

- 深色：与用户气泡**完全同款** —— `rgba(44,44,46,0.9)` 底 + 1px `rgba(255,255,255,0.1)` 发丝边 + 20px 圆角 + `10px 16px` 内边距 + 顶部 1px 内高光（实测 computed 与 `.LOmM4q_bubble` 逐项一致）；
- 和用户气泡区分：用户气泡是中性实色 `rgba(44,44,46,0.9)`，助手气泡是**玻璃质感**（透出壁纸）。

## 气泡改为「主题色玻璃」（不再中性灰）

两种气泡的底色都改成**每套皮肤 accent 的半透明色**（`hexRgb(accent)` + alpha）：

| 主题 | accent | 用户气泡 | 助手气泡 |
| --- | --- | --- | --- |
| 深海 | `#22d3ee` | `rgba(34,211,238,0.42)` | `rgba(34,211,238,0.32)` |
| 樱暮 | `#f472b6` | `rgba(244,114,182,0.42)` | `rgba(244,114,182,0.32)` |
| 余烬 | `#fb923c` | `rgba(251,146,60,0.42)` | `rgba(251,146,60,0.32)` |
| 霓紫 | `#a855f7` | `rgba(168,85,247,0.42)` | `rgba(168,85,247,0.32)` |

用户气泡比助手气泡浓 0.1（0.42 vs 0.32），保持“我说的更实、它说的更透”的层次；圆角/描边/内高光仍与用户气泡同款（20px / `rgba(255,255,255,0.16)`）。石墨主题的 accent 本身是石板灰，所以它保持冷灰是刻意的。

## 右侧栏为什么像「单独一层」

它不是浮层：`.mP3x-q_rightbarCol` 和 `.mP3x-q_centerCol`/`.mP3x-q_sidebarCol` 一样是 `.mP3x-q_frame` 里的并列列（`position:relative`，宽度从 frame 里分），所以它不会挡住内容——内容会相应变窄。

看起来“单独一层”是因为它**没有自己的表面色**：之前为了消接缝把三列统一设成 `transparent`，而左侧栏后来单独补了 `rgba(tint, a+0.06)` 的表面，右栏没补，于是它直接透出壁纸，和左栏不在一个平面上。

补齐后：`body[data-ds-dark-theme] [class*="_rightbarCol"]{background: rgba(tint, min(0.95,a+0.06)); border-left: 1px solid rgba(255,255,255,0.06)}`，与左侧栏同一表面 + 一道发丝分隔线。

## 遮挡 / 黑底 / 卡顿 / 横向滚动条（2026-11-04 晚）

- **浮层下移**：`.xXe6ja_panel`（统计、上下文共用组件）`translateY` 64px → **112px**；
- **状态栏不再被右栏盖住**：`.GRgSLq_dock` 原来 `fixed; right:18px`（贴视口右边），现在由 JS 每 250ms 依据 `.an3WzG_tabs` 的右边界定位：`left = tabs.right - dockWidth - 10`。右栏打开 → tabs 变窄 → 状态栏自动左移；
- **右栏工具卡**：`.p2k40q_entry` 底色从 `rgba(tint,0.7)`（近黑）改为 `rgba(mix(tint,16%),0.6)` + 1px 发丝边；`.p2k40q_entryIcon svg` 的 color 改为 accent（0.92），灰图标（浏览器）可见；
- **性能**：输入卡 `backdrop-filter` 30px/saturate2 → 18px/1.5；队列面板 28 → 18px；壁纸 `blur 14 → 10`、`saturate 1.9 → 1.75`。视觉几乎不变，合成层开销明显下降；
- **横向滚动条抽搐**：`html,body{overflow-x:hidden}` + `.an3WzG_scrollBody{overflow-x:hidden}`。

## 过程/工具链折叠实验已回滚（2026-11-04）

这版尝试过自动折叠过程中间行，但因为 React 每轮重渲染、没有稳定的分组容器，旧 class 残留导致每行都渲染成胶囊/色条（就是「一堆色条 + 代码运行中」那张图）。**已整体回滚**，过程行恢复原样显示；保留的是气泡、状态栏定位、浮层下移、右栏配色、性能与横向滚动条修复。

原方案（供后续参考）：

- 自动折叠：只保留**最后一条**（即当前状态：思考中 / 代码运行中 / 已完成），其余 `display:none`；
- 最后一条套浅色胶囊：`rgba(accent, 0.16)` + 发丝边 + 12px 圆角；对话正文气泡是 `0.42`，所以过程条明显更淡；
- **点击胶囊可展开/收起**全部过程行（切换 `.dts-meta-open`）。

实现：`MutationObserver`（500ms 防抖）扫描 `.BE0jCW_content`，挂 `.dts-meta-item/.dts-meta-hidden/.dts-meta-last` 类；`display` 由 CSS 控制，不动 DOM 结构，React 不受影响。首次挂载实测 37 轮 / 326 行折叠 / 39 个胶囊。

## 轮次摘要条（一行状态 + 计时）

应用自带的折叠按钮 `button.hE4tRW_root`（每轮一个，1200×34）改成一条状态条：

- 宽度 `100%`（与对话气泡同为 640），高度 `32px` 单行；
- 左侧 `::before` 显示 `data-dsh-left`（已完成 / 思考中 / 代码运行中），右侧 `::after` 显示 `data-dsh-right`（计时，`tabular-nums` 对齐）；
- 底色 `rgba(accent, 0.16)`（比对话气泡 0.42 淡）+ 1px 发丝边 + 12px 圆角；
- 原生内容用 `.dts-sum > * {display:none}` 隐藏，点击行为不变（展开/收起仍由应用处理）。

数据由 `MutationObserver`（400ms 防抖）从按钮文案解析：`/^(.*?)[，,]?\s*用时\s*(.+)$/`，如「已完成，用时 1分47秒」→ 左「已完成」/ 右「1分47秒」。实测 computed：640×32、radius 12、bg `rgba(34,211,238,0.16)`。

## 过程行折叠进摘要条（2026-11-04 晚）

应用自己的折叠按钮点击无效（实测 `aria-expanded` 恒为 `true`，行数不变），所以加了自定义折叠：

- 捕获阶段监听 `.hE4tRW_root` 点击 → 切换 `data-dts-open`；
- 折叠范围：从按钮所在 `.V4vHZW_flowItem` 往后遍历兄弟，隐藏**不含 markdown 的**行（过程/工具），遇到下一条摘要或用户消息停止；最终回答气泡（含 markdown）保持可见；
- 默认折叠：首次扫描时 `data-dts-open=0` 并隐藏过程行；实测 34 个摘要条全部折叠。

摘要条本身：宽 640（=气泡宽）、高 32、左「已完成」右「1分5秒」、底色 `rgba(accent,0.16)`、圆角 12px。

## 用户气泡被折叠误删的修复

折叠循环原本只在“兄弟节点本身”上判断 `.LOmM4q_userRow`，但用户消息的 `userRow` 是嵌在 `V4vHZW_flowItem` 里的，导致后续用户消息也被 `display:none`。

修复：
- 遇到 `sib.querySelector('.LOmM4q_userRow')` 立即停止；
- 折叠时给行加 `.dts-folded-el`；每次扫描先做安全回扫，任何包含 userRow 的已折叠元素都恢复显示；
- 实测：40 条用户消息全部可见、隐藏 0。

## 状态栏与右栏的最终关系（2026-11-04）

- 浮层下移量回到 `translateY(64px)`（`xXe6ja_panel` 统计 + `A6Bq1a_panel` 上下文两个都加）；112px 太夸张。
- 状态栏改用「右栏宽度感知」定位：`limit = min(tabs.right, innerWidth - rightbarWidth)`，`left = limit - dockWidth - 10`，并 clamp 在视口内。右栏展开（或动画中）时，状态栏会自动让到对话列里，不会被盖住；`z-index: 2147482000` 保证在面板之上。
- 右栏本身是 **flex 并列列**（实测展开时 `rightbarCol 417px` + `centerCol 400px`），会挤压对话列而不是浮在上面；之前看起来“单独置顶”是因为它没有表面色 + 状态栏贴视口右边。

## 状态栏定位的坑：为什么又放回输入框下方

`.GRgSLq_dock` 在 `.GRgSLq_root`（composer）里，而 composer 内部有 `backdrop-filter`/transform，会成为 **fixed 的包含块** —— `position:fixed` 不是相对视口，而是相对 composer。实测 `left:-320px` 时屏幕坐标仍是 `x=361`，所以“贴到 tab 行右侧 / 右栏展开时自动让位”都无法用固定定位可靠实现。

最终方案：把状态栏放回 composer **自然流**（`position:static`，一行 11px，居中）。它现在完全位于对话列内部，右栏展开时随列一起被挤压，**不会再被任何面板盖住**（已用右栏展开状态实测可见）。

如果以后一定要它贴在 tab 行右侧，需要把节点移出 React 树（会丢点击）或由应用暴露 slot —— 不适合插件层硬做。

## 状态栏改为 tab 行内的镜像条 / 浮层与菜单配色

- 直接移动 `.GRgSLq_dock` 节点会被 React 重渲染还原，且它的 fixed 包含块是 composer；改为**镜像方案**：真实 dock `display:none`，在 `.an3WzG_tabs` 尾部注入 `#dts-dockbar`，每 150ms 读真实 dock 的按钮文本拼成 `轮次 · tok/s · 缓存 · 上下文%` 显示；
- 点击镜像条按左右半区分派：左半 → 点第一个按钮（会话统计），右半 → 点最后一个按钮（上下文浮层），真实 dock 仍可接收程序化点击；
- 浮层/菜单配色：`[role=tooltip] / [class*=tooltip]`、`[role=menu] / dropdown` 改成 `mix(tint,0.14~0.16)` 的深色玻璃（不再是纯黑），1px 发丝边 + 10–12px 圆角。

## 「…」按钮改成会话数据面板

捕获阶段拦截 `button[aria-label="更多会话视图"]` 的点击：`preventDefault + stopPropagation`，不再弹应用的插件菜单，改为渲染自己的 `#dts-metrics`（固定定位在按钮下方 8px、宽 232px、深色玻璃底）。

面板内容从真实状态栏解析：

| 行 | 来源 |
| --- | --- |
| 轮次 / 步数 | `/\d+ 轮 \d+ 步/` |
| 输出速度 | `tok/s` |
| 累计用量 | `M/K tok`（排除 tok/s） |
| 缓存命中 | `缓存命中 xx%` |
| 上下文占用 | 结尾百分比 |

点空白处关闭；实测 5 行数据完整（55 轮 · 549 步 / 207 tok/s / 219M tok / 99% / 31%）。

## 会话数据面板：更多条目 + 主题色玻璃

- tab 行内联状态文字已移除（真实 dock 只隐藏、不再镜像）；
- 「…」面板改成 9 行：轮次/步数、输出速度、累计用量、缓存命中、上下文占用、模型用时、工具用时、首 token（TTFT）、上下文窗口；
- 后 4 项通过短暂打开应用自己的 `xXe6ja_panel`（统计）和 `A6Bq1a_panel`（上下文）读取文本后自动 `Escape` 关闭；
- 面板底色改为主题色玻璃：`linear-gradient(rgba(accent,0.20), rgba(accent,0.10))` + `rgba(10,14,20,0.72)` + `backdrop-filter: blur(20px) saturate(1.4)`，不再是中性灰。

## 面板闪烁与分两半的修复

两个原因：

1. **重复的 enrich 实现**：早前版本残留了一份 `enrichMetrics`（向面板 `appendChild` 4 行），把新实现覆盖了 → 面板先出 5 行、再追加 4 行，而且行数变成 13。已删除旧实现（花括号计数整段切除），现在只有一份，实测 9 行无重复。
2. **应用浮层可见**：读数据时要打开官方统计/上下文浮层。现在读取期间给 `body` 加 `.dts-enriching`，CSS 让 `xXe6ja_panel`/`A6Bq1a_panel` `visibility:hidden; opacity:0`，读完再移除并 `Escape`；实测读取过程中可见官方浮层数 = 0。

另外面板改为**一次成型**：9 行骨架立即渲染（后 4 行占位 `…`），读到的值原地填入，不再有高度跳变。

## 过程行气泡 / 对齐 / 可展开

- **对齐**：`[class*="VJlF5q_row"]{display:flex;align-items:center;width:100%}`，过程行统一成块级宽行，不再因 inline-flex 宽度不同而参差；
- **逐条浅色气泡**：运行中的元信息行（不含 markdown、不含用户消息、不含摘要按钮的 `.V4vHZW_flowItem`）加 `rgba(accent,0.10)` + 1px 发丝边 + 10px 圆角 + 4×10 内边距，出现一条就包一条；
- **可展开**：折叠状态改为模块级 `foldOpen`，捕获阶段点击任意摘要条切换**全局**展开/折叠；每次扫描若按钮被 React 重建则按 `foldOpen` 重新应用。实测点击后 84 个折叠行全部恢复显示。

## 过程链合并成一个气泡（折叠暂时关闭）

检测：`.BE0jCW_content` 的 flowItem 以文本前缀（思考/代码/运行命令/输出/读取/工具）或含 `VJlF5q_root` 判定为过程行，排除用户消息与已完成摘要。

- 每轮所有过程行标 `dts-meta-row`，首行 `dts-g-first`（上圆角+上边距）、末行 `dts-g-last`（下圆角+下边距），中间 `border-radius:0`、`margin:0` → 视觉上是**一个连续气泡**；实测 62 行 / 30 组；
- 折叠暂时关闭：切到 `body.dts-all-folded` 的全局折叠方案在 React 每轮重渲染时按钮/行被替换，点击状态无法稳定保持，为避免“点了没反应”先让过程行常显。

下一步若要折叠，需要把状态挂在**每轮的稳定容器**（`.BE0jCW_root`）上而不是逐行元素。

## 折叠真正的根因：点错了元素 + 工具栏隐藏

- 探针发现点击事件 target 是 **`.hKdVjq_summary`**，而不是我们样式的 `.hE4tRW_root`（后者只是外壳），所以 `closest('.hE4tRW_root')` 永远匹配不到 → 所有点击都被忽略。现在监听 `.hE4tRW_root, .hKdVjq_summary` 两者；
- 折叠状态用 `window.__dtsFoldOpen` + `body.dts-all-folded`，跨 React 重渲染保持；
- 实测：初始折叠（0 行可见）→ 点击展开（71 行可见）→ 再点收起（0 行），稳定；
- 助手消息下方的操作栏（复制/赞/分享/用量/时间，`.cVfUIq_root`）已 `display:none`。

## 折叠二次修复 + 操作栏彻底移除

- 折叠：真实点击目标是 `.hKdVjq_summary`，监听器已同时匹配 `.hE4tRW_root` / `.hKdVjq_summary` / `.dts-sum`；只绑 `click`，并加 300ms 去抖（避免 pointerdown+click 双触发互相抵消，表现成“点了没反应”）。状态存 `window.__dtsFoldOpen` + `body.dts-all-folded`。
- 浅色横条：是隐藏 `.cVfUIq_root` 后其**外层 flowItem** 仍占位、并被过程行气泡规则染色。现在直接 `[class*="V4vHZW_flowItem"]:has(.cVfUIq_root){display:none}`，整行移除，不再留条。

## 思考内容不再套对话气泡

助手气泡选择器加了排除：`:not(:has([class*="VJlF5q_root"]))` —— 思考块里的 markdown 容器不再吃到 `rgba(accent,0.42)` 的对话气泡底色；只有真正的回答正文保留气泡。实测：回答气泡 7 个、思考气泡 0 个。

## 新会话按钮改成主题色

`.wtg9ga_newSession` 原本是应用的中性灰 `rgb(67,69,74)`，现在改为 `rgba(accent, 0.18)` + 1px `rgba(255,255,255,0.14)` 发丝边 + 顶部内高光，悬停加深到 `0.26`，图标 `color` 用 accent（0.95）。实测深海主题下 computed `rgba(34,211,238,0.18)`。

## 消息开头的小横条（已修）

原因：之前为了给过程行上气泡，写了一条**通用** flowItem 规则（`V4vHZW_flowItem:not(...)`），它在消息刚开始、flowItem 还是空占位时也会命中；空行 + 4px 内边距 + 0.10 底色就渲染成一条细横条。

修法：删掉这条通用规则，气泡只由 JS 标记后的 `.dts-meta-row` 承担（按文本前缀判定，空行不会被标记）。行对齐规则收窄为 `.dts-meta-row [class*="VJlF5q_row"]`。实测细横条 0 条、过程行仍正常分组（94 行）。

## 与同类插件的差异（设计参考）

- [yunshu-iii/dsh-wallpaper-theme](https://github.com/yunshu-iii/dsh-wallpaper-theme)：壁纸 + 分级磨砂 + 图库，侧栏底部入口；本文的 html::before 三层、分级地板与「菜单保持实心」直接受它启发。
- [renjie2026/dsh-theme-gallery](https://github.com/renjie2026/dsh-theme-gallery)：JSON 皮肤 + 67 token 全屏覆盖；其「壁纸层 0 / #root 1 / 装饰层 60」的层序结论一致。
- [YOGEMOW/dsh-custom-theme](https://github.com/YOGEMOW/dsh-custom-theme)：设置页 `settings.section` 形态的主题工坊；本文选择悬浮面板，避免依赖 React 与设置页插槽。

## 已知限制

- 右侧 Windows 原生最小化 / 最大化 / 关闭按钮由系统绘制在网页之上，CSS 无法参与上色。
- 个别控件若写死颜色（不走 token），壁纸透不过去。
- 插件是**纯客户端**的：不提供宿主 HTTP 路由，自定义壁纸存 localStorage（约 5MB 上限），不做多图库 / 轮换 / 浅深两套独立壁纸。
- 修改 `client.js` 后需要让 bundle 重新加载（重启 DSH，或切换插件开关后刷新）。
