/**
 * 自底向上的归并排序
 * @type {*|(function(): result)}
 */
const merge = require('./merge')
function sort(arr, size = 2) {
    if (size >= arr.length) {
        return arr
    }
    let result = []
    for (let i = 0, len = arr.length;i < len;i += size) {
        let temp = arr.slice(i, i + size)
            , len = temp.length
        temp = merge(temp, 0, Math.floor(len / 2), len - 1)
        result = result.concat(temp)
    }
    return sort(result, 2 * size)
}
module.exports = sort