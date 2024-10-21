const btn = document.getElementById("btn")
const btn2 = document.getElementById('pauseBtn')


let workMinutes = 30
let seconds = 60
let interval


const minus0 = (val) => {
    return val < 10 ? '0' + val : val
}

window.onload = () => {
    //dom para actualizar los datos 
    document.getElementById('minutes').innerHTML = workMinutes 
}


const start = () => {
    workMinutes--
    interval = setInterval(time, 1000);
}

const time = () => {
    seconds--
    if (seconds < 0) {
        if (workMinutes > 0) {
            seconds = 59
            workMinutes--
        } else {
            clearInterval(interval)
            seconds = 0
        }
        console.log(workMinutes)
        console.log(seconds)
    }

    const newSecond = minus0(seconds)
    document.getElementById('minutes').innerHTML = workMinutes
    document.getElementById('seconds').innerHTML = newSecond

    if (workMinutes === 0 && seconds === 0) {
        clearInterval(interval)
    }
}




btn.addEventListener('click', () => {
    start()
})




