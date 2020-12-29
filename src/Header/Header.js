import React from 'react'; 
import '../css/index.css'
import '../css/App.css'; 
import Slider from '@material-ui/core/Slider'; 
import { Button, Container, ButtonLabel, SliderContainer } from './Header.style'; 
import { randomInteger } from '../App';


/*STATE FORMAT [ NAME OF THE STATE, VALUE ] */
function valuetext(value) { 
    return `${value}`;
    
}


export default function Header(
    
    { ControlSliderState, getSliderState, setArrayState, getArrayState, bubbleSort, MergeSort, QuickSort, HeapSort, 
      setIndex,setFollowingIndex,setDisable, getDisableValue }
    
) { 
    
    /*This function will be used to replace the current array with 
    randomly generated numbers*/ 
    function CreateNewArray() { 

        const sliderState = getSliderState(); 
        const newArray = [sliderState]; 
        for ( let i = 0; i < sliderState; i++) {
            newArray[i] = randomInteger(40, 850); 
        }
        setArrayState(newArray); 

    }

    return ( 

        <div>
        
    {/*This is the header of the application*/}
     <Container>

                    
        {/*The various buttons to be placed within the header*/}
                <Button className="Button"
                    disabled={getDisableValue()}
                    disableColor={getDisableValue()}
                    onClick={() => {
                    
                    /*Generate an array which is the same size as the current slider state*/
                    CreateNewArray();
                   
                    
        }}> Create New Array </Button>


           <SliderContainer>
           
                    {/*This is the button label replaced the typography*/}
                    <ButtonLabel
                     disableColor={getDisableValue()}  
                    >
                         Select The Array Size And Speed
                    </ButtonLabel> 
          
                    <Slider 
                        
               defaultValue={15}
               onChange={(e,value) => {
                   ControlSliderState(value); 
               }}
               getAriaValueText={valuetext}
               aria-labelledby="discrete-slider"
               valueLabelDisplay="auto"
               step={15}
               marks={true}
               min={15}
               max={145}
               disabled={getDisableValue()}

               />
               </SliderContainer> 

           {/*Different buttons */}
                <Button className="Button"
                    disabled={getDisableValue()}
                    disableColor={getDisableValue()}
                    onClick={() => {
                
                    MergeSort(getArrayState, setArrayState, setIndex, 
                        setFollowingIndex, setDisable); 
                    }}> Merge Sort</Button> 
                
                <Button className="Button"
                    disabled={getDisableValue()}
                    disableColor={getDisableValue()}
                    onClick={() => {

                    QuickSort(getArrayState, setArrayState, setIndex,
                        setFollowingIndex, setDisable); 
                        
                    }}> Quick Sort </Button> 
               
                <Button className="Button"
                    disabled={getDisableValue()}
                    disableColor={getDisableValue()}

                    onClick={ () => {

                    HeapSort(getArrayState, setArrayState, setIndex, 
                        setFollowingIndex, setDisable); 

                    }}> Heap Sort </Button>
                
                <Button className="Button"
                    disabled={getDisableValue()}
                    disableColor={getDisableValue()}    
                    onClick={() => {
                    bubbleSort(getArrayState, setArrayState, setIndex,
                        setFollowingIndex, setDisable); 
                }}> Bubble Sort</Button> 

               
       
       </Container>
       
   
   </ div> 

    ); 

}




