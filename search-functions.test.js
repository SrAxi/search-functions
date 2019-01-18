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
    expect(linearSearch(10, 7)).toBe(7);
    expect(linearSearch(100, 77)).toBe(77);
    expect(linearSearch(1000, 777)).toBe(777);
});

test('Should find correctly the element using binary algorithm', () => {
    expect(binarySearch(10, 7)).toBe(7);
    expect(binarySearch(100, 77)).toBe(77);
    expect(binarySearch(1000, 777)).toBe(777);
});
