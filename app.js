setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();

// Code for Digital Clock:
setInterval(displayTime, 1000);

function displayTime() {
  const timeNow = new Date();

  let hoursOfDay = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();
  let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let today = weekDay[timeNow.getDay()];
  var day = String(timeNow.getDate()).padStart(2, "0");
  let months = timeNow.toLocaleString("default", {
    month: "long",
  });

  let year = timeNow.getFullYear();
  let period = "AM";

  // If hours bigger than 12:
  if (hoursOfDay > 12) {
    hoursOfDay -= 12;
    period = "PM";
  }

  // Hours equal 0
  if (hoursOfDay === 0) {
    hoursOfDay = 12;
    period = "AM";
  }

  hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hoursOfDay + ":" + minutes + ":" + seconds + period;

  document.getElementById("Day").innerHTML = day + " " + months + " " + year;

  document.getElementById("Clock").innerHTML = time;
}
displayTime();
