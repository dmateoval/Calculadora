import React from "react";
import "../hojas-de-estilo/Pantalla.css"

/** Esta es otra forma de definir un componente. En vez de iniciar con la palabra reservada function se crea asignando 
 * a una constante mediante una función flecha. El retorno es implícito (por la flecha precisamente) y devuelve la 
 * estructura del componente. Digamos que esta manera se usa en componentes sencillos (de solo presentación vista) que 
 * no tienen una lógica o funciones.
 * NOTA: entre las llaves estamos definiendo una variable prop llamada input (puede tener otro nombre) que la usaremos 
 * para guardar el valor ingresado por el usuario.
 */

const Pantalla = ({ input }) => (
	<div className='input'>
		{input}
	</div>
); 

export default Pantalla;