const selectionSort = require('./selection-sort')
    , bubbleSort = require('./bubble-sort')
    , insertionSort = require('./insertion-sort')
    , shellSort = require('./shell-sort')
    , mergeSort1 = require('./mergeSort/top2low')
    , mergeSort2 = require('./mergeSort/low2top')
    , quickSort = require('./quickSort/quickSort')
    , nativeSort = require('./nativeSort')
function getRandomArray(len) {
    const arr = new Array(len)
    for (let i = 0;i < len;i++) {
        arr[i] = Math.floor(Math.random()*len)
    }
    return arr
}
const arr = getRandomArray(20)
function runSortAndShowTime(func, arr) {
    let res
        , startTime = new Date().getTime()
    res = func(arr)
    let endTime = new Date().getTime()
    console.log(endTime-startTime+'ms')
    return res
}

// runSortAndShowTime(bubbleSort, arr)
// runSortAndShowTime(selectionSort, arr)
// runSortAndShowTime(insertionSort, arr)
// runSortAndShowTime(shellSort, arr)
// runSortAndShowTime(mergeSort1, arr)
// runSortAndShowTime(mergeSort2, arr)
// runSortAndShowTime(quickSort, arr)
// runSortAndShowTime(nativeSort, arr)

// console.log(bubbleSort(arr))
// console.log(selectionSort(arr))
// console.log(insertionSort(arr))
// console.log(shellSort(arr))
// console.log(mergeSort1(arr))
// console.log(mergeSort2(arr))
console.log(quickSort(arr))
// console.log(arr)
