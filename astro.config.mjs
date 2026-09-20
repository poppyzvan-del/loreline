import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// Loreline — 游戏本地化/叙事 Asset Pack 站
// 纯静态输出，部署到 Vercel（Vercel 自动识别 Astro 静态站，无需 adapter）。
// 站点 URL 在部署后填入（影响 OG 绝对链接）。
// 注：@astrojs/sitemap 暂时移除（当前版本与 Astro 4.16 存在 reduce 兼容问题）。
// 部署后如需 sitemap，可手动生成或换用 astro-robots/sitemap 替代方案。
export default defineConfig({
  site: 'https://loreline-kappa.vercel.app', // 部署后改为真实域名（绑自定义域名后再换）
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
