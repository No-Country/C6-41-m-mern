import React, {useState} from 'react';
import './Login.css';

const Login = () => {
	const [inputPassword, cambiarInputPassword] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log('Formulario Enviado!');
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputPassword = (e) => {
		cambiarInputPassword(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	return (
		<>
			
			<form action="" onSubmit={handleSubmit} className="login">
				<div>
					<label htmlFor="correo">Correo</label>
					<input
						type="email"
						name="correo"
						placeholder="Correo@outlook.com"
						id="correo"
						value={inputCorreo}
						onChange={handleInputCorreo}
					/>
				</div>
        		<div>
					<label htmlFor="password">Clave</label>
					<input
						type="password"
						name="password"
						placeholder="Password"
						id="password"
						value={inputPassword}
						onChange={handleInputPassword}
					/>
				</div>

				<button type="submit" href="/Home">Ingresar</button>
			</form>
		</>
	);
}
 
export default Login;