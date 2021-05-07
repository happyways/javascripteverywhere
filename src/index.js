// index.js
// This is the main entry point of our application
const express = require('express');
const app = express();
//port를 지정하지 않았으면 4000을 port로 사용
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Hello World!!'));

app.listen(port, () =>
    console.log('Listening on port 4000!')
);
