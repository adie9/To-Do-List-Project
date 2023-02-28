function inputToList() {
    let ul = document.getElementById('tasks') // List variable
    let input_field = document.getElementById('new-task'); // Input field variable
    input = input_field.value; // Get value of input field

    // Checks if input is empty
    if (input == ""){
        alert("Please enter a task!");
        input_field.focus();
    }
    else {
        let new_li = document.createElement('li'); // Create new list item
        new_li.textContent = input; // Insert input value into new li

        // Create "Done" Button
        let done_button = document.createElement('button');
        let done_image = document.createElement('img'); // Create element for button icon
        done_image.src = "../images/done.png";
        done_image.classList.add('btn-img');
        done_button.appendChild(done_image); // Add icon to button
        done_button.classList.add('done');
        new_li.appendChild(done_button);

        // Create "Delete" Button
        let delete_button = document.createElement('button');
        let del_image = document.createElement('img'); // Create element for button icon
        del_image.src = "../images/delete.png";
        del_image.classList.add('btn-img');
        delete_button.appendChild(del_image); // Add icon to button
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
            let item = this.parentNode; // Get list item variable
            let list = item.parentNode; // List variable
            list.removeChild(item);
        })

        // Reset input
        if (input_field.value != "")
            input_field.value = "";
        input_field.focus();
        }
    
    

    
}