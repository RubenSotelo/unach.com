import { useNavigate, useLocation } from "react-router-dom";
import escudo from '../assets/Imagen/escudo.png'
import cerrar from '../assets/Imagen/log-out.png'
import '../assets/css/navbar.css'
import { useEffect } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let data = JSON.parse(localStorage.getItem("registro")) || ''

  function cerrarSesion() {
    localStorage.removeItem('registro');
    navigate('/Login');  
  }
  

  return (
      <>
      {location.pathname != '/Login' && location.pathname != '/' && <nav>
        <a> 
          <img className='escudo' src={escudo} alt="" />
        </a>
        <div>
          <ul className='navbar'>
            {data.p_tipo == "PROFESOR" && <li><a href="/Horario">Horario</a></li>}
            {data.p_tipo == "PROFESOR" && <li><a href="/Reservaciones">Listas</a></li>}
            {data.p_tipo == "ADMINISTRADOR" && <li><a href="/Reservaciones">Reservacion</a></li>}
            {data.p_tipo == "ADMINISTRADOR" && <li><a href="/Administradores">Administrador</a></li>}
            {data.p_tipo == "ADMINISTRADOR" && <li><a href="/Profesores">Profesor</a></li>}
            {data.p_tipo == "ADMINISTRADOR" && <li><a href="/Alumnos">Alumno</a></li>}
            <li><button onClick={cerrarSesion}><img src={cerrar}/></button></li>
          </ul>
        </div>
      </nav>}
      </>  
  )
}
