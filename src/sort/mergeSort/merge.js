module.exports = function (arr, lo, mid, hi) {
    let left = lo
        , right = mid + 1
    const aux = [...arr] = [...arr]
    for (let k = lo;k <= hi;k++) {
        if (left > mid) {
            arr[k] = aux[right++]
        } else if(right > hi) {
            arr[k] = aux[left++]
        } else if (aux[right] > aux[left]) {
            arr[k] = aux[right++]
        } else {
            arr[k] = aux[left++]
        }
    }
    return arr
}