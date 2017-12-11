const exch = require('./exchange')
function sort(arr) {
    let result = [...arr]
    for (let i = 0, len = result.length;i < len;i++) {
        for (let j = i + 1, len = result.length;j < len;j++) {
            if (result[i] < result[j]) {
                result = exch(result, i, j)
            }
        }
    }
    return result
}
module.exports = sort