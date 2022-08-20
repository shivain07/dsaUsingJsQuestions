
let binarySearch = (arr, target, start, end) => {
    let s = start;
    let e = end;

    let m = s + parseInt((e - s) / 2);

    while (s <= e) {
        if (arr[m] == target) {
            return m;
        } else if (arr[m] > target) {
            e = m - 1;
        } else {
            s = m + 1;
        }
        m = s + parseInt((e - s) / 2);
    }
    return -1;
}
let findPivot = (arr) => {
    let s = 0;
    let e = arr.length - 1;

    let mid = s + parseInt((e - s) / 2);
    while (s <= e) {
        if (arr[mid] > arr[0]) {
            s = mid + 1;
        } else {
            e = mid;
        }
    }
    return s;
}

let pivot = findPivot(arr);
if (target > arr[pivot]) {
    return binarySearch(arr, target, 0, pivot);
} else {
    return binarySearch(arr, target, pivot, arr.length);
}