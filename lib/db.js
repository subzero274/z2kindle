import mongoose from 'mongoose'
const url = 'mongodb://localhost:27017/z2kindle'
// const dbName = 'z2kindle';
// const db = mongoose.createConnection('mongodb://localhost:27017/z2kindle');
const db =  mongoose.connect(url)//；连接数据库;
/**
  * 连接成功
  */
 mongoose.connection.on('connected', function () {    
  console.log('Mongoose connection open to ' + url);  
})    

/**
* 连接异常
*/
mongoose.connection.on('error',function (err) {    
  console.log('Mongoose connection error: ' + err);  
})    

/**
* 连接断开
*/
mongoose.connection.on('disconnected', function () {    
  console.log('Mongoose connection disconnected');  
})
export default mongoose