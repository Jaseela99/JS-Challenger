/* Check the checkbox
Your first JavaScript DOM exercise. Let's start simple.
Extend the JavaScript code below to interact with the displayed HTML elements. Once you click the button, the checkbox should be checked.
Confirm your code by clicking the button! */
{/* <input id="checkbox" disabled/>
<label for="checkbox">checkbox</label>
<button type="button" id="button">Verify Code</button>
const button = document.getElementById('button');
button.addEventListener('click', () => {
  // type in your code here
document.querySelector("#checkbox").checked=true
});
 */}
 /* Get full-name from inputs
Extend the JavaScript code below to interact with the displayed HTML elements.
This time we are looking for the full name. When the button is clicked, combine the names of the first two input fields. Insert the full name in the third input field.
Hint: Check if your code still works if you change the first or last name.
Confirm your code by clicking the button! */
{/* <input type="text" id="firstName" placeholder="Max" value="Max"/>
<input type="text" id="lastName" placeholder="Musterman" value="Musterman"/>
<input type="text" id="fullName" placeholder="full name" readonly/>
<button type="button" id="button">Verify Code</button>
const button = document.getElementById('button');
button.addEventListener('click' , () => {
  // type in your code here
document.getElementById("fullName").value
=document.getElementById("firstName").value+document.getElementById("lastName").value
}); */}

/* Increment the counter on button click
Extend the JavaScript code below to interact with the displayed HTML elements.
On each button click, increase the value of the button by 1.
Confirm your code by clicking the button */
{/* <button type="button" id="button">0</button>
const button = document.getElementById('button');
button.addEventListener('click' , () => {
  // type in your code here
document.getElementById("button").innerHTML+=1
}); */}

/* Input filter list
In this challenge, we create a dynamic input filter with JavaScript.
Extend the code below to interact with the displayed HTML elements. Type a search term in the input field. The displayed items in the list should match your search term. The rest of the list elements should be hidden.
<input type="text" id="input" placeholder="Filter..."/>
<ul id="list">
<li>paris</li>
<li>berlin</li>
<li>new york</li>
<li>sao paulo</li>
<li>hong kong</li>
<li>vienna</li></ul> */

const input = document.getElementById('input');
input.addEventListener('input', () => {
  // type in your code here
const list = document.getElementById('list')
const listItem = Array.from(list.children)

listItem.forEach((item)=>{
!(item.innerHTML.includes(input.value))?
item.style.display='none':
item.style.display=""
})
});
/* Pop the balloons
Make the balloons pop by hovering over them.
Extend the JavaScript code below to interact with the displayed HTML elements. Every time you hover over a balloon, it should become invisible.
Your goal is to pop all the balloons one after the other. */
<ul id="list">
<li/>
<li/>
<li/>
<li/>
<li/>
<li/>
<li/>
<li/>
<li/>
<li/></ul>
const list = document.getElementById('list');

const balloons= Array.from(list.children)

balloons.forEach((balloon)=>{
balloon.addEventListener('mouseover',()=>
balloon.style.visibility='hidden'
)
})
