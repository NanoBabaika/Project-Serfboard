let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: '392',
    width: '662',
    videoId: 'IaCzleuPb08&ab',
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange
    // },
    // playerVars:{
    //     controls:0,
    //     disablekb:0,
    //     showinfo:0,
    //     rel:0,
    //     autoplay:0
    // }
  });
}