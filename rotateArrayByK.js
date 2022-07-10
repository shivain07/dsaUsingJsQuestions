/**
 * @desc rotate array by k times 
 * [1,2,5,3] k=2 -> [5,3,1,2]
 */


// method 1

function rotate(arr, k) {
    k = k % arr.length //so that we get actual rotation need example k=7 arr.length=3 the rotatin needed == 7%3 =1
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

console.log(rotate([2, 4, 5, 1], 2))
console.log(rotate([2, 4, 5, 7, 1], 3))
console.log(rotate([1, 2, 3], 2))

// method 2

function rotate2(arr, k) {
    k = k % arr.length //so that we get actual rotation need example k=7 arr.length=3 the rotatin needed == 7%3 =1
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        tempArr[(i + k) % arr.length] = arr[i]
    }
    return tempArr;
}

console.log(rotate2([2, 4, 5, 1], 2))
console.log(rotate2([2, 4, 5, 7, 1], 3))
console.log(rotate2([1, 2, 3], 2))