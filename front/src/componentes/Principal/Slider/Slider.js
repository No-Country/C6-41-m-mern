import React,{useState} from 'react';
import estilos from './Slider.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
			<ArrowBackIosIcon onClick={anteriorImagen}></ArrowBackIosIcon>
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
							<img key={index} src={imagen.imagen} alt="imagen" className={estilos.imgSlider} />
                            </>						
							)}
					</div>
				);
			})}
			<ArrowForwardIosIcon onClick={siguienteImagen}></ArrowForwardIosIcon>
		</div>
	);
}

export default Slider;