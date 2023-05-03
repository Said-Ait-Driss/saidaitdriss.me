// const Discord = require('discord.js');
const {Client, Intents, GatewayIntentBits} = require('discord.js');

// const webhook = new Discord.WebhookClient({
//     id: '1098201720342986752',
//     token: 'uWEdWL-28ptCs8Tjlw-i-9r4WA31l0msDSTSVgEhM2jDBLSQvLrn4oimNwedAnog1N94',
// });

// export class DiscordClient {
//     constructor(id, token) {
//         this.id = id;
//         this.token = token;
//         this.webhook = null;
//     }

//     init() {
//         this.webhook = new Discord.WebhookClient({
//             id: this.id,
//             token: this.token,
//         });
//     }

//     sendMessage(msg) {
//         this.webhook.send(msg);
//     }
// }

const token =
    'uWEdWL-28ptCs8Tjlw-i-9r4WA31l0msDSTSVgEhM2jDBLSQvLrn4oimNwedAnog1N94'; //Token that you saved in step 5 of this tutorial
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});
client.on('ready', () => {
    console.log('The AI bot is online'); //message when bot is online
});

client.on('message', message => {
    if (message.content.substring(0, 1) === '!') {
        message.channel.send('Hello from AI bot');
    }
});

client.login(token);
