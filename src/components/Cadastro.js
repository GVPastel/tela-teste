import React from "react";

const Cadastro = () => {
    return(
        <div>
        <h2>Pagina de Cadastro</h2>
        <br></br>
        <h3>Email</h3>
        <br></br>
        <li> <input className="inputCadastroEmail" placeholder="Email" /> </li>
        <h3>Senha</h3>
        <li> <input className="inputCastroSenha" placeholder="Senha" /> </li>
        <h3>Confirme sua senha</h3>
        <li> <input className="inputCadastroConfirma" placeholder="Confirma Senha" /> </li>
        <br></br>
        <a href="/login"> <button>Cadastrar</button> </a>
        <br></br>
        <br></br>
        <li> <a href="/login">Ja possuo conta</a> </li> 
        </div>
    )
}

export default Cadastro