secondHand = document.querySelector('.second-hand');
minuteHand = document.querySelector('.min-hand');

function setDate() {
  const now = new Date;

  const sec = now.getSeconds();
  const secDegree = ((sec / 60) * 360 + 90);
  secondHand.style.transform = `rotate(${secDegree}deg)`;

  const min = now.getMinutes();
  const minDegree = ((min / 60) * 360 + 90);
  minuteHand.style.transform = `rotate(${minDegree}deg)`;

  
};

setInterval(setDate, 1000);
setInterval(setDate, 1000);