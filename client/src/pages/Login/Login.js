import {useHistory} from "react-router-dom"
import {useEffect} from "react"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
      margin-top: 10vh;
    }
`
const Inputs = styled.form`
    display: flex;
    flex-direction: column;
    width: 30vw;
    align-items: left;
    gap: 10px;
    margin-bottom: 5vh;
    input{
      height: 25px;
    }
`


const Login = ()=>{
    const history = useHistory()

    useEffect(()=>{
      const token = localStorage.getItem('token')

      if(token !== null){
          history.push('/admin')
      }
    }, [])

    const login = (e)=>{
      e.preventDefault()
      const token = Math.random().toString(36).substring(2)
      localStorage.setItem('token', token)
      history.push('/admin')
    }

    return<Container>
            <h3>Login</h3>
            <Inputs onSubmit={login}>
              <input type='email' placeholder='E-mail' required/>
              <input type='password' placeholder='Senha' required/>
              <button>Entrar</button>
              <input type='button' value='Voltar' onClick={()=> history.push('/')}/>
            </Inputs>

          </Container>
}
export default Login
