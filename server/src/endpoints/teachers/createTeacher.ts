import {Request, Response} from "express"
import {con} from "../../data/connection"


export const createTeacher = async(req: Request, res: Response)=>{
    try{

      const {name, email, birth, classId} = req.body
      const date = birth.split("/")
      const converted = `${date[2]}-${date[1]}-${date[0]}`

      if(!name || !email || !birth){
        throw new Error('Preencha todos os campos.')
      }

      await con("teachers").insert({
        name,
        email,
        birth: converted,
        class_id: classId
      })

      res.end()

    }catch(e: any){
      res.status(400).send({message: e.message || e.sqlMessage})
    }
}
