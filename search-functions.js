/**********************************************
 * Searching x in a sorted array of n numbers *
 **********************************************/

// Helper for creating an Array with a given length
// Using for loop for increasing performance
function createArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i)
    }
    return arr;
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

function linearMaxComparisons(n) {
    return n;
}

// binary search
// Amount of possible comparisons = log2 n
function binarySearch(n, x) {
    let arr = createArray(n);
    const halfLength = (chunk) => Math.ceil(chunk.length / 2);
    const getMiddle = (chunk) => chunk[halfLength(chunk)];
    const getLeftSide = (chunk) => chunk.slice(0, halfLength(chunk));
    const getRightSide = (chunk) => chunk.slice(halfLength(chunk));

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

// We calculate log2 n, and then add 1 for when we only have the last element remaining
function binaryMaxComparisons(n) {
    return Math.floor(Math.log2(n)) + 1;
}

module.exports = {
    createArray,
    linearSearch,
    linearMaxComparisons,
    binarySearch,
    binaryMaxComparisons,
};
