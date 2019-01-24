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
    .setThumbnail('https://cdn2.iconfinder.com/data/icons/scenarium-vol-2-1/128/040_rules_book_do_not_pros_cons_handbook-512.png')
    .setTitle("Правила сервера Y U K U")
    .setDescription("1.1. Запрещена реклама в любом ввиде, как на сервере, так и в личных сообщениях у участников нашего сервера.\nНаказание: перманентный бан.\n\n1.2. Запрещены оскорбления в любом ввиде.\nНаказание: мут на 1 час.\n\n1.3. Запрещено отправлять 18+ контент в каналах без отметки NSFW.\nНаказание: мут на 1 час\n\n1.4. Запрещен разглашать личные данные пользователя без его разрешения (место проживания/учебы, номер телефона и т.л.")
    .setFooter("Yuku | Rules")
    .setColor("#f7b9a8");
    message.channel.send({embed});
}
if(message.content.startsWith(p + `правила`)) {
    const embed = new Discord.RichEmbed()
    .setTitle("Правила сервера Y U K U")
    .setDescription("2.1. Запрещается выпрашивать роли у администраторов сервера.\nНаказание: мут на 1 час.\n\n2.2. Запрещено постить что-либо, призывающее к суициду.\nНаказание: перманентный бан\n\n2.3. Запрещены оскорбление по региональному, или религиональному признаку.\nНаказание: мут на 3 часа.\n\n2.4. Запрещены нечитающиеся ники (1qw2er9, djekbau, 19bhjj?)\nНаказание: кик.")
    .setFooter("Yuku | Rules")
    .setColor("#f7b9a8");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'правила')) {
    const embed = new Discord.RichEmbed()
    .setTitle("Правила сервера Y U K U")
    .setDescription("3.1. Запрещен массовый пинг.\nНаказание: мут 1 час.\n\n3.2. Запрещены рейды, и другие виды уничтожения серверов\nНаказание: перманентный бан\n\n3.3 Запрещены символы выводящие вас выше в списке участников\nНаказание: изменение ника")
    .setFooter("Yuku | Rules")
    .setColor("#f7b9a8");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'дп')) {
    const embed = new Discord.RichEmbed()
    .setImage("https://media.discordapp.net/attachments/473062290040553472/537262929657987082/-1.png?width=770&height=462")
    .setColor("#ddfffa")
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'дп')) {
    const embed = new Discord.RichEmbed()
    .setTitle("🌏     Добро пожаловать!     🌏")
    .setDescription("О,я вижу ты любишь общатся?Тогда ты попал на нужный сервер,сервер **| Y U K U | 🌹 |**\nТы спросишь: Почему я тут должен остаться здесь?А мы скажем,потому-что тут Проводяд много ивентов,много общения на любые темы,много разных ботов\nсервер создан с душой.От людей для людей.")
    .setColor("#ddfffa");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'дп')) {
    const embed = new Discord.RichEmbed()
    .setDescription("**Проведем небольшую экспедицию по каналам:**\n<#474197413129748490> - новости и обновления нашего сервера.\n<#493053541104222230> - канал с партнёрами нашего сервера.\n<#529339985837555752> - события, происходящие на сервере.\n<#532668472837013504> - канал с выбором цветов.\n<#529326396871409693> - основной чат для общения.\n<#529328561203707905> - чат для управления ботами.\n<#529612103980417025> - 18+ контент.\n<#530025051244724244> - канал с локальными мемами.")
    .setColor("#ddfffa");
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
