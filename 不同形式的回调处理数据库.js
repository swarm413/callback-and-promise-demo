//callback版mongoose操纵数据库，这里仅仅举登陆流程的一个小例子，先看用户在数据库里面是否存在，如果没有存在则新建一个用户
User.findOne({username:'aaa'},function(user){
  if(user){
    console.log('已存在')
  }else{
    new User({
      username:'aaa',
      password:'123',
      email:'123@126.com'
    }).save(function(){})
  }
})
//这是Promise版的，当然前提是mongoose支持这个个API
User.findOne({
  username:'aaa'
})
.then(function(user){
  if(user){
    console.log('用户已存在')
  }else{
    return new User({
      username:'aaa',
      password:'123',
      email:'123@126.com'
    })
  }
})
.then(function(ret){
  
})
