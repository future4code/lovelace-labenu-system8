import Context from "./Context"
import {useState, useEffect} from "react"
import axios from "axios"


const GlobalState = (props)=>{
    const [classes, setClasses] = useState([])


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

    const states = {classes}
    const setters = {}
    const requests = {}

    return<Context.Provider value={{states, setters, requests}}>
            {props.children}
          </Context.Provider>
}
export default GlobalState
