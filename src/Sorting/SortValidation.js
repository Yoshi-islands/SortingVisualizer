/*This function will check if the array given as param is sorted or not   */
export default function sortValidation(array) {

    //Iterate and check each of the pairs in the array
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }

    }

    return true;


};