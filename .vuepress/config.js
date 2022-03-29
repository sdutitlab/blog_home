const plugins = require('./config/plugins');
const themeConfig = require('./config/theme');
module.exports = {
    theme: 'reco',
    title: 'sdutitlab|信息技术实验室',
    description: '信息技术实验室的博客平台',
    head: [
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        ['meta', {
            name: 'keywords',
            content: 'sdut,信息技术'
        },
        ],
        ['link',{rel:'icon',href: 'logo.png'}]
    ],
    themeConfig,
    plugins
};