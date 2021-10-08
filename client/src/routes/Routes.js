import {Switch, Route} from "react-router-dom"
import GlobalState from "../global/GlobalState"
import Home from "../pages/Home/Home"
import RegistStudent from "../pages/Regist/RegistStudent"
import Login from "../pages/Login/Login"
import Admin from "../pages/Adm/Admin"


const Routes = ()=>{
  return<Switch>
          <GlobalState>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/regist'>
              <RegistStudent/>
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/admin'>
              <Admin/>
            </Route>
          </GlobalState>
        </Switch>
}
export default Routes
