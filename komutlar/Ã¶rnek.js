const discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const { Database } = require("wio.db") // -> Modüller \\
const db = new Database("Genel")
const moment = require("moment")

exports.run = async(client, message, args) => {
// buraya kodlar yazılıcak \\
};

exports.conf = {
  aliases: [], // -> yedek kullanımlar \\
};

exports.help = {
  name: "örnek", // -> Ana komut kullanımı \\
};
