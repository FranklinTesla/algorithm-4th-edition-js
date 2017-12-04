function sort(arr) {
    const result = [...arr]
    for (let i = 0, len = result.length;i < len;i++) {
        for (let j = i + 1, len = result.length;j < len;j++) {
            if (result[i] < result[j]) {
                let temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }
    return result
}
module.exports = sort