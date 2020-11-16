const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(':bar_chart: İstatistik;')
      .addField(':headphones: Müzik Çalınan Sunucu Sayısı;', client.voiceConnections.size)
    .addField(':construction_worker: Çalışma Süresi: ', `${duration}`)
    .addField(':busts_in_silhouette: Kullanıcılar:', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField(':tv: Kanallar:', client.channels.size)
    .addField(':clipboard: Sunucular:', client.guilds.size)
    .addField(':desktop: Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField(':book: Kütüphanesi;', `Discord.js`)
    .addField(`<a:discord:742063855705784320> Discord.js sürümü:`, Discord.version)
    .addField(':book: Bot Sürümü ;', `0.4.5`)
    .setFooter('MYTH-V Bot', client.user.avatarURL)
    .setThumbnail("https://i.hizliresim.com/sj7Yul.jpg")
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', "bi", 'bot-bilgi', 'i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'duyuru [duyuru]'
};