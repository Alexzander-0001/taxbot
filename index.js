const http = require("http");
const express = require("express");
const app = express();
const Discord = require('discord.js'); 
const fetch = require('node-fetch');
const client = new Discord.Client(); 
const prefix = '-'

app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://marble-swift-leopard.glitch.me/`);
}, 280000);

function isDecimal(num) {
  return (num ^ 0) !== num;
}
client.on('ready',  () => {


console.log(`Ready ${client.user.username}`)

client.user.setGame("TXProbot| -tax")
});

function getUserFromMention(mention) {
	if (!mention) return;
//console.log(mention)

var number = mention

number = Math.trunc(number);
var x = (number / 19);

x += 1;

x += number;

var result = Math.trunc(x);
//console.log(result)

return result;
}

function getUserFromMention2(mention) {
	if (!mention) return;
//console.log(mention)



var number = mention

number = Math.trunc(number);
var x = (number / 19);

x += 1;

x += number;

var result = Math.trunc(x);
//console.log(result)

return result;
}
//console.log(Math.trunc(11.124124124));

client.on("message", async message => {

//if (message.author.id != "606068578902343692") return;
  if (message.content.startsWith(prefix + "tax")) {
    var args = message.content.split(' ').slice(1);
    let number = args.slice(0).join(" ");
    let number22 = args.slice(0).join(" ");
    if(!number)return message.channel.send("> **Please input a price**");
    if(isNaN(number)){
      return message.channel.send(`>>> :moneybag: **Final Price Without Mediator : ERROR**\n \n:moneybag: **Final Price With Mediator : ERROR**`);
    }else{

      if (!isDecimal(number)){

        return message.channel.send(`>>> :moneybag: **Final Price Without Mediator : ERROR**\n \n:moneybag: **Final Price With Mediator : ERROR**`);

      }
     

    }
    let useridenty2 = getUserFromMention(number);

    let useridenty3 = getUserFromMention2(useridenty2);
    message.channel.send(`>>> :moneybag: **Final Price Without Mediator : ${useridenty2}**\n \n:moneybag: **Final Price With Mediator : ${useridenty3}**`);

}
})



client.login("NzQ3NDcxMjc3NjUyMTgxMTA3.X0PW3w.sFUvNWZHi3yXocgPjKlqIt6nQrg")
