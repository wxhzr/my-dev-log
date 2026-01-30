import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: './dist',
  title: "My project Log",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // 👇 添加这一行
      { text: '我的开发日志', link: '/devlog/day01' }
    ],

    sidebar: [
      {
        text: '开发日志',
        items: [
          // link 对应的是你的文件名路径，不需要加 .md 后缀
          { text: 'Day 1: 项目启动', link: '/devlog/day01' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
