import React from "react";
import { ReactComponent as Home } from "./Home/icons/home.svg";
import { ReactComponent as Nos } from "./Home/icons/nos.svg";
import { ReactComponent as Perfil } from "./Home/icons/perfil.svg";

const Header = () =>{
    return(
        <header> <img className="logo" src={require("./Home/imgs/logo.png")} alt="logo"/> 
            <ul className="listHeader">
                <li className="InicioHeader">  <a href="/" className="itemHeader"><Home/>Inicio</a> </li>
                <li className="InicioHeader"> <a href="/contato" className="itemHeader"><Nos/>Sobre nós</a> </li>
                <li className="InicioHeader"><a href="/perfil" className="itemHeader"><Perfil/> Perfil</a> </li>
            </ul>
        </header>
    )
}

export default Header