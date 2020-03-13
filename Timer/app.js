
const durationInput = document.querySelector("#input");

const startButton = document.querySelector("#start");

const pauseButton = document.querySelector("#pause");

const circle = document.querySelector("circle");

const perimeter = circle.getAttribute('r') * 2 * Math.PI;

circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;

// create the instance of Timer class
var timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log("timer is started");
    },
    onTick(){
        circle.setAttribute('stroke-dashoffset', currentOffset);
        currentOffset = currentOffset - 1;
    },
    onComplete(){
        console.log("timer is completed");
    }
});
