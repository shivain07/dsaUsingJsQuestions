
/**
 * 
 * @Ques find first and last occurence of an element if present else return -1
 * ex- Input:
      n=9, x=5
       arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
      Output:  2 5
        Explanation: First occurrence of 5 is at index 2 and last
             occurrence of 5 is at index 5. 
 */
function find(arr, n, x) {

    const findOccurence = (arr, size, elem, isLeft) => {
        let start = 0;
        let end = size - 1;
        let mid = start + parseInt((end - start) / 2);
        let ans = -1;

        while (start <= end) {
            if (arr[mid] == elem) {
                ans = mid;
                isLeft ? end = mid - 1 : start = mid + 1;

            } else if (arr[mid] > elem) {
                end = mid - 1;
            } else if (arr[mid] < elem) {
                start = mid + 1;
            }
            mid = start + parseInt((end - start) / 2);
        }
        return ans;
    }

    return [findOccurence(arr, n, x, true), findOccurence(arr, n, x, false)]
}


/**
 * @Ques find the total no. of occurence similar question 
 *               0  1  2  3  4  5  6   7    8
       arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 } ,5

       firstOcc->2 lastOcc-->5 
       totalOcc -->  (5-2)+1 = 4 🤙
 *  output => 4 

       @hint find first and last occurence ( @lastIndex - @firstIndex ) + 1 == total no. of occurence 
 */