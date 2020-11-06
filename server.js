// load .env data into process.env
require('dotenv').config();

// const ENV = process.env.ENV || 'development';
// process.env.TZ = 'PDT';
const express = require('express');
const bodyParser = require('body-parser');
// const sass       = require("node-sass-middleware");
const routes = require('./routes');
const morgan = require('morgan');

const { sendReminderToEmp } = require('./twilio/bot');
const { bot, sendReminderToUser } = require('./momentBot/bot');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan('dev'));

for (const [mountPoint, router] of Object.entries(routes)) {
  app.use(mountPoint, router);
}

// bot.on('start', sendReminderToUser);

// sendReminderToEmp();

const port = process.env.port || 3001;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
