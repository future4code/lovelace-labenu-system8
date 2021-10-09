import Context from "./Context"
import {useState, useEffect} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"


const GlobalState = (props)=>{
    const history = useHistory()
    const [classes, setClasses] = useState([])
    const [detail, setDetail] = useState({})


    const getClasses = ()=>{
      axios.get("http://localhost:3003/class").then(res=>{
        console.log(res.data)
        setClasses(res.data)
      }).catch(e=>{
        console.log(e.response)
        alert("algo deu errado")
      })
    }

    useEffect(()=>{
      getClasses()
    }, [])

    const goToDay = (detail)=>{
        history.push('/day')
        setDetail(detail)
    }
    const goToNight = (detail)=>{
        history.push('/night')
        setDetail(detail)
    }

    const states = {classes, detail}
    const setters = {goToDay, goToNight}
    const requests = {}

    return<Context.Provider value={{states, setters, requests}}>
            {props.children}
          </Context.Provider>
}
export default GlobalState
