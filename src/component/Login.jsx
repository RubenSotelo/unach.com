import React, { useEffect, useState } from "react";
import "../assets/css/login.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from 'axios';
import decodeJwt from "./auth/decoJWS";
import Alert from "./elements/Alert";

const Login = (props) => {
  const navigate = useNavigate();
  let clientId = import.meta.env.VITE_CLIENT_ID;
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [user, setUser] = useState({'nombre':'', 'email':'', 'tipo':''})
  const [id, setId] = useState('');
  
  const hashError = (e) => { console.log("Inicio fallido"); };

  function hashSuccess(response) {
    if (response.credential) {
      const { payload } = decodeJwt(response.credential);
      axios.post(`${import.meta.env.VITE_URL_SERVER}/user`, payload)
      .then((res) => {
        setId(res.data[0].p_id_usuario)
        if(res.data[0].p_tipo == "ALUMNO"){
          axios.get(`${import.meta.env.VITE_URL_SERVER}/alumno/${res.data[0].p_id_usuario}`)
          .then((res) => {
            if (!res.data) {
              navigate("/Escaneo")
            }else{
              setPopupOpen(res.data);
            }
          })
          .catch((error) => console.error("Error posting data:", error));
        }else{
          navigate('/Administradores')
        }
        localStorage.setItem("registro", JSON.stringify(res.data[0]));
      })
      .catch((error) => console.error("Error posting data:", error));
    }
  }

  return (
    <div className="body">
      <div className="container">
        <h1>LOGIN</h1>
        <GoogleOAuthProvider clientId={clientId} >
          <GoogleLogin onSuccess={hashSuccess} onError={hashError}/>
        </GoogleOAuthProvider> 
      </div>
      <Alert isOpen={isPopupOpen} setIsOpen={setPopupOpen} id_usuario={id}/>
    </div>
  );
};

export default Login;
