const Discord = require('discord.js');
const {
    Client,
    Attachment
} = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');


var servers = {};


client.on('ready', () => {
    console.log('Monsrat On');
    client.user.setActivity('괴물쥐 | ==명령어')
});


client.on('message', message => {
    let lists = false;
    let args = message.content.split(" ");


    switch (args[0]) {

        case '==pause':
            var server = servers[message.guild.id];

            if (!server) return message.channel.send('플레이중인 노래가 없습니다.');

            if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('저와 같은채널에 계시지 않습니다.');

            if (server.dispatcher.paused) return message.channel.send('이미 노래가 중지되어있습니다.');

            server.dispatcher.pause();

            message.channel.send(`노래를 중지했습니다.`);
            break;

        case '==list':
            var server = servers[message.guild.id];
            for (var i = 0; i<=server.queue.length - 1; i++ )
            {
                message.channel.send('```' + server.queue[i] + '```')
            }
            break;

        case '==resume':
            var server = servers[message.guild.id];

            if (!server) return message.channel.send('플레이중인 노래가 없습니다.');

            if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('저와 같은채널에 계시지 않습니다.');

            if (!server.dispatcher.paused) return message.channel.send('이 노래는 중지되어있지 않습니다.');

            server.dispatcher.resume();

            message.channel.send(`노래를 재개합니다.`);
            break;

        case '==play':



            if (args[1].indexOf('youtu') != -1){
                message.channel.send('노래를 재생합니다.')

            }
            else {
                message.channel.send('제대로된 링크를 적으세요.');
                return ;
            }




            function play(connection, message) {
                lists = true;
                var server = servers[message.guild.id];







                server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: 'audioonly'}));

                server.queue.shift();

                server.dispatcher.on('end', function () {
                    if (server.queue[0]){
                        play(connection, message);
                    }else {
                        connection.disconnect();
                    }
                });


            }

            if (!args[1]){
                message.channel.send('제대로된 링크를 적으세요.');
                return;
            }


            if (!message.member.voiceChannel) {
                message.channel.send('채널안에 들어가 있으세요.');
                return;
            }


            if (!servers[message.guild.id]) servers[message.guild.id] = {
                queue: []
            }

            var server = servers[message.guild.id];

            server.queue.push(args[1]);

            if (!message.guild.voiceConnection) message.member.voiceChannel.join()
                .then(function (connection) {play(connection, message);})
                .catch(error =>{console.log(error)})


            break;

        case '==skip':
            var server = servers[message.guild.id];
                if (server.dispatcher) server.dispatcher.end();
            break;


        case '==stop':
            var server = servers[message.guild.id];
            if (message.guild.voiceConnection){
                for (var i = server.queue.length - 1; i >= 0; i--){
                    server.queue.splice(i, 1);
                }

                server.dispatcher.end();
                message.channel.send('다 끝나서 나갑니다.')
            }

            if (message.guild.connection) message.guild.voiceConnection.disconnect();
            break;
    }

    if(message.author.bot) return;

    let a = message.content.split('==');

    async function dam(){
        try{
            if (message.content.indexOf('==담배빵') != -1) {


                await message.channel.send(a[0] + '넌 안되겠다.');
                await message.channel.send({ files: ['monsrat_img/nun.png'] })
                message.channel.send("치------------------익", { files: ['monsrat_img/zzz.jpg'] })
        }

        } catch (e) {
            console.log(e)
        }
    }
    async function dm() {
             if (message.content.indexOf('==명령어') != -1) {
                        await message.author.send('').catch(error=>{
                            if(error.message === 'Cannot send messages to this user'){
                                message.reply('사용자 설정 => 개인정보 보호 및 보호 => 서버 멤버가 보내는 개인 메시지 허용하기에 체크해주세요.')

                            }
                            else  {
                                message.reply('명령어를 DM으로 보내드렸습니다. ^^');
                                message.channel.send({ files: ['monsrat_img/111.jpg'] });
                                message.author.send('```==담배빵, ==기모링, ==개잘해, ==충성, ==버스, ==다1빙, ==뻐큐, ==실압근, ==텟카이``` ex) @괴물쥐 ==담배빵')
                                message.author.send('이 있고, 음악을 틀으실 때에는,')
                                message.author.send('```==play 유튜브링크, ==skip, ==stop, ==skip, ==pause, ==list, ==resume```가 있습니다.')
                            }
                        })


            }

    }

    dm();

    dam();


    if (message.content.indexOf('==기모링') != -1) {
        message.channel.send(a[0] + '이~잉 기모링~');
        message.channel.send({ files: ['monsrat_img/eee.jpg'] })
    }
    if (message.content.indexOf('==개잘해') != -1) {
        message.channel.send(a[0] + '뭘 좀 아시네ㅋ');
        message.channel.send({ files: ['monsrat_img/good.jpg'] })
    }
    if (message.content.indexOf('==충성') != -1) {
        message.channel.send(a[0] + '충성!');
        message.channel.send({ files: ['monsrat_img/xxx.jpg'] })
    }



    async function playca() {

        if (message.content.indexOf('==캐리') != -1) {
            if (message.member.voiceChannel === message.guild.me.voiceChannel) {
                message.reply('노래가 끝나면 불러주세요.')
                return false;
            }
            var voiceChannel = message.member.voiceChannel;
            voiceChannel.join()
                .then(connection =>{
                    connection.playFile('monsrat_mp3/carry.mp3')
                    setTimeout(function () {
                        voiceChannel.leave();
                    }, 4000);
                })
                .catch(err => console.log(err));

            message.channel.send(a[0] + '캐뤼 캐뤼! 씹캐뤼 ');
            message.channel.send({ files: ['monsrat_img/carry.jpg'] })
        }



    }

    playca();


    if (message.content.indexOf('==버스') != -1) {
        message.channel.send(a[0] + '야이 개새꺄 조용히해');
        message.channel.send({ files: ['monsrat_img/ccc.jpg'] })
    }
    if (message.content.indexOf('==다1빙') != -1) {
        message.channel.send(a[0] + '으아!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        message.channel.send({ files: ['monsrat_img/333.jpg'] })
    }
    if (message.content.indexOf('==뻐큐') != -1) {
        message.channel.send(a[0] + 'ㅗ');
        message.channel.send({ files: ['monsrat_img/555.jpg'] })
    }
    if (message.content.indexOf('==실압근') != -1) {
        message.channel.send( a[0] + '이 실압근에 뒤지기 싫으면 가만히 있어' ,{ files: ['monsrat_img/sil.png'] })
    }
    if (message.content.indexOf('==텟카이') != -1) {
        message.channel.send( a[0] + '텟카이!' ,{ files: ['monsrat_img/tet.png'] })
    }
});

