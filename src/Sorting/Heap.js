import {sleep} from './Timer';
import timerScale from './TimerScale';
import sortValidation from './SortValidation';



/*This function will act as the controller and perform the main sort */
async function heapSort(array, setArrayState, setIndex, setFollowingIndex) {
    let size = array.length;

    // build heapSort (rearrange array)
    for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {

        await sleep(timerScale(array.length, 200));
        setIndex(i);
        setFollowingIndex(i - 1);


        heapify(array, size, i, setArrayState, setIndex, setFollowingIndex);
        await sleep(timerScale(array.length, 200));
    }

    //one by one extract an element from heapSort
    for (let i = size - 1; i >= 0; i--) {

        await sleep(timerScale(array.length, 200));
        setIndex(i);
        setFollowingIndex(i - 1);

        // move current root to end
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        await sleep(timerScale(array.length, 200));
        const newHeapArray = array.slice(0);
        setArrayState(newHeapArray);

        //call max heapify on the reduced heapSort
        heapify(array, i, 0, setArrayState, setIndex, setFollowingIndex);

    }
}

// to heapify a subtree rooted with node i which is an index in array[]
async function heapify(array, size, i, setArrayState, setIndex, setFollowingIndex) {


    let max = i; // initialize max as root
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    // if left child is larger than root
    if (left < size && array[left] > array[max]) {
        max = left;
    }



    // if right child is larger than max
    if (right < size && array[right] > array[max]) {
        max = right;
    }


    // if max is not root
    if (max !== i) {


        // swap the elements here and update their colours
        let temp = array[i];
        array[i] = array[max];
        array[max] = temp;


        // recursively heapify the affected sub-tree
        heapify(array, size, max, setArrayState, setIndex, setFollowingIndex);

    }
}

/*This function will be the controller and commence the heapsort */
export default async function HeapSort(getArrayState, setArrayState, setIndex,
    setFollowingIndex, setDisable) {


    let array = getArrayState();

    //Continue the sort if its not sorted already
    if (sortValidation(array) === false) {

        setDisable(true);


        //Perform the sort from the sorting function 
        await heapSort(array, setArrayState, setIndex, setFollowingIndex);

        //Update this new array to the screen
        const newHeapArray = array.slice(0);
        setArrayState(newHeapArray);

        //Clear any colours off the screen 
        setIndex(null);
        setFollowingIndex(null);

        setDisable(false);

    } else {
        alert("Please Generate a new Array\n as current is sorted");
    }


};