import React from 'react';
import '../hojas-de-estilo/Boton.css'

/** 
 * Todo lo que esté dentro de las etiquetas de apertura y de cierre del componente Botón será su children*/
function Boton(props) {

	const esOperador = valor =>{
		/** El retorno verifica si no es un número, ni punto, ni tampoco es el signo igual y retorna true; 
		 * caso contrario retorna false.
		*/
		return isNaN(valor) && (valor !== '.') && (valor !== '=');
	};

	return(
		<div
			className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
			onClick={() => props.manejarClic(props.children)}
		>
			{props.children} 
		</div>
	);
}

export default Boton;