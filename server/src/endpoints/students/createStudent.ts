import {Request, Response} from "express";
import { con } from "../../data/connection";

export const createStudent = async(req: Request, res: Response)=>{
    try{

      const {name, email, birth, classId} = req.body
      const date = birth.split("/")
      const converted = `${date[2]}-${date[1]}-${date[0]}`
      const millisecondsAge = Date.now() - new Date(converted).getTime()
      const age = Math.floor(millisecondsAge / 1000 / 60 / 60 / 24 / 365)

      if(!name || !email || !birth){
        throw new Error('Preencha todos os campos.')
      }

      if(age < 18){
        throw new Error('Necessário ser maior de idade.')
      }

      /*      EXCEDẼNCIA DE ALUNOS POR TURMA VERIFICAR NO FRONT
      const classmateNumber = await con.raw(`select * from students`)
      const exceedance = classmateNumber[0].length
      console.log(exceedance)
      */
      await con("students").insert({
        name,
        email,
        birth: converted,
        class_id: classId
      })
res.end()

    }catch(e){
      res.status(400).send({message: e.message || e.sqlMessage})
    }
}
