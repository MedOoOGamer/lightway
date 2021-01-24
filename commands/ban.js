module.exports = {    
    name: 'ban',
    description: "Bans Members",
    execute(client, message, args, Discord){
        const member = message.mentions.users.first();
        if(message.member.permissions.has('BAN_MEMBERS')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id)
                memberTarger.ban();
                message.channel.send('User has been Banned');
            }else{
                message.channel.send('No user found')
            }
        } else{

            message.channel.send('You dont have permission to ban members')

              }
    }
}