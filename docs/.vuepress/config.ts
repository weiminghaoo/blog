import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: '笑联文档',
  description: 'Just playing around',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        // 右上导航航条 docs/.vuepress/README.md
        text: '概述',
        link: '/',
      },
      {
        text: 'Vue 学习笔记',
        children: [
          { text: '笔记', link: '/guide/vue/test01.md' }, // 可不写后缀 .md
          { text: '其它链接', link: 'https://www.baidu.com/' }, // 外部链接
        ],
      },
      {
        text: 'Typescript 学习笔记',
        children: [
          { text: '笔记', link: '/guide/ts/' }, // 以 ‘/’结束，默认读取 README.md
          { text: '其它链接', link: 'https://www.baidu.com/' }, // 外部链接
        ],
      },
      {
        text: '参考文档',
        children: [
          { text: 'mpaas', link: 'https://help.aliyun.com/product/49548.html' },
          {
            text: '原生小程序',
            children: [
              { text: '支付宝', link: 'https://opendocs.alipay.com/mini/development' },
              { text: '微信', link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/' },
            ],
          },
          {
            text: 'uniapp',
            children: [
              { text: '官方文档', link: 'https://uniapp.dcloud.io/README' },
              { text: 'uview', link: 'https://v1.uviewui.com/components/intro.html' },
              { text: 'mescroll-uni', link: 'http://www.mescroll.com/uni.html' },
            ],
          },
        ],
      },
    ],
  },
})
