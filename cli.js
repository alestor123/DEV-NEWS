#!/usr/bin/env node
var news = require('./App'),
chalk = require('chalk');
(async () => {
var data = await news();
data.news.map((item,index) => console.log(`${data.news.length-index} : ${chalk.bold.yellow(item.title)} \n ${chalk.cyanBright(item.url)}`))
})();