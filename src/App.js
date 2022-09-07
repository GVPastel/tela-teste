import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Perfil from "./components/Perfil";
import Contato from "./components/Contato";
import Login from "./components/LoginCadastro/Login";
import Cadastro from "./components/LoginCadastro/Cadastro";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={"/"} exact />
        <Route element={<Perfil />} path={"/perfil"} />
        <Route element={<Contato />} path={"/contato"} />
        <Route element={<Login />} path={"/login"} />
        <Route element={<Cadastro />} path={"/cadastro"} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
