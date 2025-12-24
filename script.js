// Custom Pomodoro Timer
let timer;
let timeLeft = 0;
let running = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const minutesInput = document.getElementById("minutesInput");

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

function startTimer() {
  if (!running) {
    let minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes <= 0) {
      alert("Please enter a valid number of minutes!");
      return;
    }

    if (timeLeft === 0) {
      timeLeft = minutes * 60;
      updateDisplay();
    }

    running = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up!");
        running = false;
        timeLeft = 0;
        updateDisplay();
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  timeLeft = 0;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();


