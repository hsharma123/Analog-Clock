let hour = document.getElementById('hour');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');

function displayTime() {
    let currentTime = new Date();

    // Getting the current time
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
  
    // Calculate the rotation angles for the clock hands
    let hourAngle = (h * 30) + (m * 0.5);
    let minuteAngle = (m * 6) + (s * 0.1);
    let secondAngle = (s * 6);

    hour.style.transform = `rotate(${hourAngle}deg)`;
    minutes.style.transform = `rotate(${minuteAngle}deg)`;
    seconds.style.transform = `rotate(${secondAngle}deg)`;




}
setInterval("displayTime()", 1000);

