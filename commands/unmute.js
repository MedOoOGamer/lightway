module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(client, message, args, Discord){
        const target = message.mentions.users.first(); 
        if(message.member.roles.cache.has('745872213479129108') || message.member.roles.cache.has('745871961623625728')){
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Light Members');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
                let memberTarget= message.guild.members.cache.get(target.id);
 
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            } else{
                message.channel.send('Cant find that member!');
            }
        } else{
            message.channel.send('You dont have the right role to unmute members')
        }
    }
}