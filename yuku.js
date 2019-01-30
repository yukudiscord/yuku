Discord =require('discord.js');
const client =new Discord.Client();

p="юку!"
c="#ddfffa"
let aicon = message.guild.iconURL;
nick= message.member.name;

client.login(process.env.TOKEN);

client.on(
    'guildMemberAdd',
    (member) =>
        member
            .guild
            .channels
            .get('538734585937395761')
            .send(
                new Discord.RichEmbed()
                .setAuthor(`${nick}`,`${aicon}`)
                .setDescription(`${member} стал ${member.guild.memberCount} участником нашего сервера. Поприветствуем его!`)
                .setColor(c)
            )
)
client.on('message', message => {	
    const args = message.content.slice(p.length).trim().split(/ +/g);	
    const command = args.shift().toLowerCase();
if(message.content.startsWith(p + `фото`)){
message.delete()
let url = args.join(" ");
message.channel.send(new Discord.RichEmbed().setColor(c).setImage(url)).catch(err => message.channel.send(err))
}
if (message.content.startsWith(p + `евал`) && (message.author.id === "406343162651738112" || message.author.id === "341988428457705482")) {
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
    .setTitle("󠂪󠂪 󠂪󠂪󠂪🌏     Добро пожаловать!     🌏")
    .setDescription("О,я вижу ты любишь общатся?Тогда ты попал на нужный сервер,сервер **Y U K U 🌹**\nТы спросишь: Почему я тут должен остаться здесь?А мы скажем,потому-что тут Проводяд много ивентов,много общения на любые темы,много разных ботов\nсервер создан с душой.От людей для людей.")
    .setColor("#ddfffa");
    message.channel.send({embed});
}
if(message.content.startsWith(p + 'дп')) {
    const embed = new Discord.RichEmbed()
    .setDescription("**Проведем небольшую экспедицию по каналам:\n**\n<#474197413129748490> - новости и обновления нашего сервера.\n<#493053541104222230> - канал с партнёрами нашего сервера.\n<#529339985837555752> - события, происходящие на сервере.\n<#532668472837013504> - канал с выбором цветов.\n<#529326396871409693> - основной чат для общения.\n<#529328561203707905> - чат для управления ботами.\n<#529612103980417025> - 18+ контент.\n<#530025051244724244> - канал с локальными мемами.")
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
    .setTitle("Топ 10 донатеров!")
    .setDescription("**1.`_Neon_` - 36руб.\n2.`CaMuR(Kpюк)(КоМаР)` - 25руб.\n3.----\n4.----\n5.----\n6.----\n7.----\n8.----\n9.----\n10.----**")
    .setColor("#ddfffa");
    message.channel.send({embed});
}
if (message.content.startsWith(p + `hi`)) {
    message.delete();
    message.delete();
const urls = [
    "https://media.tenor.com/images/824a5c6fb0eff4de202d0cd4da1e6692/tenor.gif",//1
"https://steamusercontent-a.akamaihd.net/ugc/1617175662597177927/732757601CDBF2E52C41EF3349035A337BB119D7/",//2
"https://image.noelshack.com/fichiers/2018/17/3/1524685070-df0a9rx.gif",//3
"https://thumbs.gfycat.com/HatefulBlindFunnelweaverspider-size_restricted.gif",//4
"https://thumbs.gfycat.com/AdorableFormalAngwantibo-size_restricted.gif",//5
"https://pa1.narvii.com/6505/ad5549ff5f252cd35e393f88c55d474ab83fd46d_hq.gif",//6
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-9.gif",//7
"https://kingmarsblog.files.wordpress.com/2016/08/c5612569563abae86b811071616e4c07f5b3aa18_hq.gif?w=882",//8
"https://media.tenor.com/images/b96f06f81933f49b6d24577017eb4edd/tenor.gif",//9
"https://media.giphy.com/media/yyVph7ANKftIs/giphy.gif",//10
"https://media1.tenor.com/images/c2e21a9d8e17c1d335166dbcbe0bd1bf/tenor.gif?itemid=5459102",//11
"http://gifimage.net/wp-content/uploads/2017/10/hi-anime-gif-11.gif",//12
"https://data.whicdn.com/images/233897767/original.gif",//13
"http://i.imgbox.com/AYqk4UJk.gif",//14
"https://cdn105.picsart.com/203730462001202.gif?r1024x1024",//15
"https://thumbs.gfycat.com/HauntingNeighboringBarracuda-max-1mb.gif",//16
"http://pa1.narvii.com/5935/a557baffc06658c5b3c2932eb0bc496cb112d04c_00.gif",//17
"https://thumbs.gfycat.com/ArtisticVelvetyBarebirdbat-max-1mb.gif",
"https://media1.tenor.com/images/ae40603eddb6e4bb1ea56cc6de7d0f6e/tenor.gif?itemid=5142315",
"https://media.tenor.com/images/21f53e7521c2262f778cb71bd671522b/tenor.gif",
"https://media.tenor.com/images/73ce6a152fdf3fa2645f6153c646c9b7/tenor.gif",
"https://image.myanimelist.net/ui/z9mCAeIYypLkQQhpPKgdnaknwcoChRZHEz5uuGvWqjGX9hQXPKVaIgGJhk17VmmwNuay0ifX7duQKIoAzhryEWr3Rof3GZ_OaH5gLoVMkOU",
"https://pa1.narvii.com/6749/99edaa75487131db6d433c0c9442051f6314452c_hq.gif",
"http://gifimage.net/wp-content/uploads/2017/10/hello-anime-gif-7.gif",
"https://i.kym-cdn.com/photos/images/newsfeed/001/402/477/2ec.gif",
"https://media1.tenor.com/images/943a3f95936d66dc0c78fd445893431e/tenor.gif?itemid=9060940",
"https://image.myanimelist.net/ui/_D9BvY42y5B3XjqszccZEcQ2SNP8h5106Ssqd0yjIoOLHYVPNM4QRf3QlKgAuc3crFW1imwGXqnkBUWKef6Xz6ux7UeaqIiqrDQNmkpinsaSrt7QBBqeEk5M-IkPP4mA",
"https://pa1.narvii.com/6482/b4862bba0a3633b3bb3e6f4b6a72b8047f932c4a_hq.gif"
];
    let user = message.author;
    let user1 = message.mentions.users.first();
    const selfbite = new Discord.RichEmbed()
                    .setDescription(message.author+` сказал(а) всем привет`)
                    .setImage((urls[Math.floor(Math.random() * urls.length)]))
                    .setColor(c);
    if (!user1 || user1.id === user.id) return message.channel.send(selfbite).then(function(message) {
                    }).catch(function() {});
                let embed = new Discord.RichEmbed()
                    .setDescription(message.author+` сказал(а) привет `+message.mentions.users.first())
                    .setImage((urls[Math.floor(Math.random() * urls.length)]))
                    .setColor(c)
                    message.channel.send(embed
                    ).then(function(message) {
                    }).catch(function() {});
}
if (message.content.startsWith(p + `sad`)) {
    message.delete();
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
        const urls = [
"https://avatars.mds.yandex.net/get-pdb/805781/67906d0f-bda7-47a3-92d2-4ce1b4f728fd/orig",
"https://pa1.narvii.com/5821/76ddb33055d9574ccd11e051df968b4fbe5dcd18_hq.gif",
"https://i.pinimg.com/originals/94/2f/84/942f84de5d7471ab9751f2ba86e63b60.gif",
"https://steamusercontent-a.akamaihd.net/ugc/919176676388266575/8BA8145FF1760B8E60083656286E266B0DED1AA2/",
"https://pa1.narvii.com/5696/d3b317bb82fc086da90220a72cf6bfdc779e60e7_hq.gif",
"https://media.giphy.com/media/Gy7OHqaWnJBO8/giphy.gif",
"https://steamusercontent-a.akamaihd.net/ugc/2425628008261954271/007DB92C3AF029AFBBB07DFEEB1712F8B84DDDC7/?interpolation=lanczos-none&output-format=jpeg&output-quality=95&fit=inside%7C500%3A250&composite-to=*,*%7C500%3A250&background-color=black",
"http://33.media.tumblr.com/8c701e63bdc00912c845953d57ea6097/tumblr_n3enupTctr1s2fmtuo1_500.gif",
"http://68.media.tumblr.com/4851cb0953a11f1e7a1da93c81a5bd97/tumblr_nz64zkMqPi1qe1bdeo1_500.gif",
"http://68.media.tumblr.com/2c6646ae33f53db3c4b46e2784debe61/tumblr_og7o1nlSWo1vctqxpo1_500.gif",
"http://68.media.tumblr.com/2190867b663ede80c0eea49fa5f9ac2b/tumblr_og7o2dhSc71vctqxpo1_500.gif",
"https://steamusercontent-a.akamaihd.net/ugc/923672032480155593/F58137E290C57DAA9FB7B3ED1EAC69777C76DCCF/",
"http://gifimage.net/wp-content/uploads/2017/07/anime-sad-gif-9.gif",
"http://gifimage.net/wp-content/uploads/2017/07/anime-sad-gif-15.gif",
"https://media.giphy.com/media/FB5EOw0CaaQM0/giphy.gif",
"https://thumbs.gfycat.com/CommonDownrightAndeancondor-small.gif",
"https://i.pinimg.com/originals/19/42/07/194207dd9df329dcc66bf0bc07eefe8c.gif"
];
let embed = new Discord.RichEmbed()
      .setDescription(`${user} Ушел(ла) в печаль`)
      .setImage(urls[Math.floor(Math.random() * urls.length)])
      .setColor(c)
  msg.edit({embed}).then(function(message) {
      }).catch(function() {});
});
}
if (message.content.startsWith(p + `smoke`)) {
    message.delete();
    let user = message.author;
                  message.channel.send('Загрузка...').then(msg => {
         const urls = ['https://thumbs.gfycat.com/SphericalDependentHalibut-small.gif', 'https://78.media.tumblr.com/7746fca41c6782df47d7cd6925adba6f/tumblr_orcpabAWTV1sqhf08o1_500.gif', 'http://animeonline.su/uploads/posts/2015-06/1435137244_end.gif', 'https://media.giphy.com/media/hnRXZQiHWTtTO/giphy.gif', 'https://media.giphy.com/media/1k6S4iyfFyTRK/giphy.gif' ,'https://i.pinimg.com/originals/10/4b/9e/104b9ea0f2dea93d9374b092b82e1256.gif', 'https://s3-eu-west-1.amazonaws.com/files.surfory.com/uploads/2015/2/14/54dd05a41f395d0b468b465a/54df5bf31f395daa438b4c8e.gif', 'http://s8.favim.com/orig/150926/anime-guy-black-and-white-gif-smoking-Favim.com-3361618.gif', 'http://img0.safereactor.cc/pics/post/anime-gif-Anime-Subete-ga-F-ni-Naru-The-Perfect-Insider-2638766.gif', 'http://s017.radikal.ru/i424/1111/2b/ecae2f095abb.gif', 'https://78.media.tumblr.com/5bec6027d1c27194e6d3d5863c739d5f/tumblr_ozmfkvy8Pc1urnatuo1_500.gif', 'https://78.media.tumblr.com/6ac2528e3cde0894adb41fbc4e56def0/tumblr_owayv78WNu1vbfbhho1_500.gif'];
         let embed = new Discord.RichEmbed()
                    .setDescription(`${user} выкурил(а) сигарету`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setColor(c)
                msg.edit({embed}).then(function(message) {
                    }).catch(function() {});
    });
}
if (message.content.startsWith(p + `sleep`)) {
    message.delete();
    let user = message.author;
                  message.channel.send('Загрузка...').then(msg => {
                      const urls = ['https://media1.tenor.com/images/0d78943ec2d800847bfe98c0a5e03cd3/tenor.gif?itemid=11081269','https://thumbs.gfycat.com/DrearyDenseFlicker-size_restricted.gif','https://i.pinimg.com/originals/24/3e/2f/243e2f0cf4ad9ef9fb9def7594ec2c85.gif','https://thumbs.gfycat.com/SadWiltedHackee-small.gif','https://media.tenor.com/images/9bbd2789c5eaf20198205ca4976dda75/tenor.gif','https://data.whicdn.com/images/233322524/original.gif','https://gifer.com/i/8hQS.gif','http://gifimage.net/wp-content/uploads/2018/05/sleep-anime-gif-4.gif','https://media1.tenor.com/images/6f04cbe23fa862cd1e7da987c2b0308e/tenor.gif?itemid=9187874','https://i.pinimg.com/originals/92/8c/d7/928cd76c937e2f4c6d998651c2c88d58.gif','https://vignette.wikia.nocookie.net/kancolle/images/0/08/Umaru_sleeping.gif/revision/latest?cb=20161209020902','https://gifer.com/i/WDf.gif','https://i.imgur.com/Sb8Wls5.gif','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7Otqu-VpJAr92BOMTtSJkJLxMWBD_l6Yd41tCkxKzDxUWOCB9g','https://i.kym-cdn.com/photos/images/original/001/115/759/095.gif'];//12321312312
                      let embed = new Discord.RichEmbed()
                    .setDescription(`${user} пошел(шла) спать.`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setColor(c)
                msg.edit({embed}).then(function(message) {
   
                }).catch(function() {});
    });
}
if (message.content.startsWith(p + `suicide`)) {
    message.delete();
    let user = message.author;
    message.channel.send('Загрузка...').then(msg => {
     const urls = ['https://lh3.googleusercontent.com/-buUYgrq_wKc/VRO0gc7EHqI/AAAAAAAAAG0/7Ntm-6fFkk4/w500-h288/naomi%2Bsuicide%2Bgif.gif', 'https://uploads.disquscdn.com/images/2dbbc921cb13de3198a3b6ae0099e725bfb0c80129d70bacf47819fb765deef1.gif', 'http://37.media.tumblr.com/tumblr_m7ram5jIAA1qzbqw1o1_250.gif', 'https://i.pinimg.com/originals/79/2f/37/792f37131d123c568e7114b7b829e572.gif', 'http://thisisinfamous.com/wp-content/uploads/2014/12/tumblr_ngjphxwU011t3zq0no1_400.gif', 'httpsimage.net/wp-content/uploads/2017/07/anime-suicide-gif-15.gif', 'https://data.whicdn.com/images/290510883/original.gif', 'https://media.giphy.com/media/WsWJZcJoxmLUk/giphy.gif', 'https://media1.tenor.com/images/a5db1c26b710b8b834d8265bf97a6c79/tenor.gif?itemid=5091706', 'http://38.media.tumblr.com/c75ba943c38bad612d9e722ee3142bb3/tumblr_n418yewq601tubxydo1_500.gif', 'http://66.media.tumblr.com/e2ab4fd11151e5e8acc627254bb7594d/tumblr_mo1ef0QwUS1s0pcfao1_500.gif', 'https://i.gifer.com/3ZvS.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-8.gif', 'https://i.pinimg.com/originals/a5/f1/96/a5f196464ed42f493b95a600099e83b9.gif', 'https://cdn60.picsart.com/182542841000202.gif?r1024x1024', 'https://zippy.gfycat.com/EquatorialGleefulArabianhorse.gif', 'http://data.whicdn.com/images/107593752/large.gif', 'https://i.gifer.com/Rk5D.gif', 'https://pa1.narvii.com/6535/3eb238ede3ccbc364d487c60f9d8b9c9fcb4f515_hq.gif', 'http://gifimage.net/wp-content/uploads/2017/07/anime-suicide-gif-2.gif'];
                let embed = new Discord.RichEmbed()
                    .setDescription(`${user} совершил(а) суицид`)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setColor(c)
                    msg.edit({embed}).then(function(message) {
                    }).catch(function() {});
              });
              }
              if (message.content.startsWith(p + `angry`)) {
                message.delete();
                 let user = message.author;
                let user1 = message.mentions.users.first();
                const urls = ['https://data.whicdn.com/images/33545835/original.gif', 'http://i.imgur.com/P8oGR3u.gif', 'https://data.whicdn.com/images/283566570/original.gif', 'https://i.pinimg.com/originals/ac/e0/61/ace061704cb13602222916265471073e.gif', 'http://media.giphy.com/media/hFVI29iuk2wFy/giphy.gif', 'https://media.giphy.com/media/o7C2BKtp6gSd2/giphy.gif', 'https://i.pinimg.com/originals/83/32/8b/83328b8fd0238f801e61ca07faa6a000.gif', 'https://data.whicdn.com/images/104935742/original.gif', 'http://roxannemodafferi.net/RBlog/wp-content/uploads/2018/05/angry-anime-girl-gif.gif', 'https://i.pinimg.com/originals/13/e2/76/13e2761232d7671a9c2663aca5b9dbf2.gif']
                const selfbite = new Discord.RichEmbed()
                                .setDescription(`${user} злится`)
                                .setImage((urls[Math.floor(Math.random() * urls.length)]))
                                .setColor(c)
                if (!user1 || user1.id === user.id) return message.channel.send(selfbite).then(function(message) {
                                }).catch(function() {});
                            let embed = new Discord.RichEmbed()
                                .setDescription(`${user} злится на ${user1}`)
                                .setImage((urls[Math.floor(Math.random() * urls.length)]))
                                .setColor(c)
                                message.channel.send(embed
                                ).then(function(message) {
                                }).catch(function() {});
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
