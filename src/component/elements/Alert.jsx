import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Popup from 'reactjs-popup';
import '../../assets/css/popup.css';


function Alert({ isOpen, setIsOpen, id_usuario}) {
    const navigate = useNavigate();
    const [matricula, setMatricula] = useState("");
    const handleChange = (e) => {
        setMatricula(e.target.value);
    }

    const handleClick = (e) => {
        const alumno = {id_usuario: id_usuario, matricula: matricula}
        axios.post(`${import.meta.env.VITE_URL_SERVER}/alumno`,alumno)
        .then((res) => {
            setIsOpen(false)
            navigate('/Escaneo')
        })
        .catch((error) => console.error("Error posting data:", error));
    }

    return (
        <Popup 
            open={isOpen} 
            onClose={() => setIsOpen(false)}
            modal 
            nested 
            closeOnDocumentClick={false}
        >
            {close => (
                <div className='modal'>
                    <h1>MATRICULA</h1>
                    <div className='content'>
                        <input 
                            name="matricula" 
                            onChange={handleChange} 
                            placeholder="matricula" 
                            required
                        />
                    </div>
                    <button 
                        className="log" 
                        onClick={handleClick}
                        disabled={matricula.trim() === ""} 
                    >
                        Cerrar
                    </button>
                </div>
            )}
        </Popup>
    );
}

export default Alert;