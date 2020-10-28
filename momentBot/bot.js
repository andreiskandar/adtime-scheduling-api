const SlackBot = require('slackbots');
const bot = new SlackBot({
  token: process.env.SLACK_BOT_API_KEY,
  name: 'MomentBot',
});

const params = {
  icon_emoji: 'robot',
};

// setInterval everyminute to run query
//milliseconds
setInterval(() => {
  // create query to check if there is any event happening within half hour
  //run query
  //if found start slackbot api then send message
}, 60000);
const appointment_time = '1pm';
//get username = users.slack_bot_id
const username = 'andre.m.iskandar';
const

const sendReminderToUser = () => {
  const message = `You have an interview at ${appointment_time}`;
  bot.postMessageToUser(username, `${message}`, params);
};

module.exports = { bot, sendReminderToUser };
