import {useContext, useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Context from "../global/Context"
import {converDate} from "../utils/utils"


const RegistStudent = ()=>{
    const history = useHistory()
    const {states} = useContext(Context)
    const classes = states.classes
    const [id, setId] = useState('')
    const [form, setForm] = useState({
      name:'',
      email:'',
      birth:'',
      //Destinado a outra reuisição
      hobbies:''
    })

    const onChange = (e)=>{
      const {name, value} = e.target
      setForm({...form, [name]: value})
    }



    const regist = (e)=>{
      e.preventDefault()
      const body = {
        name: form.name,
        email: form.email,
        birth: form.birth,
        classId: id
      }
      axios.post("http://localhost:3003/student", body).then(res=>{
        console.log(res.data)
        alert("BATEU!")
      }).catch(e=>{
        alert("Algo deu errado!"+e.response.data.message)
      })
    }

console.log(id)
//============================Render===========================================
    return<Container>
            <header>
            <h3>Escolha uma turma e um um turno.</h3>
            <button onClick={()=> history.push('/')}>Voltar</button>
            </header>
            <span>Integral
            {classes && classes.map(cls=>{
              return<div key={cls.id}>
                      <p>
                      <input type='radio' name='subject' id='sub'
                        onClick={()=> setId(cls.id)}/>
                        {cls.name}<br/>
                        <small>
                          Iniçio: {converDate(cls.begin)}<br/>
                          Fim: {converDate(cls.end)}<br/>
                          Modulo: {cls.module}
                        </small>
                      </p>
                    </div>
            })}
            </span>

            <span>Noturna
            {classes && classes.map(cls=>{
              return<div key={cls.id}>
                      <p>
                      <input type='radio' name='subject' id='sub'
                        onClick={()=> setId(cls.id)}/>
                        {cls.name}<br/>
                        <small>
                          Iniçio: {converDate(cls.begin)}<br/>
                          Fim: {converDate(cls.end)}<br/>
                          Modulo: {cls.module}
                        </small>
                      </p>
                    </div>
            })}
            </span>

            <form onSubmit={regist}>
              <input type='text' name='name' value={form.name} onChange={onChange}
               placeholder='Nome completo' required/>
              <input type='email' name='email' value={form.email} onChange={onChange}
               placeholder='E-mail' required/>
              <input type='date' name='birth' value={form.birth} onChange={onChange}
               required/>
              <textarea name='hobbies' value={form.hobbies} onChange={onChange}
               placeholder='Hobbies(opcional)'/>
              <button>Inscrever-se</button>
            </form>
          </Container>
}
export default RegistStudent
