const { performance } = require('perf_hooks');
const { linearSearch, linearMaxComparisons, binarySearch, binaryMaxComparisons } = require('./search-functions');

// Logging tests
function functionsTester(x, y) {
    console.log(`linearMaxComparisons(${x}): ${linearMaxComparisons(x)}`);
    console.log(`binaryMaxComparisons(${x}): ${binaryMaxComparisons(x)}`);
    console.log(`linearSearch(${x}, ${y}) time: ${testIterator(linearSearch, x, y)}ms`);
    console.log(`binarySearch(${x}, ${y}) time: ${testIterator(binarySearch, x, y)}ms`);
    console.log('---------------------');
}

// Testing performance
function testPerformance() {
    functionsTester(100, 99);
    functionsTester(1000, 999);
    functionsTester(10000, 9999);
    functionsTester(100000, 99999);
    functionsTester(1000000, 999999);
    functionsTester(10000000, 9999999);
}

function testIterator(fn, x, y) {
    let durationArr = [], t0, t1;
    for (let i = 0; i < 100; i++) {
        t0 = performance.now();
        fn(x, y);
        t1 = performance.now();
        durationArr.push(+(t1 - t0));
    }
    const durationsSum = durationArr.reduce((a, b) => a + b, 0);
    const averageDuration = durationsSum / durationArr.length;
    return averageDuration.toFixed(4);
}

testPerformance();
