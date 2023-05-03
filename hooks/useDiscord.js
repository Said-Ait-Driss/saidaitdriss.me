import {useState, useEffect} from 'react';
const Discord = require('discord.js');

const useDiscordNotification = (webhookId, webhookToken) => {
    const webhook = new Discord.WebhookClient({
        id: webhookId,
        token: webhookToken,
    });
    const [message, setMessage] = useState('');
    useEffect(() => {
        if (message) {
            webhook.send(message);
        }
    }, [message]);

    const notify = msg => {
        setMessage(msg);
    };

    return [notify];
};

export default useDiscordNotification;
