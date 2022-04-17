function formatTimeLeft(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10){
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function PrintTimer(){
    const TIME_LIMIT = localStorage.infos * 60;//document.getElementById("time").value;
    let timeLeft =  TIME_LIMIT;
    document.getElementById("app").innerHTML = `
    <div class="base-timer">
    <span id="base-timer-label" class="base-timer__label">
        ${formatTimeLeft(timeLeft)}
        </span>
    </div>
    `;
    startTimer(TIME_LIMIT);
}

function startTimer(TIME_LIMIT) {
    let timePassed = 0;
    timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    if (timeLeft == 0)
    {
        alert("Тест окончен!");
        lastper();
        window.location = "result.html";
        clearTimeout(timerInterval);
        
    }
    document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);
    }, 1000);
}