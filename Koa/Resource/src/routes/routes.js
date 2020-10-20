const combineRoutes = require('koa-combine-routers')

const aRoutes = require('./aRouter')
const bRoutes = require('./bRouter')


// 拼接路由
module.exports = combineRoutes(
    aRoutes,
    bRoutes
)
