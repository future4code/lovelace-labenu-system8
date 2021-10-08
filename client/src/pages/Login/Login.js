import {useHistory} from "react-router-dom"
import {useEffect} from "react"


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

    return<>
            <h3>Login</h3>
            <form onSubmit={login}>
              <input type='email' placeholder='E-mail' required/>
              <input type='password' placeholder='Senha' required/>
              <button>Entrar</button>
              <input type='button' value='Voltar' onClick={()=> history.push('/')}/>
            </form>

          </>
}
export default Login
