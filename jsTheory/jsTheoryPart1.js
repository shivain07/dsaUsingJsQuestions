
/**
 * 
 * @what_is_Js => a scripting language for making web pages it is light weight
               it genrally does not have any input or output functionality that's why it is a scripting lang..

    (What is scripting language and example ?
        Image result for what is scripting language
A scripting language is a programming language that is interpreted.It is translated into machine code when the code is run, rather than beforehand.Scripting languages are often used for short scripts over full computer programs.JavaScript, Python, and Ruby are all examples of scripting languages)


@first_class_functions => it means functions that can be used as a variable like can be passed as arguments, can be returned.
    ex - const showId = () => {
        return function () {
            console.log("I am higher order")
        }
    }

   we can invoke function and its returned Anonymous Function. To do so, we have two ways:

1- Using a variable
const sayHello = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello();
myFunc();
// Hello!
Copy to Clipboard
This way, it returns the Hello! message.

@Note You have to use another variable. If you invoked sayHello directly, it would return the function itself without invoking its returned function.

2- Using @double_parentheses
function sayHello() {
   return function() {
      console.log("Hello!");
   }
}
sayHello()();
// Hello!
Copy to Clipboard
We are using double parentheses ()() to invoke the returned function as well.


The @DOM (Document Object Model) API allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc. 

@properlyLoadingJS

@Note : In the external case, we did not need to use the DOMContentLoaded event because the defer attribute solved the problem for us. We didn't use the defer solution for the internal JavaScript example because defer only works for external scripts.

@Note : An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body (e.g. just before the </body> tag), so that it would load after all the HTML has been parsed. The problem with this solution is that loading/parsing of the script is completely blocked until the HTML DOM has been loaded. On larger sites with lots of JavaScript, this can cause a major performance issue, slowing down your site.

@async_Vs_defer 👍

@codeSnippetFor_defer_use --> <script defer>myJsFile.js</script>

async and defer
There are actually two modern features we can use to bypass the problem of the blocking script — async and defer (which we saw above). Let's look at the difference between these two.

Scripts loaded using the async attribute will download the script without blocking the page while the script is being fetched. However, once the download is complete, the script will execute, which blocks the page from rendering. You get no guarantee that scripts will run in any specific order. It is best to use async when the scripts in the page run independently from each other and depend on no other script on the page.

Scripts loaded with the defer attribute will load in the order they appear on the page. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place (e.g. they modify one or more elements on the page).

@example 

@defer way 
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>

In the above ☝️ second example, we can be sure that jquery.js will load before script2.js and script3.js and that script2.js will load before script3.js. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place (e.g. they modify one of more elements on the page).

@async way 

<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>

You can't rely on the order the scripts will load in. jquery.js may load before or after script2.js and script3.js and if this is the case, any functions in those scripts depending on jquery will produce an error because jquery will not be defined at the time the script runs.

@async_should_be_used when you have a bunch of background scripts to load in, and you just want to get them in place as soon as possible. 


@To_summarize :

@__ async and defer both instruct the browser to download the script(s) in a separate thread, while the rest of the page (the DOM, etc.) is downloading, so the page loading is not blocked during the fetch process.
@__ scripts with an async attribute will execute as soon as the download is complete. This blocks the page and does not guarantee any specific execution order.
@__ scripts with a defer attribute will load in the order they are in and will only execute once everything has finished loading.
@__ If your scripts should be run immediately and they don't have any dependencies, then use async.
@__ If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using defer and put their corresponding <script> elements in the order you want the browser to execute them.





 */
