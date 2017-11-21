function merge(arr, lo, mid, hi) {
    let left = lo
        , right = mid+1
    const aux = [...arr]
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
function sort(arr, lo = 0, hi = arr.length-1) {
    let temp = [...arr]
    if (hi > lo) {
        const mid = lo+parseInt((hi-lo)/2)
        temp = sort(temp, lo, mid)
        temp = sort(temp, mid+1, hi)
        return temp[mid] > temp[mid+1]? merge(temp, lo, mid, hi): temp
    }
    return temp
}
module.exports = sort