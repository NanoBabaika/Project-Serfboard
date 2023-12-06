let video;
let durationControl;
let soundControl;
let interValid;

document.addEventListener('DOMContentLoaded', e => {
  video = document.getElementById('video');

  // обработчик тега видео
  video.addEventListener('click', playStop);

  // Находим кнопки и вешаем цикл и обработчик на каждую
  let playButtons = document.querySelectorAll('.play');
  for(let i=0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', playStop);
  } 
})

// 37:14
 