import { con } from "../data/connection";

export const createStudent = async(req: Request, res: Response)=>{
    try{

      const {name, email, birth} = req.body

      if(!name || !email || !birth){
        throw new Error('Preencha todos os campos.')
      }

      const id = Math.random().substring(2)

      await con.raw(`insert into students`)

    }catch(e){
      res.statud(400).send({message: e.message || e.sqlMessage})
    }
}
