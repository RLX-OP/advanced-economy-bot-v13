const express = require('express');

const app = express();
const port = 3000;
 
app.get('/', (req, res) => res.send('<html><head> <link href="https://fonts.googleapis.com/css?family=Roboto Condensed" rel="stylesheet"> <style>body{font-family: "Roboto Condensed"; font-size: 21px; color: white; background-color: #23272A; margin-left: 5%; margin-top: 2%;}a{color: #5865F2}a:hover{color: #818bff}h1{font-size: 48px;}</style></head><body> <h1>Hosting Active</h1> <p>This Bot is the Repository from <a href="https://github.com/rlx-op/advanced-economy-bot-v13" target="_blank">Economy Bot </a> <br/><br/> Check it out and make sure to <b>credit RLX /<a href="https://discord.gg/SN3mZPxjEW"> RLX Team</a></b> in the Bot, if you want to use this Code, Also credits to Tomato for the website! <br/><br/> <a href="https://discord.gg/SN3mZPxjEW"> <img src="https://discord.com/api/guilds/879223784547164160/widget.png?style=banner2"> </a><br/><br/><i>Make sure to add the repl.co URL to some sort of <a href="https://uptimerobot.com/">UPTIMER LINK SYSTEM</a></i></p></body></html>'));
 
app.listen(port, () => console.log(`24/7 Keepalive Server is online! Make sure to add the Repl.co URL to an Uptimer System, Websystem is listening at http://localhost:${port}`.bgGreen.white));
