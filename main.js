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

    if(message.content.startsWith(`${prefix}check`)){
        message.channel.send(`Enable is currently set to ${enable}`);
    }

    if(message.content.startsWith(`${prefix}shutdown`)){
        message.channel.send("Shuting down").then(message =>{
            process.exit(0);
        });
    }
        
    if(enable){
        message.delete();
        message.channel.send(message.content);
    }
});

process.on('exit', function(code) {
    return console.log(`Exiting with code ${code}`);
});
