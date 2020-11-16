const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Müzik Komutları`, client.user.avatarURL) 
      .setDescription('MYTH-V')
.setThumbnail(client.user.avatarURL)
      .addField('**:musical_note: Müzik**', '`çal`, `durdur`, `ses`, `kuyruk`, `geç`')
      .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'müzik',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};