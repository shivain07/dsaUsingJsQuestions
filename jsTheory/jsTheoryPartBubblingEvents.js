/**
 * @whatISBubbling 
 * In this case:

<div class="parent">
    <button class="child">

    </button>
</div>

the click on the button fires first
followed by the click on its parent (the <div> element)
followed by the <div> element's parent (the <body> element).
We describe this by saying that the @event bubbles up from the innermost element that was clicked.
 */

let div = document.querySelector("div");
let button = document.querySelector("button");
console.log(div, button);

div.addEventListener("click", () => {
    console.log("DIV CLICKED")
})
button.addEventListener("click", () => {
    console.log("BUTTON CLICKED") //this is concept of bubbling where the child is attached with an event and the parent also respond to that event with same name here "CLICK will be fired for both div and button on button click  @note child event will occur first"
})

// button.addEventListener("pointerenter", () => {
//     console.log("BUTTON Hover") //in this case since there is no event registers with same name on the parent so on;y here it will be called
// })

// in case we want to stop propogation i.e stop the event to propogate to parent use event.stopPropogation

button.addEventListener("click", (e) => {
    // e.stopImmediatePropagation(); // eventImmediatePropogation stops the event from further propogating in the parent-child hierarchy as well was stops event from propogating in the same child also example multiple click events added on the same buttons
    console.log("Button Clicked with immediate stopped propogation")
})
button.addEventListener("click", (e) => {
    e.stopPropagation(); // eventstopPropogation stops the event from further propogating in the parent-child hierarchy
    console.log("Button Clicked with stopped propogation 2")
})

// button.addEventListener("pointerenter", () => {
//     console.log("BUTTON Hover") //in this case since there is no event registers with same name on the parent so only here it will be called
// })

/**
 * @if you want to change the hierarchy of the event fired from child to parent to parent--> child inthis case have the paent event  callback fired first on click of child event use true as 3rd argument
 */


// ex ->

// div.addEventListener("click", () => {
//     console.log("DIV CLICKED")
// }, true)
// button.addEventListener("click", () => {
//     console.log("BUTTON CLICKED") //here since the parents #3rd argument is set to true the event callback on parent will be executed first than on child
// })