import React, { useState } from "react";
import Header from "../Header";
import Info from "./Info";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

const Perfil = () => {
  const [data, clique] = useState(new Date());
  const [calendar, setCalendar] = useState(false);
  const [info, setInfo] = useState(true);
  return (
    <div>
      <Header />

      <div className="main-container">
        <div className="perfil-nav-bar">
          <img
            className="perfil-img"
            src={require("./imgs/pastel.png")}
            alt="pastel"
          />
          <ul className="perfil-nav-options">
            <li
              className={
                !info
                  ? "perfil-nav-option"
                  : "perfil-nav-option perfil-nav-option__selected"
              }
            >
              <p
                onClick={() => {
                  setCalendar(false);
                  setInfo(true);
                }}
              >
                Seus Dados
              </p>
            </li>
            <li
              className={
                !calendar
                  ? "perfil-nav-option"
                  : "perfil-nav-option perfil-nav-option__selected"
              }
            >
              <p
                onClick={() => {
                  setCalendar(true);
                  setInfo(false);
                }}
              >
                Calendário
              </p>
            </li>
          </ul>
        </div>
        <div className="perfil-container">
          {info ? <Info /> : null}
          {calendar ? <Calendar onChange={clique} value={data} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
