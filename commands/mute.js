const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
       
       if(message.member.roles.cache.has('745872213479129108') || message.member.roles.cache.has('745871961623625728')){
            if (target) {
 
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Light Members');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                let memberTarget = message.guild.members.cache.get(target.id);
 
                if (!args[1]) {
                    memberTarget.roles.remove(mainRole.id);
                    memberTarget.roles.add(muteRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                    return
                }
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
 
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('Cant find that member!');
            }
       } else{
           message.channel.send('You dont have the right role to mute members')
       }
    }
}