import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const changeStudent = async (req:Request, res:Response) =>{
    let errorCode = 400

    try{
        const {id, turma_id} = req.body

        if(!turma_id){
            throw new Error("Turma invalido");
        }

        if(!id){
            throw new Error("Turma invalida");
        }

        await connection("Estudantes").update({turma_id}).where("id", id)

        res.status(200).send("Turma alterado com sucesso!")

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}