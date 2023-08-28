const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let interval;

function startTimer() {
  if (!interval) {
    startTime = Date.now() - startTime;
    interval = setInterval(updateDisplay, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  startTime = 0;
  updateDisplay();
  startBtn.disabled = false;
  stopBtn.disabled = false;
}

function updateDisplay() {
  const currentTime = Date.now() - startTime;
  const hours = Math.floor(currentTime / 3600000);
  const minutes = Math.floor((currentTime % 3600000) / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value.toString().padStart(2, "0");
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
