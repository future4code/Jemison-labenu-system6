import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const changeDocente = async (req:Request, res:Response) =>{
    let errorCode = 400

    try{
        const {id, turma_id} = req.body

        if(!turma_id){
            throw new Error("Modulo invalido");
        }

        if(!id){
            throw new Error("Turma invalida");
        }

        if(turma_id > 6){
            throw new Error("Vai apenas até o 6 modulo.");
        }

        await connection("Docentes").update({turma_id}).where("id", id)

        res.status(200).send("Turma alterado com sucesso!")

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}