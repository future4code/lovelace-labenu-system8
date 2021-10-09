import {useContext, useState} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import Context from "../../global/Context"
import {converDate} from "../../utils/utils"
import {Container, Subjects, Title, Day, Night} from "./styled"



//=======================================Component begin====================
const RegistStudent = ()=>{
    const history = useHistory()
    const {states} = useContext(Context)
    const classes = states.classes
    const [id, setId] = useState('')
    const [form, setForm] = useState({
      name:'',
      email:'',
      birth:'',
      //Destinado a outra requisição
      hobby:''
    })


    const onChange = (e)=>{
      const {name, value} = e.target
      setForm({...form, [name]: value})
    }

    const regist = (e)=>{
        e.preventDefault()

        if(form.hobby.indexOf(',') === -1){
          alert('É preciso separar cada hobby por vírgula.')
        }

        const body = {
          name: form.name,
          email: form.email,
          birth: form.birth,
          hobby: form.hobby,
          classId: id
        }
          axios.post("http://localhost:3003/student", body).then(res=>{
            console.log(res.data)
            alert("BATEU!")
          }).catch(e=>{
            alert(e.response.data.message)
          })
    }


//============================Render===========================================
    return<Container>
            <header>
              <h3>Escolha uma turma e um um turno.</h3>
              <button onClick={()=> history.push('/')}>Voltar</button>
            </header>
            <Title>
              <span >Integral</span>
              <span style={{marginRight:'130px'}}>Noturna</span>
            </Title>
            <Subjects>
            <Day>
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
            </Day>
            <Night>
            {classes && classes.map(cls=>{
              return<div key={cls.id}>
                      <p>
                      <input type='radio' name='subject' id='sub'
                        onClick={()=> setId(cls.id)}/>
                        {cls.name}-na-night<br/>
                        <small>
                          Iniçio: {converDate(cls.begin)}<br/>
                          Fim: {converDate(cls.end)}<br/>
                          Modulo: {cls.module}
                        </small>
                      </p>
                    </div>
            })}
            </Night>
            </Subjects>

            <form onSubmit={regist}>
              <input type='text' name='name' value={form.name} onChange={onChange}
               placeholder='Nome completo' required/>
              <input type='email' name='email' value={form.email} onChange={onChange}
               placeholder='E-mail' required/>
              <input type='date' name='birth' value={form.birth} onChange={onChange}
               required/>
              <textarea name='hobby' value={form.hobby} onChange={onChange}
               placeholder='Hobbies. Separados por virgula(opcional)'/>
              <button>Inscrever-se</button>
            </form>
          </Container>
}
export default RegistStudent
