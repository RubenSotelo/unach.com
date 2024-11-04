import React,{ useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Reservacion from '../Users/Reservacion'
import add from '../../assets/Imagen/add-reser.png'
import axios from "axios";
import '../../assets/css/list.css'

export default function ListReserve() {
  const navigate = useNavigate();
  const [reservaciones, setReservaciones] = useState([])
  
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_URL_SERVER}/reservaciones`)
    .then((res)=>{ setReservaciones(res.data)})
  },[])

  return (
    <div className='body'>
      <div className="table_content">
        <div className="table_head">
          <button onClick={()=>{navigate('/Registro/Hora')}}><img src={add} alt="" /></button>
        </div>
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
