import React from "react";
import '../css/loginEntity.css';
import { Link } from "react-router-dom";
import xwhithe from '../img/xwhithe.svg'

function LoginEntityPage(){
	return (
        <div className="login-entity">
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
                        <input type="texto" name="nombre" placeholder="usuario" required></input>
                    </div>
                    <div className="input">
                        <input type="texto" name="cargo" list="cargo" placeholder="cargo" required></input>
                        <datalist id="cargo">
                            <option value="Asesor">Asesor</option>
                            <option value="Verificador">Verificador</option>
                            <option value="Analista">Analista</option>
                        </datalist>
                    </div>
                    <div className="input">
                        <input type="password" name="contraseña" placeholder="contraseña" required></input>
                    </div>
                    <div className="recordarme">
                        <input type="checkbox" id="recordarme" name="recordarme" required></input>
                        <label for="recordarme">Recordarme</label>
                    </div>
                    <div className="input">
                        <button type="button" href="#" className="ingresar">Ingrsear</button>
                    </div>
                    <div className="registrar">
                        <Link to='/register'>
                            Registrarse
                        </Link>
                    </div>
                    <div className="OlvClave">
                        <Link to='/'>
                            ¿OLvidó su clave?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
	);
}

export default LoginEntityPage;
