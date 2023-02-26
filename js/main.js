function inputToList() {
    let ul = document.getElementById('tasks') // List variable
    let input = document.getElementById('new-task').value; // input value

    // Checks if input is empty
    if (input == ""){
        alert("Please enter a task!");
    }
    else {
        let new_li = document.createElement('li'); // Create new list item
        new_li.textContent = input; // Insert input value into new li

        // Create "Done" Button
        let done_button = document.createElement('button');
        done_button.innerHTML = '<img class="btn-img" src="../images/done.png"/>';
        done_button.classList.add('done');
        new_li.appendChild(done_button);

        // Create "Delete" Button
        let delete_button = document.createElement('button');
        delete_button.innerHTML = '<img class="btn-img" src="../images/delete.png"/>';
        delete_button.classList.add('delete');
        new_li.appendChild(delete_button);
        
        ul.appendChild(new_li); // Add new li to list

        // Add event listener for "Done" button
        done_button.addEventListener("click", function() {
            let strike_text = this.parentNode; // Get list item variable
            strike_text.style.cssText += 'text-decoration: line-through;';
        })

        // Add event listener for "Delete" button
        delete_button.addEventListener("click", function() {
            let item = this.parentNode; // List item variable
            let list = item.parentNode; // List variable
            list.removeChild(item);

        })

        // Reset input
        let current = document.getElementById("new-task");
        if (current.value != "")
            current.value = "";
        current.focus();
        }
    
    

    
}