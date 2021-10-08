import {useEffect, useState} from "react"
import {useHistory} from "react-router-dom"


const Admin = ()=>{
    const history = useHistory()
    const [form, setForm] = useState({})


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

    return<>
            <header>
              <h3>Admin</h3>
              <button onClick={logout}>Logout</button>
              <button onClick={()=> history.push('/')} >Voltar</button>
            </header>
            <form>
            </form>
          </>
}

export default Admin
