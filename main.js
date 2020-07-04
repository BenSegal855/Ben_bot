const Discord = require('discord.js');
const {token, prefix, ownerID} = require('./config.json');
const client = new Discord.Client();
var enable = false;

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on("message", message => {
    if(message.author.id != ownerID) return;
    
    if(message.content.startsWith(`${prefix}enable`)){
        enable = !enable;
        message.channel.send(`Enable updated to ${enable}`);
        return;
    }
        
    if(enable){
        message.delete();
        message.channel.send(message.content);
    }
});