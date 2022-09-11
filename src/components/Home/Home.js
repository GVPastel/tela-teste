import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./stylesHome.css";
import Header from "../Header";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="principal">
      <Header />
      <Carousel
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
        className="carrossel"
        showArrows={false}
        dynamicHeight={true}
      >
        <div className="img1">
          <img
            className="imagem1"
            src={require("./imgs/img-1.png")}
            alt="imagem 1 carrossel"
          />

          <img
            className="imagem2"
            src={require("./imgs/img-2.png")}
            alt="imagem 2 carrossel"
          />
        </div>
        <div className="img2">
          <img
            className="imagem1"
            src={require("./imgs/img-3.png")}
            alt="imagem 3 carrossel"
          />

          <img
            className="imagem2"
            src={require("./imgs/img-4.png")}
            alt="imagem 4 carrossel"
          />
        </div>
      </Carousel>
      <Footer />
    </div>
  );
};

export default Home;
