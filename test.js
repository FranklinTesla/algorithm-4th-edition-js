const selectionSort = require('./src/sort/selection-sort')
    , bubbleSort = require('./src/sort/bubble-sort')
    , insertionSort = require('./src/sort/insertion-sort')
    , arr = [4, 5,3, 5,8,90,2323,33]


console.log(bubbleSort(arr), selectionSort(arr), insertionSort(arr))