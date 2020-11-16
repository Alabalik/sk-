const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Seviye Komutları')
.setTimestamp()
.addField('+seviye','Seviyenizi gösterir.')
.addField('+seviye resim','Seviye Kartınızın Resmini Değiştirir. (Linkin sonunda JPG&PNG olması gereklidir.)')
.addField('+seviye renk','Seviye Kartınızın Rengini Değiştirir')
.addField('+seviye ödül','Belirlenen Seviyeye Ödül Verir')
.setFooter('Seviye Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'seviye-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};