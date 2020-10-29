const SlackBot = require('slackbots');
const { getEventsForReminder } = require('../controllers/events');

const bot = new SlackBot({
  token: process.env.SLACK_BOT_API_KEY,
  name: 'MomentBot',
});

const params = {
  icon_emoji: 'robot',
};

function processDataToPost(apiData) {
  return apiData.map((data, idx) => {
    const { name, slack_username, event_name, event_date } = data;
    const datetime = String(event_date).split(' ');
    const time = datetime[4].split(':');
    const date = `${datetime[0]}, ${datetime[1]} ${datetime[2]} ${datetime[3]}`;
    const appointment_time = `${time[0]}:${time[1]}`;
    const message = `${idx} - ${name}, you have an ${event_name} at ${appointment_time}`;
    // bot.postMessageToUser('slack_username', `${message}`, params);
    return bot.postMessageToUser('andre.m.iskandar', `${message}`, params).then(() => true);
  });
}

const minute = 7 / 60;

const sendReminderToUser = () => {
  setInterval(() => {
    getEventsForReminder()
      .then((data) => {
        data && processDataToPost(data);
      })
      .catch((e) => console.log('error', e));
  }, minute * 60000);
};

module.exports = { bot, sendReminderToUser };
