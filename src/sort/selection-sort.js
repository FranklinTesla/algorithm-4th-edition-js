function sort(arr) {
    for (let i = 0, len = arr.length;i < len;i++) {
        for (let j = i + 1, len = arr.length;j < len;j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
module.exports = sort