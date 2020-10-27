const SlackBot = require('slackbots');
const bot = new SlackBot({
  token: process.env.SLACK_BOT_API_KEY,
  name: 'MomentBot',
});

const params = {
  icon_emoji: 'robot',
};
const customMessage = `You will have an interview at this hours`;

module.exports = { bot, params, customMessage };
