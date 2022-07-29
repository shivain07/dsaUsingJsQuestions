
let input = document.querySelector("input");
let submit = document.querySelector("button")

let magicNum = Math.random() * 10;

submit.addEventListener("click", () => {
    console.log("clicked")
    let userValue = input.value;
    console.log(magicNum, userValue)
    if (userValue > magicNum) {
        alert("entered value is more");
    } else if (userValue == magicNum) {
        alert("entered value is equal")
    } else {
        alert("entered value is less");
    }
})

