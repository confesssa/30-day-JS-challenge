window.addEventListener('keydown', (e) => {
  const key = document.querySelector(`.key[data-key = '${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  key.classList.add('playing');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
})

const keys = document.querySelectorAll('.key');
keys.forEach((el) => el.addEventListener('transitionend', removeTransition))
