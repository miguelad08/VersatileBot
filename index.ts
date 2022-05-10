import DiscordJS, { Intents, User } from 'discord.js';
import dotenv from 'dotenv';



dotenv.config()


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_INVITES
    ]
});

client.on('ready', () => {
    console.log('VersaBot ready!')
});

client.on('message', (message) => {

    const user = User

    if (message.content == '!hello') {
        console.log(user)
    }

});



client.login(process.env.TOKEN);