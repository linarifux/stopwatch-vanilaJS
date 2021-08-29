var seconds = 00
var tens = 00

var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var startButton = document.getElementById("start")
var stopButton = document.getElementById("stop")
var resetButton = document.getElementById("reset")
var Interval;

startButton.onclick = function(){
    Interval = setInterval(() => {
        startTimer()
    }, 10);
}

stopButton.onclick = function () {
    clearInterval(Interval)
}

resetButton.onclick = function(){
    clearInterval(Interval)
    appendSeconds.innerHTML="00"
    appendTens.innerHTML="00"
}


function startTimer(){
    appendTens.innerHTML=tens
    appendSeconds.innerHTML=seconds
    if(tens<10){
        appendTens.innerHTML=`0${tens}`
    }
    if(seconds<10){
        appendSeconds.innerHTML=`0${seconds}`
    }
    tens++
    if(tens>99){
        seconds++
        tens=0
    }
}
