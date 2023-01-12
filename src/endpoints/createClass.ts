import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const createClass = async (req: Request, res: Response) =>{
    let errorCode = 400

    try{
        const {nome} = req.body

        if(!nome){
            throw new Error("Nome invalido");
        }
        await connection("Turmas").insert({nome})

        res.status(200).send("Turma criada com sucesso!")

    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}