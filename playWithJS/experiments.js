/*Notice this querySelector beneath. This particular method allows you to select the first instance of the .first-javascript 
div class it finds. But if you want o manipulate all occurence of the .first-javascript div class, you'll need to use the 
querySelectorAll method instead.*/

console.log("connected")
let firstJavascript = document.querySelector(".first-javascript");
console.log(firstJavascript)
firstJavascript.style.color = 'limegreen';

// const button = document.querySelector('button')
// button.addEventListener('click', function(){
//     alert("Hey there");
// });

/*This is an example scenario using the querySelectAll method of document.
  
const elementsToChange = document.querySelectorAll('.js-target');
  for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
  } 
  
  .innerText is also a method of DOM. Here is what it is trying to manipulate below:
  
  <ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>

*/

const inputNow = document.querySelector('.input');
const paragraphJ = document.querySelector('.paragraph');

inputNow.addEventListener('keyup', function () {
    paragraphJ.innerText = inputNow.value;
});

// const input = document.querySelector('.input');
// const paragraph = document.querySelector('.paragraph');

// input.addEventListener("keyup", function() {
//   paragraph.innerText  = input.value;
// });

const input = document.querySelector('.color-input');
const colorBox = document.querySelector('.color-box');
input.addEventListener('change', function () {
    colorBox.style.backgroundColor = input.value;
});

document.querySelector('.button-container').addEventListener("click", function (event) {
    if (event.target.tagName === 'button') {
        alert(`You clicked on button ${event.target.innerText}`)
    }
});