import React,{useState} from 'react';
import estilos from './Slider.module.css';

function Slider({ imagenes }) {
	// Variables y Estados
	const [imagenActual, setImagenActual] = useState(0);
	const cantidad = imagenes?.length;
  
	// Return prematuro para evitar errores
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

	return (
		<div className={estilos.container}>
			<button onClick={anteriorImagen}>←</button>
			{imagenes.map((imagen, index) => {
				return (
					<div
						className={
							imagenActual === index
								? `${estilos.slide} ${estilos.active}`
								: estilos.slide
						}>
						{imagenActual === index && (
                            <>
                            <h1>{imagen.nombre}</h1>
							<img key={index} src={imagen.imagen} alt="imagen" className={estilos.img} />
                            </>						)}
					</div>
				);
			})}
			<button onClick={siguienteImagen}>→</button>
		</div>
	);
}

export default Slider;