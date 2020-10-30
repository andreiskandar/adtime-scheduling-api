const SlackBot = require('slackbots');
const { getEventsForReminder } = require('../controllers/events');

const bot = new SlackBot({
  token: process.env.SLACK_BOT_API_KEY,
  name: 'MomentBot',
});

const params = {
  icon_emoji: 'robot',
};

const sendReminderToUser = () => {
  setInterval(() => {
    getEventsForReminder()
      .then((data) => {
        if (data) {
          console.log('data:', data);
          const { name, slack_username, event_name, event_date } = data;
          const datetime = String(event_date).split(' ');
          const time = datetime[4].split(':');
          const date = `${datetime[0]}, ${datetime[1]} ${datetime[2]} ${datetime[3]}`;
          const appointment_time = `${time[0]}:${time[1]}`;

          const message = `${name}, you have an ${event_name} at ${appointment_time}`;
          bot.postMessageToUser('andre.m.iskandar', `${message}`, params);
        }
      })
      .catch((e) => console.log('error', e));
  }, 100000);
};

module.exports = { bot, sendReminderToUser };
