module.exports = function binarySearch(arr, number, low = 0, high = arr.length - 1){
    arr.sort((a, b) => a-b);
    const mid = Math.floor(low + (high - low) / 2)
    if (high >= low) {
        if (arr[mid] === number) {
            // item found => return its index
            return true
        }

        if (number < arr[mid]) {
            // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
            return binarySearch(arr, number, low, mid - 1)
        } else {
            // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
            return binarySearch(arr, number, mid + 1, high)
        }
    } else {
        // if low > high => we have searched the whole array without finding the item
        return false
    }
}