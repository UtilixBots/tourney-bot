const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: '🏓Check my ping!',
    run: async (client, interaction) => {
      let pembed = new EmbedBuilder()
		  .setTitle("Pong!")
      .setColor('#2F3136')
      .setThumbnail('https://i.imgur.com/Cbs7ljR.png')
		  .addFields({name: '**Latency**', value: `\`\`\`ini\n[ ${Date.now() - interaction.createdTimestamp}ms ]\n\`\`\``, inline: true},
			     {name: '**API Latency**', value: `\`\`\`ini\n[ ${Math.round(client.ws.ping)}ms ]\n\`\`\``, inline: true})
		  .setTimestamp()
      .setFooter({
        text: `©️ Reedroux`, 
        iconURL: ('https://i.imgur.com/Cbs7ljR.png')
    })
        interaction.reply({
          embeds: [pembed]
        });
    },
};



// ©️ Copyright Reedroux  LLC 2023 All Rights Reserved.
// Credits: @TheRealJethru, @oelin
// License: MIT


