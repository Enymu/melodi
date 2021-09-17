const Discord = require('discord.js');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.once('ready', () => {

    client.user.setPresence({ activity: { name: "music | Prefix: .", type:"LISTENING" }, status: 'online'})

});

client.login('ODg4MjA3NTc3NjUyMDA2OTgz.YUPVxA.Gg2o4TngH_cuzuEIG5c3AoEN7jk');