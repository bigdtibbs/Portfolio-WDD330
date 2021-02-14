var addBtn = document.getElementById("addBtn");
var tasksLeft = document.getElementById("tasksLeft");
var allBtn = document.getElementById("allBtn");
var toDoList = [];
var timestamp = Date.now();

addBtn.onclick = function addToDo() {

    // Create the object.
    let toDo = {

        id: new Date(timestamp),
        content: document.getElementById("addItem").value,
        completed: false,
    
    }

    // Put the object in the array.
    toDoList.push(toDo);

    // Put the array of objects in localStorage.
    localStorage.setItem('toDoList', JSON.stringify(toDoList));

    // Set the input field back to empty.
    document.getElementById("addItem").value = "";
}