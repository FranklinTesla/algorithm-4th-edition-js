const exchange = require('../exchange')
module.exports = function (arr, lo, hi) {
    let result = [...arr]
    let v = result[lo]
        , j = hi + 1
        , i = lo
    while (true) {
        while (result[++i] > v) {
            if (i === hi) {
                break
            }
        }
        while (result[--j] < v) {
            if (j === lo) {
                break
            }
        }
        if (i >= j) {
            break
        }
        result = exchange(result, i, j)
    }
    result = exchange(result, lo, j)
    return {result, j}
}