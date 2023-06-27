import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Web 面试指南",
  description: "Web 面试指南",
  head: [["link", { rel: "icon", href: "/images/logo.svg" }]],
  themeConfig: {
    logo: "/images/logo.png",
    nav: nav(),
    sidebar: {
      "/content/": sidebarGuide(),
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/jesusLove?fireweb" },
    ],
    footer: {
      message: "未经允许禁止转载",
      copyright: "Copyright © 2023 繁华&落尽",
    },
  },
});

function nav() {
  return [{ text: "指南", link: "/content/一、前言/0.目录" }];
}

function sidebarGuide() {
  return [
    {
      text: "一、前言",
      collapsed: false,
      items: [
        { text: "目录大纲", link: "/content/一、前言/0.目录" },
        { text: "导读", link: "/content/一、前言/1.导读" },
      ],
    },
  ];
}
