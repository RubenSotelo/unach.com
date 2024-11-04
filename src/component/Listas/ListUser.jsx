
import React, { useEffect, useState } from "react"
import {useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import User from "../Users/User"
import '../../assets/css/list.css'
import add from '../../assets/Imagen/add-user.png'

export default function ListUser() {
  const navigate = useNavigate()
  let location = useLocation();
  const [users, setUsers] = useState([])

  useEffect(() => {
    const loadUsers = async () => {
      let url;
      if (location.pathname === '/Administradores') {
        url = `${import.meta.env.VITE_URL_SERVER}/users/ADMINISTRADOR`;
      } else if (location.pathname === '/Profesores') {
        url = `${import.meta.env.VITE_URL_SERVER}/users/PROFESOR`;
      } else if (location.pathname === '/Alumnos') {
        url = `${import.meta.env.VITE_URL_SERVER}/users/ALUMNO`;
      }
      const res = await axios.get(url);
      setUsers(res.data);
    };

    loadUsers();
  }, [location.pathname]);

  return (
      <div className="body">
        <div className="table_content">
          <div className="table_head">
            <button onClick={()=>{navigate('/Registro/User')}}><img src={add}/></button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Tipo</th>
                <th>Opciones</th>
              </tr>  
            </thead>
          <tbody>
              {users.map((user) =>(<User usuario={user} key= {user.id_usuario} />))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
