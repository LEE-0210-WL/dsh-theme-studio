window.__ModuleLoader__.load({
  id: 'dsh-theme-studio',
  factory() {
    'use strict';
    var PRESETS = [{"id":"aurora","nameZh":"极光","nameEn":"Aurora Veil","mode":"dark","background":"radial-gradient(1150px 760px at 16% 8%, rgba(52, 211, 153, 0.34) 0%, rgba(52, 211, 153, 0) 58%), radial-gradient(980px 720px at 84% 22%, rgba(45, 212, 191, 0.22) 0%, rgba(45, 212, 191, 0) 62%), radial-gradient(760px 560px at 72% 86%, rgba(129, 140, 248, 0.16) 0%, rgba(129, 140, 248, 0) 64%), radial-gradient(1500px 900px at 50% 118%, rgba(13, 74, 70, 0.42) 0%, rgba(13, 74, 70, 0) 70%), linear-gradient(158deg, #031014 0%, #061a1d 44%, #02090c 100%)","accent":"#34d399","accentSoft":"rgba(52, 211, 153, 0.16)","dim":0.26,"panelOpacity":0.7,"panelTint":"rgba(5, 16, 17, 0.92)","descriptionZh":"左上角一道薄荷绿极光，青绿尾迹向右上蔓延，底部压一层深松石色；微弱靛蓝补光避免单调。清爽、有呼吸感，适合长时间对话。"},{"id":"deep-ocean","nameZh":"深海","nameEn":"Abyssal Cyan","mode":"dark","background":"radial-gradient(1250px 820px at 78% 14%, rgba(34, 211, 238, 0.26) 0%, rgba(34, 211, 238, 0) 60%), radial-gradient(900px 700px at 18% 34%, rgba(59, 130, 246, 0.26) 0%, rgba(59, 130, 246, 0) 62%), radial-gradient(1100px 700px at 46% 112%, rgba(8, 64, 104, 0.55) 0%, rgba(8, 64, 104, 0) 72%), radial-gradient(140% 110% at 50% 50%, rgba(2, 6, 18, 0) 52%, rgba(2, 6, 18, 0.55) 100%), linear-gradient(160deg, #020814 0%, #041226 48%, #01050e 100%)","accent":"#22d3ee","accentSoft":"rgba(34, 211, 238, 0.16)","dim":0.28,"panelOpacity":0.7,"panelTint":"rgba(4, 12, 24, 0.92)","descriptionZh":"深海军蓝里透出两道青色体积光，底缘是更浓的海沟蓝；四周暗角收住画面。沉静、专业，玻璃面板在其上像舷窗。"},{"id":"sakura","nameZh":"樱暮","nameEn":"Sakura Dusk","mode":"dark","background":"radial-gradient(1100px 780px at 20% 12%, rgba(244, 114, 182, 0.28) 0%, rgba(244, 114, 182, 0) 58%), radial-gradient(900px 700px at 82% 30%, rgba(192, 132, 252, 0.20) 0%, rgba(192, 132, 252, 0) 62%), radial-gradient(1200px 760px at 52% 108%, rgba(120, 53, 86, 0.45) 0%, rgba(120, 53, 86, 0) 70%), radial-gradient(140% 115% at 50% 45%, rgba(12, 6, 15, 0) 50%, rgba(12, 6, 15, 0.50) 100%), linear-gradient(165deg, #150a15 0%, #1e0f1f 46%, #0b060f 100%)","accent":"#f472b6","accentSoft":"rgba(244, 114, 182, 0.16)","dim":0.3,"panelOpacity":0.7,"panelTint":"rgba(22, 11, 21, 0.92)","descriptionZh":"暮色里的樱粉与藕紫交错，左下角是一团暖蔷薇色的余晖。柔而不甜，暗紫底让粉色光晕更透。"},{"id":"sunset-ember","nameZh":"余烬","nameEn":"Sunset Ember","mode":"dark","background":"radial-gradient(1150px 760px at 24% 82%, rgba(251, 146, 60, 0.40) 0%, rgba(251, 146, 60, 0) 54%), radial-gradient(1000px 720px at 80% 24%, rgba(244, 63, 94, 0.24) 0%, rgba(244, 63, 94, 0) 56%), radial-gradient(900px 600px at 58% 96%, rgba(253, 186, 116, 0.18) 0%, rgba(253, 186, 116, 0) 56%), radial-gradient(145% 110% at 50% 45%, rgba(20, 7, 4, 0) 48%, rgba(20, 7, 4, 0.56) 100%), linear-gradient(155deg, #190a06 0%, #200c07 46%, #0b0403 100%)","accent":"#fb923c","accentSoft":"rgba(251, 146, 60, 0.18)","dim":0.34,"panelOpacity":0.72,"panelTint":"rgba(26, 11, 8, 0.92)","descriptionZh":"左下地平线烧着橙金色余烬，右上角是冷却中的玫红；深巧克力底色把暖调压住，不会糊成一片橙。"},{"id":"midnight-ink","nameZh":"墨夜","nameEn":"Midnight Ink","mode":"dark","background":"radial-gradient(1000px 700px at 50% 4%, rgba(79, 70, 229, 0.26) 0%, rgba(79, 70, 229, 0) 62%), radial-gradient(900px 700px at 92% 78%, rgba(56, 189, 248, 0.10) 0%, rgba(56, 189, 248, 0) 60%), radial-gradient(700px 500px at 8% 92%, rgba(129, 140, 248, 0.10) 0%, rgba(129, 140, 248, 0) 60%), radial-gradient(150% 120% at 50% 48%, rgba(2, 3, 9, 0) 45%, rgba(2, 3, 9, 0.62) 100%), linear-gradient(170deg, #05060e 0%, #0a0b1a 50%, #03040a 100%)","accent":"#818cf8","accentSoft":"rgba(129, 140, 248, 0.16)","dim":0.16,"panelOpacity":0.76,"panelTint":"rgba(7, 8, 16, 0.94)","descriptionZh":"近乎黑的靛蓝，顶部一线幽蓝光，四角沉入比黑更黑。最克制的一档：壁纸几乎退成质感，只在边缘提示颜色。"},{"id":"forest-moss","nameZh":"苔林","nameEn":"Forest Moss","mode":"dark","background":"radial-gradient(1150px 780px at 18% 16%, rgba(132, 204, 22, 0.19) 0%, rgba(132, 204, 22, 0) 56%), radial-gradient(950px 700px at 86% 66%, rgba(16, 185, 129, 0.22) 0%, rgba(16, 185, 129, 0) 62%), radial-gradient(1000px 700px at 50% 112%, rgba(63, 74, 28, 0.55) 0%, rgba(63, 74, 28, 0) 70%), radial-gradient(140% 115% at 50% 45%, rgba(4, 10, 6, 0) 48%, rgba(4, 10, 6, 0.52) 100%), linear-gradient(150deg, #071109 0%, #0a1710 48%, #050c07 100%)","accent":"#a3e635","accentSoft":"rgba(163, 230, 53, 0.14)","dim":0.3,"panelOpacity":0.7,"panelTint":"rgba(8, 17, 11, 0.92)","descriptionZh":"苔绿与橄榄黄在深林底上晕开，右下角一点翡翠反光。泥土感的暖绿，不刺眼，适合长时间专注。"},{"id":"peach-dawn","nameZh":"桃晓","nameEn":"Peach Dawn","mode":"light","background":"radial-gradient(1200px 800px at 18% 10%, rgba(255, 186, 140, 0.62) 0%, rgba(255, 186, 140, 0) 60%), radial-gradient(1000px 720px at 84% 18%, rgba(214, 188, 250, 0.42) 0%, rgba(214, 188, 250, 0) 62%), radial-gradient(1100px 760px at 52% 112%, rgba(247, 200, 178, 0.55) 0%, rgba(247, 200, 178, 0) 70%), linear-gradient(160deg, #fff6ee 0%, #ffe9dd 46%, #f8ddd2 100%)","accent":"#c2563a","accentSoft":"rgba(194, 86, 58, 0.14)","dim":0.03,"panelOpacity":0.86,"panelTint":"rgba(255, 251, 247, 0.92)","descriptionZh":"淡桃色晨光从左上来，右侧一抹藕荷色平衡暖调，底部是更浓的杏粉。明亮但不惨白；配浅色界面使用，深色文字依旧扎实。"},{"id":"graphite","nameZh":"石墨","nameEn":"Graphite Studio","mode":"any","background":"radial-gradient(1100px 740px at 74% 10%, rgba(148, 163, 184, 0.20) 0%, rgba(148, 163, 184, 0) 62%), radial-gradient(900px 640px at 20% 84%, rgba(203, 213, 225, 0.10) 0%, rgba(203, 213, 225, 0) 60%), linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0%, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.02) 100%), radial-gradient(145% 115% at 50% 45%, rgba(6, 7, 9, 0) 50%, rgba(6, 7, 9, 0.50) 100%), linear-gradient(160deg, #0d0e11 0%, #15171b 48%, #08090b 100%)","accent":"#94a3b8","accentSoft":"rgba(148, 163, 184, 0.18)","dim":0.16,"panelOpacity":0.72,"panelTint":"rgba(14, 15, 18, 0.92)","descriptionZh":"中性炭灰上掠过一道冷钢色光，纵向留一条极淡的高光带，像摄影棚的柔光箱。无色相负担，适合演示与截图。"},{"id":"cyber-violet","nameZh":"霓紫","nameEn":"Cyber Violet","mode":"dark","background":"radial-gradient(1150px 800px at 20% 16%, rgba(139, 92, 246, 0.34) 0%, rgba(139, 92, 246, 0) 58%), radial-gradient(1000px 760px at 84% 76%, rgba(232, 121, 249, 0.28) 0%, rgba(232, 121, 249, 0) 60%), radial-gradient(800px 600px at 12% 88%, rgba(34, 211, 238, 0.12) 0%, rgba(34, 211, 238, 0) 58%), radial-gradient(140% 115% at 50% 45%, rgba(7, 3, 14, 0) 48%, rgba(7, 3, 14, 0.52) 100%), linear-gradient(150deg, #0b0416 0%, #160827 48%, #07030e 100%)","accent":"#a855f7","accentSoft":"rgba(168, 85, 247, 0.18)","dim":0.3,"panelOpacity":0.7,"panelTint":"rgba(13, 6, 22, 0.92)","descriptionZh":"紫罗兰与洋红双向霓虹，左下角补一点青色做冷暖冲撞；黑紫底把饱和度吃掉一半，霓虹够亮却不溢出。"},{"id":"warm-sand","nameZh":"暖沙","nameEn":"Warm Sand","mode":"light","background":"radial-gradient(1200px 800px at 78% 14%, rgba(214, 164, 120, 0.55) 0%, rgba(214, 164, 120, 0) 60%), radial-gradient(1000px 720px at 18% 82%, rgba(255, 252, 245, 0.85) 0%, rgba(255, 252, 245, 0) 62%), radial-gradient(1100px 760px at 52% 108%, rgba(198, 160, 120, 0.35) 0%, rgba(198, 160, 120, 0) 70%), linear-gradient(160deg, #f7f0e4 0%, #efe4d2 48%, #e7d8c4 100%)","accent":"#a9714b","accentSoft":"rgba(169, 113, 75, 0.16)","dim":0.02,"panelOpacity":0.88,"panelTint":"rgba(253, 248, 242, 0.92)","descriptionZh":"米白、细沙与陶土棕的过渡，右下角一团陶土暖光压住画面。低饱和的纸质触感；配浅色界面使用，长时间阅读不刺眼。"}];
    PRESETS = PRESETS.filter(function (p) { return p.mode !== 'light'; });
    var ACCENTS = [{"id":"mint","nameZh":"薄荷","color":"#34d399"},{"id":"cyan","nameZh":"海青","color":"#22d3ee"},{"id":"pink","nameZh":"樱粉","color":"#f472b6"},{"id":"ember","nameZh":"烬橙","color":"#fb923c"},{"id":"indigo","nameZh":"夜靛","color":"#818cf8"},{"id":"lime","nameZh":"苔柠","color":"#a3e635"},{"id":"amber","nameZh":"晨琥珀","color":"#fbbf24"},{"id":"steel","nameZh":"石墨钢","color":"#94a3b8"},{"id":"violet","nameZh":"霓紫","color":"#a855f7"},{"id":"clay","nameZh":"陶沙","color":"#d99a6c"}];
    var NOISE = "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22180%22%20height%3D%22180%22%3E%3Cfilter%20id%3D%22g%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.82%22%20numOctaves%3D%222%22%20stitchTiles%3D%22stitch%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23g)%22%20opacity%3D%220.5%22%2F%3E%3C%2Fsvg%3E\")";
    var STORAGE_KEY = 'dsh.theme-studio.v2';
    var state = null;
    var DEFAULTS = { preset: 'deep-ocean', accent: '', brightness: 1.4, dim: null, canvas: 0.58, blur: 14, custom: '' };

    var STR = {
      zh: {
        title: '主题工坊', wall: '壁纸', accent: '强调色', follow: '跟随壁纸', material: '材质',
        brightness: '壁纸亮度', dim: '暗化', blur: '磨砂', canvas: '对话区地板',
        upload: '上传壁纸', reset: '恢复默认', clear: '清除图片', close: '收起',
        tooBig: '图片压缩后仍然太大，请换一张更小的图片', reading: '读取中…', customTile: '自定义'
      },
      en: {
        title: 'Theme Studio', wall: 'Wallpaper', accent: 'Accent', follow: 'From wallpaper', material: 'Material',
        brightness: 'Brightness', dim: 'Dim', blur: 'Blur', canvas: 'Canvas floor',
        upload: 'Upload wallpaper', reset: 'Reset', clear: 'Clear image', close: 'Close',
        tooBig: 'Image is still too large after compression; pick a smaller one', reading: 'Loading…', customTile: 'Custom'
      }
    };
    function t(key) {
      var lang = String(document.documentElement.lang || navigator.language || 'zh').toLowerCase();
      return (lang.indexOf('zh') === 0 ? STR.zh : STR.en)[key] || key;
    }
    function presetById(id) { for (var i = 0; i < PRESETS.length; i++) if (PRESETS[i].id === id) return PRESETS[i]; return PRESETS[0]; }
    function parseRgba(s) {
      var m = String(s || '').match(/rgba?\(([^)]+)\)/);
      if (!m) return { r: 18, g: 20, b: 26, a: 0.9 };
      var p = m[1].split(',');
      return { r: parseInt(p[0], 10) || 18, g: parseInt(p[1], 10) || 20, b: parseInt(p[2], 10) || 26, a: p.length > 3 ? parseFloat(p[3]) : 1 };
    }
    function hexRgb(h) {
      var m = String(h || '').replace('#', '').trim();
      if (m.length === 3) m = m.split('').map(function (c) { return c + c; }).join('');
      var n = parseInt(m, 16);
      if (!isFinite(n)) return { r: 18, g: 20, b: 26 };
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }
    function rgba(v, a) { return 'rgba(' + v.r + ',' + v.g + ',' + v.b + ',' + (Math.round(a * 1000) / 1000) + ')'; }
    function mix(v, f) { return { r: Math.round(v.r + (255 - v.r) * f), g: Math.round(v.g + (255 - v.g) * f), b: Math.round(v.b + (255 - v.b) * f) }; }
    function accentOf(s) { return s.accent || presetById(s.preset).accent; }
    function dimOf(s) { var p = presetById(s.preset); return s.dim === null || s.dim === undefined ? p.dim : s.dim; }
    function accentTokens(ac) {
      var light = 'color-mix(in srgb, ' + ac + ' 86%, #fff)';
      var stamp = 'color-mix(in srgb, ' + ac + ' 16%, transparent)';
      var sel = 'color-mix(in srgb, ' + ac + ' 35%, transparent)';
      return '--dsw-static-deepseek-400:' + light + ' !important;'
        + '--dsw-static-deepseek-450:' + ac + ' !important;'
        + '--dsw-static-deepseek-500:' + ac + ' !important;'
        + '--dsw-alias-state-business-primary:' + light + ' !important;'
        + '--dsw-alias-state-business-tertiary:' + stamp + ' !important;'
        + '--dsw-alias-link:' + ac + ' !important;'
        + '--dsw-alias-button-info-fill:' + light + ' !important;'
        + '--dsw-alias-button-info-hover:' + ac + ' !important;'
        + '--dsw-alias-brand-primary-new-colorprimary-new-color:' + ac + ' !important;'
        + '--dsw-focus-ring-color:' + light + ' !important;'
        + '--dsw-specific-sidebar-nav-item-active-accent:' + stamp + ' !important;'
        + '--dsw-alias-bg-document-selection:' + sel + ' !important;';
    }
    var lastPresetMode = null;
    function followPresetAppearance(s) {
      var p = presetById(s.preset);
      if (s.custom) return;
      if (lastPresetMode === p.mode) return;
      lastPresetMode = p.mode;
      document.body.toggleAttribute('data-ds-dark-theme', true);
    }

    function buildCss(s) {
      var p = presetById(s.preset);
      var tint = parseRgba(p.panelTint);
      var soft = mix(tint, 0.15);
      var ac = accentOf(s);
      var wall = s.custom ? 'url("' + s.custom + '")' : p.background;
      var dim = dimOf(s);
      var darkTint = p.mode === 'light' ? { r: 10, g: 12, b: 16 } : tint;
      var acRgb = hexRgb(ac);
      var darkSoft = mix(darkTint, 0.15);
      var darkCode = mix(darkTint, 0.12);
      var darkDim = Math.min(0.9, p.mode === 'light' ? 0.86 : dim);
      var lightDim = Math.min(0.92, p.mode === 'dark' ? 0.8 : Math.max(0.02, dim));
      var canvas = s.canvas;
      var sidebar = Math.max(0.22, canvas - 0.12);
      var a = Math.min(0.86, Math.max(0.12, canvas));
      var blur = s.blur;
      var css = [];
      css.push(':root{--dts-accent:' + ac + ';}');
      /* wallpaper: fixed opaque layer under the app; brightness/dim keep it alive, grain adds texture */
      css.push('html::before{content:"";position:fixed;inset:0;z-index:0;pointer-events:none;'
        + 'filter:brightness(' + s.brightness + ') saturate(1.15) blur(' + blur + 'px);'
        + 'background-size:cover !important;background-position:center !important;'
        + 'background-repeat:no-repeat !important;background-attachment:fixed !important;}');
      css.push('html:has(body[data-ds-dark-theme])::before{background-image:linear-gradient(rgba(4,6,10,' + darkDim + '),rgba(4,6,10,' + darkDim + ')),' + wall + ' !important;}');
      css.push('html:not(:has(body[data-ds-dark-theme]))::before{filter:brightness(' + Math.min(1.12, s.brightness) + ') saturate(1.75) contrast(1.06) blur(' + blur + 'px) !important;}');
      css.push('html:not(:has(body[data-ds-dark-theme]))::before{background-image:linear-gradient(rgba(252,251,250,' + lightDim + '),rgba(252,251,250,' + lightDim + ')),' + wall + ' !important;}');
      css.push('html{background:#06080d !important;}');
      css.push('body{background:transparent !important;}');
      css.push('#root{position:relative;z-index:1;}');
      css.push('body[data-ds-dark-theme]{'
        + '--dsh-desktop-frame-fill:transparent !important;'
        + '--dsw-alias-bg-base:' + rgba(darkTint, a) + ' !important;'
        + '--dsw-specific-sidebar-fill:rgba(0,0,0,0) !important;'
        + '--dsw-specific-input-major:' + rgba(darkTint, 0.93) + ' !important;'
        + '--dsw-specific-bubble:rgba(44,44,46,0.9) !important;'
        + '--dsw-specific-selector:' + rgba(darkTint, 0.7) + ' !important;'
        + '--dsw-alias-bg-module-platform:' + rgba(darkTint, 0.66) + ' !important;'
        + '--dsw-alias-bg-layer-1:' + rgba(darkTint, 0.7) + ' !important;'
        + '--dsw-alias-bg-layer-2:' + rgba(darkTint, 0.93) + ' !important;'
        + '--dsw-alias-bg-layer-3:' + rgba(darkTint, 0.94) + ' !important;'
        + '--dsw-alias-settings-card-fill:' + rgba(darkTint, 0.92) + ' !important;'
        + '--dsw-alias-markdown-code-block:' + rgba(darkCode, 0.82) + ' !important;'
        + '--dsw-alias-markdown-code-block-banner:' + rgba(darkCode, 0.92) + ' !important;'
        + '--dsw-alias-markdown-inline-code:rgba(255,255,255,0.08)' + ' !important;'
        + '--dsw-alias-markdown-tag:rgba(255,255,255,0.07)' + ' !important;'
        + '--dsw-alias-markdown-citation:rgba(255,255,255,0.07)' + ' !important;'
        + '--dsw-alias-markdown-code-segment-unselected:rgba(255,255,255,0.06)' + ' !important;'
        + '--dsw-alias-markdown-code-segment-selected:rgba(255,255,255,0.14)' + ' !important;'
        + '--dsw-linear-gradient-think:transparent !important;'
        + accentTokens(ac) + '}');
      css.push('body:not([data-ds-dark-theme]){'
        + '--dsh-desktop-frame-fill:transparent !important;'
        + '--dsw-alias-bg-base:rgba(255,255,255,' + a + ') !important;'
        + '--dsw-specific-sidebar-fill:rgba(0,0,0,0) !important;'
        + '--dsw-specific-input-major:rgba(255,255,255,0.96) !important;'
        + '--dsw-specific-bubble:rgba(237,243,254,0.95) !important;'
        + '--dsw-specific-selector:rgba(245,246,247,0.8) !important;'
        + '--dsw-alias-bg-module-platform:rgba(245,246,247,0.76) !important;'
        + '--dsw-alias-bg-layer-1:rgba(255,255,255,0.78) !important;'
        + '--dsw-alias-bg-layer-2:rgba(255,255,255,0.96) !important;'
        + '--dsw-alias-bg-layer-3:rgba(250,251,252,0.96) !important;'
        + '--dsw-alias-settings-card-fill:rgba(255,255,255,0.95) !important;'
        + '--dsw-alias-markdown-code-block:rgba(248,250,252,0.92) !important;'
        + '--dsw-alias-markdown-code-block-banner:rgba(241,245,249,0.95) !important;'
        + '--dsw-alias-markdown-inline-code:rgba(15,23,42,0.08) !important;'
        + '--dsw-linear-gradient-think:transparent !important;'
        + accentTokens(ac) + '}');
      css.push('body[data-ds-dark-theme] .mP3x-q_frame{background:transparent !important;box-shadow:inset 0 var(--dsh-windows-titlebar-height,40px) 0 ' + rgba(darkTint, a) + ' !important;}');
      css.push('body:not([data-ds-dark-theme]) .mP3x-q_frame{background:transparent !important;box-shadow:inset 0 var(--dsh-windows-titlebar-height,40px) 0 rgba(255,255,255,' + a + ') !important;}');
      css.push('[class*="_centerCol"],[class*="_sidebarCol"],[class*="_rightbarCol"]{background:transparent !important;border-radius:0 !important;}');
      css.push('body[data-ds-dark-theme] [class*="_sidebarCol"]{background:' + rgba(darkTint, 0.42) + ' !important;}');
      css.push('body:not([data-ds-dark-theme]) [class*="_sidebarCol"]{background:rgba(252,252,253,0.52) !important;}');
      css.push('[class*="_sidebarCol"]{border-right:1px solid rgba(255,255,255,0.07) !important;}');
      css.push('body[data-ds-dark-theme] .GRgSLq_card{background-color:' + rgba(darkTint, 0.42) + ' !important;background-image:linear-gradient(180deg,rgba(255,255,255,0.13),rgba(255,255,255,0.03) 40%,rgba(0,0,0,0.12)) !important;-webkit-backdrop-filter:blur(18px) saturate(1.5);backdrop-filter:blur(18px) saturate(1.5);border:1px solid rgba(255,255,255,0.2) !important;box-shadow:inset 0 1px 0 rgba(255,255,255,0.26),inset 0 -1px 0 rgba(0,0,0,0.35),inset 1px 0 0 rgba(255,255,255,0.06),inset -1px 0 0 rgba(255,255,255,0.06),0 20px 48px rgba(0,0,0,0.45) !important;}');
      css.push('.LOmM4q_userRow{position:relative !important;padding-top:22px !important;padding-bottom:30px !important;}');
      css.push('.LOmM4q_userRow ._1KfHza_actions{position:absolute !important;inset:0 !important;pointer-events:none !important;display:block !important;width:auto !important;height:auto !important;}');
      css.push('.LOmM4q_userRow ._1KfHza_timeStart{position:absolute !important;right:2px !important;top:0 !important;pointer-events:none !important;}');
      css.push('.LOmM4q_userRow ._1KfHza_action{position:absolute !important;right:0 !important;bottom:0 !important;pointer-events:auto !important;}');
      css.push('body[data-ds-dark-theme] [class*="VJlF5q_root"] [class*="_header_k7ery_"]{background:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;box-shadow:none !important;}');
      css.push('body:not([data-ds-dark-theme]) [class*="VJlF5q_root"] [class*="_header_k7ery_"]{background:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;box-shadow:none !important;}');
      css.push('[class*="VJlF5q_root"] [class*="VJlF5q_row"]{width:auto !important;display:inline-flex !important;align-items:center;gap:6px;padding:1px 8px 1px 4px;border-radius:999px;border:1px solid transparent;cursor:pointer;}');
      css.push('body[data-ds-dark-theme] [class*="VJlF5q_root"] [class*="VJlF5q_row"]{background:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;}');
      css.push('body:not([data-ds-dark-theme]) [class*="VJlF5q_root"] [class*="VJlF5q_row"]{background:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important;}');
      css.push('[class*="an3WzG_scrollBody"]::-webkit-scrollbar{width:8px;height:8px;background:transparent !important;}');
      css.push('[class*="an3WzG_scrollBody"]::-webkit-scrollbar-track{background:transparent !important;}');
      css.push('[class*="an3WzG_scrollBody"]::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.16) !important;border-radius:4px;}');
      css.push('.md-code-block [class*="_plain_"]{scrollbar-width:none !important;max-height:none !important;overflow:visible !important;}');
      css.push('.md-code-block [class*="_plain_"]::-webkit-scrollbar{width:0 !important;height:0 !important;display:none !important;}');
      css.push('.md-code-block{max-height:none !important;}');
      css.push('.md-code-block [class*="_fold"], .md-code-block [class*="_expand"], .md-code-block [class*="codeExpand"]{display:none !important;}');
      css.push('.md-code-block [class*="_plain_"]::-webkit-scrollbar-track{background:transparent !important;}');
      css.push('.md-code-block [class*="_plain_"]::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.18) !important;border-radius:4px;}');
      css.push('body[data-ds-dark-theme] .p2k40q_entry{background:' + rgba(mix(darkTint, 0.16), 0.6) + ' !important;border:1px solid rgba(255,255,255,0.08) !important;}');
      css.push('.p2k40q_entryIcon svg{color:' + rgba(mix(acRgb, 0), 0.92) + ' !important;}');


      css.push('body[data-ds-dark-theme] .hE4tRW_root.dts-sum{display:flex !important;align-items:center;justify-content:space-between !important;width:100% !important;min-width:0;height:32px;min-height:32px;max-height:32px;padding:0 14px !important;border-radius:12px !important;background:' + rgba(acRgb, 0.16) + ' !important;border:1px solid rgba(255,255,255,0.08) !important;color:rgba(255,255,255,0.74) !important;font-size:12.5px !important;line-height:32px !important;}');
      css.push('.hE4tRW_root.dts-sum > *{display:none !important;}');
      css.push('.hE4tRW_root.dts-sum::before{content:attr(data-dsh-left);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}');
      css.push('.hE4tRW_root.dts-sum::after{content:attr(data-dsh-right);color:rgba(255,255,255,0.55);font-variant-numeric:tabular-nums;white-space:nowrap;margin-left:12px;}');
      css.push('body[data-ds-dark-theme] [role="tooltip"],body[data-ds-dark-theme] [class*="tooltip"],body[data-ds-dark-theme] [class*="Tooltip"]{background:' + rgba(mix(darkTint, 0.16), 0.98) + ' !important;border:1px solid rgba(255,255,255,0.1) !important;border-radius:10px !important;color:rgba(255,255,255,0.86) !important;}');
      css.push('body[data-ds-dark-theme] [role="menu"],body[data-ds-dark-theme] [class*="_menu_"][class*="mOxcpG"],body[data-ds-dark-theme] [class*="dropdown"]{background:' + rgba(mix(darkTint, 0.14), 0.97) + ' !important;border:1px solid rgba(255,255,255,0.1) !important;border-radius:12px !important;box-shadow:0 12px 32px rgba(0,0,0,0.4) !important;}');
      css.push('body.dts-enriching [class*="xXe6ja_panel"],body.dts-enriching [class*="A6Bq1a_panel"]{visibility:hidden !important;opacity:0 !important;}');
      css.push('.dts-meta-row [class*="VJlF5q_row"]{display:flex !important;align-items:center;width:100% !important;gap:6px !important;}');
      css.push('.dts-meta-row{background:rgba(' + acRgb.r + ',' + acRgb.g + ',' + acRgb.b + ',0.10) !important;border:1px solid rgba(255,255,255,0.06) !important;border-radius:0 !important;padding:4px 10px !important;margin:0 !important;box-sizing:border-box;}');
      css.push('.dts-meta-row.dts-g-first{border-radius:10px 10px 0 0 !important;margin-top:3px !important;}');
      css.push('.dts-meta-row.dts-g-last{border-radius:0 0 10px 10px !important;margin-bottom:3px !important;}');
      css.push('.dts-meta-row.dts-g-first.dts-g-last{border-radius:10px !important;}');
      css.push('.cVfUIq_root{display:none !important;}');
      css.push('body.dts-all-folded .dts-meta-row{display:none !important;}');
      css.push('[class*="V4vHZW_flowItem"]:has([class*="cVfUIq_root"]){display:none !important;}');
      css.push('body[data-ds-dark-theme] .wtg9ga_newSession{background:' + rgba(acRgb, 0.18) + ' !important;border:1px solid rgba(255,255,255,0.14) !important;box-shadow:inset 0 1px 0 rgba(255,255,255,0.08) !important;}');
      css.push('body[data-ds-dark-theme] .wtg9ga_newSession:hover{background:' + rgba(acRgb, 0.26) + ' !important;}');
      css.push('body[data-ds-dark-theme] .wtg9ga_newSession svg{color:' + rgba(acRgb, 0.95) + ' !important;}');
      css.push('#dts-metrics{position:fixed;width:232px;z-index:2147483000;border-radius:12px;padding:10px 12px;background:linear-gradient(180deg,' + rgba(acRgb, 0.20) + ',' + rgba(acRgb, 0.10) + '),rgba(10,14,20,0.72);border:1px solid rgba(255,255,255,0.14);-webkit-backdrop-filter:blur(20px) saturate(1.4);backdrop-filter:blur(20px) saturate(1.4);box-shadow:0 16px 40px rgba(0,0,0,0.45);font-size:12px;color:rgba(255,255,255,0.82);}');
      css.push('#dts-metrics .dts-m-title{font-size:11.5px;color:rgba(255,255,255,0.55);margin-bottom:6px;}');
      css.push('#dts-metrics .dts-m-row{display:flex;justify-content:space-between;gap:12px;padding:4px 0;}');
      css.push('#dts-metrics .dts-m-row b{font-weight:500;font-variant-numeric:tabular-nums;color:rgba(255,255,255,0.92);}');
      css.push('#dts-dockbar{margin-left:auto;font-size:11px;line-height:22px;opacity:.88;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:56%;cursor:pointer;padding:0 4px;border-radius:8px;color:rgba(255,255,255,0.72);}');
      css.push('#dts-dockbar:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.9);}');
      css.push('html,body{overflow-x:hidden !important;}');
      css.push('[class*="an3WzG_scrollBody"]{overflow-x:hidden !important;}');
      css.push('[class*="xXe6ja_panel"]{transform:translateY(64px) !important;}');
      css.push('[class*="A6Bq1a_panel"]{transform:translateY(64px) !important;}');
      css.push('body[data-ds-dark-theme] [class*="xMeOpW_root"]:has([class*="_markdown_"]):not(:has([class*="VJlF5q_root"])){background:' + rgba(acRgb, 0.32) + ' !important;border:1px solid rgba(255,255,255,0.14) !important;border-radius:20px;padding:10px 16px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.07);margin:4px 0;}');
      css.push('body:not([data-ds-dark-theme]) [class*="xMeOpW_root"]:has([class*="_markdown_"]):not(:has([class*="VJlF5q_root"])){background:rgba(255,255,255,0.9) !important;border:1px solid rgba(20,24,30,0.08);border-radius:20px;padding:10px 16px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.7);}');
      css.push('.GRgSLq_dock{position:static !important;inset:auto !important;transform:none !important;width:auto !important;margin:0 0 0 auto !important;padding:0 2px !important;align-self:center;pointer-events:auto !important;opacity:.92;font-size:11px !important;letter-spacing:.01em;}');
      css.push('[class*="VJlF5q_root"] [class*="_header_k7ery_"]{position:static !important;top:auto !important;z-index:auto !important;}');
      css.push('[class*="VJlF5q_thinkBody"],[class*="VJlF5q_body"]{border-radius:10px !important;}');
      css.push('.GRgSLq_dock{font-size:11px !important;letter-spacing:.01em;opacity:.9;}');
      css.push('body[data-ds-dark-theme] .LOmM4q_bubble{background:' + rgba(acRgb, 0.42) + ' !important;border:1px solid rgba(255,255,255,0.16) !important;box-shadow:0 1px 0 rgba(255,255,255,0.08) inset !important;}');
      css.push('body:not([data-ds-dark-theme]) .LOmM4q_bubble{border:1px solid rgba(255,255,255,0.1) !important;box-shadow:0 1px 0 rgba(255,255,255,0.06) inset !important;}');
      css.push('body[data-ds-dark-theme] [data-queue-dock] .F07MqG_panel::before{background:' + rgba(darkTint, 0.42) + ' !important;-webkit-backdrop-filter:blur(18px) saturate(1.5) !important;backdrop-filter:blur(18px) saturate(1.5) !important;}');
      css.push('body:not([data-ds-dark-theme]) [data-queue-dock] .F07MqG_panel::before{background:rgba(255,255,255,0.5) !important;-webkit-backdrop-filter:blur(18px) saturate(1.45) !important;backdrop-filter:blur(18px) saturate(1.45) !important;}');
      css.push('[data-queue-dock] .F07MqG_panel{box-shadow:inset 0 1px 0 rgba(255,255,255,0.16) !important;}');
      css.push('[data-queue-dock] .F07MqG_panel::after{border-color:rgba(255,255,255,0.16) !important;}');
      css.push('body:not([data-ds-dark-theme]) .GRgSLq_card{background-color:rgba(255,255,255,0.55) !important;background-image:linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.12) 45%,rgba(255,255,255,0.3)) !important;-webkit-backdrop-filter:blur(26px) saturate(1.6);backdrop-filter:blur(26px) saturate(1.6);border:1px solid rgba(255,255,255,0.75) !important;box-shadow:inset 0 1px 0 rgba(255,255,255,0.9),0 18px 40px rgba(30,40,70,0.18) !important;}');

      css.push('html,body{overflow:hidden !important;}');
      css.push('[class*="_sidebarCol"]{border-right:1px solid rgba(255,255,255,0.05);}');
      css.push('.an3WzG_composerSeat{background-image:linear-gradient(180deg,rgba(5,8,12,0),' + rgba(tint, 0.5) + ') !important;}');
      css.push(PANEL_CSS);
      return css.join('\n');
    }
    var PANEL_CSS = ''
      + '#dts-root{position:fixed;right:16px;bottom:16px;z-index:2147483000;display:flex;flex-direction:column;align-items:flex-end;gap:8px;font-family:"HarmonyOS Sans SC",-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif;font-size:12px;line-height:1.4;color:#d7dbe0;}'
      + 'body:not([data-ds-dark-theme]) #dts-root{color:#2c323b;}'
      + '#dts-fab{width:36px;height:36px;border-radius:8px;border:1px solid rgba(255,255,255,.16);background:rgba(22,25,30,.94);color:#cfd4da;display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.28);transition:background .15s ease,border-color .15s ease;}'
      + '#dts-fab:hover{background:rgba(32,36,42,.96);border-color:rgba(255,255,255,.24);}'
      + 'body:not([data-ds-dark-theme]) #dts-fab{background:rgba(252,252,253,.96);color:#3b424c;border-color:rgba(20,24,30,.14);}'
      + '#dts-fab svg{width:18px;height:18px;display:block;}'
      + '#dts-panel{width:300px;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:#15181d;padding:12px;box-shadow:0 14px 36px rgba(0,0,0,.42);}'
      + 'body:not([data-ds-dark-theme]) #dts-panel{background:#fbfbfc;border-color:rgba(20,24,30,.12);box-shadow:0 14px 36px rgba(20,30,50,.16);}'
      + '#dts-panel[hidden]{display:none;}'
      + '.dts-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:2px;}'
      + '.dts-title{font-size:12.5px;font-weight:600;letter-spacing:.04em;}'
      + '.dts-close{border:0;background:transparent;color:inherit;opacity:.45;font-size:14px;line-height:1;padding:2px 4px;border-radius:4px;cursor:pointer;}'
      + '.dts-close:hover{opacity:.85;}'
      + '.dts-sec{margin-top:10px;}'
      + '.dts-label{display:flex;align-items:baseline;justify-content:space-between;gap:8px;font-size:10.5px;letter-spacing:.08em;color:rgba(255,255,255,.42);margin-bottom:6px;text-transform:uppercase;}'
      + 'body:not([data-ds-dark-theme]) .dts-label{color:rgba(20,24,30,.45);}'
      + '.dts-sub{font-size:11px;letter-spacing:0;text-transform:none;color:rgba(255,255,255,.62);}'
      + 'body:not([data-ds-dark-theme]) .dts-sub{color:rgba(20,24,30,.62);}'
      + '.dts-walls{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;}'
      + '.dts-wall{position:relative;height:34px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background-size:cover;background-position:center;padding:0;cursor:pointer;transition:border-color .15s ease;}'
      + '.dts-wall:hover{border-color:rgba(255,255,255,.32);}'
      + '.dts-wall.dts-on{border-color:var(--dts-accent,#5eead4);box-shadow:inset 0 0 0 1px var(--dts-accent,#5eead4);}'
      + '.dts-accents{display:flex;align-items:center;flex-wrap:wrap;gap:6px;}'
      + '.dts-sw{width:16px;height:16px;border-radius:50%;border:1px solid rgba(255,255,255,.18);padding:0;cursor:pointer;}'
      + '.dts-sw.dts-on{box-shadow:0 0 0 1.5px var(--dts-accent,#5eead4);}'
      + '.dts-follow{height:18px;border:1px solid rgba(255,255,255,.16);background:transparent;color:inherit;font-size:10px;padding:0 6px;border-radius:4px;cursor:pointer;}'
      + '.dts-follow.dts-on{border-color:var(--dts-accent,#5eead4);color:var(--dts-accent,#5eead4);}'
      + '.dts-hex{width:60px;height:18px;border:0;border-bottom:1px solid rgba(255,255,255,.2);background:transparent;color:inherit;font:11px/1 ui-monospace,Menlo,Consolas,monospace;letter-spacing:.04em;padding:0 2px;text-transform:uppercase;}'
      + '.dts-hex:focus{outline:none;border-bottom-color:var(--dts-accent,#5eead4);}'
      + '.dts-row{display:flex;align-items:center;gap:10px;margin:7px 0;}'
      + '.dts-row>span{width:74px;flex:none;font-size:11px;color:rgba(255,255,255,.58);}'
      + 'body:not([data-ds-dark-theme]) .dts-row>span{color:rgba(20,24,30,.6);}'
      + '.dts-row input[type=range]{flex:1;-webkit-appearance:none;appearance:none;height:2px;border-radius:2px;background:rgba(255,255,255,.18);outline:none;}'
      + 'body:not([data-ds-dark-theme]) .dts-row input[type=range]{background:rgba(20,24,30,.16);}'
      + '.dts-row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:11px;height:11px;border-radius:50%;background:#e8eaed;border:1px solid rgba(0,0,0,.25);cursor:pointer;}'
      + 'body:not([data-ds-dark-theme]) .dts-row input[type=range]::-webkit-slider-thumb{background:#3a4048;border-color:rgba(0,0,0,.2);}'
      + '.dts-val{width:40px;flex:none;text-align:right;font-size:11px;font-variant-numeric:tabular-nums;color:rgba(255,255,255,.6);}'
      + 'body:not([data-ds-dark-theme]) .dts-val{color:rgba(20,24,30,.62);}'
      + '.dts-foot{display:flex;gap:8px;margin-top:12px;}'
      + '.dts-btn{flex:1;height:28px;border-radius:6px;border:1px solid rgba(255,255,255,.16);background:transparent;color:inherit;font-size:11.5px;cursor:pointer;transition:background .15s ease;}'
      + '.dts-btn:hover{background:rgba(255,255,255,.06);}'
      + 'body:not([data-ds-dark-theme]) .dts-btn{border-color:rgba(20,24,30,.16);}'
      + 'body:not([data-ds-dark-theme]) .dts-btn:hover{background:rgba(20,24,30,.05);}';
    function load() {
      var s = {};
      for (var k in DEFAULTS) s[k] = DEFAULTS[k];
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (raw) { var o = JSON.parse(raw); for (var k2 in o) if (k2 in s) s[k2] = o[k2]; }
      } catch (e) {}
      return s;
    }
    function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {} }
    function h(tag, cls, text) {
      var el = document.createElement(tag);
      if (cls) el.className = cls;
      if (text !== undefined && text !== null) el.textContent = text;
      return el;
    }
    function buildUi(applyAll) {
      var root = h('div'); root.id = 'dts-root';
      var fab = h('button'); fab.id = 'dts-fab'; fab.type = 'button'; fab.title = t('title'); fab.setAttribute('aria-label', t('title'));
      fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><circle cx="12" cy="12" r="8.1"/><path d="M12 3.9a8.1 8.1 0 0 1 0 16.2z" fill="currentColor" stroke="none"/></svg>';
      var panel = h('div'); panel.id = 'dts-panel'; panel.hidden = true; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', t('title'));

      var head = h('div', 'dts-head');
      head.appendChild(h('span', 'dts-title', t('title')));
      var closeBtn = h('button', 'dts-close', '×'); closeBtn.type = 'button'; closeBtn.setAttribute('aria-label', t('close'));
      head.appendChild(closeBtn); panel.appendChild(head);

      var secWall = h('div', 'dts-sec');
      var wallLabel = h('div', 'dts-label');
      wallLabel.appendChild(document.createTextNode(t('wall')));
      var wallSub = h('span', 'dts-sub', ''); wallLabel.appendChild(wallSub);
      secWall.appendChild(wallLabel);
      var grid = h('div', 'dts-walls');
      var wallTiles = [];
      PRESETS.forEach(function (p) {
        var tile = h('button', 'dts-wall'); tile.type = 'button'; tile.title = p.nameZh + ' · ' + p.nameEn;
        tile.style.backgroundImage = p.background; tile.setAttribute('data-preset', p.id);
        tile.addEventListener('click', function () { state.custom = ''; state.preset = p.id; state.accent = ''; applyAll(); });
        wallTiles.push(tile); grid.appendChild(tile);
      });
      secWall.appendChild(grid); panel.appendChild(secWall);

      var secAcc = h('div', 'dts-sec');
      var accLabel = h('div', 'dts-label');
      accLabel.appendChild(document.createTextNode(t('accent')));
      var accSub = h('span', 'dts-sub', t('follow')); accLabel.appendChild(accSub);
      secAcc.appendChild(accLabel);
      var accRow = h('div', 'dts-accents');
      var followBtn = h('button', 'dts-follow', t('follow')); followBtn.type = 'button';
      followBtn.addEventListener('click', function () { state.accent = ''; applyAll(); });
      accRow.appendChild(followBtn);
      var swatches = [];
      ACCENTS.forEach(function (a) {
        var sw = h('button', 'dts-sw'); sw.type = 'button'; sw.title = a.nameZh;
        sw.style.background = a.color; sw.setAttribute('data-accent', a.color);
        sw.addEventListener('click', function () { state.accent = a.color; applyAll(); });
        swatches.push(sw); accRow.appendChild(sw);
      });
      var hex = h('input', 'dts-hex'); hex.type = 'text'; hex.maxLength = 7; hex.placeholder = '#RRGGBB';
      hex.setAttribute('spellcheck', 'false'); hex.setAttribute('aria-label', t('accent'));
      function commitHex() {
        var v = String(hex.value || '').trim();
        if (!v) { syncUi(); return; }
        if (v.charAt(0) !== '#') v = '#' + v;
        if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) { syncUi(); return; }
        if (v.length === 4) v = '#' + v[1] + v[1] + v[2] + v[2] + v[3] + v[3];
        state.accent = v.toLowerCase(); applyAll();
      }
      hex.addEventListener('keydown', function (e) { if (e.key === 'Enter') { commitHex(); hex.blur(); } });
      hex.addEventListener('blur', commitHex);
      accRow.appendChild(hex);
      secAcc.appendChild(accRow); panel.appendChild(secAcc);

      var secMat = h('div', 'dts-sec');
      var matLabel = h('div', 'dts-label'); matLabel.appendChild(document.createTextNode(t('material'))); secMat.appendChild(matLabel);
      function sliderRow(label, min, max, step, fmt) {
        var row = h('div', 'dts-row'); row.appendChild(h('span', null, label));
        var input = h('input'); input.type = 'range'; input.min = String(min); input.max = String(max); input.step = String(step);
        var val = h('span', 'dts-val');
        row.appendChild(input); row.appendChild(val); secMat.appendChild(row);
        return { input: input, val: val, fmt: fmt };
      }
      var sBright = sliderRow(t('brightness'), 0.4, 2, 0.02, function (v) { return Math.round(v * 100) + '%'; });
      var sDim = sliderRow(t('dim'), 0, 0.85, 0.02, function (v) { return Math.round(v * 100) + '%'; });
      var sBlur = sliderRow(t('blur'), 0, 40, 1, function (v) { return v + 'px'; });
      var sCanvas = sliderRow(t('canvas'), 0.12, 0.85, 0.01, function (v) { return Math.round(v * 100) + '%'; });
      panel.appendChild(secMat);

      var foot = h('div', 'dts-foot');
      var uploadBtn = h('button', 'dts-btn', t('upload')); uploadBtn.type = 'button';
      var resetBtn = h('button', 'dts-btn', t('reset')); resetBtn.type = 'button';
      foot.appendChild(uploadBtn); foot.appendChild(resetBtn); panel.appendChild(foot);
      var fileInput = h('input'); fileInput.type = 'file'; fileInput.accept = 'image/*'; fileInput.style.display = 'none'; panel.appendChild(fileInput);

      function openPanel() { panel.hidden = false; syncUi(); }
      function closePanel() { panel.hidden = true; }
      fab.addEventListener('click', function () { if (panel.hidden) openPanel(); else closePanel(); });
      closeBtn.addEventListener('click', closePanel);
      uploadBtn.addEventListener('click', function () { fileInput.click(); });
      resetBtn.addEventListener('click', function () { for (var k in DEFAULTS) state[k] = DEFAULTS[k]; applyAll(); });
      sBright.input.addEventListener('input', function () { state.brightness = parseFloat(sBright.input.value); applyAll(); });
      sDim.input.addEventListener('input', function () { state.dim = parseFloat(sDim.input.value); applyAll(); });
      sBlur.input.addEventListener('input', function () { state.blur = parseInt(sBlur.input.value, 10); applyAll(); });
      sCanvas.input.addEventListener('input', function () { state.canvas = parseFloat(sCanvas.input.value); applyAll(); });
      fileInput.addEventListener('change', function () {
        var file = fileInput.files && fileInput.files[0];
        if (!file) return;
        uploadBtn.textContent = t('reading');
        readImage(file, function (dataUrl) {
          uploadBtn.textContent = t('upload'); fileInput.value = '';
          if (!dataUrl) { alert(t('tooBig')); return; }
          state.custom = dataUrl; state.accent = ''; applyAll();
        });
      });
      function syncUi() {
        var p = presetById(state.preset);
        wallSub.textContent = state.custom ? t('customTile') : (p.nameZh + ' · ' + p.nameEn);
        wallTiles.forEach(function (tile) { tile.classList.toggle('dts-on', !state.custom && tile.getAttribute('data-preset') === state.preset); });
        accSub.textContent = state.accent ? state.accent.toUpperCase() : t('follow');
        followBtn.classList.toggle('dts-on', !state.accent);
        swatches.forEach(function (sw) { sw.classList.toggle('dts-on', !!state.accent && sw.getAttribute('data-accent') === state.accent); });
        if (document.activeElement !== hex) hex.value = accentOf(state).toUpperCase();
        sBright.input.value = String(state.brightness); sBright.val.textContent = sBright.fmt(parseFloat(sBright.input.value));
        sDim.input.value = String(dimOf(state)); sDim.val.textContent = sDim.fmt(parseFloat(sDim.input.value));
        sBlur.input.value = String(state.blur); sBlur.val.textContent = sBlur.fmt(parseInt(sBlur.input.value, 10));
        sCanvas.input.value = String(state.canvas); sCanvas.val.textContent = sCanvas.fmt(parseFloat(sCanvas.input.value));
      }
      root.appendChild(panel); root.appendChild(fab); document.body.appendChild(root);
      var onKey = function (e) { if (e.key === 'Escape' && !panel.hidden) closePanel(); };
      var onDown = function (e) { if (!panel.hidden && !root.contains(e.target)) closePanel(); };
      document.addEventListener('keydown', onKey, true);
      document.addEventListener('pointerdown', onDown, true);
      return {
        sync: syncUi, open: openPanel, close: closePanel,
        dispose: function () {
          document.removeEventListener('keydown', onKey, true);
          document.removeEventListener('pointerdown', onDown, true);
          root.remove();
        }
      };
    }
    function readImage(file, done) {
      var reader = new FileReader();
      reader.onload = function () {
        var img = new Image();
        img.onload = function () {
          var maxW = 2560, maxH = 1600;
          var w = img.width, hgt = img.height;
          var scale = Math.min(1, maxW / w, maxH / hgt);
          w = Math.round(w * scale); hgt = Math.round(hgt * scale);
          var canvas = document.createElement('canvas'); canvas.width = w; canvas.height = hgt;
          var ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0, w, hgt);
          var quality = 0.86; var url = canvas.toDataURL('image/jpeg', quality);
          while (url.length > 2200000 && quality > 0.5) { quality -= 0.1; url = canvas.toDataURL('image/jpeg', quality); }
          if (url.length > 2600000) { done(''); return; }
          done(url);
        };
        img.onerror = function () { done(''); };
        img.src = reader.result;
      };
      reader.onerror = function () { done(''); };
      reader.readAsDataURL(file);
    }

    return {
      name: 'theme-studio',
      inject: [],
      apply: function (ctx) {
        ctx.effect(function () {
          state = load();
          if (!PRESETS.some(function (p) { return p.id === state.preset; })) state.preset = DEFAULTS.preset;
          var styleEl = h('style'); styleEl.id = 'dsh-theme-studio'; document.head.appendChild(styleEl);
          function applyAll() {
            followPresetAppearance(state);
            styleEl.textContent = buildCss(state);
            save();
            ui.sync();
          }
          var ui = buildUi(applyAll);
          try { window.scrollTo(0, 0); } catch (e) {}
          applyAll();
          window.__dtsFoldOpen = false;
          window.__dtsFoldClick = function (e) {
            var now = Date.now();
            if (window.__dtsFoldAt && now - window.__dtsFoldAt < 300) return;
            window.__dtsFoldAt = now;
            var b = e.target && e.target.closest ? e.target.closest('.hE4tRW_root, .hKdVjq_summary, .dts-sum') : null;
            if (!b) return;
            e.preventDefault();
            e.stopPropagation();
            window.__dtsFoldOpen = !window.__dtsFoldOpen;
            document.body.classList.toggle('dts-all-folded', !window.__dtsFoldOpen);
            var subs = document.querySelectorAll('.hE4tRW_root.dts-sum');
            for (var si = 0; si < subs.length; si++) subs[si].setAttribute('data-dts-open', window.__dtsFoldOpen ? '1' : '0');
          };
          if (!window.__dtsFoldBound) {
            window.__dtsFoldBound = true;
            document.addEventListener('click', window.__dtsFoldClick, true);
          }
          var sumBound = false;
          function placeDock() {
            if (!sumBound) { document.addEventListener('click', onSumClick, true); sumBound = true; }
            var dock = document.querySelector('.GRgSLq_dock');
            if (dock) dock.style.setProperty('display', 'none', 'important');
          }
          var dockTimer = setInterval(placeDock, 150);
          function metricsData() {
            var dock = document.querySelector('.GRgSLq_dock');
            var parts = [];
            if (dock) {
              var items = dock.querySelectorAll('button');
              for (var ii = 0; ii < items.length; ii++) {
                var t = (items[ii].textContent || '').replace(/\s+/g, ' ').trim();
                if (t) parts.push(t);
              }
            }
            var all = parts.join(' ');
            var mTurn = all.match(/(\d+)\s*轮\s*(\d+)\s*步/);
            var mTok = all.match(/([\d.]+\s*[kK]?)\s*tok\/s/);
            var mTotal = all.match(/([\d.]+\s*[MmGgKk]?)\s*tok(?!\/)/);
            var mCache = all.match(/缓存命中\s*([\d.]+%)/);
            var mCtx = all.match(/(\d+)%\s*$/);
            return {
              turns: mTurn ? (mTurn[1] + ' 轮 · ' + mTurn[2] + ' 步') : '—',
              speed: mTok ? (mTok[1].replace(/\s+/g, '') + ' tok/s') : '—',
              total: mTotal ? (mTotal[1].replace(/\s+/g, '') + ' tok') : '—',
              cache: mCache ? mCache[1] : '—',
              ctx: mCtx ? (mCtx[1] + '%') : '—'
            };
          }
          function buildMetrics() {
            var rows = [
              ['轮次 / 步数', 'turns'], ['输出速度', 'speed'], ['累计用量', 'total'],
              ['缓存命中', 'cache'], ['上下文占用', 'ctx'],
              ['模型用时', 'model'], ['工具用时', 'tool'], ['首 token', 'ttft'], ['上下文窗口', 'ctxwin']
            ];
            var data = metricsData();
            var html = '<div class="dts-m-title">会话数据</div>';
            for (var i = 0; i < rows.length; i++) {
              var key = rows[i][1];
              var val = data[key] || '…';
              html += '<div class="dts-m-row" data-k="' + key + '"><span>' + rows[i][0] + '</span><b>' + val + '</b></div>';
            }
            return html;
          }
          var enrichBusy = false;
          function setRow(key, val) {
            if (!metricsEl || !val || val === '—') return;
            var row = metricsEl.querySelector('[data-k="' + key + '"] b');
            if (row) row.textContent = val;
          }
          function enrichMetrics() {
            if (enrichBusy) return;
            enrichBusy = true;
            document.body.classList.add('dts-enriching');
            var dock = document.querySelector('.GRgSLq_dock');
            var btns = dock ? dock.querySelectorAll('button') : [];
            if (btns.length) btns[0].click();
            setTimeout(function () {
              var stats = readPanel('[class*="xXe6ja_panel"]');
              var m1 = stats.match(/模型用时\s*([\d分秒]+)/);
              var m2 = stats.match(/工具调用用时\s*([\d分秒]+)/);
              var m3 = stats.match(/首 token 平均[^\d]*(\d+(?:\.\d+)?秒)/);
              setRow('model', m1 && m1[1]);
              setRow('tool', m2 && m2[1]);
              setRow('ttft', m3 && m3[1]);
              try { if (btns.length) btns[0].click(); } catch (err) {}
              var ctxBtn = document.querySelector('.A6Bq1a_trigger');
              if (ctxBtn) ctxBtn.click();
              setTimeout(function () {
                var ctx = readPanel('[class*="A6Bq1a_panel"]');
                var m4 = ctx.match(/([\d.]+\s*[KM]\s*\/\s*[\d.]+\s*[KM])/);
                setRow('ctxwin', m4 && m4[1].replace(/\s+/g, ' '));
                try { if (ctxBtn) ctxBtn.click(); } catch (err) {}
                setTimeout(function () {
                  try { document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); } catch (err) {}
                  document.body.classList.remove('dts-enriching');
                  enrichBusy = false;
                }, 80);
              }, 240);
            }, 220);
          }
          var metricsEl = null;
          function readPanel(sel) {
            var el = document.querySelector(sel);
            return el ? (el.textContent || '').replace(/\s+/g, ' ').trim() : '';
          }


          function closeMetrics() { if (metricsEl) { metricsEl.remove(); metricsEl = null; } }
          function toggleMetrics(btn) {
            if (metricsEl) { closeMetrics(); return; }
            metricsEl = document.createElement('div');
            metricsEl.id = 'dts-metrics';
            metricsEl.innerHTML = buildMetrics();
            document.body.appendChild(metricsEl);
            var r = btn.getBoundingClientRect();
            var w = 232;
            var left = Math.min(innerWidth - w - 12, Math.max(12, Math.round(r.left)));
            metricsEl.style.left = left + 'px';
            metricsEl.style.top = Math.round(r.bottom + 8) + 'px';
            enrichMetrics();
          }
          function onMoreClick(e) {
            var b = e.target && e.target.closest ? e.target.closest('button[aria-label="更多会话视图"]') : null;
            if (!b) return;
            e.preventDefault();
            e.stopPropagation();
            toggleMetrics(b);
          }
          document.addEventListener('click', onMoreClick, true);
          document.addEventListener('click', function (e) {
            if (!metricsEl) return;
            if (e.target.closest('#dts-metrics')) return;
            if (e.target.closest('button[aria-label="更多会话视图"]')) return;
            if (e.target.closest('.GRgSLq_dock')) return;
            if (e.target.closest('.A6Bq1a_trigger')) return;
            closeMetrics();
          }, true);

          placeDock();

          var sumTimer = 0;
          var foldOpen = false;
          document.body.classList.add('dts-all-folded');
          function decorateSummaries() {
            markMetaRows();
            var folded = document.querySelectorAll('.dts-folded-el');
            for (var f = 0; f < folded.length; f++) {
              if (folded[f].querySelector && folded[f].querySelector('.LOmM4q_userRow')) { folded[f].style.display = ''; folded[f].classList.remove('dts-folded-el'); }
            }
            var list = document.querySelectorAll('.hE4tRW_root');
            for (var i = 0; i < list.length; i++) {
              var b = list[i];
              var t = (b.textContent || '').trim();
              if (!t) continue;
              var m = t.match(/^(.*?)[，,]?\s*用时\s*(.+)$/);
              var left, right;
              if (m) { left = m[1].trim(); right = m[2].trim(); }
              else {
                left = t.replace(/\s*\d+\s*[分秒].*$/, '').trim() || t;
                var mm = t.match(/\d+\s*[分秒].*$/);
                right = mm ? mm[0].trim() : '';
              }
              if (b.getAttribute('data-dsh-left') !== left) b.setAttribute('data-dsh-left', left);
              if (b.getAttribute('data-dsh-right') !== right) b.setAttribute('data-dsh-right', right);
              if (!b.classList.contains('dts-sum')) b.classList.add('dts-sum');
              if (!b.hasAttribute('data-dts-open')) { b.setAttribute('data-dts-open', document.body.classList.contains('dts-all-folded') ? '0' : '1'); }
              var box = b.closest('[class*="BE0jCW_content"]');
              if (box) {
                var items = box.children, metas = [];
                for (var q = 0; q < items.length; q++) {
                  var it = items[q];
                  if (!it.className || String(it.className).indexOf('V4vHZW_flowItem') < 0) continue;
                  if (it.querySelector('.LOmM4q_userRow') || it.querySelector('.hE4tRW_root')) continue;
                var tx = (it.textContent || '').trim();
                var isMeta = /^(思考|代码|运行命令|输出|读取|工具|已完成)/.test(tx) || !!it.querySelector('[class*="VJlF5q_root"]');
                if (!isMeta) continue;
                  metas.push(it);
                  it.classList.add('dts-meta-row');
                }
                for (var q2 = 0; q2 < metas.length; q2++) {
                  metas[q2].classList.remove('dts-g-first', 'dts-g-last');
                  if (metas.length === 1) { metas[q2].classList.add('dts-g-first', 'dts-g-last'); }
                  else if (q2 === 0) metas[q2].classList.add('dts-g-first');
                  else if (q2 === metas.length - 1) metas[q2].classList.add('dts-g-last');
                }
              }
            }
          }
          function metaSiblings(btn) {
            var item = btn.closest('.V4vHZW_flowItem');
            if (!item || !item.nextElementSibling) return [];
            var out = [], sib = item.nextElementSibling;
            while (sib) {
              if (sib.classList && (sib.classList.contains('LOmM4q_userRow') || sib.classList.contains('hE4tRW_root'))) break;
              if (sib.querySelector && sib.querySelector('.hE4tRW_root')) break;
              if (sib.querySelector && sib.querySelector('.LOmM4q_userRow')) break;
              if (!(sib.querySelector && sib.querySelector('[class*="_markdown_"]'))) out.push(sib);
              sib = sib.nextElementSibling;
            }
            return out;
          }
          function foldTurn(btn, hide) {
            var list = metaSiblings(btn);
            for (var i = 0; i < list.length; i++) {
              list[i].style.display = hide ? 'none' : '';
              if (hide) list[i].classList.add('dts-folded-el'); else list[i].classList.remove('dts-folded-el');
            }
          }
          function onSumClick(e) {
            var b = e.target && e.target.closest ? e.target.closest('.hE4tRW_root, .hKdVjq_summary') : null;
            if (!b) return;
            e.preventDefault();
            e.stopPropagation();
            foldOpen = !foldOpen;
            document.body.classList.toggle('dts-all-folded', !foldOpen);
            var subs = document.querySelectorAll('.hE4tRW_root.dts-sum');
            for (var i = 0; i < subs.length; i++) subs[i].setAttribute('data-dts-open', foldOpen ? '1' : '0');
          }
          document.addEventListener('click', onSumClick, true);
          function markMetaRows() {
            var boxes = document.querySelectorAll('[class*="BE0jCW_content"]');
            for (var bi = 0; bi < boxes.length; bi++) {
              var box = boxes[bi];
              var kids = box.children, metas = [];
              for (var ki = 0; ki < kids.length; ki++) {
                var it = kids[ki];
                if (!it.className || String(it.className).indexOf('V4vHZW_flowItem') < 0) continue;
                if (it.querySelector('.LOmM4q_userRow') || it.querySelector('.hE4tRW_root')) continue;
                var tx = (it.textContent || '').trim();
                var isMeta = /^(思考|代码|运行命令|输出|读取|工具|已完成)/.test(tx) || !!it.querySelector('[class*="VJlF5q_root"]');
                if (!isMeta) continue;
                metas.push(it);
                it.classList.add('dts-meta-row');
              }
              for (var mi = 0; mi < metas.length; mi++) {
                metas[mi].classList.remove('dts-g-first', 'dts-g-last');
                if (metas.length === 1) metas[mi].classList.add('dts-g-first', 'dts-g-last');
                else if (mi === 0) metas[mi].classList.add('dts-g-first');
                else if (mi === metas.length - 1) metas[mi].classList.add('dts-g-last');
              }
            }
          }
          function scheduleSums() {
            if (sumTimer) return;
            sumTimer = setTimeout(function () { sumTimer = 0; decorateSummaries(); }, 400);
          }
          var sumObs = new MutationObserver(scheduleSums);
          sumObs.observe(document.body, { childList: true, subtree: true });
          scheduleSums();

          var api = {
            version: '0.1.0',
            getState: function () { return JSON.parse(JSON.stringify(state)); },
            setState: function (patch) { for (var k in patch) if (k in DEFAULTS) state[k] = patch[k]; applyAll(); },
            open: function () { ui.open(); },
            close: function () { ui.close(); }
          };
          window.__dts = api;
          return function () {
            ui.dispose();
            clearInterval(dockTimer);
            document.removeEventListener('click', onMoreClick, true);
            closeMetrics();
            try { sumObs.disconnect(); } catch (e) {}
            document.removeEventListener('click', onSumClick, true);
            document.removeEventListener('click', onSumClick, true);
            if (sumTimer) clearTimeout(sumTimer);
            styleEl.remove();
            if (window.__dts === api) delete window.__dts;
          };
        });
      }
    };
  }
});
