import {BrowserRouter} from "react-router-dom"
import Routes from "./routes/Routes"
import Wallpaper from "./img/Labenu_principal_slogan.png"
import styled from "styled-components"

const ImageContainer = styled.div`
    text-align: center;
`
const Logo = styled.img`
    width: 350px;
    text-align: center;
`

function App() {

  return (
    <BrowserRouter>
      <ImageContainer>
        <Logo src={`${Wallpaper}`}/>
      </ImageContainer>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
