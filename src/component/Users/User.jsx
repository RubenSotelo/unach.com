
import React from 'react'
import {useNavigate} from 'react-router-dom'
import eliminar from '../../assets/Imagen/eliminar.png';
import editar from '../../assets/Imagen/edit.png';  
import PropTypes from 'prop-types';
import axios from 'axios'

function User({usuario}){
    const naviga = useNavigate();
    
    const editarElemento = (e) => {
        const user = {
            id_usuario: usuario.id_usuario,
            nombre: usuario.nombre,
            email: usuario.email,
            tipo: usuario.nombre_tipo
        }
        naviga('/Registro/User', { state: { usuario: user } })
    }

    const eliminarElemento = (e) => {
        axios.delete(`${import.meta.env.VITE_URL_SERVER}/user/${usuario.id_usuario}`)
    }

    return (
        <tr>
            <td>{usuario.id_usuario}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.email}</td>
            <td  className="expand" >{usuario.nombre_tipo}</td>
            <td className="fit">
                <button className="edit-btn" onClick={editarElemento}><img src={editar} alt="" /></button>
                <button className="delete-btn" onClick={eliminarElemento}><img src={eliminar} alt="" /></button>
            </td>
        </tr>
    );
};

User.displayName = "User"

User.propTypes = {usuario: PropTypes.shape({
    id_usuario: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    nombre_tipo: PropTypes.string.isRequired
    
})};

export default User;
