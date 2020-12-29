import {sleep} from './Timer';
import timerScale from './TimerScale';
import sortValidation from './SortValidation';


//This function will merge the arrays
const merge = async (left, right, leftLimit, rightLimit, sorted, buffer, setIndex, setFollowingIndex) => {

  let i = left;

  //Compare the two sub arrays and merge them in the sorted order
  while (left < leftLimit && right < rightLimit) {

    //Allows us to see the different sections that are being partioned 
    setIndex(left);
    setFollowingIndex(right);

    if (sorted[left] <= sorted[right]) {

      buffer[i++] = sorted[left++];
    } else {
      buffer[i++] = sorted[right++];
    }
  }

  //Sleep to show colour progression here
  await sleep(timerScale(sorted.length, 400));


  //If there are elements in the left sub arrray then add it to the result
  while (left < leftLimit) {
    buffer[i++] = sorted[left++];
  }

  //If there are elements in the right sub array then add it to the result
  while (right < rightLimit) {
    buffer[i++] = sorted[right++];
  }

}

const mergeSort = async (arr, setIndex, setFollowingIndex, setArrayState) => {


  //Create two arrays for sorting
  let sorted = Array.from(arr);
  let n = sorted.length;
  let buffer = new Array(n);

  /*

  The first for loop will iterate for the whole array giving a bounds 
  for the second array which works bottom to top solution. 

  Non recursive solution : Hence the reason we start bottom up

  */
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {

      //Get the two sub arrays
      let left = leftStart,
        right = Math.min(left + size, n),
        leftLimit = right,
        rightLimit = Math.min(right + size, n);

      //Merge the sub arrays
      await merge(left, right, leftLimit, rightLimit, sorted, buffer, setIndex, setFollowingIndex);
    }

    //Swap the sorted sub array and merge them
    let temp = sorted;
    sorted = buffer;
    buffer = temp;


    //Certain portion will be sorted at this point 
    const newBubbleArray = sorted.slice(0);
    setArrayState(newBubbleArray);


  }

  return sorted;
}



export default async function MergeSort(

  getArrayState, setArrayState, setIndex, setFollowingIndex, setDisable

) {

  let mergeArray = getArrayState();
  if (sortValidation(mergeArray) === false) {

    //Disable the use of buttons here 
    setDisable(true);

    const newMergeArray = await mergeSort(mergeArray, setIndex, setFollowingIndex, setArrayState);
    setArrayState(newMergeArray);

    //Remove any colours left over
    setIndex(null);
    setFollowingIndex(null);

    //Allow buttons to be pressed again
    setDisable(false);

  } else { 
    alert("Please Generate a new Array\n as current is sorted");
  }



}