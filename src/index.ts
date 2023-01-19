import { AddressInfo } from 'net';
import express from "express"
import cors from 'cors'
import { ping } from "./endpoints/ping"
import { searchClass } from './endpoints/searchClass';
import { searchStudent } from './endpoints/searchStudent';
import { createClass } from './endpoints/createClass';
import { changeModule } from './endpoints/changeModule';
import { changeStudent } from './endpoints/changeStudent';
import { createStudent } from './endpoints/createStudente';
import { createDocente } from "./endpoints/createDocent";
import { searchDocentes } from "./endpoints/searchDocentes";
import { changeDocente } from "./endpoints/changeDocente";

const app = express()

app.use(express.json())

app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
    }else{
        console.log(`Failure upon starting server.`)
    }
});

app.get("/ping", ping)

//Criando Turma
app.post("/turma",createClass)

//Buscando Turmas
app.get("/turmas", searchClass)

//Mudando Modulo
app.patch("/turma", changeModule)

//Criando estudante
app.post("/estudante", createStudent)

//Buscando Estudante
app.get("/estudante", searchStudent)

//Mudando Turma
app.patch("/estudante", changeStudent)

//Criando Docentes
app.post("/docente", createDocente)

//Buscando Docentes
app.get("/docentes", searchDocentes)

//Mudando Docentes
app.patch("/docente", changeDocente)