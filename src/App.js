import React, {useState, useEffect} from 'react'; 
import './css/index.css';
import './css/App.css'; 
import Header from './Header/Header'; 
import Body from './Body/Body'; 
import bubbleSort from './Sorting/Bubble'; 
import MergeSort from './Sorting/Merge'; 
import QuickSort from './Sorting/Quick'; 
import HeapSort from './Sorting/Heap'; 


/*Function will generate some random numbers between certain ranges*/ 
export function randomInteger(min, max) { 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function App() {

  //Set the use state here with an intial value of 50 since it will be the minimum # of bars 
  let [sliderState, sliderValue] = useState(15); 
  const [array, setRandomArray] = useState([]);
  
  //Use states for the sorting methods
  const [activeIndex, setActiveIndex] = useState(null); 
  const [nextIndex, setNextIndex] = useState(null); 
  const [disableOptions, setBool ] = useState(null); 


   //UseEffect everytime the state of the slider, meaning we have a new value here 
    /*useEffect will be ran when the state of the slider changes */
    useEffect(() => {   
        
      //Create the random array and load it with the values needed
      const generatedArray = [sliderState]; 

      for (let i = 0; i < sliderState; i++) { 
          generatedArray[i] = randomInteger(40, 850); 
      }

      setRandomArray(generatedArray); 
      console.log(generatedArray); 

  },[sliderState]); //Depends on the sliderState 


/*This function will be used to control this state from the app */
  function ControlSliderState(value) { 

    //sliderState = value;
    sliderValue(value); 

  }

  /* Various setters to control the state from the 
  main App controller; getters optional here*/ 

  function setArrayState(newGeneration) { 
    setRandomArray(newGeneration); 
  }

  function getArrayState() { 
    return array; 
  }

  function getSliderState() { 
    return sliderState; 
  }

  function setIndex(index) { 
    setActiveIndex(index); 
}

  function getIndex() { 
    return activeIndex; 
  }

  function setFollowingIndex(index) { 
    setNextIndex(index); 
  }

  function getFollowingIndex() {
    return nextIndex;
  }


  function setDisable(boolean) { 
    setBool(boolean); 
  }

  function getDisableValue() { 
    return disableOptions; 
  }


  return (
    <div className="App"> 

      
      {/*This is the header of the program which acts as the controller*/}
      <Header
        
        ControlSliderState={ControlSliderState}
        getSliderState={getSliderState}
        setArrayState={setArrayState}
        getArrayState={getArrayState}
        bubbleSort={bubbleSort}
        MergeSort={MergeSort}
        QuickSort={QuickSort}
        HeapSort={HeapSort}
        setIndex={setIndex}
        setFollowingIndex={setFollowingIndex}
        setDisable={setDisable}
        getDisableValue={getDisableValue}


      />

      {/*This is the body where we are able to see the bars and such*/}
      <Body

        data={array}
        //setIndex={setIndex}
        getIndex={getIndex}
        //setFollowingIndex={setFollowingIndex}
        getFollowingIndex={getFollowingIndex}
       // setDisable={setDisable}
        //getDisableValue={getDisableValue}

      />
      

     
    </div>
    
  );
}

export default App;

