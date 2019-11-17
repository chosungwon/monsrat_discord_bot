const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {

    if(message.author.bot) return;

    let a = message.content.split('=');
        console.log(a[0]) 

    async function dam(){
        if (message.content.indexOf('=담배빵') != -1) {
        

        await message.channel.send(a[0] + '넌 안되겠다');
        await message.channel.send({ files: ['monsrat_img/nun.png'] })
        message.channel.send("치------------------익", { files: ['monsrat_img/zzz.jpg'] })
    }

    }
    
    if (message.content.indexOf('=명령어') != -1) {
        message.reply('유저를 태그한뒤 앞에 =을 붙이세요 ex)@홍길동 =담배빵');
        message.channel.send({ files: ['monsrat_img/111.jpg'] })
        return
    }
        
        dam();

    if (message.content.indexOf('=기모링') != -1) {
        message.channel.send(a[0] + '이~잉 기모링~');
        message.channel.send({ files: ['monsrat_img/eee.jpg'] })
    }
    if (message.content.indexOf('=개잘해') != -1) {
        message.channel.send(a[0] + '뭘 좀 아시네ㅋ');
        message.channel.send({ files: ['monsrat_img/good.jpg'] })
    }
    if (message.content.indexOf('=충성') != -1) {
        message.channel.send(a[0] + '충성!');
        message.channel.send({ files: ['monsrat_img/xxx.jpg'] })
    }
    if (message.content.indexOf('=버스') != -1) {
        message.channel.send(a[0] + '야이 개새꺄 조용히해');
        message.channel.send({ files: ['monsrat_img/ccc.jpg'] })
    }
    if (message.content.indexOf('=다1빙') != -1) {
        message.channel.send(a[0] + '으아!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        message.channel.send({ files: ['monsrat_img/333.jpg'] })
    }
    if (message.content.indexOf('=뻐큐') != -1) {
        message.channel.send(a[0] + 'ㅗ');
        message.channel.send({ files: ['monsrat_img/555.jpg'] })
    }
});

