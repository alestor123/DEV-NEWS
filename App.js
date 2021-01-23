var axios = require('axios'),
news = [];
module.exports = async page => {
var page = page || 1,
data = await axios.get(`https://api.hnpwa.com/v0/news/${page}.json`)
data.data.map(newss => news.push({title:newss.title,url:newss.url,time:newss.time_ago,username:newss.user}))
return {
news:news,
no:news.length
}
}