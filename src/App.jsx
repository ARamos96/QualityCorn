import { useState } from "react";
import "./App.css";
import CustomCarousel from "./components/Carousel";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
      <div className="body">
        <div className="header-container">
          <Navbar />
          <h1>Quality Corn Grain</h1>
        </div>
        <div className="almacenamos-container">
          <div className="almacenamos-text-container">
            <h2>Seleccionamos y almacenamos grano</h2>
            <p>
              Quality Corn Grain es una empresa que se dedica a la selección y
              almacenamiento de grano de maíz.
            </p>
          </div>
          <img
            src="https://qualitycorn.com/wp-content/uploads/2024/11/engin-akyurt-CwO8qW_GFPE-unsplash-4-png.webp"
            alt="Grano almacenado"
          />
        </div>
        <div className="instalaciones-container">
          <div className="instalaciones-inner-container">
            <div className="empty-container"></div>
            <div className="instalaciones-text-container">
              <h2>Instalaciones</h2>
              <p>
                Disponemos de una capacidad de almacenamiento de grano de
                146.700 T en un total de 65 silos y 3 almacenes con tres
                secaderos con una capacidad de secado de 200 T/h.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="variedades-de-maiz-container">
          <div className="variedades-inner-container">
            <div className="variedades-text-container">
              <h2>Hemos obtenido aproximadamente 1.000 variedades de maíz</h2>
              <p>
                Desde hace 15 años y conjuntamente con AMAETON, Quality Corn
                Grain lleva a cabo ensayos anuales de entre{" "}
                <b>50 a 60 variedades nuevas</b>, habiendo obtenido así y a día
                de hoy datos de un total de aproximadamente{" "}
                <b>1.000 variedades de maíz.</b>
              </p>
            </div>
            <div className="variedades-img-container">
              <img
                src="https://qualitycorn.com/wp-content/uploads/2024/11/Group-2056-png.webp"
                alt="Variedades de maíz"
              />
            </div>
          </div>
        </div>
        <div className="procesado-container">
          <div className="procesado-inner-container">
            <div className="procesado-text-container">
              <h2>Procesado</h2>
              <p>
                Cuando el cultivo llega de la cosecha, es procesado de la
                siguiente manera en las instalaciones de Quality Corn Grain:{" "}
              </p>
            </div>
            <CustomCarousel></CustomCarousel>
          </div>
        </div>
      </div>
  );
}

export default App;
