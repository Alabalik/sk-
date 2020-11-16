const ayarlar = require('../ayarlar.json');
let beklemeSuresi = new Set();

module.exports = async message => {
  let client = message.client;
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    if (beklemeSuresi.has(message.author.id)) return message.reply('Bu komutu kullanabilmek için **3,5 saniye** beklemelisin!');
    beklemeSuresi.add(message.author.id);
    setTimeout(() => { beklemeSuresi.delete(message.author.id); }, 3500); // 2500 2,5 saniye eder, kendinize göre değiştirebilirsiniz.
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
    
  }

};