import React from "react";
import xwhithe from '../img/xwhithe.svg'
import { Link } from "react-router-dom";
import '../css/loginPerson.css';


function LoginPersonPage(){
	return (
    <div className="login-person">
        <div className="contenedor_formulario contenedor">
            <div className="logo">
            </div>
            <form method="post" action="send" className="formulario">
                <div className="cerrar">
                    <Link className="entidad" to='/'>
                        <img src={xwhithe} alt="cerrar"></img>
                    </Link>
                </div>
                
                <div className="input">
                    <input type="texto" name="tipoDoc" list="tipoDoc" placeholder="Tipo de documento" required></input>
                    <datalist id="tipoDoc">
                        <option value="Cédula de ciudadanía">Cedula de ciudadania</option>
                        <option value="Carnet de extranjería">Carnet de extranjeria</option>
                        <option value="Pasaporte">Pasaporte</option>
                    </datalist>
                </div>
                <div className="input">
                    <input type="text" name="numDoc" placeholder="Número de documento" required></input>
                </div>
                <div className="recordarme">
                    <input type="checkbox" id="recordarme" name="recordarme" required></input>
                    <lebel for="recordarme">Recordarme</lebel>
                </div>
                <div className="input">
                    <button type="button" href="#" className="ingresar">Ingresar</button>
                </div>
            
            </form>
        </div>
    </div>
	);
}

export default LoginPersonPage;
