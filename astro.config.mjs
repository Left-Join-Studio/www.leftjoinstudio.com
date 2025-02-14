// import { astroRemark } from '@astrojs/markdown-remark';
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // markdown: {
  //   render: [astroRemark, {
  //     remarkPlugins: [],
  //     rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
  //       behavior: 'wrap'
  //     }]],
  //     shikiConfig: {
  //       theme: 'poimandres',
  //       langs: [],
  //       wrap: false
  //     }
  //   }]
  // },
  site: 'https://www.leftjoinstudio.com/',
  integrations: [sitemap(), tailwind()]
});
