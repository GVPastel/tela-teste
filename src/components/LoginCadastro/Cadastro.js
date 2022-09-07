import React, { useState } from "react";
import "./styles.css";
import { ReactComponent as Visible } from "./icons/visibility.svg";
import { ReactComponent as VisibleOff } from "./icons/visibility_off.svg";

const Cadastro = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="box">
          <h2 className="pageTitle">Cadastro</h2>

          <ul className="inputContainer">
            <fieldset className="inputRow">
              <legend className="inputTitle">Nome Completo</legend>
              <input className="input" />
            </fieldset>
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
            <fieldset className="inputRow">
              <legend className="inputTitle">Telefone para Contato</legend>
              <input className="input" />
            </fieldset>
            <a className="buttonWrapperRegister" href="/login">
              <button className="button">Fazer Cadastro</button>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
