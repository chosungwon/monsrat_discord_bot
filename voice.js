const Command = async (message, poll_args) => {
  await message.author.send("").catch((error) => {
    if (error.message === "Cannot send messages to this user") {
      message.reply(
        "사용자 설정 => 개인정보 보호 및 보호 => 서버 멤버가 보내는 개인 메시지 허용하기에 체크해주세요."
      );
    } else {
      const Embed = {
        color: 0xab0000,
        title: "괴물쥐 봇 명령어",
        image: {
          url: "attachment://dm.jpg",
        },
        fields: [
          {
            name: "기본 사용법",
            value:
              "명령어를 입력하고 뒤에 사람을 태그하면 괴물쥐도 그 사람을 태그합니다.",
          },

          {
            name: "기본 명령어",
            value:
              "==담배빵, ==기모링, ==개잘해, ==충성, ==조용히해, ==다1빙, ==뻐큐, ==실압근, ==텟카이, ==어이, ==다운, ==쥐엔장, ==흐에, ==캐리, ==말대꾸, ==좆까, ==쥐커드, ==기분좋구먼유, ==니지건, ==도망가, ==개새꺄, ==아아아, ==기립박수, ==후잉, ==네이스, ==장지환, ==하지말라고",
          },
          {
            name: "뮤직봇 명령어",
            value: "==play 유튜브제목, ==stop, ==skip, ==list",
          },
          {
            name: "투표 명령어",
            value: "==투표 주제",
          },
          {
            name: "초대 링크",
            value: "==링크",
          },
        ],
        footer: {
          text: "봇 개발자 • @조성원#8615",
        },
      };

      if (!poll_args[1]) {
        message.reply("명령어를 DM으로 보내드렸습니다. ^^");
        message.channel.send({ files: ["monsrat_img/111.jpg"] });
        message.author.send({ files: ["monsrat_img/dm.jpg"], embed: Embed });
      }
    }
  });
};

const DamBaeBBang = async (message, args) => {
  if (!message.member.voice.channel) {
    await message.channel.send(args[1] + " 넌 안되겠다.");
    await message.channel.send({ files: ["monsrat_img/nun.png"] });
    message.channel.send("치------------------익", {
      files: ["monsrat_img/zzz.jpg"],
    });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voice.channel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/dambae.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 7500);
    })
    .catch((err) => console.log(err));
  await message.channel.send(args[1] + " 넌 안되겠다.");
  await message.channel.send({ files: ["monsrat_img/nun.png"] });
  message.channel.send("치------------------익", {
    files: ["monsrat_img/zzz.jpg"],
  });
};

