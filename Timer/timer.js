class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.intervalId = setInterval(this.tick, 20);
    }
    pause = () => {
        console.log("Timer paused");
        clearInterval(this.intervalId);
    }

    // one approach without setter and getter
    // tick = () => {
    //     console.log("tick");
    //     const timeRemain = parseFloat(this.durationInput.value);
    //     this.durationInput.value = timeRemain - 1;
    // }

    // second approach using setter and getter
    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause();
            if(this.onComplete){
                this.onComplete();
            }
        }else{
            this.timeRemain = this.timeRemaining - 0.02; 
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
             
    }

    // getter
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    // setter
    set timeRemain(time) {
        this.durationInput.value = time.toFixed(2);
    }
}