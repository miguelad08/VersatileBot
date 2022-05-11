import DiscordJS, { Intents, User, TextChannel } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config()


const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_INVITES
    ]
});

client.on('ready', () => {
    console.log('VersaBot ready!')
});


const welcomeChannelId = "973735446939058186"

client.on("guildMemberAdd", (member) => {
    const channel = (member.guild.channels.cache.get(welcomeChannelId) as TextChannel).send(`<@${member.id}> Welcome to the Official VersaGames Server! Please read the rules and verification process to get started!`)

})


client.login(process.env.TOKEN);