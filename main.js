var timer = document.getElementById("hiddenPageTimer");

function start() {
    var interval = setInterval(function () {
        var time = timer.innerText.split(":");
        var minutes = parseInt(time[1]);
        var seconds = parseInt(time[2]);
        if (minutes == 0 && seconds < 10) {
            play();
            clearInterval(interval);
        }
    }, 3000)
}

function play() {
    var beepsound = new Audio(
        'https://www.soundjay.com/button/sounds/button-3.mp3');

    var soundPlayTimes = 0;
    var playSoundInterval = setInterval(function() {
        soundPlayTimes += 1;
        beepsound.play();

        if(soundPlayTimes > 4) {
            clearInterval(playSoundInterval);
        }
    }, 1000)
}

start();
