import {useContext} from "react"
import Context from "../global/Context"
import styled from "styled-components"
import {converDate} from "../utils/utils"
import {useHistory} from "react-router-dom"


const Container = styled.div`
    .title{
      font-size: 2rem;
      margin-top: 10vh;
    }
    button{
      float: right;
    }
`

const Popup = ()=>{
    const {states} = useContext(Context)
    const detail = states.detail
    const history = useHistory()


    return<Container>
            <div className='card'>
            <button onClick={()=> history.push('/regist')}>Voltar</button>
              <div className='title'>{detail.name}-na-night</div>
              <p><b>Início:</b> {converDate(detail.begin)}</p>
              <b>Término:</b> {converDate(detail.end)}
              <p><b>Módulo:</b> {detail.module}</p>
            </div>
          </Container>
}
export default Popup
