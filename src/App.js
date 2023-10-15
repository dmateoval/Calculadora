import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  /**Declaramos el manejador del estado propio de React con nuestra variable a utilizar*/
  const [input, setInput] = useState('');

  /**Declaramos función que muestra caracteres en pantalla cuando el usuario haga clic */
  const mostrarCaracterEnPantalla = caracter => {
    setInput(input + caracter);
  };

  const calcularResultado = () => {
    if(input)
    {
      setInput(evaluate(input));
    } else{
      alert("Por favor ingrese valores para realizar los cálculos");
    }
  };

  /**NOTA: Al agregar el componente Boton, definimos también una prop llamada "manejarClic" que sirve para llamar a
   * la función mostrarCaracterEnPantalla. En el componente Boton.js se hará uso del listener que desencadena esta llamada
   * (evento onClick) como una invocación a una función anónima () => (ya que el cuerpo de la función está escrito quí en App.js)
   */

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={mostrarCaracterEnPantalla}>1</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>2</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>3</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={mostrarCaracterEnPantalla}>4</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>5</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>6</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={mostrarCaracterEnPantalla}>7</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>8</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>9</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>0</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>.</Boton>
          <Boton manejarClic={mostrarCaracterEnPantalla}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear
            manejarClear={() => setInput('')}
          >
            Limpiar Pantalla
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
