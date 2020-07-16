const Discord = require("discord.js");

const DisTube = require('distube');

const client = new Discord.Client();

const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true })


const PREFIX = "==";

const { 
    Command, 
    DamBaeBBang, 
    Howling, 
    Neice, 
    Huing, 
    DogBaby,  
    JangJiHwan,
    YourGigun,
    JalSleep,
    BeliveYou,
    Gimoring,
    RunAway,
    FeelGood,
    Carry,
    Bequiet,
    JotGGa,
    GirupClap,
    AhAhAh,
    DontDo,
    MalDeggu,
    Diving,
    RatQuad,
    Poll
} = require("./voice");
const voice = require("./voice");





client.on("ready", () => {
    console.log("Monster Rat Online");
    client.user.setActivity("괴물쥐 | '==명령어'를 입력")
});

client.once("reconnecting", () => {
    console.log("Monster Rat Reconnecting");
});

client.once("disconnect", () => {
    console.log("Monster Rat Disconnect!");
});

client.on("guildMemberAdd", member => {

    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if (!channel) return;

    channel.send(`서버에 오신 ${member}, 환영합니다. '==명령어'를 통해 명령어를 확인해보세요.`)
})


client.on("message", async (message) => {
    let args = message.content.split(" ");
    let poll_args = message.content.substring(PREFIX.length).split(" ");
    let queue = distube.getQueue(message);

    
    if(args[1] == undefined){
        args[1] = '';
    }
    else
        args[1] = args[1]
        
    
    switch (args[0]) {

            
        case "==명령어":
            Command(message, poll_args);
            break;

        case "==담배빵":
            DamBaeBBang(message, args)
            break;

        
        case "==흐에":
            Howling(message, args);
            break;

        case "==네이스":
            Neice(message, args);
            break;

        case "==후잉":
            Huing(message, args);
            break;

        case "==개새꺄":
            DogBaby(message, args);
            break;

        case "==장지환":
            JangJiHwan(message, args);
            break;
        
        case "==니지건":
            YourGigun(message, args);
            break;

        case "==쥐엔장":
            BeliveYou(message, args);
            break;
        
        case "==기모링":
            Gimoring(message, args);
            break;

        case "==도망가":
            RunAway(message, args);
            break;

        case "==기분좋구먼유":
            FeelGood(message, args);
            break;

        case "==캐리":
            Carry(message, args);
            break;

        case "==조용히해":
            Bequiet(message, args);
            break;

        case "==좆까":
            JotGGa(message, args);
            break;

        case "==기립박수":
            GirupClap(message, args);
            break;
            
        case "==아아아":
            AhAhAh(message, args);
            break;

        case "==하지말라고":
            DontDo(message, args);
            break;

        case "==잘자요":
            JalSleep(message, args);
            break;
        
        case "==말대꾸":
            MalDeggu(message, args);
            break;
        
        case "==다1빙":
            Diving(message, args);
            break;

        case "==쥐커드":
            RatQuad(message, args);
            break;
   
        case "==개잘해":
            message.channel.send(args[1] + " 뭘 좀 아시네ㅋ");
            message.channel.send({ files: ["monsrat_img/good.jpg"] })
            break;

        case "==충성":
            message.channel.send(args[1] + " 충성!");
            message.channel.send({ files: ["monsrat_img/xxx.jpg"] })
            break;

        case "==어이":
            message.channel.send(args[1] + " 어이!!!!!!!!!!!!");
            message.channel.send({ files: ["monsrat_img/eui.jpg"] })
            break;

        case "==다운":
            message.channel.send(args[1] + " 버러지 다운ㅋ");
            message.channel.send({ files: ["monsrat_img/down.png"] })
            break;   

        case "==뻐큐":
            message.channel.send(args[1] + " ㅗ", { files: ["monsrat_img/555.jpg"] });
            break;

        case "==실압근":
            message.channel.send(args[1] + " 이 실압근에 뒤지기 싫으면 가만히 있어", { files: ["monsrat_img/sil.png"] })
            break;

        case "==텟카이":
            message.channel.send(args[1] + " 텟카이!", { files: ["monsrat_img/tet.png"] })
            break;
            
        
        case "==링크":
            message.reply("초대링크를 DM으로 보내드렸습니다!");
            message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=645600533473656832&permissions=37219136&scope=bot");
            break;

        // case "==후원":
        //     message.reply("감사합니다!");
        //     message.author.send("신한은행 110-507-802907 입니다! \n 감사합니다~");
        //     break;

        case "==투표":
            Poll(message, poll_args);
            break;

        case "==play":
            if (args[1] == '') {
                message.channel.send("유튜브 제목을 입력해주세요.")
                return;
            }
            if (!message.member.voice.channel) {
                message.channel.send("채널에 들어와 계시지 않습니다.");
                return;
            }


            if (message.member.voice.channel !== message.guild.me.voice.channel && queue) {
                distube.deleteQueue(message);       
            }

            distube.play(message, args.join(" "));
            break;
        
        case "==stop":
            if (!message.member.voice.channel) {
                message.channel.send("채널에 들어와 계시지 않습니다.");
                return;
            }

            if (queue == undefined) {
                message.channel.send("노래가 재생 중이지 않습니다.");
                return;
            }
            distube.stop(message);
            message.member.voice.channel.leave();

            message.channel.send("다음에 보자고 친구ㅋ", { files: ["monsrat_img/end.jpeg"] });
            break;

        case "==skip":
            if (!message.member.voice.channel) {
                message.channel.send("채널에 들어와 계시지 않습니다.");
                return;
            }

            if (queue == undefined) {
                message.channel.send("노래가 재생 중이지 않습니다.");
                return;
            }


            distube.skip(message);
            break;

        case "==pause":
            if (!message.member.voice.channel) {
                message.channel.send("채널에 들어와 계시지 않습니다.");
                return;
            }

            if (queue == undefined) {
                message.channel.send("노래가 재생 중이지 않습니다.");
                return;
            }

            if (distube.isPaused(message) == true) {
              message.channel.send("이미 일시정지 되어있습니다.");
              return;
            }

            message.channel.send("노래를 일시정지 합니다.")


            distube.pause(message);
            break;

        case "==resume":
            if (!message.member.voice.channel) {
                message.channel.send("채널에 들어와 계시지 않습니다.");
                return;
            }

            if (queue == undefined) {
                message.channel.send("노래가 재생 중이지 않습니다.");
                return;
            }

             if (distube.isPaused(message) == false) {
               message.channel.send("노래가 일시정시 되어있지않습니다.");
               return;
             }


            message.channel.send("노래를 재개합니다.")


            distube.resume(message);
            break;

        case "==jump":
            if (args[1] == '') {
                message.channel.send("점프 할 노래의 순서를 적어주세요.")
                return;
            }
            

            if (isNaN(args[1])) {
              message.channel.send("점프 뒤에 숫자만 적어주세요.");
              return;
            }


            if (!message.member.voice.channel) {
              message.channel.send("채널에 들어와 계시지 않습니다.");
              return;
            }

            if (queue == undefined) {
              message.channel.send("노래가 재생 중이지 않습니다.");
              return;
            }

            message.channel.send(`${args[1]}번째 노래로 점프합니다.`)
            distube.jump(message, args[1]-1)

            break;
        
    

        case "==list":
            if (!message.member.voice.channel) {
                message.channel.send("채널에 들어와 계시지 않습니다.");
                return;
            }

            if (queue == undefined) {
                message.channel.send("노래가 재생 중이지 않습니다.");
                return;
            }

            if (message.member.voice.channel !== message.guild.me.voice.channel && queue) {
                distube.deleteQueue(message);       
            }

        
            message.channel.send(
                "재생목록:\n" +
                queue.songs.map((song, id) =>`**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")
            );
            break;

        
    }

    

    
  

});


distube.on("playSong", (message, queue, song) => {
        message.channel.send(`재생 중인 노래: \`${song.name}\` - \`${song.formattedDuration}\`\n신청한 사람: ${song.user}\n`)
    })
    .on("addSong", (message, queue, song) => {
     
        
        message.channel.send(`추가한 노래: \`${song.name}\` - \`${song.formattedDuration}\`\n추가한 사람: ${song.user}\n`)
    })
    
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**노래를 숫자로만 선택해주세요**\n${result.map(song => `**${++i}**. ${song.title} - \`${song.duration}\``).join("\n")}\n*아무 입력이 없으면 60초 뒤에 사라집니다~*`);
    })

    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`검색 취소!`))
    .on("error", (message, err) => {
        console.log('에러 :' + err)
    });


client.login("");

