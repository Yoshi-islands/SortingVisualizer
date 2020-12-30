import {sleep} from './Timer';
import timerScale from './TimerScale';
import sortValidation from './SortValidation';



/*
    Within quicksort pivot is picked and everything within the
    array that is less than the pivot is sorted to the left 
    and greater to the right of hte pivot 

    then more pivots are picked and this continues for 
    each half. The left hand side is then sorted 



*/

/* This function will swap elements at certain indices of given array*/
let swap = async (arr, i, j) => {

    await sleep(timerScale(arr.length, 200));


    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

    //await sleep(timerScale(arr.length, 200));
};


/* This function creates a partition for us 
and will create a pivot point for the quick sort*/

let partition = async (arr, low, high, setIndex, setFollowingIndex, setArrayState) => {

    let q = low,
        i;

    /*This for loop iterates the length of the array to be sorted 
      and will be comparing eahc element to the high
    */
    for (i = low; i < high; i++) {

        if (arr[i] < arr[high]) {

            setIndex(i);
            setFollowingIndex(high);

            await swap(arr, i, q);
            q++;

            const newQuickArray = arr.slice(0);
            setArrayState(newQuickArray);
        }
    }
    await swap(arr, i, q);
    return q;
};

/* This function recursively performs a quicksort */
let quickSort = async (arr, low, high, setIndex, setFollowingIndex, setArrayState) => {

    if (low < high) {

        //Determine the pivot point for the merge sort
        let pivot = await partition(arr, low, high, setIndex, setFollowingIndex, setArrayState);

        //Recursively sort the left side here
        await quickSort(arr, low, pivot - 1, setIndex, setFollowingIndex, setArrayState);

        //Recursively sort the right side here
        await quickSort(arr, pivot + 1, high, setIndex, setFollowingIndex, setArrayState);
        return arr;
    }
};


export default async function QuickSort(

    getArrayState, setArrayState, setIndex, setFollowingIndex, setDisable

) {

    let array = getArrayState();
    if (sortValidation(array) === false) {
        setDisable(true);
        const length = array.length;

        array = await quickSort(array, 0, length - 1, setIndex, setFollowingIndex, setArrayState);

        //Update this new array to the screen
        const newQuickArray = array.slice(0);
        setArrayState(newQuickArray);

        //Clear any colours off the screen 
        setIndex(null);
        setFollowingIndex(null);


        setDisable(false);
    } else {
        alert("Please Generate a new Array\n as current is sorted");
    }


}