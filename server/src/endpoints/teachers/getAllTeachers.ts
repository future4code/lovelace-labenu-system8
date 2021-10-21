import{Request, Response} from "express"
import {con} from "../../data/connection"


//TIPAR PROMISES
export const getAllTeachers = async(req: Request, res: Response)=>{
    try{
      const result = await con("teachers")
      res.send(result)
    }catch(e: any){
      res.status(400).send({message: e.message || e.sqlMessage})
    }
}
