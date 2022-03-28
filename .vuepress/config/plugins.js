const plugins = [
    //最近一次更新
    ['@vuepress/last-updated', {
        transformer: (timestamp) => {
            const dayjs = require('dayjs')
            return dayjs(timestamp,).format('YYYY-MM-DD HH:mm')
        }
    }],
    //公告栏
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //     title: '公告',
    //     body: [
    //         {
    //             type: 'title',
    //             content: '欢迎加我的QQ/wx 🎉🎉🎉',
    //             style: 'text-aligin: center;',
    //         },
    //     ],
    // }],
    //彩带
    // ["ribbon-animation", {
    //     size: 90,   // 默认数据
    //     opacity: 0.3,  //  透明度
    //     zIndex: -1,   //  层级
    //     opt: {
    //         // 色带HSL饱和度
    //         colorSaturation: "80%",
    //         // 色带HSL亮度量
    //         colorBrightness: "60%",
    //         // 带状颜色不透明度
    //         colorAlpha: 0.65,
    //         // 在HSL颜色空间中循环显示颜色的速度有多快
    //         colorCycleSpeed: 6,
    //         // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
    //         verticalPosition: "center",
    //         // 到达屏幕另一侧的速度有多快
    //         horizontalSpeed: 200,
    //         // 在任何给定时间，屏幕上会保留多少条带
    //         ribbonCount: 2,
    //         // 添加笔划以及色带填充颜色
    //         strokeSize: 0,
    //         // 通过页面滚动上的因子垂直移动色带
    //         parallaxAmount: -0.5,
    //         // 随着时间的推移，为每个功能区添加动画效果
    //         animateSections: true
    //     },
    //     ribbonShow: false, //  点击彩带  true显示  false为不显示
    //     ribbonAnimationShow: true  // 滑动彩带
    // }],
]

module.exports = plugins;