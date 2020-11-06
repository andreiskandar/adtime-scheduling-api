const path = require('path');

const ENV = process.env.NODE_ENV || 'development';
const PATH = path.resolve(__dirname, '/.env.' + ENV);

require('dotenv').config({ path: PATH });

module.exports = ENV;

postgres://cfaockycjtdody:f2db415b6c38ed92391d2212de8e84c50ba73c27c1e427133fd9f6c871527954@ec2-3-220-98-137.compute-1.amazonaws.com:5432/d4adg694bs1peo