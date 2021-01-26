const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
//const prefix = 'm ';
const fs = require('fs');
const memberCounter = require('./counters/member-counter');
 
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})



client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Light Members');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('802477687620894720').send(`Welcome <@${guildMember.user.id}> to Light Way server have fun and chill`)
});




client.login('ODAyMDcyMzM5ODQ3MzE1NDg3.YAp6Ew.ptzfn_KFVCt8m4ANszWN9ceDK8w');

//client.login(process.env.token);


