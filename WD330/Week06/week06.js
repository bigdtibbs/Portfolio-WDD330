var addBtn = document.getElementById("addBtn");
var timestamp = Date.now();
var toDoList = [];
var toDoList_ls = new Array();

addBtn.onclick = function createToDo() {

    // Declare variables.
    var results = document.getElementById("outputText");
    let content = document.getElementById("addItem").value;
    let id = new Date(timestamp);
    let completed = false;

    // Create object.
    let toDo = {

        id: id,
        content: content,
        completed: completed,
    }
 
    // If there they enter something, add it to the array.
    // And JSON.stringify it (prepare for localStorage).
    if(content) {

        addToDo(toDo);
    }
   
    // Testing to verify things are being passed.
    console.log(`${id}: ${content}: ${completed}`);

    /**
    // Output. Not localStorage. Testing Only.
    for (let i = 0; i < toDoList.length; i++) {

      results += `${id}: ${content}: ${completed}<\br>`;
    }
    **/

    // Send to localStorage.
    //toDoList_ls = JSON.stringify(toDoList);
    localStorage.setItem('toDoList', toDoList_ls);

    // Pull from local storage, turn into values.
    function convertJSON(toDoList_ls);

    for (let i = 0; i < toDoList_ls.length; i++) {

        results += toDoList_ls[i] + '<br>';
    }

    // Update output area. Reset input field.
    document.getElementById("outputText").innerHTML = results;
    document.getElementById("addItem").value = "";
};

// Add item to array and stringify to prepare for localStorage.
function addToDo(item) {

    //toDoList.push(item);
    toDoList_ls = JSON.stringify(toDoList.push(item));
}

// Convert the localStorage array back to readable data.
function convertJSON(nextItem) {
    var toDoList_restore = JSON.parse(localStorage['toDoList_ls']);
}
