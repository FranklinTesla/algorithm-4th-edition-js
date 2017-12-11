module.exports = function (arr, lo, hi) {
    const result = [...arr]
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
        const temp = result[j]
        result[j] = result[i]
        result[i] = temp
    }
    const temp = result[lo]
    result[lo] = result[j]
    result[j] = temp
    return {result, j}
}