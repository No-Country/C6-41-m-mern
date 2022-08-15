import React,{useState} from 'react'
import './Formulario.css'


const Formulario = () => {
    const [inputNombre, cambiarInputNombre] = useState('');
    const [inputCorreo, cambiarInputCorreo] = useState('');
    const [inputCTelefono, cambiarInputTelefono] = useState('');
    const [inputFechaNac, cambiarInputFechaNac] = useState('');
    const [inputPassword, cambiarInputPassword] = useState('');

    const handleSubmit = () =>{
        
    }

    const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
        console.log(inputNombre)
        
	}

    const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

    const handleInputTelefono = (e) => {
		cambiarInputTelefono(e.target.value);
	}

    const handleInputFechaNac = (e) => {
		cambiarInputFechaNac(e.target.value);
	}

    const handleInputPassword = (e) => {
		cambiarInputPassword(e.target.value);
	}




  return (
    <>
      <div className='Container'>
        <form action="" onSubmit={handleSubmit} >
             <div className="InputAndPlace">
                <label htmlFor="Nombre">Nombre: *</label>
                <input type="text" name="Nombre" id="Nombre" required value={inputNombre} onChange={handleInputNombre} />
            </div>
            <div className="InputAndPlace">
                <label htmlFor="Correo">Correo: *</label>
                <input type="email" name="Correo" id="Correo" required value={inputCorreo} onChange={handleInputCorreo} />
            </div>
            <div className="InputAndPlace">
                <label htmlFor="Telefono">Teléfono:</label>
                <input type="tel" name="Telefono" id="Telefono" placeholder="(011) 9999-9999" value={inputCTelefono} onChange={handleInputTelefono} />
            </div>
            <div className="InputAndPlace">
                <label htmlFor="FechaNac">Fecha de nacimiento:</label>
                <input type="date" name="FechaNac" id="FechaNac" value={inputFechaNac} onChange={handleInputFechaNac} />
            </div>
            <div className="InputAndPlace">
                <label htmlFor="lstPais">País de origen:</label>
                <select name="lstPais" id="lstPais" class="form-control">
                    <optgroup label="Sudamerica">
                        <option value="54">Argentina</option>
                        <option value="55">Brasil</option>
                        <option value="57">Colombia</option>
                    </optgroup>
                    <optgroup label="Europa">
                        <option value="34">España</option>
                        <option value="33">Francia</option>
                        <option value="49">Alemania</option>
                    </optgroup>
                </select>
            </div>
            <div className="InputAndPlace">
            <label fhtmlFor="chkNewsletter">Password</label>
            <input type="password" name="password" placeholder="Password" id="password" value={inputPassword} onChange={handleInputPassword} />
            </div>
            <div className="InputAndPlace">
                <input type="checkbox" name="chkNewsletter" id="chkNewsletter" checked />
                <label fhtmlFor="chkNewsletter">Deseo recibir mensajes sobre novedades</label>
            </div>
            <div className="InputAndPlace">
                <input type="checkbox" name="chkCondiciones" id="chkCondiciones" />
                <label htmlFor="chkCondiciones">Acepto términos y condiciones</label>
            </div>
           
            <div className="InputAndPlace">
                <button type="submit" name="btnEnviar" id="btnEnviar">Registrar</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Formulario