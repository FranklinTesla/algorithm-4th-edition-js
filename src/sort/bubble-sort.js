function sort(arr) {
    const result = [...arr]
    for (let i = 0, len = result.length;i < len;i++) {
        for (let j = 0;j < len-1;j++) {
            if (result[j] < result[j+1]) {
                let temp = result[j]
                result[j] = result[j+1]
                result[j+1] = temp
            }
        }
    }
    return result
}
module.exports = sort