const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".sec-hand");

const updateTime = function () {
  const curTime = new Date();
  //   setTimeout(updateTime, 1000);

  const curHour = curTime.getHours();
  const curMinute = curTime.getMinutes();
  const curSecond = curTime.getSeconds();

  const hourDeg = (curHour / 12) * 360 + curMinute / 2;
  const minDeg = (curMinute / 60) * 360;
  const secDeg = (curSecond / 60) * 360;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  secondHand.style.transform = `rotate(${secDeg}deg)`;

  //   console.log(curTime);
};
// updateTime();

// Note: We can also use the setInterval method to update the time instead of setTimeout.
setInterval(updateTime, 1000);
