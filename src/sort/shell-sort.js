/**
 * 在js中可能由于计算h的问题，希尔排序反而更耗时间
 * @param arr
 * @returns {*}
 */
function sort(arr) {
    const result = [...arr]
    let h = 1
        , len = result.length
        , hi = len / 3
    while (h < hi) {
        h = 3 * h + 1
    }
    while (h >= 1) {
        for (let i = h;i < len;i++) {
            for (let j = i;j >= h;j -= h) {
                if (result[j] > result[j - h]) {
                    const temp = result[j]
                    result[j] = result[j - 1]
                    result[j - 1] = temp
                }
            }
        }
        h = Math.floor(h / 3)
    }
    return result
}
module.exports = sort