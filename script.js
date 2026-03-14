let timeLeft = 25 * 60;
let timerId = null;

const timerDisplay = document.getElementById('timer');
const statusText = document.getElementById('status');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

document.getElementById('start').onclick = () => {
    if (timerId) return;
    statusText.innerText = "Sessao de foco iniciada!";
    timerId = setInterval(() => {
        timeLeft--;
        updateDisplay();
        if (timeLeft === 0) {
            clearInterval(timerId);
            alert("Tempo esgotado! Descanse um pouco.");
            resetTimer();
        }
    }, 1000);
};

document.getElementById('pause').onclick = () => {
    clearInterval(timerId);
    timerId = null;
    statusText.innerText = "Pausado.";
};

document.getElementById('reset').onclick = resetTimer;

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = 25 * 60;
    updateDisplay();
    statusText.innerText = "Pronto para outra?";
}