import {Request, Response} from "express"
import { con } from "../../data/connection";


export const createClass = async(req: Request, res: Response)=>{
    try{

      const {name, begin, end, module} = req.body
      const date = begin.split('/')
      const dateEnd = end.split('/')
      const dateOfBegin = `${date[2]}-${date[1]}-${date[0]}`
      const dateOfEnd = `${dateEnd[2]}-${dateEnd[1]}-${dateEnd[0]}`
      const milliseconds = new Date(dateOfEnd).getTime() - new Date(dateOfBegin).getTime()
      const duration = milliseconds / 1000 / 60 / 60 / 24 / 30


      if(!name || !begin || !end || module === ''){
          throw new Error('Preencha todos os campos.')
      }

      if(duration < 1 || duration > 2){
        throw new Error('Cada turma deve ter o periodo de um mês.')
      }

      if(module > 7 || module < 0){
        throw new Error('Os modules são de 1 a 7, ou 0 caso as aulas da turma não tenham começado.')
      }


      await con('class').insert({
        name,
        begin: dateOfBegin,
        end: dateOfEnd,
        module
      })

      res.send('Class created')

    }catch(e: any){
      res.status(400).send({message: e.message || e.sqlMessage})
    }

}
