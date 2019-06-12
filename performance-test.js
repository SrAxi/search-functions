const { performanceTest } = require('function-performance-test');
const {
    linearSearch,
    linearMaxComparisons,
    binarySearch,
    binaryMaxComparisons,
    createArray,
} = require('./search-functions');

// Logging tests
function functionsTester(length, numberToFind) {
    const arr = createArray(length);
    const testSubjects = [
        { fn: linearSearch, args: [arr, numberToFind] },
        { fn: binarySearch, args: [arr, numberToFind] },
    ];
    const pt = performanceTest(testSubjects);
    const results = pt.run();

    console.log(`linearMaxComparisons(${length}): ${linearMaxComparisons(length)}`);
    console.log(`binaryMaxComparisons(${length}): ${binaryMaxComparisons(length)}`);
    results.forEach((result) => {
        console.log(`${result.functionName}, size: ${length}, average: ${result.averageTime}ms`);
    });
    console.log('---------------------');
}

// Testing performance
function testPerformance() {
    functionsTester(100, 99);
    functionsTester(1000, 999);
    functionsTester(10000, 9999);
    functionsTester(100000, 99999);
    // functionsTester(1000000, 999999);
    // functionsTester(10000000, 9999999);
}

testPerformance();
