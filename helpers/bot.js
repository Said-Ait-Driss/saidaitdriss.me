import { Client, GatewayIntentBits } from 'discord.js';
import { configDotenv } from 'dotenv';

configDotenv()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// When the client is ready, run this code (once)
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


// Log in to Discord with your app's token
client.login(process.env.DISCORD_APP_TOKEN);

// Function to send a message to a specific channel
async function sendMessageToChannel( message, channelId = null) {
    if(!channelId) channelId =  process.env.GENERAL_CHANNEL_ID;
    const channel = await client.channels.fetch(channelId);
    if (channel) {
        channel.send(message)
            .then(() => console.log(`Message sent to ${channel.name}`))
            .catch(console.error);
    } else {
        console.log('Channel not found');
    }
}

export default sendMessageToChannel