let video;
let durationControl;
let soundControl;
let intervalId;

document.addEventListener('DOMContentLoaded', e => {
  video = document.getElementById('video');

  // обработчик тега видео
  video.addEventListener('click', playStop);

  // Находим кнопки и вешаем цикл и обработчик на каждую
  let playButtons = document.querySelectorAll('.play');
  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', playStop);
  } 

  // обработчик события на кнопку динамика
  let micControl = document.getElementById('micLevel');
  micControl.addEventListener('click', soundOf);

  // обработчик события для ползунка продолжительности видео
  durationControl = document.getElementById('durationLevel');
  durationControl.addEventListener('mousedown', stopInterval);
  durationControl.addEventListener('click', setVideoDuration);

  durationControl.min = 0;
  durationControl.value = 0;

  // обработчик событя для ползунка громкости
  soundControl = document.getElementById('volumeLevel');
  soundControl.addEventListener('click', changeSoundVolume);
  soundControl.addEventListener('mouseup', changeSoundVolume);

  // Задаем максимальное и минимальное значение ползунка громкости
  soundControl.min = 0;
  soundControl.max = 10;

  soundControl.value = soundControl.max;
})


function playStop(){
  // находим кнопку с картинкой плей и скрываем ее
  let playImg = document.querySelector('.video__play');
  playImg.classList.toggle('video__play--active');

  // присваиваем ползунку продолжительности максимальное значение равное продолжительности видео
  durationControl.max = video.duration;

  // проверяем стоит ли видео на паузе, если да продолжаем воспроизведение
  if(video.paused){
    // запуск
    video.play();
    // обновляем ползунок каждые 15 милисекунд
    intervalId = setInterval(updateDuration , 1000 / 66);
  } else {
    // видео не стоит на паузе , значит ставим на паузу
    video.pause();
    clearInterval(intervalId);
  }

}


function updateDuration(){
  durationControl.value = video.currentTime;
}

function stopInterval(){
  video.pause();
  clearInterval(intervalId);
}

// Возможность перемотки видео
function setVideoDuration(){
  if(video.paused){
    video.play();
  } else{
    video.pause();
  }

  // обновляем ползунок каждые 15 милисикунд
  video.currentTime = durationControl.value;
  intervalId = setInterval(updateDuration, 1000 / 66);
}

// управление звуком
function changeSoundVolume(){
  video.volume = soundControl.value / 10;
}

// выключение звука
function soundOf(){
  if(video.volume ===0) {
    video.volume = soundLevel;
    soundControl.value = soundLevel * 10;
  } else {
    soundLevel = video.volume;
    video.volume = 0;
    soundControl.value = 0;
  }
}
