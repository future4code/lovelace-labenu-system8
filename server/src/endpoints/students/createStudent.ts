import {Request, Response} from "express"
import { con } from "../../data/connection"

export const createStudent = async(req: Request, res: Response)=>{
    try{

      const {name, email, birth, classId, hobby} = req.body
      /*
      O navegador já faz a inversão de datas (interessante)
      const date = birth.split("/")
      const converted = `${date[2]}-${date[1]}-${date[0]}`
      */
      const millisecondsAge = Date.now() - new Date(birth).getTime()
      const age = Math.floor(millisecondsAge / 1000 / 60 / 60 / 24 / 365)


      if(!name || !email || !birth){
        throw new Error('Preencha todos os campos.')
      }

      if(age < 18){
        throw new Error('Necessário ser maior de idade.')
      }

      const id: number = Math.floor(Math.random()*100)

      await con("students").insert({
        id,
        name,
        email,
        birth,
        class_id: classId
      })

      const array = hobby.split(',')
      for(let c = 0; c < array.length; c++){
        await con("hobbies").insert({
          name: array[c],
          students_id: id
        })
      }

      res.end()

    }catch(e){
      res.status(400).send({message: e.message || e.sqlMessage})
    }
}
