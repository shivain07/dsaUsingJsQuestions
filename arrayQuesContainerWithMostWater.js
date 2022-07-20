/**
 * @desc container with most water problem array
 */


//my first approach
const containerWithMostWaTer = (arr) => {
    if (arr.length > 2) {
        let prevSum = arr[1] + arr[0];
        let prevDiff = Math.abs(arr[1] - arr[0]);
        let elArr = [arr[0], arr[1]]

        for (let i = 1; i < arr.length; i++) {
            let diff = Math.abs(arr[i] - arr[i - 1])
            let sum = arr[i] + arr[i - 1];
            if (prevDiff >= diff && sum > prevSum) {
                // if (sum > prevSum) {
                    elArr[0] = (arr[i - 1]);
                    elArr[1] = (arr[i]);
                    prevDiff = diff;
                    prevSum = sum
                // }
            }
        }
        return elArr;

    } else {
        return arr;
    }
}


console.log(containerWithMostWaTer([1, 5, 6, 3, 4]))
console.log(containerWithMostWaTer([5,5, 6,11, 10, 4]))