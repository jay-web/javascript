
const durationInput = document.querySelector("input");

const startButton = document.querySelector("#start");

const pauseButton = document.querySelector("#pause");

const circle = document.querySelector("circle");

const body = document.querySelector('body');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;

circle.setAttribute('stroke-dasharray', perimeter);

let duration;
let r = 122;
let g = 145;
let b = 230;
let counter = 255;


// create the instance of Timer class
var timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        r = 255;
        g = 255;
        b = 255;
    
        
    },
    onTick(timeRemain){
        body.setAttribute("style", `background-color: rgb(${r} ${g} ${b})`);
        let off = perimeter * timeRemain /duration - perimeter;
        
        circle.setAttribute('stroke-dashoffset', off);
        
        console.log("r is " + r);
        
        
            r = Math.random(255) + 100;
            g = Math.random(255) + 100;      
            b = Math.random(255) + 100;
            
        
       
        
        

    },
    onComplete(){
        console.log("timer is completed");
    }
});
