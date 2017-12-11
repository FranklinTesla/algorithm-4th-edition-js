const exch = require('./exchange')
function sort(arr) {
    let result = [...arr]
    for (let i = 0, len = result.length;i < len;i++) {
        for (let j = 0;j < len - 1;j++) {
            if (result[j] < result[j + 1]) {
                result = exch(result, j + 1, j)
            }
        }
    }
    return result
}
module.exports = sort