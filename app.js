const express = require('express');
const app = express();

// 设置端口号
const port = 6543;

// 创建一个 GET 路由
app.get('/', (req, res) => {
    res.send('PTStudio.com!');
});


// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});