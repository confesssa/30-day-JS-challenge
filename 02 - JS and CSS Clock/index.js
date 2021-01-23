secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date;
  const sec = now.getSeconds();
  const secDegree = ((sec / 60) * 360);
  secondHand.style.transform = `rotate(${secDegree}deg)`;
  
};

setInterval(setDate, 1000);