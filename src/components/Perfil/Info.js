import React from "react";

const Info = () => {
  return (
    <div className="info-container">
      <fieldset className="info-text">
        <legend className="info-text-title">Nome</legend>
        <p className="info-text-content">Fernando Ruiz de Paula Xavier</p>
      </fieldset>
      <fieldset className="info-text">
        <legend className="info-text-title">Email</legend>
        <p className="info-text-content">gvpastel@gmail.com</p>
      </fieldset>
      <fieldset className="info-text">
        <legend className="info-text-title">Senha</legend>
        <p className="info-text-content">*******</p>
      </fieldset>
      <fieldset className="info-text">
        <legend className="info-text-title">Telefone para Contato</legend>
        <p className="info-text-content">4002-8922</p>
      </fieldset>
    </div>
  );
};
export default Info;
