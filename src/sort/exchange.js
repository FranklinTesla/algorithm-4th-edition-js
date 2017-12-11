module.exports = function (arr, i, j) {
    const result = [...arr]
        , temp = result[i]
    result[i] = result[j]
    result[j] = temp
    return result
}