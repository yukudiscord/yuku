Discord =require('discord.js');
const client =new Discord.Client();

p="юку!"

client.login(process.env.TOKEN);

client.on('message', message => {
    const args = message.content.slice(p.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if (message.content.startsWith(p + `eval`) && (message.author.id === "406343162651738112" || message.author.id === "341988428457705482")) {
    const code = message.content.split(" ").slice(1).join(" ");
    try {
     let evaled = eval(code);
     if (!code) {
         return message.channel.send("А где код?");
     }
     if (typeof evaled !== 'string')
       evaled = require('util').inspect(evaled);
       const embed = new Discord.RichEmbed()
       .setTitle(`EVAL ?`)
       .setColor("0x4f351")
       .setDescription(`?? Input: \n \`\`\`${code}\`\`\` \n ?? Output: \n  \`\`\`${(evaled)}\`\`\``)
   
     message.channel.send({embed});
   } catch (err) {
     const embed = new Discord.RichEmbed()
     .setTitle(`EVAL ?`)

     .setColor("0xff0202")
     .setDescription(`?? Input: \n \`\`\`${code}\`\`\` \n ?? Output: \n  \`\`\`${(err)}\`\`\``)

     message.channel.send({embed});
   }
}
if(message.content.startsWith(p + `правила`)) {
    const embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/473062290040553472/534080646658654231/PicsArt_01-13-08.02.12.png")
    .setColor("#363940")
    message.channel.send({embed});
}
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/scenarium-vol-2-1/128/040_rules_book_do_not_pros_cons_handbook-512.png')
    .setTitle("Правила сервера Y U K U")
    .setDescription("На сервере запрещается:\n1.1 -> Оскорблять участников в любом виде\n1.2 -> Реклама в любом виде (в том числе и участникам в лс)\n1.3 -> Отправлять NSFW-контент (изображения, видео порнографического характера)\n1.4 -> Разглашение личных данных участников сервера\n1.5 -> Провоцировать людей на конфликт\n1.6 -> Любые разговоры про политику\n1.7 -> Спам,флуд,частый капс")
    .setFooter("Y U K U | RULES")
    .setColor("#363940");
    message.channel.send({embed});
}
if(message.content.startsWith(p + `правила`)) {
    const embed = new Discord.RichEmbed()
    .setImage("https://cdn.discordapp.com/attachments/473062290040553472/534080647388725269/PicsArt_01-13-08.02.53.png")
    .setColor("#363940")
    message.channel.send({embed});
}
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/scenarium-vol-2-1/128/040_rules_book_do_not_pros_cons_handbook-512.png')
    .setTitle("Правила сервера Y U K U")
    .setDescription("На сервере запрещается:\n2.1 -> Кричать в микрофон\n2.2 -> Перебивать говорящешо\n2.3 -> Включать музыку в каналах для общения\n2.4 -> Издавать противные звуки\n2.5 -> Выходить и заходить в голосовой канал, это мешает участникам нормально говорить")
    .setFooter("Y U K U | RULES")
    .setColor("");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'дп')) {
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn3.iconfinder.com/data/icons/abstract-1/512/Welcome-512.png')
    .setTitle("Добро пожаловать на **Y U K U**??")
    .addField("Цель сервера:","**•**Создать для вас уютную атмосферу\n**•**Лампово пообщатся\n**•**Расслабится")
    .setDescription("Здесь можно найти новых друзей создать тиму по играм и так же лампово пообщатся ?")
    .setFooter("Y U K U | WELCOME")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'реклама')) {
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn0.iconfinder.com/data/icons/contact-us-aqua-vol-2/500/Partnership-512.png')
    .setTitle("ПАРТНЁРСТВО")
    .setDescription("Отправляйте свои заявки на партнерство администрации сервера. Принимаем сервера от 80 участников!")
    .setFooter("Y U K U | PARTNERS")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'новости')) {
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/scenarium-vol-2-1/128/013_news_newspaper_global_articles_feed-512.png')
    .setTitle("НОВОСТИ СЕРВЕРА")
    .setDescription("Тут будут самые свежие новости сервера!")
    .setFooter("Y U K U | NEWS")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'ивенты')) {
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/scenarium-vol-4/128/030_group_team_meeting_crowd_people_employee-512.png')
    .setTitle("ИВЕНТЫ")
    .setDescription("Тут будут писать про ивенты сервера")
    .setFooter("Y U K U | IVENTS")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'розыгрыши')) {
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn0.iconfinder.com/data/icons/activities-1-2-flat/197/award-prize-1st-winer-512.png')
    .setTitle("РОЗЫГРЫШИ")
    .setDescription("Тут будут розыгрыши ролей и много чего")
    .setFooter("Y U K U | WINER")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'сигны')) {
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/scenarium-vol-2-1/128/047_girl_woman_phone_love_like_date_app-512.png')
    .setTitle("СИГНЫ")
    .setDescription("Тут можите сделать нам сигну :3\n\nЧтоб ваша сигна попала сюда вам надо её скинуть <@406343162651738112> в личные сообщения!")
    .setFooter("Y U K U | LOVE")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
///////////////ДОНАТ////////////////
if(message.content.startsWith(p + `донат`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn4.iconfinder.com/data/icons/budicon-finance/25/donation-512.png')
    .setTitle("ИНФОРМАЦИЯ О ДОНАТЕ")
    .setDescription("**Вы можете поддержать сервер своим донатом и получить разные вещи.**")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + `донат`)) {
    const embed = new Discord.RichEmbed()
    .setTitle("РОЛИ ДОНАТА")
    .setDescription("<@&529769499788967946> **- 1-?**\n<@&529760801381416973> **- 100-400руб**\n<@&529761707850203186> **- 500-900руб**\n<@&529762796569886720> - **1000-2000руб**")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + `донат`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn4.iconfinder.com/data/icons/payment-methods-8/87/qiwi-512.png')
    .setTitle("КАК ДОНАТИТЬ?")
    .setDescription("Оплата __**ТОЛЬКО**__ через **QIWI** кошелек: https://qiwi.me/yuku\n\nОставляйте свой ник и тэг в описании к оплате.Если вы задонатили, но вам  все таки  не выдали вещи,присылайте администраторам скриншот оплаты доната.")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + `донат`)) {
    const embed = new Discord.RichEmbed()
    .setTitle("МАГАЗИН ЛЕДЕНЦОВ")
    .setDescription("**199<:money:529727099226030081> - 10руб.\n\n599<:money:529727099226030081> - 50руб.\n\n1799<:money:529727099226030081> - 100руб.\n\n5898<:money:529727099226030081> - ~~500руб.~~ 390руб.\n\n15854<:money:529727099226030081> - ~~1000руб.~~ 700руб.**")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + `донат`)) {
    const embed = new Discord.RichEmbed()
    .setTitle("ЛИЧНЫЕ РОЛИ")
    .setDescription("**Личная роль на месяц - 100руб.\n\nЛичная роль на год - 200руб.\n\nЛичная роль навсегда - 350руб.\n\nСменить цвет/название - 500<:money:529727099226030081>**")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + `донат`)) {
    const embed = new Discord.RichEmbed()
    .setTitle("ЭЛИТНАЯ РОЛЬ")
    .setDescription("**<@&529351226203176971> на месяц - ~~100руб~~ 54 руб.\n\n<@&529351226203176971> на год - ~~200руб~~ 100 руб.\n\n В ЧЕМ ОСОБЕНОСТЬ?\n\n•5<:money:529727099226030081> каждый день!\n•Значёк в профиле/выделение\n•Секретные каналы.**")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
if(message.content.startsWith(p + `топы`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/new-year-s-hand-drawn-sticker/64/top_hat-512.png')
    .setTitle("ИНФОРМАЦИЯ О ТОПАХ ПО ДОНАТАМ")
    .setDescription("**1.`_Neon_` - 36руб.\n2.`CaMuR(Kpюк)(КоМаР)` - 25руб.\n3.----\n4.----\n5.----\n6.----\n7.----\n8.----\n9.----\n10.----**")
    .setColor("#ffe4e1");
    message.channel.send({embed});
}
////////////////////////////////////////////////////////////////////////////////
if (message.content.startsWith(p + `news`) && (message.author.id === "406343162651738112" || message.author.id === "341988428457705482")) {
    let say = message.content.slice((p + 'embed').length);
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("СВЕЖИЕ НОВОСТИ!")
    .setDescription(say)
    .setTimestamp();
    message.channel.send({embed});
}
});
client.on('ready', () => {
        console.log(`Готов к бою!`)
        client.user.setPresence({ game: { name: `за сервером YUKU`, type: 3 } }).catch();  
});
