import html2canvas from 'html2canvas';
import { useState } from 'react';
import './App.css';
// componente de react


function App() {
  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');
  const [imagen,setImagen] = useState('');
  const onChangeLinea1 = function(evento) {
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function(evento) {
    setLinea2(evento.target.value)
  }
  //este evento devuelve el valor de la opcion del select
  const onChangeImagen = function(evento) {
    setImagen(evento.target.value)
  }
  const onClickExportar = function(){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img =canvas.toDataURL("image/jpg");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value = "bob">bob esponja</option>
        <option value = "pelo">pelo esponjado</option>
        <option value = "raton">jerry</option>
      </select><br/>
      <input onChange={onChangeLinea2} type="text" placeholder='linea 2'/><br/>
      <input onChange={onChangeLinea1} type="text" placeholder='linea 1'/><br/>
      <button onClick={onClickExportar}>Exportar</button>
      <div className='meme' id='meme'>
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src = {"/img/"+imagen+".jpg"} alt={linea1+" "+linea2}/>
      </div>
    </div>
  );
}

export default App;
