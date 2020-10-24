// load .env data into process.env
require('dotenv').config();

const ENV = process.env.ENV || 'development';
const express = require('express');
const bodyParser = require('body-parser');
// const sass       = require("node-sass-middleware");
const routes = require('./routes');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(morgan('dev'));

for (const [mountPoint, router] of Object.entries(routes)) {
  app.use(mountPoint, router);
}

const port = process.env.port || 3001;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
