import { Log, db,mongoose } from './lib/schema'
import request from './lib/request'
import assert from 'assert'



function insert() {
 
  var log = new Log({
      url : 'https://m.kwai.com/user/665147664',
      title: 'Kwai', 
      text: '12312312312312312323',                               
      time : new Date().getTime()
  })

  log.save(function (err, res) {

      if (err) {
          console.log("Error:" + err);
      }
      else {
          console.log("Res:" + res);
      }

  })
}
async function getHtml(){
  const $dom = await request({
    url:'https://m.kwai.com/user/665147664'
  })
  console.log($dom.text())
  mongoose.connection.close()
}
getHtml()