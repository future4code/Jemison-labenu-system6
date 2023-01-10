import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const searchClass = async (req: Request, res: Response) =>{
    let errorCode = 400

    try{
       const result = await connection("Turmas").select()

        res.status(200).send(result)
    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}