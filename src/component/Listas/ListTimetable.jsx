import React,{ useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Reservacion from '../Users/Reservacion'
import add from '../../assets/Imagen/add-reser.png'
import '../../assets/css/list.css'

export default function ListTimetable() {
  const navigate = useNavigate();
  const [reservaciones, setReservaciones] = useState([])
  let data = JSON.parse(localStorage.getItem("registro"))

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_URL_SERVER}/reservaciones/${data.p_nombre}`)
    .then((res)=>{ 
      setReservaciones(res.data)})
  },[])

  return (
    <div className='body'>
      <div className="table_content">
        {data.p_tipo == "ADMINISTRADOR" && <div className="table_head">
          <button onClick={()=>{navigate('/Registro/Hora')}}><img src={add} alt="" /></button>
        </div>}
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Dia</th>
              <th>Entrada</th>
              <th>Salida</th>
              <th>Grupo</th>
              <th>Materia</th>
              <th>Laboratorio</th>
              <th>Opciones</th>
            </tr>  
          </thead>
          <tbody>
              {reservaciones.map((reser) =>(<Reservacion reservacion={reser} key= {reser.id_reservacion} />))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
