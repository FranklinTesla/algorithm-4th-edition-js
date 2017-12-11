const exch = require('./exchange')
function sort(arr) {
    let result = [...arr]
    for (let i = 1, len = result.length;i < len;i++) {
        for (let j = i;j > 0;j--) {
            if (result[j - 1] < result[j]) {
                result = exch(result, j - 1, j)
            }
        }
    }
    return result
}
module.exports = sort