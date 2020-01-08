class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }

    start(){
        console.log("Timer is running now");
    }
}

const durationInput = document.querySelector("#input");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");


var timer = new Timer(durationInput, startButton, pauseButton);
