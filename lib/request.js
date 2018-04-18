import request from 'request-promise'
import cheerio from 'cheerio'

const defalutConfig = {
  url: 'http://www.baidu.com',
  transform: function (body) {
      return cheerio.load(body);
  }
};
export default async function (option){
  const mergeOption = {...defalutConfig, ...option}
  return await request(mergeOption)
}