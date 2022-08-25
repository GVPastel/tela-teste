import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () =>{
    return(
        <nav>
            <ul>
                <li> <Link to="/">Principal</Link> </li>
                <li> <Link to="/produtos">Produtos</Link> </li>
                <li> <Link to="/sobre">Sobre</Link> </li>
            </ul>
        </nav>
    )
}

export default Menu