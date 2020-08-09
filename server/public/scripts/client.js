console.log('js loaded!');

$(document).ready();

$(document).ready( function () {
    console.log('jq loaded!');
    
    // initializing click listeners
    setupClickListeners();

    // loading existing tasks on page load  
    getTasks();
    
}); // end doc ready


function setupClickListeners(){
    $('#addBtn').on('click', function () {
        console.log('in addBtn on click');
        
        // get user input and put in an object
        // test object
        let taskToSend = {
            taskName: $('#inputTask').val(),
            taskStatus: $('#inputStatus').val()
        }
        // calling saveTask with the new object
        saveTask(taskToSend);
    }); // end addBtn

    $('.deleteBtn').on('click', function (){ // delete click listener inside setupClickListeners
        console.log('in dynamic delete button!');

        $('.deleteBtn').val('');

    }) // end of dynamic deleteBtn

    $('#viewTasks').on('click', '.completeBtn', function () {
        console.log('delete button clicked');

        let taskToDelete = $(this).closest('tr').data('taskid');
        console.log(taskToDelete);

        $.ajax({
            method: 'DELETE',
            url: `/todo/${taskToDelete}`,
        }).then(function (response) {
            console.log(response);
            getTasks(); // calling getTasks to refresh the page and update 
            
        }).catch(function (error) {
            console.log('error in PUT:', error);
            
        })
        
        
    }) // end viewTasks function
}



function getTasks(){
    console.log('in getTasks');

    // ajax calls to server to get tasks
    $.ajax({
        method: 'GET',
        url: '/todo',
    }).then( function (response){
        console.log(response);
        const taskList = response;
        $('#viewTasks').empty();
        for(let toDoTask of taskList){
            if(toDoTask.status == true){
                toDoTask.status = 'D';
            }
            else {
                toDoTask.status = 'ND';
            }

            $('#viewTasks').append(`<tr data-taskid="${toDoTask.id}">
                <td>${toDoTask.task}</td>
                <td>${toDoTask.status}</td>
                <td><button class="completeBtn">Complete</button></td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>`);
        } // end of for loop
    }).catch( function (error) {
        console.log('error in task GET', error); 
    })
    
} // end getTasks

function saveTask(newTask){
    console.log('in saveTask', newTask);
    if(newTask.status === 'D'){
        newTask.status = true;
    }
    else{
        newTask.status = false;
    }

    // ajax call to server to get new tasks
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: newTask
    }).then( function (response) {
        console.log(response);
        getTasks();
    }).catch(function (error) {
        console.log('error in newTask post:', error);
    })
    
} // end of saveTask
