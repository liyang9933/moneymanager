const express = require('express');
const apiRouter = require('./src/routes/index');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');

mongoose.connect('mongodb://127.0.0.1:27017/moneymanager')

mongoose.connection.once('open', () => {
  console.log('Connection is established successfully ...')
})

mongoose.connection.on('error', () => {
  console.log('Connecting error ...')
})

mongoose.connection.on('close', () => {
  console.log('Connecting closed ...')
})
app.use(helmet());
app.use(express.json());
app.use('/api', apiRouter);

const PORT = 3009;

app.listen(PORT, () => {
  console.log("The server is running on port 3009 ...");
})
