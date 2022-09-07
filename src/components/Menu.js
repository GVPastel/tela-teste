import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () =>{
    return(
        <nav>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/perfil">Perfil</Link> </li>
                <li> <Link to="/recomendacoes">Recomendações</Link> </li>
                <li> <Link to="/informacoes">Informações</Link> </li>
                <li> <Link to="/login">Login</Link> </li>
                <li> <Link to="/cadastro">Cadastro</Link> </li>
            </ul>
        </nav>
    )
}

export default Menu