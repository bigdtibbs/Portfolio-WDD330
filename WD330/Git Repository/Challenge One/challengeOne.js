// Declare Variables.
var addBtn = document.getElementById("addBtn");
var tasksLeft = document.getElementById("tasksLeft");
var allBtn = document.getElementById("allBtn");
var toDoList = [];
var timestamp = Date.now();

// Function called when to to item submited.
addBtn.onclick = function addToDo() {

    // Declare variables.
    var content = document.getElementById("addItem").value;
    var list = document.getElementById("toDoList");

    // Create needed elements.
    var listItem = document.createElement("li");
    var deleteBtn = document.createElement("button", id="deleteBtn");
    var checkBox = document.createElement("input", "class=checkbox");
    var label = document.createElement("label");
    var labelText = document.createElement("span");

    // Add eventListener for when the delete button is clicked.
    deleteBtn.addEventListener("click", function() {
        alert("Come Back To This Daren");
    });

    // Set up the label item.
    labelText.innerText = content;
    
    // Add checkbox to the label item.
    checkBox.type = 'checkbox';
    checkBox.class = 'checkbox';
    label.appendChild(checkBox);
    label.appendChild(labelText);

    // Add delete button to the label item.
    deleteBtn.innerText = "X";
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);

    // Add it all to the list item.
    list.appendChild(listItem);

    // Create an object.
    let toDo = {

        id: new Date(timestamp),
        content: document.getElementById("addItem").value,
        completed: false,
    
    }

    // Store the object in an array.
    toDoList.push(toDo);
    var num = toDoList.length;

    document.getElementById("addItem").value = "";

    allBtn.addEventListener("click", function() {
        alert(num);
    });
}

/***
addBtn.onclick = function addToDo() {
    let toDo = {

        id: new Date(timestamp),
        content: document.getElementById("addItem").value,
        completed: false,
    
    }
    toDoList.push(toDo);
    document.getElementById("addItem").value = "";
};

const resultList = document.getElementById('toDoList');
new URLSearchParams(window.location.search).forEach((id, content, completed, index) => { 
    resultList.append(`${index}: ${id}: ${content}: ${completed}`)
    resultList.append(document.createElement('br'))
});
***/
