import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/QuanQuanWeb/",
  title: "QuanQuan 的服务器网站 (QuanQuan's Servers)",
  description: "A server intro site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' },
      { text: '我的世界服务器', link: '/mcserver' },
      { text: '飞行模拟服务器', link: '/flightsimserver' },
      { text: '鸣谢', link: '/thanks' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '主页', link: '/' },
          { text: '关于', link: '/about' },
          { text: '我的世界服务器', link: '/mcserver' },
          { text: '飞行模拟服务器', link: '/flightsimserver' },
          { text: '鸣谢', link: '/credits' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leodenglovescode/' },
       {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M433.8 420.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.1 72.2-51.1 101.8 16.8 5.2 54.8 19.2 45.8 34.4-7.3 12.3-125.5 7.9-159.6 4-34.1 3.8-152.3 8.3-159.6-4-9-15.3 28.9-29.2 45.8-34.4-34.9-29.5-51.1-70.4-51.1-101.8 0 0-33.3 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.3-99.7 10.3-33 22-60.5 40.1-105.8C60.7 98.1 109 0 224 0c113.7 0 163.2 96.1 160.3 215 18.1 45.2 29.9 72.9 40.1 105.8 21.8 70.1 14.7 99.1 9.3 99.7z"/></svg>'
        },
        link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=kBIyicOYrrxSATuNrYvFrr74TDNl8GiQ&authKey=BFACCb2MngSmf472x6LirYmCnxPF36u1PEGsXsncx%2BF38YObBR78eVLzNsfTwChT&noverify=0&group_code=878365469',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'SimflightQQGroup'
      },
     {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M433.8 420.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.1 72.2-51.1 101.8 16.8 5.2 54.8 19.2 45.8 34.4-7.3 12.3-125.5 7.9-159.6 4-34.1 3.8-152.3 8.3-159.6-4-9-15.3 28.9-29.2 45.8-34.4-34.9-29.5-51.1-70.4-51.1-101.8 0 0-33.3 54.1-44.9 52.7-5.4-.7-12.4-29.6 9.3-99.7 10.3-33 22-60.5 40.1-105.8C60.7 98.1 109 0 224 0c113.7 0 163.2 96.1 160.3 215 18.1 45.2 29.9 72.9 40.1 105.8 21.8 70.1 14.7 99.1 9.3 99.7z"/></svg>'
        },
        link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=wm5eDxXMlDe3jbfFFAWsorX4-uDiNR8M&authKey=7c21btcn2xGKPNDSD1EeRLPCO3lEE%2BZfqiYmZ5RSxuBCbuip7YMsePqyCnyEAnNz&noverify=0&group_code=435624385',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'SimflightQQGroup'
      }
    ]
  }
})



