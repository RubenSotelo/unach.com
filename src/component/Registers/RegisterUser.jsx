import React, { useState } from 'react';
import {useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import '../../assets/css/registro.css';
import PropTypes from 'prop-types';

function RegisterUser() {
  const location = useLocation();
  const navigate = useNavigate()
  const usuario = location.state?.usuario || {};

  const [user, setUser] = useState({
    id_usuario: usuario.id_usuario || 0, 
    nombre: usuario.nombre || "",
    email: usuario.email || "",
    tipo: usuario.tipo || ""
  });

  const handleChange = (e) => {
    setUser((element) => ({
      ...element, 
      [e.target.name]: e.target.value,
    }));
  }

  const enviarElementos = async (e) => {
    e.preventDefault();
    try {
      if (user.id_usuario != 0)
        await axios.put(`${import.meta.env.VITE_URL_SERVER}/user`, user);
      else
        await axios.post(`${import.meta.env.VITE_URL_SERVER}/user`, user);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
    navigate('/Administradores')
  };

  return (
    <div className='body'>
      <div className="frame">
        <div className="login">Registro</div>
        <form onSubmit={enviarElementos}>
          <div className="campos">
            <div className='campo'>
              <input type="text" name="nombre" value={user.nombre} onChange={handleChange} placeholder="nombre" />
            </div>
            <div className='campo'>
              <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="email" />
            </div>
            <div className='campo'>
              <select name="tipo" value={user.tipo} onChange={handleChange}>
                <option value="ADMINISTRADOR">Administrador</option>
                <option value="PROFESOR">Profesor</option>
                <option value="ALUMNO">Alumno</option>
              </select>
            </div>
          </div>
          <button className="log" type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}

RegisterUser.displayName = "Usuario";

RegisterUser.propTypes = {
  usuario: PropTypes.shape({
    id_usuario: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired
  })
};

export default RegisterUser;