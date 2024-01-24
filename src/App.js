import React, { useState } from "react";
import './App.css';
import html2canvas from "html2canvas";

function App() {

  const [linea1, setLinea1] = useState("Cuando podes");
  const [linea2, setLinea2] = useState("Cuando podes crear tus propios memes");
  const [imagen, setImagen] = useState("negro-pensativo");
  const [tamanio1, setTamanio1] = useState("2");
  const [tamanio2, setTamanio2] = useState("2");

  function onChangeSelect(e) {
    setImagen(e.target.value);
  }

  function onChangeLinea1(e) {
    setLinea1(e.target.value);
  }

  function onChangeLinea2(e) {
    setLinea2(e.target.value);
  }

  function onChangeTamanioLinea1(e) {
    setTamanio1(e.target.value);
  }

  function onChangeTamanioLinea2(e) {
    setTamanio2(e.target.value);
  }

  function cambiarTamanio(tamanio) {
    switch (parseInt(tamanio, 10)) {
      case 0:
        return "0.68rem";
      case 1:
        return "1.34rem";
      case 2:
        return "2rem";
      case 3:
        return "2.66rem";
      case 4:
        return "3.33rem";
    }
  }

  function onClickExportar(e) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <div className="memes-container">
        <select onChange={onChangeSelect}>
          <option value="negro-pensativo"> Negro pensativo </option>
          <option value="aliens-pelo-loco"> Aliens pelo loco </option>
          <option value="coreana-puchero"> Coreana puchero </option>
          <option value="dinosaurio-pensativo"> Dinosaurio pensativo </option>
          <option value="futurama-pensativo"> Futurama pensativo </option>
          <option value="negro-matrix"> Negro matrix </option>
          <option value="niña-incendio"> Niña incendio </option>
          <option value="rubia-dientes"> Rubia dientes </option>
        </select>

        <input onChange={onChangeLinea1} type="text" placeholder="Linea 1..."></input>
        <input onChange={onChangeTamanioLinea1} type="range" min="0" max="4" value={tamanio1}></input>

        <input onChange={onChangeLinea2} type="text" placeholder="Linea 2..."></input>
        <input onChange={onChangeTamanioLinea2} type="range" min="0" max="4" value={tamanio2}></input>
        <button onClick={onClickExportar}> Exportar </button>
        <div className="meme" id="meme">
          <span className="texto-meme linea1" style={{ fontSize: cambiarTamanio(tamanio1) }}>{linea1}</span>
          <span className="texto-meme linea2" style={{ fontSize: cambiarTamanio(tamanio2) }}>{linea2}</span>
          <img src={"./images/" + imagen + ".png"} alt={`Imagen de ${imagen}`} />
        </div>

      </div>
    </div>
  );
}

export default App;
