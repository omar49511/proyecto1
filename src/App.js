import { useState } from 'react';
import './App.css';
// componente de react


function App() {
  const [linea1,setLinea1] = useState('');
  const [linea2,setLinea2] = useState('');
  const onChangeLinea1 = function(evento) {
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function(evento) {
    setLinea2(evento.target.value)
  }
  return (
    <div className="App">
      <select>
        <option value = "fire">Casa en llamas</option>
      </select><br/>
      <input onChange={onChangeLinea1} type="text" placeholder='linea 1'/><br/>
      <input onChange={onChangeLinea2} type="text" placeholder='linea 2'/><br/>
      <button>Exportar</button>
      <div>
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
      </div>
    </div>
  );
}

export default App;
