import React from "react";
import Menu from './Menu'

const Cadastro = () => {
    return(
        <div>
        <h2>Pagina de Cadastro</h2>
        <li> <input className="inputCadastroNome" placeholder="Nome" /> </li>
        <li> <input className="inputCastroSenha" placeholder="Senha" /> </li>
        <li> <input className="inputCadastroConfirma" placeholder="Confirma Senha" /> </li>
        < Menu />
        </div>
    )
}

export default Cadastro