const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  const kategoriliyardım = new Discord.RichEmbed()
  .setTitle("MYTH-V")
  .setColor("BLUE") 
  .setDescription("Myth-V")
  .addField("```Yetkili Komutları```", `${prefix}yetkili : Yetkili komutlarını gösterir.`)
  .addField("```Müzik Komutları```", `${prefix}müzik : Müzik komutlarını gösterir.`)
  .addField("```Seviye Sistemi```", `${prefix}seviye-sistemi : Seviye sistemi yardım menüsü..`)
  .addField("```Prefix Değiştirme```", `${prefix}prefix-ayarla : Botun değiştirir..`)
  .setImage(`https://cdn.discordapp.com/attachments/758724044983107585/762153776312221706/banner.png`)
  .setThumbnail("https://i.hizliresim.com/sj7Yul.jpg")
  .addField("Author: Alabros")
  .setTimestamp()
  .setFooter(message.author.tag + " Tarafından istendi", message.author.avatarURL);
  message.channel.send(kategoriliyardım);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'Yardım',
  usage: 'yardım <kategori>'
};