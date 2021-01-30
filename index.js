const Discord = require("discord.js");
const config = require("./config/config.json");
const decryptMessage = require("./src/messageDecrypter");

const client = new Discord.Client();

client.login(config.TOKEN_DISCORD_BOT);

client.on("message", (message) => {
  //console.log(message);
  if (message.author.bot) return;
  decryptMessage(message);
  return;
});
