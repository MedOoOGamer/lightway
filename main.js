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

 
// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);
 
//     client.commands.set(command.name, command);
// }
 
 
// client.once('ready', () => {
//     console.log('Med is online !');
//     memberCounter(client);
// });


client.on('guildMemberAdd', guildMember =>{
     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Light Members');
 
     guildMember.roles.add(welcomeRole);/     guildMember.guild.channels.cache.get('802477687620894720').send(`Welcome <@${guildMember.user.id}> to Light Way server have fun and chill`)
 });

 
// client.on('message', message =>{
//     if(!message.content.startsWith(prefix) || message.author.bot) return;
 
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();
 
    
//     if(command === 'help'){
//         client.commands.get('help').execute(message, args, Discord);
//     } else if(command === 'kick'){
//         client.commands.get('kick').execute(message, args);
//     } else if(command === 'clear'){
//         client.commands.get('clear').execute(message, args);
//     } else if(command === 'ban'){
//         client.commands.get('ban').execute(message, args);
//     } else if(command === 'mute'){
//         client.commands.get('mute').execute(message, args);
//     } else if(command === 'unmute'){
//         client.commands.get('unmute').execute(message, args);
//     } else if(command === 'play'){
//         client.commands.get('play').execute(message, args);
//     } else if(command === 'leave'){
//         client.commands.get('leave').execute(message, args);
//     } 
// });




//client.login('ODAyMDcyMzM5ODQ3MzE1NDg3.YAp6Ew.csmu2Kof6NdZAZzTMSHxUn9NUGE');

client.login(process.env.token);


