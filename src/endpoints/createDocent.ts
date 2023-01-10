import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const createDocente = async (req: Request, res:Response) =>{
    let errorCode = 400

    try{
        const {nome, email, data_nasci, turma_id  } = req.body

        if(!nome || !email || !data_nasci || !turma_id){
            throw new Error("Passe as informações corretamente");
        }

        await connection("Docentes").insert({ nome, email, data_nasci, turma_id})

        res.status(200).send("Docente criado com sucesso!")

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}