const Howling = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 흐에에에에에에에에에에에!!");
    message.channel.send({ files: ["monsrat_img/heek.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/heek.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 4500);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " 흐에에에에에에에에에에에!!");
  message.channel.send({ files: ["monsrat_img/heek.png"] });
};

const Neice = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 네이스 네이스!!!!!!!!!!");
    message.channel.send({ files: ["monsrat_img/neis.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/neis.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 7000);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " 네이스 네이스!!!!!!!!!!");
  message.channel.send({ files: ["monsrat_img/neis.png"] });
};

const Huing = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 후잉! 으에에에에에~");
    message.channel.send({ files: ["monsrat_img/huing.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/huing.mov");
      setTimeout(function () {
        voiceChannel.leave();
      }, 3500);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " 후잉! 으에에에에에~");
  message.channel.send({ files: ["monsrat_img/huing.png"] });
};

const DogBaby = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 개새꺄 내가 말하고있잖아");
    message.channel.send({ files: ["monsrat_img/iamtalk.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/iamtalk.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 4500);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " 개새꺄 내가 말하고있잖아");
  message.channel.send({ files: ["monsrat_img/iamtalk.png"] });
};

const JangJiHwan = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " (장지환)개새꺄 내가 말하고있잖아");
    message.channel.send({ files: ["monsrat_img/iamtalkjang.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/iamtalkjang.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 4400);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " (장지환)개새꺄 내가 말하고있잖아");
  message.channel.send({ files: ["monsrat_img/iamtalkjang.png"] });
};

const YourGigun = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 너 지건이 제일아파......");
    message.channel.send({ files: ["monsrat_img/neegigun.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/neejigun.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 5200);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " 너 지건이 제일아파......");
  message.channel.send({ files: ["monsrat_img/neegigun.png"] });
};

const BeliveYou = async (message, args) => {
  if (!message.member.voice.channel) {
    // message.channel.send(""채널안에 들어가 있으세요."");
    message.channel.send(args[1] + " 쥐엔장 믿고 있었다구~!");
    message.channel.send({ files: ["monsrat_img/jee.jpg"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/jen.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 5000);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " 쥐엔장 믿고 있었다구~!");
  message.channel.send({ files: ["monsrat_img/jee.jpg"] });
};

const Gimoring = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 이~잉 기모링~");
    message.channel.send({ files: ["monsrat_img/eee.jpg"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/yee.mov");
      setTimeout(function () {
        voiceChannel.leave();
      }, 4000);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " 이~잉 기모링~");
  message.channel.send({ files: ["monsrat_img/eee.jpg"] });
};

const RunAway = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 아~ 도망가!~~~~ 핳헤헤");
    message.channel.send({ files: ["monsrat_img/domang.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/domang.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 4000);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " 아~ 도망가!~~~~ 핳헤헤");
  message.channel.send({ files: ["monsrat_img/domang.png"] });
};

const FeelGood = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 이~잉 기분좋구먼유~");
    message.channel.send({ files: ["monsrat_img/chung.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/chung.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 3630);
    })
    .catch((err) => console.log(err));
  message.channel.send(args[1] + " 이~잉 기분좋구먼유~");
  message.channel.send({ files: ["monsrat_img/chung.png"] });
};

const Carry = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 캐뤼 캐뤼! 씹캐뤼 ");
    message.channel.send({ files: ["monsrat_img/carry.jpg"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/carry.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 3500);
    })
    .catch((err) => console.log(err));

  message.channel.send(args[1] + " 캐뤼 캐뤼! 씹캐뤼 ");
  message.channel.send({ files: ["monsrat_img/carry.jpg"] });
};

const Bequiet = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 야이 개새꺄 조용히해");
    message.channel.send({ files: ["monsrat_img/ccc.jpg"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/gae.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 3400);
    })
    .catch((err) => console.log(err));

  message.channel.send(args[1] + " 야이 개새꺄 조용히해");
  message.channel.send({ files: ["monsrat_img/ccc.jpg"] });
};

const JotGGa = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 좆까!!!!!!!!!!!!!!");
    message.channel.send({ files: ["monsrat_img/jot.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/jot.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 3000);
    })
    .catch((err) => console.log(err));

  message.channel.send(args[1] + " 좆까!!!!!!!!!!!!!!");
  message.channel.send({ files: ["monsrat_img/jot.png"] });
};

const GirupClap = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 와... 존나 잘해...");
    message.channel.send({ files: ["monsrat_img/girip.gif"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/girip.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 13000);
    })
    .catch((err) => console.log(err));

  message.channel.send(args[1] + " 와... 존나 잘해...");
  message.channel.send({ files: ["monsrat_img/girip.gif"] });
};

const AhAhAh = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 아!!! 아!!! 아!!!");
    message.channel.send({ files: ["monsrat_img/ahahah.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/ahahah.mp4");
      setTimeout(function () {
        voiceChannel.leave();
      }, 8000);
    })
    .catch((err) => console.log(err));

  message.channel.send(args[1] + " 아!!! 아!!! 아!!!");
  message.channel.send({ files: ["monsrat_img/ahahah.png"] });
};

const DontDo = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 하지말라고!!!");
    message.channel.send({ files: ["monsrat_img/haji.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/haji.mp3");
      setTimeout(function () {
        voiceChannel.leave();
      }, 1800);
    })
    .catch((err) => console.log(err));

  message.channel.send(args[1] + " 하지말라고!!!");
  message.channel.send({ files: ["monsrat_img/haji.png"] });
};

const JalSleep = async (message, args) => {
  if (!message.member.voice.channel) {
    message.channel.send(args[1] + " 잘자요.");
    message.channel.send({ files: ["monsrat_img/jal.png"] });
    return;
  }

  if (message.member.voice.channel === message.guild.me.voiceChannel) {
    message.reply("괴물쥐가 나갔을때 불러주세요.");
    return false;
  }
  var voiceChannel = message.member.voice.channel;
  voiceChannel
    .join()
    .then((connection) => {
      connection.play("monsrat_mp3/jal.mp4");
      setTimeout(function () {
        voiceChannel.leave();
      }, 2400);
    })
    .catch((err) => console.log(err));

  message.channel.send(args[1] + " 잘자요.", {
    files: ["monsrat_img/jal.png"],
  });
};

const MalDeggu = async (message, args) => {
  if (message.content.indexOf("==말대꾸") != -1) {
    if (!message.member.voice.channel) {
      await message.channel.send(args[1] + " 말대꾸 하지마!!!!!!!!!!!!", {
        files: ["monsrat_img/mal.png"],
      });
      return;
    }

    if (message.member.voice.channel === message.guild.me.voiceChannel) {
      message.reply("괴물쥐가 나갔을때 불러주세요.");
      return false;
    }
    var voiceChannel = message.member.voice.channel;
    voiceChannel
      .join()
      .then((connection) => {
        connection.play("monsrat_mp3/mal.mp3");
        setTimeout(function () {
          voiceChannel.leave();
        }, 3500);
      })
      .catch((err) => console.log(err));

    await message.channel.send(args[1] + " 말대꾸 하지마!!!!!!!!!!!!", {
      files: ["monsrat_img/mal.png"],
    });
  }
};

const Diving = async (message, args) => {
  if (message.content.indexOf("==다1빙") != -1) {
    if (!message.member.voice.channel) {
      await message.channel.send(args[1] + " 쇳소리 뭐냐구!!!!!!!");
      await message.channel.send(
        "으아!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        { files: ["monsrat_img/333.jpg"] }
      );
      message.channel.send("https://www.youtube.com/watch?v=cN-FDF7sb8c");
      return;
    }

    if (message.member.voice.channel === message.guild.me.voiceChannel) {
      message.reply("괴물쥐가 나갔을때 불러주세요.");
      return false;
    }
    var voiceChannel = message.member.voice.channel;
    voiceChannel
      .join()
      .then((connection) => {
        connection.play("monsrat_mp3/da1bing.mp3");
        setTimeout(function () {
          voiceChannel.leave();
        }, 11300);
      })
      .catch((err) => console.log(err));
    await message.channel.send(args[1] + " 쇳소리 뭐냐구!!!!!!!");
    await message.channel.send(
      "으아!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
      { files: ["monsrat_img/333.jpg"] }
    );
  }
};

const RatQuad = async (message, args) => {
  if (message.content.indexOf("==쥐커드") != -1) {
    if (!message.member.voice.channel) {
      await message.channel.send(
        args[1] + " 두두두두두두두두두두두두두두두두",
        { files: ["monsrat_img/rat.gif"] }
      );
      message.channel.send("아디오스.");
      return;
    }

    if (message.member.voice.channel === message.guild.me.voiceChannel) {
      message.reply("괴물쥐가 나갔을때 불러주세요.");
      return false;
    }
    var voiceChannel = message.member.voice.channel;
    voiceChannel
      .join()
      .then((connection) => {
        connection.play("monsrat_mp3/ratquad.mp4");
        setTimeout(function () {
          voiceChannel.leave();
        }, 13000);
      })
      .catch((err) => console.log(err));
    await message.channel.send(args[1] + " 두두두두두두두두두두두두두두두두", {
      files: ["monsrat_img/rat.gif"],
    });
    message.channel.send("아디오스.");
  }
};

const Poll = (message, poll_args) => {
  const Embed = new RichEmbed()
    .setColor(0xab0000)
    .setTitle("투표")
    .setDescription("==투표를 통해 간단한 찬반투표가 가능합니다.");

  if (!poll_args[1]) {
    message.channel.send(Embed);
  }

  let msgArgs = poll_args.slice(1).join(" ");

  message.channel
    .send("📋 " + "**" + msgArgs + "** ")
    .then(async (messageReaction) => {
      await messageReaction.react("👍");
      messageReaction.react("👎");
      message.delete(2000).catch((error) => {
        if (error.message === "Missing Permissions") {
          message.reply(
            "투표 명령어 구문이 없어지지 않는다면, 서버에서 괴물쥐 권한을 재설정 해주세요."
          );
        }
      });
    });
};

module.exports = { 
    Command, 
    DamBaeBBang, 
    Howling, 
    Neice, 
    Huing, 
    DogBaby,  
    JangJiHwan,
    YourGigun,
    BeliveYou,
    Gimoring,
    RunAway,
    FeelGood,
    Carry,
    Bequiet,
    JalSleep,
    JotGGa,
    GirupClap,
    AhAhAh,
    DontDo,
    MalDeggu,
    Diving,
    RatQuad,
    Poll
};
