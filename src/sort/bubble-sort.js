function sort(arr) {
    for (let i = 0, len = arr.length;i < len;i++) {
        for (let j = 0;j < len-1;j++) {
            if (arr[j] < arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
module.exports = sort