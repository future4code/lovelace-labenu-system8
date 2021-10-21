import {useEffect, useState, useContext} from "react"
import Context from "../../global/Context"
import {useHistory} from "react-router-dom"
import axios from "axios"
import {Container, Subjects, Title, Day,
Night, Inputs} from "./styled"


const Admin = ()=>{
    const {states} = useContext(Context)
    const classes = states.classes
    const history = useHistory()
    const [form, setForm] = useState({
      name:'',
      email:'',
      birth:'',
      skills:'',
      subject:''
    })


    const onChange = (e)=>{
      const {name, value} = e.target
      setForm({...form, [name]: value})
    }


    useEffect(()=>{
      const token = localStorage.getItem('token')

      if(token === null){
        history.push('/')
      }
    }, [])

    const logout = ()=>{
      const decide = window.confirm("Tem certeza que deseja sair?")

      if(decide){
        localStorage.removeItem('token')
        history.push('/')
      }

    }

    const addTecher = (e)=>{
      e.preventDefault()

      const body = {
        name: form.name,
        email: form.email,
        birth: form.birth,
        skills: form.skills,
        classId: form.subject
      }

      if(form.skills.indexOf(',') === -1){
        alert('É preciso separar as especialidades por virgula')
      }else{
        axios.post("http://localhost:3003/teacher", body).then(res=>{
          alert(`${form.name} adicionado com sucesso.`)
        }).catch(e=>{
          alert(e.response.data.message)
        })
      }
    }

//=============================================Teacher========================================
    return<Container>
            <header>
              <div className='head-title'>Adicionar professor e disciplina à turma</div>
              <div>
                <button className='back' onClick={()=> history.push('/')} >Voltar</button>
                <button className='logout' onClick={logout}>Logout</button>
              </div>
            </header>
            <Inputs onSubmit={addTecher} >
              <input type='text' name='name' value={form.name} onChange={onChange}
               placeholder='Nome completo' required/>
              <input type='email' name='email' value={form.email} onChange={onChange}
               placeholder='E-mail' required/>
              Data de nascimento:
              <input type='date' name='birth' value={form.value} onChange={onChange}
               required/>
              <textarea name='skills' value={form.skills} onChange={onChange}
               placeholder='Especialidades(separadas por virgula)'/>
              Disciplina:
              <select name='subject' value={form.subject} onChange={onChange}>
                {classes && classes.map(cls=>{
                  return<option key={cls.id} value={cls.id}>{cls.name}</option>
                })}
              </select>
              <button>Adicionar</button>
            </Inputs>
          </Container>
}

export default Admin
