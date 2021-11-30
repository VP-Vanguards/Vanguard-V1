// Bring in modules
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({ intents: allIntents });
const botToken = require("./botToken").token;
//Prefix
const prefix = "V!";

// Variables
const Autoresponders = [
    "**vanguard**: responds with \"Vanguard is the best!\" \n", 
    "**professional**: responds with \"Professional Professionalism.\" \n"
]

// Help Embed
const helpEmbed = new Discord.MessageEmbed();
helpEmbed.setColor('PURPLE');
helpEmbed.setTitle("Vanguard Commands")
helpEmbed.setAuthor("Vanguard V1★", "https://i.imgur.com/axpVccz.png")
helpEmbed.setDescription("Need help with Vanguard V1★? This embed has got you covered. \n ㅤ")
helpEmbed.setFields(
    {name: "Autoresponders:", value: Autoresponders[0] + Autoresponders[1], inline: false}
)

// On Ready event
client.on("ready", () => {
    // Initiation stuff
    console.log("Vanguard is ready");
    client.user.setPresence({activities: [{name: "v!help", type: "WATCHING"}]});
});

client.on("messageCreate", msg => {
    var raw_msg = msg.content.toUpperCase();
    if (msg.author.bot) {
        return;
    }
    else{
        // Info command
        if (raw_msg.startsWith(prefix + "INFO"))
        {       
            msg.reply("Hello, " + msg.author.username + "." + " Vanguard is a professional discord bot made professionally by a professional team of professional professionals through maximum and utmost professionalism");
        };

        // Vanguard
        if(raw_msg.includes("VANGUARD"))
        {
            msg.reply("Vanguard is the best!");
        };

        //Professional
        if(raw_msg.includes("PROFESSIONAL"))
        {
            msg.reply("Professional Professionalism.");
        };

        // Help cmd
        if (raw_msg.startsWith(prefix + "HELP"))
        {
            msg.reply({embeds: [helpEmbed]});
        };
    };
});

client.login(botToken);