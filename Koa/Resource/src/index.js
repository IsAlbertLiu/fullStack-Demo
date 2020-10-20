const koa = require('koa')
const helmet = require('koa-helmet')
const path = require('path')
const statics = require('koa-static')



const app = new koa()

const router = require('./routes/routes')

// 导入之后，作为路由直接使用就好
app.use(helmet())
app.use(statics(__dirname,'../public'))
app.use(router())

app.listen(3000,()=>{
  console.log('success')
})
