// Grabbing DOM elements
const submitButton = document.getElementById("submitButton");
const inputField = document.getElementById("todoInput");

// Adds todo upon hitting enter while in the input field
inputField.addEventListener("keydown", function (e) {
    // Checks whether the pressed key is "Enter"
    // The keyCode property is deprecated - Check for better solution
    if (e.keyCode === 13) {
        addTodo();
    }
});

// Creates a new task when clicking the add button
submitButton.addEventListener('click', addTodo);

// Adding a new todo
function addTodo() {
    // Creating a new "li" element
    const li = document.createElement("li");
    // Grabs the input field's value
    const inputText = inputField.value;
    // Creates a textnode out of the value of "inputText"
    const liText = document.createTextNode(inputText);
    // Creates close button + adds "x" content + adds class
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "x";
    closeButton.className = "closeButton"
    // Appends said textnode + "closeButton" to "li" as a child
    li.appendChild(liText);
    li.appendChild(closeButton);

    // Throwing error or adding todo
    if (inputText === '') {
        // Error if input is empty
        alert('Please write something!')
    } else {
        // Otherwise create a "li" for new todo
        document.getElementById("todos").appendChild(li)
    }

    // Close button removes the corresponding todo from the list
    closeButton.addEventListener('click', (e) => {
        e.target.parentNode.remove();
    })

    // Resets the value of the input field after adding a todo
    document.getElementById("todoInput").value = '';
}

// Grabs the "ul" of todos and adds an event listener to its "li" elements
const todoList = document.getElementById('todos');
todoList.addEventListener('click', function(e) {
  if (e.target.tagName === "LI") {
    // Toggles the "checked" class on/off
    e.target.classList.toggle('checked');
  }
}, false);


// Delete all button calls the "removeItems" function
deleteButton.addEventListener("click", removeItems);

// Delete all todos - both functions work
/* function removeAll() {
    todoList.innerHTML = '';
} */

// Removes the child elements ("li") of the "ul"
function removeItems() {
    const result = confirm("Are you sure?");
    if (result) {    
            while (todoList.firstChild) {
                todoList.removeChild(todoList.firstChild);
            }
        }
}
