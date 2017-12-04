/**
 * 自顶向下的归并排序
 * @type {*|(function(): result)}
 */
const merge = require('./merge')
function sort(arr, lo = 0, hi = arr.length - 1) {
    let temp = [...arr]
    const mid = lo + Math.floor((hi - lo) / 2)
    if (hi <= lo) {
        return temp
    }
    temp = sort(temp, lo, mid)
    temp = sort(temp, mid + 1, hi)
    return merge(temp, lo, mid, hi)
}
module.exports = sort