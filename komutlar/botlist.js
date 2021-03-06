const Discord = require ("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const venom = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  »  Botlist Sistemi  **")

.setDescription(`
*** Botlist Komutları ***
${ayarlar.prefix}botekle
${ayarlar.prefix}botlist-yetkili-rol-sıfırla
${ayarlar.prefix}botlist-yetkili-rol-ayarla
${ayarlar.prefix}başvuru-yapılacak-kanal-sıfırla
${ayarlar.prefix}başvuru-yapılacak-kanal-ayarla
${ayarlar.prefix}başvuru-log-kanal-sıfırla
${ayarlar.prefix}başvuru-log-kanal-ayarla
${ayarlar.prefix}başvuru-gidecek-kanal-sıfırla
${ayarlar.prefix}başvuru-gidecek-kanal-ayarla
** Yetkili ***
${ayarlar.prefix}botreddet
${ayarlar.prefix}botonayla

`)
 

return message.channel.send(venom)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'botlist', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'botlist'
};