# The To-Do App
 - [x] create the database with the name of 'weekend-to-do-app' (postico)
 - [x] create database table in the database.sql file & postico 
 - [x] setup database connection
 - [x] configure 'pool' & pool connection/error
 - [x] setup GET (router-side)
    - [x] setup GET (client-side)
 - [] setup POST (router-side) **NOT WORKING**
    - [] setup POST (client-side) **NOT WORKING**
 - [] setup PUT (router-side) 
 - [x] setup Delete (router-side)
    - [x] setup Delete (client-side)

    

--------------------------------------

## Description

The problem that needs to be solved here pertains to creating a to-do list that dynamically adds, completes, and deletes new and existing tasks. To create such a thing I started by creating input fields for the user to enter in the tasks they needed to complete and the status at which they currently were at (done/not done). After creating the input fields, I created a table for the user to store the tasks and their current status. Each item in the table has a complete and delete button next to them for the user to either complete when the task is done or delete the task if they no longer plan on completing the task. All the task data is stored in a SQL file where it is updated according to the status of the task. When the task is not yet completed the row in which it is stored in will appear slightly grey. After the task is completed and the user clicks the complete button the row will turn green indicating that the task is completed.

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
