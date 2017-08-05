const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('pssu', 'PSSU');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzI0OTQyMDc1MTAxNTc3MjE3.DGXQdQ.CBFr_-u1nUTNeMhteN99PyDUovA');