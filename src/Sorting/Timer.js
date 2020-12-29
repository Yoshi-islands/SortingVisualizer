/*This function will return a promise that will be resolved 
within a certain number being milliseconds*/
export const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}