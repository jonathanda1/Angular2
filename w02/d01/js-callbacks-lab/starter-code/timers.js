var timeElapsed = 0
var timer = document.getElementById("timer")
var start = document.getElementById("start")
var pause = document.getElementById("pause")
var reset = document.getElementById("reset")
var stopIt

start.addEventListener("click", startClick)

function startClick(){
 stopIt = setInterval(updateTime, 1000)
}


function updateTime(){
 timeElapsed += 1
 timer.innerHTML = timeElapsed
}

pause.addEventListener("click", pauseClick)

function pauseClick(){
 clearInterval(stopIt)
}

reset.addEventListener("click", resetClick)

function resetClick(){
 clearInterval(stopIt)
 timeElapsed = 0
 timer.innerHTML = timeElapsed
}
