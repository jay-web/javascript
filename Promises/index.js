var myTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        var marks = Math.floor(Math.random() * 10) + 1;
        console.log(marks);
        if(marks > 6){
            resolve();
        }else{
            reject();
        }
    });
});


myTime.then(() => {
    console.log("Pass");
});

myTime.catch(() => {
    console.log("Failed");
});