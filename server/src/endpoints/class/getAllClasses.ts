import {Request, Response} from "express"
import {con} from "../../data/connection"

//TIPAR AS PROMISES
export const getAllClasses = async(req: Request, res: Response)=>{
  try{
    const result = await con("class")
    res.send(result)
  }catch(e: any){
    res.status(400).send({message: e.message || e.sqlMessage})
  }
}
