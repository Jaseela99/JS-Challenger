/* Execute function on button click
The Javascript function handleText fills the input field with the words Hello World. But, there is no code to execute this function.
Complete the existing code below such that the function is called when the button is clicked. Verify by clicking the button
 */
{/* <input type="text" id="input" readonly/>
<button type="button" id="button">Click Me</button> */}
const button = document.getElementById('button');
const input = document.getElementById('input');

const handleClick = () => {
  input.value = 'Hello World';
};

// type in your code here
button.addEventListener("click",handleClick)

/* Execute function when cursor moves onto element
The Javascript function changeText changes the text inside the circle. But again, there is no code to execute this function.
Complete the existing code below such that the function is called when the cursor moves onto the circle. Verify that your code works by hovering over the circle. */
{/* <div id="element">
Hover Me
</div>
const element = document.getElementById('element');

const changeText = () => {
  element.innerText = 'Thanks!';
};

// type in your code here
element.addEventListener('mousemove',changeText)
 */}

/*  Cursor enters and leaves element
In this scenario we want the color of the circle to change depending on the type of cursor movement. Use the function toggleColor to turn the circle orange when the cursor moves onto it. Reuse the same function to turn it black when the cursor leaves it.
The tricky part is that you have to call toggleColor with different values for the parameter isEntering. Verify that your code is working by hovering the circle with the mouse cursor and leaving it again. */
<div id="element">
Hover Me
</div>
HTML
const element = document.querySelector('#element');

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? 'orange' : 'black';
};

// type in your code here
element.addEventListener('mouseenter',toggleColor)
element.addEventListener('mouseleave',(isEntering)=>toggleColor(!isEntering))
/* Move element with mouse cursor
This challenge might look more complicated than it actually is. The function moveRight below moves the rectangular element exactly 1 pixel to the right - unless it reaches the green bar.
What you have to do is to call the function for each movement of your mouse inside the div element with id wrapper. Confirm that your code works by moving the cursor inside the wrapper div until you reach the green bar. */
{/* <div id="wrapper">
<div id="element">
Move Me
</div>
</div>
<div/>
const element = document.querySelector('#element');
const wrapper = document.querySelector('#wrapper');

const moveRight = () => {
  const wrapperWidth = wrapper.getBoundingClientRect().width;
  const elementWidth = element.getBoundingClientRect().width;
  const currentPosition = parseInt(element.style.left || 0, 10);
  if (currentPosition <= wrapperWidth - elementWidth) {
    element.style.left = `${currentPosition + 1}px`;
  }
};

// type in your code here
wrapper.addEventListener('mousemove',moveRight)
 */}
/* 
 Drop element into another element
Here we want to drop the red square into the blue square. But, when you try to drop it there, it jumps back to where it was before. Make use of the function handleDrop to join the two elements together.
You pass the challenge if you drop the red square into the blue one and it stays there.

<div id="dragItem" draggable="true"/>
<div id="dropArea"/>
 */
const dragItem = document.querySelector('#dragItem');
const dropArea = document.querySelector('#dropArea');

// this allows for items to be dropped inside the dropArea
const handleDragOver = (event) => event.preventDefault();
dropArea.addEventListener('dragover', handleDragOver);

const handleDrop = () => {
  dropArea.append(dragItem);
};

// type in your code here
dragItem.addEventListener('dragleave',handleDrop)












