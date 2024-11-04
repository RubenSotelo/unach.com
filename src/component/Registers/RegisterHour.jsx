import React, { useState, useEffect } from 'react'
import {useNavigate } from "react-router-dom";
import '../../assets/css/reservacion.css'
import Menu  from '../elements/Menu'
import axios from 'axios';

export default function RegisterHour() {
  const navigate = useNavigate()
  const [ laboratorios, setLaboratorios ] = useState([]);
  const [ materias, setMaterias ] = useState([]);
  const [ grupos, setGrupos ] = useState([]);
  const [reservacion, setReservacion] = useState({
    usuario:"", laboratorio:"", grupo:"",materia: "",dia: "",
    hora_inicio:"", hora_fin:""});

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL_SERVER}/laboratorios`)
    .then((res)=>{ setLaboratorios(res.data) })
    axios.get(`${import.meta.env.VITE_URL_SERVER}/materias`)
    .then((res)=>{ setMaterias(res.data) })
    axios.get(`${import.meta.env.VITE_URL_SERVER}/grupos`)
    .then((res)=>{ setGrupos(res.data) })
}, []);

  const guardarElemento = (e) => {
    setReservacion((elemet) => ({
        ...elemet, 
        [e.target.name]: e.target.value,
      }));
  }

  const handleSelectChange = (value) => {
    setReservacion((elemet) => ({
      ...elemet, 
      [value.nombre]: value.value,
    }));
  }

  const enviarElemetos = (e) => {
    axios.post(`${import.meta.env.VITE_URL_SERVER}/reservacion`,reservacion)
    navigate('/Reservaciones')
  };
  
  return (
    <div className='body'>
      <div className="frame">
        <div className="login">Registro</div>
        <form onSubmit={enviarElemetos}  >
        <div className='elemento'>
          <input type="text" name="usuario" onChange={guardarElemento} placeholder="maestro"/>
        </div>
          <div className="campos">  
            <div className='campo'>
                <Menu onSelectChange={handleSelectChange} elementos={laboratorios} title={"laboratorio"}></Menu>
                <Menu onSelectChange={handleSelectChange} elementos={materias} title={"materia"}></Menu>
              <div className='elemento'>
                <input type="text" name="hora_inicio" onChange={guardarElemento} placeholder="hora inicio"/>
              </div>
            </div>
            <div className='campo'>
                <Menu onSelectChange={handleSelectChange} elementos={grupos} title={"grupo"}></Menu>
                <Menu onSelectChange={handleSelectChange} title={"dia"}></Menu>
              <div className='elemento'>
                <input type="text" name="hora_fin" onChange={guardarElemento} placeholder="hora termino"/>
              </div>
            </div>
          </div>
          <button className="log" type="submit">Cargar</button>
        </form>
      </div>
    </div>
  )
}
