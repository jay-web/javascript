class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        console.log("Timer is running now");
        this.tick();
        this.intervalId = setInterval(this.tick, 1000);
    }
    pause = () => {
        console.log("Timer paused");
        clearInterval(this.intervalId);
    }
    tick = () => {
        console.log("tick");
    }
}

const durationInput = document.querySelector("#input");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");


var timer = new Timer(durationInput, startButton, pauseButton);
