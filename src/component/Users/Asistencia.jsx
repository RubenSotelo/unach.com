import React, {useState} from "react";
import axios from "axios";

function Asistencia(props) {

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
        <div className="login">Asistencia</div>
        <form onSubmit={enviarElementos}>
          <div className="campos">
            <div className='campo'>
              <input type="text" name="nombre" value={user.nombre} onChange={handleChange} placeholder="nombre" />
            </div>
            <div className='campo'>
              <input type="text" name="matricula" value={user.email} onChange={handleChange} placeholder="matricula" />
            </div>
            <div className='campo'>
              <input type="text" name="equipo" value={user.email} onChange={handleChange} placeholder="equipo" />
            </div>
          </div>
          <button className="log" type="submit">Registrar</button>
        </form>
      </div>
    </div>
    )
}