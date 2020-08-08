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


// Setup POST



// Setup PUT


// Setup Delete