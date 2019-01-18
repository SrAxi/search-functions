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
            return i;
        }
    }
}

console.log('linearSearch result', linearSearch(10, 7));

// binary search
// Amount of possible comparisons = log2 n
function binarySearch(n, x) {
    const arr = createArray(n);
    const getHalf = (chunk, num) => chunk[num/2];
    let currentIndex = getHalf(arr, n);

    // put this in a loop
    if (x === currentIndex) {
        return currentIndex;
    } else if (x < currentIndex) {
        // get left chunk
    } else {
        // get right chunk
    }



    return getHalf(arr, n);
}

console.log('binarySearch result', binarySearch(10, 7));
