const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const app = express();
const proxyPort = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../', 'client')));

app.listen(proxyPort, () => {
  console.log(`proxy is visible at http://localhost:${proxyPort}`)
});
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'client/index.html'));
});

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'client/index.html'));
});

// NEED FOR VIRGINIA'S SERVICE
app.get(`/api/sizes/:id`, (req, res) => {
  console.log('GET SIZES');
  axios.get(`http://localhost:3002/api/sizes/${req.params.id}`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET PRODUCT SIZES FAILED: ', err));
});
