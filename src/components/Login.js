import React from "react";


const Login = () => {
    return(
        <div>
        <h2>Pagina de Login</h2>
        <br></br>
        <h3>Email</h3>
        <li> <input className="inputLoginoEmail" placeholder="Email" /> </li>
        <h3>Senha</h3>
        <li> <input className="inputLoginSenha" placeholder="Senha" /> </li>
        <br></br>
        <a>Esqueceu a senha?</a>
        <br></br> <br></br>
        <a href="/"> <button>Entrar</button> </a>
        <br></br> <br></br>
        <li> <a href="/cadastro">Não possui conta? Cadastre-se aqui</a></li>
        </div>
    )
}

export default Login