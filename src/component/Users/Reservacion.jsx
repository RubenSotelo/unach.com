import React,{ useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import eliminar from '../../assets/Imagen/eliminar.png';
import editar from '../../assets/Imagen/edit.png';
import qr from '../../assets/Imagen/qr.png';  
import PropTypes from 'prop-types';
import '../../assets/css/list.css'

function Reservacion({reservacion}){
    
    const navigate = useNavigate();
    const [id, setId] = useState(0); 
    let data = JSON.parse(localStorage.getItem("registro"))

    
    const handleClick = async(e) => {
        const fecha = new Date();
        const asistencia = {id_reservacion: reservacion.id_reservacion, fecha: fecha}
        await axios.post(`${import.meta.env.VITE_URL_SERVER}/asistencia`,asistencia)
        .then((res)=>{ 
            navigate("/Qr", { state: res.data.id_asistencia });
        })
    }

    return (
        <tr>
            <td>{reservacion.id_reservacion}</td>
            <td>{reservacion.dia}</td>
            <td>{reservacion.hora_inicio}</td>
            <td>{reservacion.hora_fin}</td>
            <td>{reservacion.grupo_nombre}</td>
            <td>{reservacion.materia_nombre}</td>
            <td>{reservacion.laboratorio_nombre}</td>
            {data.p_tipo == "ADMINISTRADOR" && <td className="fit">
                <button className="edit-btn"><img src={editar} alt="" /></button>
                <button className="delete-btn"><img src={eliminar} alt="" /></button>
            </td>}
            {data.p_tipo == "PROFESOR" && <td className="fit">
                <button className="edit-btn" onClick={handleClick}><img src={qr} alt="" /></button>
            </td>}
        </tr>
    );
};

Reservacion.displayName = "Reservacion"

Reservacion.propTypes = {reservacion:  PropTypes.shape({
    id_reservacion: PropTypes.number.isRequired,
    dia: PropTypes.string.isRequired,
    hora_inicio: PropTypes.string.isRequired,
    hora_fin: PropTypes.string.isRequired,
    grupo_nombre: PropTypes.string.isRequired,
    usuario_nombre: PropTypes.string.isRequired,
    materia_nombre: PropTypes.string.isRequired,
    laboratorio_nombre: PropTypes.string.isRequired
})};

export default Reservacion;