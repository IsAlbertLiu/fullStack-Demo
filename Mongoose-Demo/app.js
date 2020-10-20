const mongoose = require('mongoose')

// test 是用户名 
// 123456 是密码
// @ 是连接符
// 47.212.161:15000 是IP地址以及端口号
// testdb 是数据库名称
mongoose.connect('mongodb://localhost:27017/testdb', 
                 {useNewUrlParser: true ,useUnifiedTopology:true})

const User = mongoose.model('Users',{name: String, age : Number, email: String})

const imooc = new User({
	name: 'imooc-test',
  age: 30,
  email: 'albertliu@outlok.com'
})

imooc.save().then(()=>{console.log('save ok!');})