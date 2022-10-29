window.onload = function () {
    var seconds = 00;
    var tens = 00;

    var apSeconds = document.getElementById("seconds");
    var apTens = document.getElementById("tens");

    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);

    }
    buttonStop.onclick = function () {
        clearInterval(Interval);
    }
    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        apTens.innerHTML = tens;
        apSeconds.innerHTML = seconds;
    }

    function startTimer() {
        tens++;

        if (tens <= 9) {
            apTens.innerHTML = "0" + tens;

        }
        if (tens > 9) {
            apTens.innerHTML = tens;

        }
        if (tens > 99) {
            seconds++;
            apSeconds.innerHTML = "0" + seconds;
            tens = 0;
            apTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            apSeconds.innerHTML = seconds;
        }
    }
}