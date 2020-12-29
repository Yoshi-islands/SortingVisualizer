/*This function will scale the timer based on the slider  */
export default function timerScale ( sliderValue, timerInput ) { 

    //Ex; 200 input; output = 100, etc... for 30 and 50 for 100 input 
    if ( sliderValue === 30 ) { 

        return timerInput = timerInput / 2; 

    } else if ( sliderValue >= 45 ) { 

        return timerInput = timerInput / 4;  
    } 

    return timerInput;

}