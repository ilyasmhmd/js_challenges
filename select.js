let idElement = document.getElementById("message");
console.log(idElement.innerHTML);
console.log(idElement.outerHTML);

var classElements = document.getElementsByName("niceButton");
console.log(classElements[0]);

var classElements = document.getElementsByClassName("red_bg");
console.log(classElements[0]);

let tagNameElement = document.getElementsByTagName("h1");
console.log(tagNameElement[0]);
console.log(tagNameElement[0].textContent);

let querySelectorElement = document.querySelector(".red_bg");
console.log(querySelectorElement)

let querySelectorAllElement = document.querySelectorAll("h1");
console.log(querySelectorAllElement[0])