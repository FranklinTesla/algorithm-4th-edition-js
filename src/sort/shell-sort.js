/**
 * 在js中可能由于计算h的问题，希尔排序反而更耗时间
 * @param arr
 * @returns {*}
 */
function sort(arr) {
    let h = 1
        , len = arr.length
        , hi = len / 3
    while (h < hi) {
        h = 3 * h + 1
    }
    while (h >= 1) {
        for (let i = h;i < len;i++) {
            for (let j = i;j >= h;j -= h) {
                if (arr[j] > arr[j - h]) {
                    const temp = arr[j]
                    arr[j] = arr[j - 1]
                    arr[j - 1] = temp
                }
            }
        }
        h = Math.floor(h / 3)
    }
    return arr
}
module.exports = sort