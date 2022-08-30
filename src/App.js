import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Perfil from './components/Perfil'
import Recomendacoes from './components/Recomendacoes'
import Informações from "./components/Informacoes";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={"/"} exact />
        <Route element={<Perfil />} path={"/perfil"} />
        <Route element={<Recomendacoes />} path={"/recomendacoes"} />
        <Route element={<Informações />} path={"/informacoes"} />
        <Route element={<Login />} path={"/login"} />
        <Route element={<Cadastro />} path={"/cadastro"} />
      </Routes>
    </BrowserRouter>
  )
}
export default App