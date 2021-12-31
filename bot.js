require('dotenv').config();
require("./handlers/keepAlive")();
const config = require('./botconfig/config.json');
const ee = require('./botconfig/embed.json');
const {
    Client,
    Collection,
    Intents,
    MessageActionRow,
    MessageButton,
    MessageEmbed,
    MessageSelectMenu,  
} = require("discord.js");
const colors = require("colors");
const Enmap = require("enmap");
const libsodium = require("libsodium-wrappers");
const voice = require("@discordjs/voice");

const client = new Client({
    fetchAllMembers: false,
    // restTimeOffset: 0,
    shards: 'auto',
    allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: false,
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
        // Intents.FLAGS.GUILD_BANS,
        // Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        // Intents.FLAGS.GUILD_INTEGRATIONS,
        // Intents.FLAGS.GUILD_WEBHOOKS,
        // Intents.FLAGS.GUILD_INVITES,
        // Intents.FLAGS.GUILD_VOICE_STATES,
        // Intents.FLAGS.GUILD_PRESENCES,
        // Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        // Intents.FLAGS.GUILD_MESSAGE_TYPING,
        // Intents.FLAGS.DIRECT_MESSAGES,
        // Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        // Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    presence: {
        activities: [{
            name: `Giveaway Bot | dsc.gg/milanio.dev`,
            type: "PLAYING",
        }],
        status: "online"
    }
});

client.slashCommands = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.allEmojis = require("./botconfig/emojis.json");
client.owners = ["850303341435027466"];

client.setMaxListeners(0);
require('events').defaultMaxListeners = 0;

["extraEvents", "antiCrash", "eventHandler", "slashCommandHandler"].forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

require("./handlers/enmapDB")(client);
require("./handlers/giveawayEvents")(client);

client.login(config.env.TOKEN || process.env.TOKEN);

/**********************************************************
 * @INFO
 * Bot Coded by Zedro#2742 | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for Milanio Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Please Mention Us Milanio Development, When Using This Code!
 * @INFO
 *********************************************************/
