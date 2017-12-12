module.exports = function (arr) {
    const result = [...arr]
    result.sort((a, b) => {
        if (a < b) {
            return 1
        }
        if (a > b) {
            return -1
        }
        if (a === b) {
            return 0
        }
    })
    return result
}