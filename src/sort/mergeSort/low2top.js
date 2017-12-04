/**
 * 自底向上的归并排序
 * @type {*|(function(): result)}
 */
const merge = require('./merge')
function sort(arr) {
    let N = arr.length
        , result = [...arr]
    for (let size = 1;size < N;size *= 2) {
        let step = 2 * size
        for (let lo = 0;lo < N - size;lo += step) {
            result = merge(result, lo, lo + size - 1, Math.min(lo + step - 1, N - 1))
        }
    }
    return result
}
module.exports = sort