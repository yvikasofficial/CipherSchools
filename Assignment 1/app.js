const startBtn = document.querySelector('.btn-start'); 
const stopBtn = document.querySelector('.btn-stop'); 
const resetBtn = document.querySelector('.btn-reset'); 

const timerText = document.querySelector('.stopwatch__timer span ')

let count = 0; 
let start = false; 
let stop = false;


const startTimer = () => {

    if(stop) {
        stop = false; 
        start = false; 
        return;
    }

    start = true; 
    count += 1; 
    timerText.innerHTML = count; 

    setTimeout(startTimer, 1000); 
}

const stopTimer = () => {
    if(!start) return; 
    stop = true; 
}

const resetTimer = () => {
    count = 0; 
    timerText.innerHTML = count; 

}


startBtn.addEventListener('click', startTimer); 
stopBtn.addEventListener('click', stopTimer); 
resetBtn.addEventListener('click', resetTimer); 