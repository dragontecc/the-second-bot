  // at the top of your file
  const Discord = require("discord.js");

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Click Here To Invite Me!')
    .setURL(`https://discord.com/oauth2/authorize?client_id=794911311992717324&permissions=70282305&scope=bot`)
    .setAuthor('The Second Bot')
    .setDescription('Klik tulisan diatas untuk mengundang aku ke servermu!')
    .setTimestamp()
    .setFooter('Indonesiaweb Team', 'https://www.indonesiaweb.net/wp-content/uploads/2020/10/idnweb-logo-black-removebg-preview.png');


module.exports = {
    name: "invite",
    description: "Send bot invite link",
    execute(message) {
      return message.member
        .send(
          exampleEmbed
        )
        .catch(console.error);
    }
  };