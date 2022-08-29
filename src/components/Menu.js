import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () =>{
    return(
        <nav>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/produtos">Perfil</Link> </li>
                <li> <Link to="/recomendacoes">Recomendações</Link> </li>
                <li> <Link to="/informacoes">Informações</Link> </li>
            </ul>
        </nav>
    )
}

export default Menu