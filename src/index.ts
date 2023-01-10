import { searchClass } from './endpoints/searchClass';
import { createClass } from './endpoints/createClass';
import express from "express"
import cors from 'cors'
import { ping } from "./endpoints/ping"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/ping", ping)

//Add Turma
app.post("/turma",createClass)

//Buscando Turmas
app.get("/turmas", searchClass)