// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const txtarea = document.getElementById("text");
const st = document.getElementById("stat");
// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
txtarea.addEventListener('input', function(){
  const txt = txtarea.value;
  const words = txt.split(' ');
  st.textContent = `You've written ${words.length} words and ${txt.length} characters.`;
})