
let numarr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
function prDig(n, arr) {
    if (n == 0) {
        return;
    }
    let digit = n % 10;
    n = Math.floor(n / 10);
    console.log(arr[digit]);
    prDig(n, arr)
}

prDig(352, numarr)