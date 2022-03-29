const path = require('path'); // 路径模块
const utilsRoot = path.join(__dirname, '..', 'utils');
const docsRoot = path.join(__dirname, '..', '..');
const readFile = require(utilsRoot + '/readFile');

const java = readFile(docsRoot + '/notes/java')
const algorithm = readFile(docsRoot + '/notes/algorithm')
const network = readFile(docsRoot + '/notes/network')
const os = readFile(docsRoot + '/notes/os')
const web = readFile(docsRoot + '/notes/web')
const projects = readFile(docsRoot + '/projects')

const explain = [{
    title: '操作说明',
    collapsible: false,
    children: readFile(docsRoot + '/explain')
}]

const us = [{
    title: '关于我们',
    collapsible: false,
    children: readFile(docsRoot + '/us')
}]

const themeConfig = {
    type: 'HomePage',

    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    sidebarDepth: 3,
    //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    subSidebar: 'auto',

    //代码主题
    codeTheme: 'tomorrow',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    // author: '半径圆',
    // 项目开始时间
    startYear: '2022',
    // 简体中文
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },

    // noFoundPageByTencent: false,

    repo: 'https://github.com/sdutitlab',
    repoLabel: 'Github',

    smoothScroll: true,
    markdown: {
        lineNumbers: true
    },
    blogConfig: {
        tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: '标签'      // 默认文案 “标签”
        },
    },
    nav: [
        {
            text: "首页",
            link: "/",
            icon: "reco-home"
        },
        {
            text: '学习笔记',
            icon: 'reco-category',
            items: [
                {
                    text: "Java",
                    link: "/notes/java/1.about"
                },
                {
                    text: "web开发",
                    link: "/notes/web/1.about"
                },
                {
                    text: "网络",
                    link: "/notes/network/1.about"
                },
                {
                    text: "数据结构与算法",
                    link: "/notes/algorithm/1.about"
                },
                {
                    text: "操作系统",
                    link: "/notes/os/1.about"
                },
            ]
        }, {
            text: '比赛项目',
            link: '/projects/1.about',
            icon: 'reco-coding'
        },
        {
            text: '操作说明',
            link: '/explain/1.about',
            icon: 'reco-suggestion'
        },
        {
            text: '关于我们',
            link: '/us/1.about',
            icon: 'reco-eye'
        },

    ],

    sidebar: {
        '/notes/java/': java,
        '/notes/web/': web,
        '/notes/network/': network,
        '/notes/algorithm/': algorithm,
        '/notes/os/': os,
        '/projects/': projects,
        '/explain/': explain,
        '/us/': us
    },
};

module.exports = themeConfig;
