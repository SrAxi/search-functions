const { createArray, linearSearch, linearMaxComparisons, binarySearch, binaryMaxComparisons } = require('./search-functions');

test('Should create correctly an array with given n length', () => {
    expect(createArray(10).length).toEqual(10);
});

test('Should create correctly an ordered array of numbers from 0 to n', () => {
    expect(createArray(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('Should calculate correctly the max amount of comparisons for linear algorithm', () => {
    expect(linearMaxComparisons(1000)).toBe(1000);
});

test('Should calculate correctly the max amount of comparisons for binary algorithm', () => {
    expect(binaryMaxComparisons(1000)).toBe(10);
});

test('Should find correctly the element using linear algorithm', () => {
    const arr10 = createArray(10);
    const arr100 = createArray(100);
    const arr1000 = createArray(1000);
    expect(linearSearch(arr10, 7)).toBe(7);
    expect(linearSearch(arr100, 77)).toBe(77);
    expect(linearSearch(arr1000, 777)).toBe(777);
});

test('Should find correctly the element using binary algorithm', () => {
    const arr10 = createArray(10);
    const arr100 = createArray(100);
    const arr1000 = createArray(1000);
    expect(binarySearch(arr10, 7)).toBe(7);
    expect(binarySearch(arr100, 77)).toBe(77);
    expect(binarySearch(arr1000, 777)).toBe(777);
});
