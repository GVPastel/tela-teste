import React, { useState } from "react";
import "./styles.css";
import { ReactComponent as Visible } from "./icons/visibility.svg";
import { ReactComponent as VisibleOff } from "./icons/visibility_off.svg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="box">
          <h2 className="pageTitle">Login</h2>

          <ul className="inputContainer">
            <fieldset className="inputRow">
              <legend className="inputTitle">Email</legend>
              <input className="input" />
            </fieldset>

            <fieldset className="inputRow">
              <legend className="inputTitle">Senha</legend>
              <div className="passwordInputContainer">
                <input
                  className="input"
                  type={!showPassword ? "password" : "text"}
                />
                {
                  <span
                    className="passwordInputIcon"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {!showPassword ? <Visible /> : <VisibleOff />}
                  </span>
                }
              </div>
            </fieldset>

            <a href="/" className="forgotPassword">
              Esqueceu a senha?
            </a>

            <a className="buttonWrapper" href="/">
              <button className="button">Entrar</button>
            </a>

            <li className="registerWrapper">
              <a className="register" href="/cadastro">
                Não possui conta? Cadastre-se aqui
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
