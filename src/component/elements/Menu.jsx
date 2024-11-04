import React, { useState, useLayoutEffect } from "react";
import "../../assets/css/select.css"


export default function Menu({onSelectChange, elementos, title}) {
  const [ valores, setValores ] = useState(
    [{nombre:'Lunes'}, {nombre:'Martes'}, {nombre:'Miercoles'}, {nombre:'Jueves'}, {nombre:'Viernes'}])
  
  useLayoutEffect(()=>{
    if (elementos != null) 
      setValores(elementos);    
  })

  const handleChange = (event) => {
    onSelectChange({nombre: title, value: event.target.value}); 
  };

  return (
    <div className='elemento'>
      <select name="select" onChange={handleChange}>
        {valores.map((elemento) =>(<option value={elemento.nombre} key= {elemento.nombre}>{elemento.nombre}</option>))}
      </select>
    </div>
  )
}