
let count = 0
let searchbox = document.querySelector("input");

searchbox.addEventListener("input", (e) => {
    let input = e.target.value;
    // debounce(input)
    debounce(() => {
        console.log("debounce", count++)
    }, 500)
})


// function debounce(input) {
//     let time;
//     clearTimeout(time);
//     time = setTimeout(() => {
//         console.log("input", count++);
//         time = false;
//     }, 1000);

// }
