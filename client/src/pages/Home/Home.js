import {useHistory, Link} from "react-router-dom"


const Home = ()=>{
    const history = useHistory()
    return<>
            <h1>Labe System8</h1>
            <Link to='/regist'>Inscrição</Link>
          </>
}
export default Home
