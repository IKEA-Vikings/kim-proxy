const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const proxyPort = 3000;

// const whiteList = ['http://localhost:3000', 'http://localhost:3001','http://localhost:3002', 'http://localhost:3003', 'http://localhost:3004'];
// const corsOptions = {
//   origin: '*',
//   optionSuccessStatus: 200
  // function(origin, callback) {
  //   if (whiteList.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // }
// }
// app.use(cors({corsOptions}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, '../', 'public')));

app.listen(proxyPort, () => {
  console.log(`proxy is visible at http://localhost:${proxyPort}`)
});
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'client/index.html'));
});

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'client/index.html'));
});
