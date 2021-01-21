const express = require('express');
const path = require('path');

const app = express();
// http请求的IP

// 设置静态文件路径
app.use(express.static(path.join('./')));

// const exampleProxy = proxy(options);
// app.use('/', exampleProxy); //  ‘/’ 表示对所有请求代理

app.listen(8011, function() {
  console.log('server is running at port 8010');
});
