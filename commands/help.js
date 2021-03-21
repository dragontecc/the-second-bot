        // at the top of your file
        const Discord = require('discord.js');

module.exports = {
    name: 'help',
    cooldown: 5,
    description: 'help',
    execute(message) {
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('The Second Bot Help Menu')
	.setAuthor('The Second Bot')
	.setDescription('🎧 Music Area :\n :gear: +play <music name> untuk memutarkan lagu\n :gear: +skip untuk meloncati lagu\n:gear: +pause untuk menghentikan lagu\n:gear: +queue untuk melihat list lagu\n:gear: +lyrics untuk melihat lirik musik\n  \n🎈 Other Stuff :\n:gear: +botinfo untuk melihat info bot lebih lanjut\n:gear: +ping untuk melihat ping bot\n:gear: +invite untuk mengundang bot ke server discordmu!')
	.setTimestamp()
	.setFooter('Indonesiaweb Team', 'https://www.indonesiaweb.net/wp-content/uploads/2020/10/idnweb-logo-black-removebg-preview.png');

message.channel.send(exampleEmbed);
    }
}