function sort(arr) {
    for (let i = 1, len = arr.length;i < len;i++) {
        for (let j = i;j > 0;j--) {
            if (arr[j - 1] < arr[j]) {
                let temp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
module.exports = sort