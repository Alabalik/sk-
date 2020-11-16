const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
const embed = new Discord.RichEmbed()
.setColor(`#CE2D0B`)
.setTimestamp()
.addField(`\n<a:yildiz:742058533411094680>                             Üye Durumları                             <a:yildiz:742058533411094680>\n`, `\n**:green_square:   ${message.guild.members.filter(o => o.presence.status === 'online').size} **Çevrimiçi\n**:yellow_square:  ${message.guild.members.filter(i => i.presence.status === 'idle').size} **Boşta\n**:red_square:  ${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Rahatsız Etmeyin\n**:black_large_square:  ${message.guild.members.filter(off => off.presence.status === 'offline').size}** Çevrimdışı/Görünmez`, true)
.setFooter(message.author.tag + " Tarafından istendi", message.author.avatarURL);
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum","üyeler","durumlar","durum"],
  permLevel: 0
};

module.exports.help = {
  name: 'üyedurum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};