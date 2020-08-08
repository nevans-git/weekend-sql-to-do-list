console.log('js loaded');

$(document).ready(onReady); // initalizing Jquery

function onReady(){
    console.log('jq loaded');

    $() // Setup click listener for each button
    
} // end onReady

function setupClickListeners(){

}


function getTasks(){
    console.log('in getTasks');

    // ajax calls to server to get tasks
    $.ajax({
        method: 'GET',
        url: '/tasksToDo'
    }).then( function (response){
        console.log(response);
        const taskList = response;
        $('#viewTasks').empty();
        for(let toDoTask of taskList){
            if(toDoTask.status == true){
                toDoTask.status = 'D'
            }
            else if (toDoTask.status == false){
                toDoTask.status = 'ND'
            }

            $('#viewTasks').append(`<tr data-task-id="${toDoTask.id}">
                <td>${toDoTask.task}</td>
                <td>${toDoTask.status}</td>
            </tr>`)
        } // end of for loop
    }).catch( function (error) {
        console.log('error in task GET', error); 
    })
    
} // end getTasks
