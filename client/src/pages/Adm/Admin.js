import {useEffect, useState, useContext} from "react"
import Context from "../../global/Context"
import {useHistory} from "react-router-dom"
import axios from "axios"


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

console.log(form)
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
      }

      axios.post("http://localhost:3003/teacher", body).then(res=>{
        console.log(res.data)
        alert("BATEU!")
      }).catch(e=>{
        alert(e.response.data.message)
      })
    }

//=============================================Teacher========================================
    return<>
            <header>
              <h3>Adicionar professor e disciplina à turma</h3>
              <button onClick={logout}>Logout</button>
              <button onClick={()=> history.push('/')} >Voltar</button>
            </header>
            <form onSubmit={addTecher} >
              <input type='text' name='name' value={form.name} onChange={onChange}
               placeholder='Nome completo' required/>
              <input type='email' name='email' value={form.email} onChange={onChange}
               placeholder='E-mail' required/>
              <input type='date' name='birth' value={form.value} onChange={onChange}
               required/>
              <textarea name='skills' value={form.skills} onChange={onChange}/>
              Disciplina:
              <select name='subject' value={form.subject} onChange={onChange}>
                {classes && classes.map(cls=>{
                  return<option key={cls.id} value={cls.id}>{cls.name}</option>
                })}
              </select>
              <button>Adicionar</button>
            </form>
          </>
}

export default Admin
