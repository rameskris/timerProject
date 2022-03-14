
const durationInput=document.querySelector('#duration')
const startButton=document.querySelector("#start")
const pauseButton=document.querySelector("#pause")

const timer=new Timer(durationInput,startButton,pauseButton,{
    onStart(){
        console.log("Timer Started")

    },
    onTick(){

        console.log("timer has started")
    },
    onComplete(){
        console.log("timer has finished")

    }



})


/*
Arrow Functions, the "this" keyword represents the 
object that owns the function, no matter who calls the function.

Click the button to execute the "hello" function again, 
and you will see that "this" still represents the window object.
++++++++++++++++++++=
This example demonstrate that in a regular function, the "this" keyword represents
 different objects depending on how the function was called.

Click the button to execute the "hello" function again, 
and you will see that this time "this" represents the button object.
*/ 
