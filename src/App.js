import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Perfil from './components/Perfil'
import Recomendacoes from './components/Recomendacoes'
import Informações from "./components/Informacoes";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={"/"} exact />
        <Route element={<Perfil />} path={"/perfil"} />
        <Route element={<Recomendacoes />} path={"/recomendacoes"} />
        <Route element={<Informações />} path={"/informacoes"} />
      </Routes>
    </BrowserRouter>
  )
}
export default App