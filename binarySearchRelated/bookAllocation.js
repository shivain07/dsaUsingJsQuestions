
function allocate(arr, k) {
    if (k > arr.length) return -1;
    let end = (() => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    })();
    let start = Math.max(...arr);
    let mid = start + parseInt((end - start) / 2);

    let result = -1;
    while (start <= end) {
        if (isPossible(arr, k, mid)) {
            result = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = start + parseInt((end - start) / 2);
    }
    return result;
}

const isPossible = (arr, k, mid) => {
    console.log(arr, k, mid)
    let sum = 0;
    let n = 1;
    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] > mid) {
            sum = arr[i];
            n++
        } else {
            // n++
            // if (arr[i] > mid || n > k) {
            //     return false;
            // }
            sum += arr[i];
        }
    }
    return n <= k;
}

console.log(allocate([12, 34, 67, 90], 2))      