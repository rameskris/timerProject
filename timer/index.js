
class Timer{
    
    constructor(durationInput,startButton,pauseButton,callbacks){
       
        this.durationInput=durationInput;
        this.startButton=startButton;
        this.pauseButton=pauseButton;
        
        this.startButton.addEventListener('click',this.start)
        this.pauseButton.addEventListener('click',this.pause)
        if(callbacks){
            this.onStart=callbacks.onStart
            this.onTick=callbacks.onTick
            this.onComplete=callbacks.onComplete
        }
        
        

    }
    start=()=>{
        if(this.onStart){
            this.onStart()
        }
        
      this.tick()
      this.interval=setInterval(this.tick,1000)
    
    }
    tick=()=>{
      // this.timeRemaining=this.timeRemaining//here because of get we dont have to use timeR()
     
       if(this.timeRemaining<=0){
        this.pause()
        if(this.onComplete){
            this.onComplete()
        }
        
       }else{
        this.timeRemaining=this.timeRemaining-1
        //setter                 //getter
        //
        if(this.onTick){
            this.onTick()
        }
           
       }
      
       
    }
    
    get timeRemaining(){
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time){
        this.durationInput.value=time
    }
    pause=()=>{
        clearInterval(this.interval)
    }
}

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
