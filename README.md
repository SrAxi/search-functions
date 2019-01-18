# search-functions
Creating search functions with different algorithms: `linear` and `binary`.

-------------------
To run the performance test: `node performance-test.js`

To run the Unit tests: `npm test` or `yarn test`

-------------------
Performance tests are done by running the functions with ascending parameters 100 times each and calculating an average for each parameter set.

They also return the maximum amount of comparisons for each algorithm for the given array size (`n`).

An example of the Performance test:

```
linearMaxComparisons(100): 100
binaryMaxComparisons(100): 7
linearSearch(100, 99) time: 0.0296ms
binarySearch(100, 99) time: 0.0167ms
---------------------
linearMaxComparisons(1000): 1000
binaryMaxComparisons(1000): 10
linearSearch(1000, 999) time: 0.0161ms
binarySearch(1000, 999) time: 0.0097ms
---------------------
linearMaxComparisons(10000): 10000
binaryMaxComparisons(10000): 14
linearSearch(10000, 9999) time: 0.0629ms
binarySearch(10000, 9999) time: 0.0811ms
---------------------
linearMaxComparisons(100000): 100000
binaryMaxComparisons(100000): 17
linearSearch(100000, 99999) time: 2.0765ms
binarySearch(100000, 99999) time: 2.0207ms
---------------------
linearMaxComparisons(1000000): 1000000
binaryMaxComparisons(1000000): 20
linearSearch(1000000, 999999) time: 24.7824ms
binarySearch(1000000, 999999) time: 27.9462ms
---------------------
linearMaxComparisons(10000000): 10000000
binaryMaxComparisons(10000000): 24
linearSearch(10000000, 9999999) time: 268.7915ms
binarySearch(10000000, 9999999) time: 301.8867ms
---------------------
```
