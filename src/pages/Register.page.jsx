import React, { useEffect, useState } from "react";
import xwhithe from '../img/xwhithe.svg'
import arrowleft from '../img/arrowleft.svg'
import { Link } from "react-router-dom";
import '../css/register.css';


function RegisterPage() {
	const [type, setType] = useState('formulario')
	const [listaPersonas, setListaPersonas] = useState([]);
	const [persona, setPersona] = useState({
		nombres: '',
		cargo: '',
		apellidos: '',
		correo: '',
		confirmarCorreo: '',
		documento: '',
	})


	const handleChange = (event) => {
		const { name, value } = event.target;
		// Actualizar el estado del formulario con el nuevo valor
		setPersona({
			...persona,
			[name]: value
		});
	};


	function save(e) {
		e.preventDefault();
		if (persona.nombres &&
			persona.cargo &&
			persona.apellidos &&
			persona.correo &&
			persona.confirmarCorreo &&
			persona.documento) {

			const current = listaPersonas
			current.push(persona)
			setListaPersonas(current)
      setPersona({
        nombres: '',
        cargo: '',
        apellidos: '',
        correo: '',
        confirmarCorreo: '',
        documento: '',
      })
		}
	}

	useEffect(() => {
		setListaPersonas([{
			nombres: 'Juan',
			cargo: 'Asesor',
			apellidos: 'Pérez',
			correo: 'juan@credikfam.com',
			confirmarCorreo: 'juan@credikfam.com',
			documento: '123456789',
		},
		{
			nombres: 'Ana',
			cargo: 'Verificador',
			apellidos: 'Pérez',
			correo: 'ana@credikfam.com',
			confirmarCorreo: 'ana@credikfam.com',
			documento: '987654321',
		}])
	}, [])


	return (
		<>
			<div className="register">
				{
					type === 'formulario' ? (
						<>
							<header>
								<div className="contenedor">
									<div className="closeback">
										<Link to='/'>
											<img src={arrowleft} alt="retornar"></img>
										</Link>
										<Link to='/'>
											<img src={xwhithe} alt="cerrar"></img>
										</Link>										
									</div>
                  <div className="titulo">
                    <h1 className="titulo">FORMULARIO DE REGISTRO</h1>
                  </div>
                  <div className="ver-listado">
                    <button type="button" href="#" className="guardar" onClick={()=>{setType('lista')}}>Ver Listado</button>
                  </div>
								</div>
							</header>
              
							<div className="contenedor_formulario contenedor">                
								<form className="formulario" onSubmit={save}>
									<div className="input">
										<h2 className="subtitulo">Datos del Usuario</h2>
										<input onChange={handleChange} value={persona.nombres} type="texto" name="nombres" placeholder="Nombres*" required></input>
										<input onChange={handleChange} value={persona.cargo} type="texto" name="cargo" list="cargo" placeholder="Cargo" required></input>
										<datalist id="cargo">
											<option value="Asesor">Asesor</option>
											<option value="Verificador">Verificador</option>
											<option value="Analista">Analista</option>
										</datalist>
									</div>
									<div className="input">
										<input onChange={handleChange} value={persona.apellidos} type="text" id="apellidos" name="apellidos" placeholder="Apellidos*" required></input>
										<input onChange={handleChange} value={persona.correo} type="email" name="correo" placeholder="Correo corporativo*" required></input>
									</div>
									<div className="input">
										<input onChange={handleChange} value={persona.documento} type="number" id="documento" name="documento" placeholder="Documento de identidad*" required></input>
										<input onChange={handleChange} value={persona.confirmarCorreo} type="email" name="confirmarCorreo" placeholder="Confirmar correo*" required></input>
									</div>
									<div className="input">
										<button type="submit" href="#" className="guardar">Guardar</button>
									</div>
								</form>
							</div></>
					) : (
						<>
							<header>
								<div className="contenedor">
									<div className="closeback">
										<Link to='/'>
											<img src={arrowleft} alt="retornar"></img>
										</Link>
										<Link to='/'>
											<img src={xwhithe} alt="cerrar"></img>
										</Link>										
									</div>
                  <div className="titulo">
                    <h1 className="titulo">LISTA DE REGISTROS</h1>
                  </div>
                  <div className="ver-listado">
                    <button type="button" href="#" className="guardar" onClick={()=>{setType('formulario')}}>Ver Formulario</button>
                  </div>
								</div>
							</header>
							<div className="contenedor_tabla contenedor">
              <div>
                <h2 style={{marginTop:'50px'}}>Tabla de datos</h2>
                <br></br>
                <table>
                  <thead>
                    <tr>
                      <th>Nombres</th>
                      <th>Apellios</th>
                      <th>Documento</th>
                      <th>Cargo</th>
                      <th>Correo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listaPersonas.map(item => (
                      <tr key={item.nombres}>
                        <td>{item.nombres}</td>
                        <td>{item.apellidos}</td>
                        <td>{item.documento}</td>
                        <td>{item.cargo}</td>
                        <td>{item.correo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
							</div>
              </>
					)
				}
			</div>
		</>
	);
}

export default RegisterPage;
