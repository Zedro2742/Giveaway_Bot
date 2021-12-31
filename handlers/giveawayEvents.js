const {
    GiveawaysManager
} = require('discord-giveaways');

module.exports = async (client) => {
    const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {
        async getAllGiveaways() {
            return client.giveaways.fetchEverything().array();
        }

        async saveGiveaway(messageId, giveawayData) {
            client.giveaways.set(messageId, giveawayData);
            return true;
        }

        async editGiveaway(messageId, giveawayData) {
            client.giveaways.set(messageId, giveawayData);
            return true;
        }

        async deleteGiveaway(messageId) {
            client.giveaways.delete(messageId);
            return true;
        }
    };

    const manager = new GiveawayManagerWithOwnDatabase(client, {
        default: {
            botsCanWin: false,
            embedColor: '#FFD700',
            embedColorEnd: '#FF0000',
            reaction: `${client.allEmojis.giveaway.react}`
        }
    });
    client.giveawaysManager = manager;
}

/**
 * @INFO
 * Bot Coded by Zedro#2742 | https://discord.gg/8fYUFxMtAq
 * @INFO
 * Work for Milanio Development | https://discord.gg/8fYUFxMtAq
 * @INFO
 */