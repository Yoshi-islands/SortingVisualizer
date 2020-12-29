import {sleep} from './Timer';
import timerScale from './TimerScale';
import sortValidation from './SortValidation';

export default async function bubbleSort(

    getArrayState, setArrayState, setIndex, setFollowingIndex, setDisable) {


    let bubbleArray = getArrayState();
    console.log(sortValidation(bubbleArray));

    //If the array is not sorted we will continue here
    if (sortValidation(bubbleArray) === false) {

        let len = bubbleArray.length;


        /*With the first for loop we are intending to 
        bubble one element to the end of the array 
        */
        setDisable(true);

        for (let i = 0; i < len; i++) {

            if (sortValidation(bubbleArray) === true) {
                break;
            }

            let j;

            //The second for loop will then compare that element with the next 
            for (j = 0; j < len; j++) {

                //Swap the elements accordingly
                if (bubbleArray[j] > bubbleArray[j + 1]) {

                    /*
                        At first the greater element is red 
                        and then the smaller element is green
                        but since they are swapped this will switch itself
                    */

                    //Await a scaled sleep timer for the bubble sort
                    await sleep(timerScale(getArrayState().length, 200));

                    setIndex(j);
                    setFollowingIndex(j + 1);

                    await sleep(timerScale(getArrayState().length, 200));

                    let tmp = bubbleArray[j];
                    bubbleArray[j] = bubbleArray[j + 1];
                    bubbleArray[j + 1] = tmp;

                    /*We need to update the state after each swap */
                    const newBubbleArray = bubbleArray.slice(0);
                    setArrayState(newBubbleArray);

                } else { //in the case that the first element is smaller

                    setIndex(j); //This will continue tracking to show the visual process

                }

                await sleep(timerScale(getArrayState().length, 100));

            }

        }

        //set the current indices to null to remove colour
        setIndex(null);
        setFollowingIndex(null);

        //Set the state for the final array just in case
        const newBubbleArray = bubbleArray.slice(0);
        setArrayState(newBubbleArray);

        //Allow other buttons to be accessed again
        setDisable(false);

    } else {
        alert("Please Generate a new Array\n as current is sorted");
    }


};