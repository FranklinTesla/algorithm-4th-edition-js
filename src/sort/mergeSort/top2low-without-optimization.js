const merge = require('./merge')
function sort(arr, lo = 0, hi = arr.length - 1) {
    let temp = [...arr]
    if (hi > lo) {
        const mid = lo + Math.floor((hi - lo) / 2)
        temp = sort(temp, lo, mid)
        temp = sort(temp, mid + 1, hi)
        return temp[mid] > temp[mid + 1]? merge(temp, lo, mid, hi): temp
    }
    return temp
}
module.exports = sort