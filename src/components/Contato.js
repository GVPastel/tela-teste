import React from "react";
import Header from "./Header";

const Contato = () => {
    return(
        <div className="principal">
            <Header />
            <h3 className="textoContato1">Gestacy é um site focado no apoio a gestante desde os primeiros meses ate o momento do parto, oferecendo informaçoes e ajudando na organizaçao de compromissos. <br></br> Nós da Gestacy percebemos um aumento enorme na procura por auxilio durante o periodo de gravidez mas muitas não sabiam o que fazer e nem como se organizar perante ao periodo que estava passando.</h3>
            <div className="divContato">
            <img
              className="imgContato"
              src={require("./Home/imgs/logo.png")}
              alt="imagem 1 carrossel"
            />
            </div>
        </div>
    )
}

export default Contato