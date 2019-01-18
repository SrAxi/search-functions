# search-functions
Creating search functions with different algorithms: `linear` and `binary`.

-------------------
Performance tests are done by running the functions with ascending parameters 100 times each and calculating an average for each parameter set.

An example of the Performance test:

```
linearSearch(100, 99) time: 0.0282ms
binarySearch(100, 99) time: 0.0199ms
---------------------
linearSearch(1000, 999) time: 0.0155ms
binarySearch(1000, 999) time: 0.0098ms
---------------------
linearSearch(10000, 9999) time: 0.0627ms
binarySearch(10000, 9999) time: 0.0869ms
---------------------
linearSearch(100000, 99999) time: 2.0853ms
binarySearch(100000, 99999) time: 1.9895ms
---------------------
linearSearch(1000000, 999999) time: 24.6876ms
binarySearch(1000000, 999999) time: 28.2655ms
---------------------
linearSearch(10000000, 9999999) time: 270.0354ms
binarySearch(10000000, 9999999) time: 305.2911ms
---------------------
```
