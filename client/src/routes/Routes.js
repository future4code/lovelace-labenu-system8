import {Switch, Route} from "react-router-dom"
import GlobalState from "../global/GlobalState"
import Home from "../pages/Home/Home"
import RegistStudent from "../pages/Regist/RegistStudent"


const Routes = ()=>{
  return<Switch>
          <GlobalState>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/regist'>
              <RegistStudent/>
            </Route>
          </GlobalState>
        </Switch>
}
export default Routes
