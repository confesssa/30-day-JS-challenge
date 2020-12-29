
function playByKeyboard(e) {
  const key = document.querySelector(`.key[data-key = '${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
  key.classList.add('playing');
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function playByMouse(e) {
  const keyCode = this.getAttribute('data-key');
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	audio.currentTime = 0;
	audio.play();
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((el) => el.addEventListener('transitionend', removeTransition))
keys.forEach((el) => el.addEventListener('click', playByMouse));

window.addEventListener('keydown', playByKeyboard);