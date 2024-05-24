import '../css/home.css';
import React from "react";
import { Link } from "react-router-dom";


function HomePage() {
	return (
		<div className="home-page">
			
			<div className="contenedor_ingreso contenedor">{/* Contenedor_ ingreso corresponde  al espacio para los div de logo y botones/ tiene adicional una clase contenedor para  mejor ajuste en el Css */}
				<div className="logo">  {/*  campo para imagen del logo, se insertará en el Css */}
				</div>
				<div className="inicio">{/*  Campo para los botones de ingreso  */}
					<h2 className="ingreso">Ingresar como:</h2><br></br>{/*  subtitulo */}
					{/*  los botones tienen etiquetas de enlaces */}
					<Link className="entidad" to='/login-entity'>
						<button type="button"  className="entidad">Entidad Bancaria</button>
					</Link>
					<Link className="persona" to='/login-person'>
						<button type="button"  className="persona">Persona Natural</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
