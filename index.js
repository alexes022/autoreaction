const express = require('express');
const Discord = require("discord.js-selfbot-v13");
const { userAccount } = require("sphinx-run");

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!');
});

app.listen(3000, () => {
  console.log('Server started');
});

// قائمة الحسابات (قم بإضافة الحسابات هنا)
const accounts = [
  {
    token: 'TOKEN_1', // ضع التوكن الخاص بالحساب الأول
    channel: 'ID_CHANNEL_1', // رقم القناة الأولى
    user: 'USER_ID_1', // رقم المستخدم الأول
    customBotIds: ['BOT_ID_1', 'BOT_ID_2'] // أرقام بوتات الجيف أواي
  },
  {
    token: 'TOKEN_2', // ضع التوكن الخاص بالحساب الثاني
    channel: 'ID_CHANNEL_2', // رقم القناة الثانية
    user: 'USER_ID_2', // رقم المستخدم الثاني
    customBotIds: ['BOT_ID_3', 'BOT_ID_4'] // أرقام بوتات الجيف أواي الأخرى
  },
  // أضف المزيد من الحسابات بنفس الشكل
];

// تشغيل الحسابات
accounts.forEach(account => {
  const client = new Discord.Client({ intents: [131071] });

  new userAccount(client, Discord).autoReaction({
    channel: account.channel,
    user: account.user,
    customBotId: account.customBotIds,
  });

  client.login(account.token).then(() => {
    console.log(`Logged in as ${account.user}`);
  }).catch(err => {
    console.error(`Failed to log in for user ${account.user}:`, err);
  });
});
