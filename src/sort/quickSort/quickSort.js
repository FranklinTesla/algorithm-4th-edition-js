const partition = require('./partition')
function quickSort (arr, lo = 0, hi = arr.length - 1) {
    let temp = [...arr]
    if (lo >= hi) {
        return temp
    }
    const {j, result} = partition(temp, lo, hi)
    return quickSort(quickSort(result, lo, j - 1), j + 1, hi)
}
module.exports = quickSort