import { HeaderContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header (){
    return (
        
    <HeaderContainer>
        <img src={logo} alt="logo ignite" />
        <nav>
            <NavLink title="Home" to="/"><Timer size={25}/></NavLink>
            <NavLink title="Historico" to="/history"><Scroll size={25}/></NavLink>
        </nav>

    </HeaderContainer>)
}