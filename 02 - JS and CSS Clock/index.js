secondHand = document.querySelector('.second-hand');
minuteHand = document.querySelector('.min-hand');
hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date;

  const sec = now.getSeconds();
  const secDegree = ((sec / 60) * 360 + 90);
  secondHand.style.transform = `rotate(${secDegree}deg)`;

  const min = now.getMinutes();
  const minDegree = ((min / 60) * 360 + 90);
  minuteHand.style.transform = `rotate(${minDegree}deg)`;

  const hour = now.getHours();
  const hourDegree = ((hour / 12) * 360 + 90);
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(setDate, 1000);
