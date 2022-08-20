/**
 * 
 * @checks if array is sorted by recursion
 */

function check(arr, l) {
    if (l == 0) {
        return true;
    }
    if (l == 1) {
        return true;
    }
    else {
        if (arr[0] > arr[1]) {
            return false;
        }
    }

    console.log(arr)
    return check(arr.slice(1), l - 1)
}
console.log(check([2, 2, 3], 3))

/**
 * @sumOfArr 
 */

function sum(arr, size) {
    if (size == 0) {
        return 0;
    }
    if (size == 1) {
        return arr[0];
    }
    let remArr = check(arr.splice(1), size - 1);
    let sum = arr[0] + remArr;
    return sum;
}
console.log(sum([3, 2, 3], 3));