const breakBtn = document.getElementById('breakBtn')


let breakMinutes = 5
let seconds = 60
let interval


const minus0 = (val) => {
    return val < 10 ? '0' + val : val
}

window.onload = () => {
    //dom para actualizar los datos aqui
    document.getElementById('minutesB').innerHTML = breakMinutes
}


const start = () => {
    breakMinutes--
    interval = setInterval(time, 1000);
}

const time = () => {
    seconds--
    if (seconds < 0) {
        if (breakMinutes > 0) {
            seconds = 59
            breakMinutes--
        } else {
            clearInterval(interval)
            seconds = 0
        }
        console.log(breakMinutes)
        console.log(seconds)
    }

    const newSecond = minus0(seconds)
    document.getElementById('minutesB').innerHTML = breakMinutes
    document.getElementById('secondsB').innerHTML = newSecond

    if (breakMinutes === 0 && seconds === 0) {
        clearInterval(interval)
    }
}

breakBtn.addEventListener('click', () => {
    start()
})