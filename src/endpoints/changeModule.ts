import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const changeModule = async (req:Request, res:Response) =>{
    let errorCode = 400

    try{
        const {modulo, id} = req.body

        if(!modulo){
            throw new Error("Modulo invalido");
        }

        if(!id){
            throw new Error("Turma invalida");
        }

        if(modulo > 6){
            throw new Error("Vai apenas até o 6 modulo.");
        }

        await connection("Turmas").update({modulo}).where("id", id)

        res.status(200).send("Modulo alterado com sucesso!")

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}