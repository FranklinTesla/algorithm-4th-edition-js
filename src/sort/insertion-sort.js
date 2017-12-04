function sort(arr) {
    const result = [...arr]
    for (let i = 1, len = result.length;i < len;i++) {
        for (let j = i;j > 0;j--) {
            if (result[j - 1] < result[j]) {
                let temp = result[j - 1]
                result[j - 1] = result[j]
                result[j] = temp
            }
        }
    }
    return result
}
module.exports = sort