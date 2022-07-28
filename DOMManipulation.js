/* Wrap element in div
The JavaScript code below installs en eventListener on a variable btn. A button element that is a descendent of another element with id wrapper was assigned to the variable btn. But, the existing button element has no parent node with id wrapper.
Make the code work by creating a new element with id wrapper that wraps the existing button element. Verify your solution by clicking the button. It should change its text.
Hint: you might have to use the following methods: querySelector, createElement, setAttribute, append */
<button type="button" id="button">Click Me</button>
// type in your code here
const div = document.createElement('div')
div.setAttribute('id', 'wrapper')

const target = document.getElementById('button')
target.after(div)
div.appendChild(target)

// expects button to be child of element with id 'wrapper'
const btn = document.querySelector('#wrapper button');

if(btn) {
  const handleClick = () => {
    btn.innerText = 'Thank you! ❤️'
  }
  btn.addEventListener('click', handleClick)
}
/* Remove element from the DOM
You may not see it in the example UI, but underneath the red circle is a green circle. Extend the function removeRedCircle to remove the circle with id red from the DOM.
Make sure that you really remove the element instead of just hiding it. Confirm that your code works by clicking the button */
{/* <div id="green"/>
<div id="red"/>
<button type="button" id="button">Click Me</button>
const button = document.querySelector('#button'); */}

const removeRedCircle = () => {
document.getElementById("red").remove()
};

button.addEventListener('click', removeRedCircle);

/* Change id of HTML element
In this scenario the existing code listens to a click on the button. When the button is clicked, the function changeInput is triggered. changeInput tries to select an input field with id inputEl. But, the existing input field does not have this id. Add some Javascript code to add the id inputEl to the existing input field.
Verify that your code works by clicking the button
<div id="wrapper">
<input type="text" placeholder="Text" readonly/>
<button type="button">Click Me</button>
</div> */
const button = document.querySelector('#wrapper button');

const changeInput = () => {
  const input = document.querySelector('#inputEl');
  if(input) {
    input.value = 'Hello World';
  }
};

button.addEventListener('click', changeInput);

const input = document.querySelector('#wrapper input')
input.setAttribute('id','inputEl')
/* Create new list item and add to DOM
Extend the JavaScript code below to interact with the displayed HTML elements.
Enter a new todo in the input field. Once you click the button, the new todo item should appear at the bottom of the list.
Confirm your code by creating a new todo! */
{/* <input type="text" id="input" placeholder="To do..."/>
<button type="button" id="button">Add</button>
<ul id="list">
<li>Read a book</li>
<li>Lunch with Caro</li>
<li>Feed the dog</li></ul> */}

/* const button = document.getElementById('button');
button.addEventListener('click' , () => {
// type in your code here
  const list = document.getElementById('list');
  const input = document.getElementById('input');
  const item = document.createElement('li');
  item.innerHTML = input.value;
  list.appendChild(item);
}); */

