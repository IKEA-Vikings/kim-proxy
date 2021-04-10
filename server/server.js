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
// app.get(`/api/sizes/:id`, (req, res) => {
//   console.log('GET SIZES');
//   axios.get(`http://localhost:3002/api/sizes/${req.params.id}`)
//       .then((result) => {
//         res.send(result.data);
//       })
//       .catch((err) => console.error('GET PRODUCT SIZES FAILED: ', err));
// });

// need second routes else my service fails
app.get(`/api/product/:id`, (req, res) => {
  console.log('GET SIZES');
  axios.get(`http://ec2-3-86-58-21.compute-1.amazonaws.com:3003/api/product/${req.params.id}`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET PRODUCT ABOUT FAILED: ', err));
});

// PHUCCI
app.get(`/images/org/:id`, (req, res) => {
  console.log('GET IMAGES');
  axios.get(`http://ec2-54-67-28-46.us-west-1.compute.amazonaws.com:4004/images/org/${req.params.id}`)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => console.error('GET PRODUCT IMAGES FAILED: ', err));
});