module.exports = {    
    name: 'help',
    description: "this is a command to help people with codes on the bot",
    execute(message, args, Discord){
        const helpembed = new Discord.MessageEmbed()
        .setColor('#F9F329')
        .setTitle('Help Page')
        .setDescription('This is an embed to help you with bot codes')
        .addFields(
            {name: 'Help', value: 'Show an embed with all bot commands'},
            {name: 'Clear {number}', value: 'Clears a certian number of messages in the same channels'},
            {name: 'Kick', value: 'Kick members'},
            {name: 'Ban', value: 'ban members'},
            {name: 'Mute {time}', value: 'Mute members'},
            {name: 'UnMute', value: 'Unmute members'}
            //{name: 'freerole', value: 'Gives you a free light way role'}
        )
        .setImage('https://www.icpnetwork.eu/wp-content/uploads/2018/01/Under-Construction.jpg')


        message.channel.send(helpembed);

        /////////message.channel.send('```Kick : checks if u can kick members \n \nfreerole : gives you a free role in the server \n \nhi : displays a welcome message \n \na7a : its only a joke command for testing```');
    }
}