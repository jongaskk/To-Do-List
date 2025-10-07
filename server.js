import sqlite3 from "sqlite3";
import { open } from "sqlite";
import express from "express";

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(express.static('public/')); // serve apara acessar arquivos estáticos(HTML, CSS e JS)

// inicializando o banco de dados SQLite
let db;

async function initDB(){
    db = await open({
        filename: '.banco.db',
        driver: sqlite3.Database,
    });

    await db.run(`CREATE TABLE IF NOT EXISTS tasks(
        id INTEGER PRIMARY KEY AUTOINCREMENT, description
        TEXT NOT NULL, completed INTEGER DEFAULT 0
    )`);
}