import { Request, Response } from "express";
import { connection } from "../dataBase/connection";

export const searchClass = async (req: Request, res: Response) =>{
    let errorCode = 400

    try{
        const module = req.body.modulo
        let result 

        if(module >= 1 && module <= 6){
            result = await connection("Turmas").select("*").where("modulo", module)
        }

        if(module > 6){
            result = ("Digite um modulo válido!")
        }

        if(!module){
            result = await connection("Turmas").select("*").where("modulo", module)
        }

        res.status(200).send(result)
    }catch(error:any){
        res.status(errorCode).send({message: error.message})
    }
}