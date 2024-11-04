import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtecRouter = ({ access, children }) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("registro"))  || ''
    if (!data) {
      navigate('/Login');
    } else {
      if (access == null || data.p_tipo !== access) {
        if (data.p_tipo === 'ADMINISTRADOR') {
          navigate('/Reservaciones'); 
        } else if (data.p_tipo === 'PROFESOR') {
          navigate('/Horario'); 
        } else if (data.p_tipo === 'ALUMNO') {
          navigate('/Escaneo'); 
        } else {
          navigate('/Login'); 
        }
      }else {
        setIsAuthorized(true);
      }
    }
  }, [access, navigate]);
  return children;
};

export default ProtecRouter;