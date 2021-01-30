const { StreamDispatcher } = require("discord.js");
const config = require("../config/config.json");

const messageDecrypter = (message) => {
  const { content } = message;

  if (!content.startsWith(config.SIGNE))return;

  const body = message.content.slice(prefix.length);
  const data = body.split(' ');
  const order = data.shift().toLowerCase();
  
  return;
};

module.exports = messageDecrypter;
