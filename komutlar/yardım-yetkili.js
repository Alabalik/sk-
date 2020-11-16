const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Yetkili Komutları`, client.user.avatarURL) 
      .setDescription('')
.setThumbnail(client.user.avatarURL)
      .addField('**:briefcase: Genel**','`gecicises`, `kick`, `oylama`, `reboot`, `ban`, `banlist`,`çekiliş`,`uyarı`, `sabitle`, `botkontrol`, `yavaş-mod`')
      .addField('**:tools: Gerekli Komutlar**', '`otorol-sistemi`, `sayaç-sistemi`, `kayıt-sistemi`, `seviye-sistemi`, `sunucu-sistemi`')
      .addField('**:gear: Sunucu Komutları**', '`sa-as`,`küfür`,`ses-kanal-aç`, `kanal-açıklama`, `rol-liste`, `temizle`, `yaz`, `mesajat`, `güvenlik`, `hgbbkanalayarla`, `reklam-engelleme`')
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
    name: 'yetkili',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};