/**
 * @binary search using recursion
 */

// const bsearch = (arr, elem) => {
//     let mid = Math.floor(arr.length / 2);
//     console.log(mid ,"<--")
//     if (elem = arr[mid]) {
//         return "FOUND"
//     }
//     if (elem < arr[mid]) {
//         // search from 0-mid 
//         bsearch(arr.slice(0, mid), elem)
//     }
//     else if (elem > arr[mid]) {
//         //search from mid-size
//         bsearch(arr.slice(mid), elem)
//     }
//     else return "NOT FOUND"
// }

// console.log(bsearch([1, 2, 3], 0))
const bsearch = (arr, elem) => {
    let mid = Math.floor(arr.length / 2);
    // console.log(mid ,"<--",arr)
    if (elem = arr[mid]) {
        return "FOUND"
    }
    else if (elem < arr[mid]) {
        // search from 0-mid 
        bsearch(arr.slice(0, mid + 1), elem)
    }
    else if (elem > arr[mid]) {
        //search from mid-size
        bsearch(arr.slice(mid - 1), elem)
    }
    return "NOT FOUND"
}

// console.log(bsearch([1, 2, 3, 4, 5, 6], 0))
// console.log([1, 2, 3, 4, 5].slice(2))





//binary search iterative

function binarySearch(arr, elem) {

    let start = 0;
    let end = arr.length - 1;
    let mid = start + Math.floor((end - start) / 2); // we can simple use (start+end) divide by 2 but for extreme test cases in which we know int can max be 2^31-1 and if both end and start = 2^31-1 then problem may arise so we used start+(end-start)/2
    // mid = Math.floor((start + end) / 2)
    while (start <= end) {
        if (elem == arr[mid]) {
            return console.log("Elem found");
        }

        if (elem < arr[mid]) {
            //go left
            end = mid - 1; //as we already checked for mid so end will shift to left in mid-1 
        } else {
            start = mid + 1;
        }
        mid = start + Math.floor((end - start) / 2);
        // mid = Math.floor((start + end) / 2)
    }
    return console.log("NO Found");
}

// binarySearch([5, 4, 3, 2, 1], 2)
binarySearch([1, 2, 3, 4, 5], 45)