const plugins = [
    //最近一次更新
    ['@vuepress/last-updated', {
        transformer: (timestamp) => {
            const dayjs = require('dayjs')
            return dayjs(timestamp,).format('YYYY-MM-DD HH:mm')
        }
    }],
]

module.exports = plugins;