//bot
const Discord  = require('discord.js');
const token = 'OTIyODYxMDUxMDA2MDM4MTI3.YcHnVA.XVt_th5J_F0Qwzw2vHVyi7807TA';
const bot = new Discord.Client();
//prefix
const prefix = 'gg ';
//bot online event
bot.on('ready', () => {

    console.log("bot is online(press ^C to restart or close)");
    bot.user.setActivity("darky bot | gg help")
    bot.user.setStatus("online")
})
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ")
    if (args[0] === "help") {
        let help = new Discord.MessageEmbed()
        .setTitle("help")
        .addField("server info:", "gg info")

        message.channel.send(help)
    }
    if (args[0] === "info") {
        let info = new Discord.MessageEmbed()
        .setTitle("info")
        .addField("Invite:", "https://discord.gg/VAkfdGDd")
        .addField("server stats:", "All members: 40")
        .addField("server Owner:", "darky")
        .addField("bot stats:", "supported by: nodejs v16.13.1 LTS\nprogrammed with: discord JS v12.5.3\ncreated by: PC_baz")

        message.channel.send(info)
    }
})

//bot login verify
bot.login(token)