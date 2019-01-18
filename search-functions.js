/**********************************************
 * Searching x in a sorted array of n numbers *
 **********************************************/

// Helper for creating an Array with a given length
function createArray(n) {
    return [...Array(n).keys()];
}

// linear search
// Amount of possible comparisons = n
function linearSearch(n, x) {
    const arr = createArray(n);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return arr[i];
        }
    }
}

// binary search
// Amount of possible comparisons = log2 n
function binarySearch(n, x) {
    let arr = createArray(n);
    const halfLength = (chunk) => Math.ceil(chunk.length / 2);
    const getMiddle = (chunk) => chunk[halfLength(chunk)];
    const getLeftSide = (chunk) => chunk.slice(0, halfLength(chunk));
    const getRightSide = (chunk) => chunk.slice(halfLength(chunk), chunk.length);

    let currentElem = getMiddle(arr);

    if (x === currentElem) return currentElem;

    while (x !== currentElem) {
        if (x < currentElem) {
            // get left chunk
            arr = getLeftSide(arr);
            currentElem = getMiddle(arr);
        } else {
            // get right chunk
            arr = getRightSide(arr);
            currentElem = getMiddle(arr);
        }
    }

    return currentElem;
}

module.exports = {
    linearSearch,
    binarySearch,
};
