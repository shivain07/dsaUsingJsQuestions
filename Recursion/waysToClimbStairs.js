/**
 * 
 * @ques There are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2 stairs at a time. Count the number of ways, the person can reach the top (order does matter).
 * @returns no of ways to reach stair top
 */


//way 1 recursion <can be more optimizsed>
const countWay = (n) => {
    if (n < 0) {
        return 0;
    }
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 1;
    }
    let fn = countWay(n - 1) + countWay(n - 2);
    return fn;
}

countWay(n);
