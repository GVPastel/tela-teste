import React from "react";
import Menu from './Menu'

const Login = () => {
    return(
        <div>
        <h2>Pagina de Login</h2>
        <li> <input className="inputLoginoNome" placeholder="Nome" /> </li>
        <li> <input className="inputLoginSenha" placeholder="Senha" /> </li>
        < Menu />
        </div>
    )
}

export default Login