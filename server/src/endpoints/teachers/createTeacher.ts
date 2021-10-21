import {Request, Response} from "express"
import {con} from "../../data/connection"


export const createTeacher = async(req: Request, res: Response)=>{
    try{

      const {name, email, birth, classId, skills} = req.body
      const date = birth.split("/")
      const converted = `${date[2]}-${date[1]}-${date[0]}`

      if(!name || !email || !birth){
        throw new Error('Preencha todos os campos.')
      }

      const id = Math.floor(Math.random()*100)

      await con("teachers").insert({
        id,
        name,
        email,
        birth,
        class_id: classId
      })

      const array = skills.split(',')
      for(let c = 0; c < skills.length; c++){
        await con("skills").insert({
          name: array[c],
          teachers_id: id
        })
      }

      res.end()

    }catch(e: any){
      res.status(400).send({message: e.message || e.sqlMessage})
    }
}
