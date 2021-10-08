import {Request, Response} from "express"
import {con} from "../../data/connection"

//TIPAR AS PROMISES
export const getAllStudents = async(req: Request, res: Response)=>{
  try{
    const result = await con("students")
    res.send(result)
  }catch(e: any){
    res.status(400).send({message: e.message || e.sqlMessage})
  }
}
