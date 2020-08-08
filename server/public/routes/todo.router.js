const express = require('express');
const toDoRouter = express.Router();
const pg = require('pg');


// Setup DB connection
const config = {
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
}

const pool = new pg.Pool(config);

pool.on("connect", () => {
    console.log('connected to postgres');
});

pool.on("error", (error) => {
    console.log('error connecting to postgres:', error);
});

// Setup GET
toDoRouter.get('/', (req, res) => {
    let queryText = `SELECT * FROM "tasks" ORDER BY "id";`;
    pool.query(queryText).then(result => {
        // Sends back the results in an object
        res.send(result.rows);

    }).catch(error => {
        console.log('error getting tasks', error);
        res.sendStatus(500);       
    })
})


// Setup POST
toDoRouter.post('/', (req, res) => {
    let queryText = `INSERT INTO "tasks" ("task", "status")
    VALUES ($1, $2);
    `;

    pool.query(queryText, [
        req.body.task,
        req.body.status
    ]).then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error posting ');
        res.sendStatus(500);
        
    })
})


// Setup PUT
toDoRouter.put('/:id', (req, res) => {
    let todo = req.body;
    let id = req.params.id;

    console.log(`Updating todo ${id} with`, todo);

    let queryText = '';
    if(req.body.status === 'D'){ // D is for Done
        queryText = `
        UPDATE "tasks"
        SET "status" = True
        WHERE "id" = $1
        `
    }
    else if (req.body.status === 'ND'){ // ND is for Not Done
        queryText = `
        UPDATE "tasks"
        SET "status" = False
        Where "id" = $1`
    }

    pool.query(queryText, [id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in post ', error);
        res.sendStatus(500);
        
    })
    
})


// Setup Delete (complete once you setup delete button on client-side)



modules.exports = toDoRouter;