module.exports = {    
    name: 'kick',
    description: "Kicks Members",
    execute(client, message, args, Discord){
        const member = message.mentions.users.first();
        if(message.member.permissions.has('KICK_MEMBERS')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id)
                memberTarger.kick();
                message.channel.send('User has been kicked');
            }else{
                message.channel.send('No user found')
            }
        }else{

            message.channel.send('You dont have permission to kick members')

        }
    }
}