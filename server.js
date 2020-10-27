// load .env data into process.env
require('dotenv').config();

const ENV = process.env.ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');
// const sass       = require("node-sass-middleware");
const routes = require('./routes');
const morgan = require('morgan');
const { bot, params, customMessage } = require('./momentBot/bot');
const schedule = require('node-schedule');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan('dev'));

for (const [mountPoint, router] of Object.entries(routes)) {
  app.use(mountPoint, router);
}

bot.on('start', () => {
  schedule.scheduleJob('* * * * *', () => {
    // bot.postMessageToUser('david.m.ramalho', `${customMessage}`, params);
    // bot.postMessageToUser('thai.hl.do', `${customMessage}`, params);
    bot.postMessageToUser('andre.m.iskandar', `${customMessage}`, params);
  });
});

const port = process.env.port || 3001;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
