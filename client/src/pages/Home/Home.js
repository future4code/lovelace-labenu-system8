import {useHistory, Link} from "react-router-dom"
import styled from "styled-components"


const Container = styled.div`
    text-align: center;
    margin-top: 10vh;
    .right{
      margin-right: 20px;
    }
    .left{
      margin-left: 20px;
    }
`

const Home = ()=>{
    const history = useHistory()
    return<Container>
            <h1>Labe System8</h1>
              <Link to='/regist' className='right'>Inscrição</Link>
              <Link to='/login' className='left'>Área de adm</Link>
          </Container>
}
export default Home
