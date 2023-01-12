import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const searchStudent = async (req: Request, res: Response) =>{
    let errorCode = 400

    try{
        const {nome} = req.body

        const result = await connection("Estudantes").select("*").where("nome", nome)

        res.status(200).send(result)
    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}