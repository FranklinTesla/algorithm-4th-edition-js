const selectionSort = require('./src/sort/selection-sort')
    , bubbleSort = require('./src/sort/bubble-sort')
    , insertionSort = require('./src/sort/insertion-sort')
    , shellSort = require('./src/sort/shell-sort')
    , mergeSort1 = require('./src/sort/mergeSort/top2low')
    , mergeSort2 = require('./src/sort/mergeSort/low2top')
function getRandomArray(len) {
    const arr = new Array(len)
    for (let i = 0;i < len;i++) {
        arr[i] = Math.floor(Math.random()*len)
    }
    return arr
}
const arr = getRandomArray(1000)
function runSortAndShowTime(func, arr) {
    let res
        , startTime = new Date().getTime()
    res = func(arr)
    let endTime = new Date().getTime()
    console.log(endTime-startTime+'ms')
    return res
}

runSortAndShowTime(bubbleSort, arr)
runSortAndShowTime(selectionSort, arr)
runSortAndShowTime(insertionSort, arr)
runSortAndShowTime(shellSort, arr)
runSortAndShowTime(mergeSort1, arr)
runSortAndShowTime(mergeSort2, arr)
