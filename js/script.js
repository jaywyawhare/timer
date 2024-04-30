let timerInterval;
let timerRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
    if (!timerRunning) {
        timerInterval = setInterval(updateTimer, 10); 
        timerRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerText = '00:00:00:00';
}

function updateTimer() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    const formattedTime = (hours < 10 ? '0' : '') + hours + ':' +
                          (minutes < 10 ? '0' : '') + minutes + ':' +
                          (seconds < 10 ? '0' : '') + seconds + ':' +
                          (milliseconds < 10 ? '0' : '') + milliseconds;
    document.getElementById('timer').innerText = formattedTime;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
