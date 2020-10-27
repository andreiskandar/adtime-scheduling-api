const SlackBot = require('slackbots');
const schedule = require('node-schedule');
const bot = new SlackBot({
  token: process.env.SLACK_BOT_API_KEY,
  name: 'MomentBot',
});

const params = {
  icon_emoji: 'Bear',
};

module.exports = { bot, params };
