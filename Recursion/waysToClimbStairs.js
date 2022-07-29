
/**
 * @recursion fanda -->
 * 
 * chotaProb =fx
 * bdaprob=fx+something
 * return badaproblem
 * 
 * 
 * must include @base case and return statement
 */

/**
 * 
 * @ques There are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2 stairs at a time. Count the number of ways, the person can reach the top (order does matter).
 * @returns no of ways to reach stair top
 */


//way 1 recursion <can be more optimizsed>
const countWay = (n) => {
    if (n < 0) {
        return 0;  //if no step is there then return 0
    }
    if (n == 0) {
        return 1; // if n <no.ofstep> == 0 it signify that there is no step to climb the person still have a step though the one in which he is standing
    }
    let fn = countWay(n - 1) + countWay(n - 2);
    return fn;
}

countWay(n);
