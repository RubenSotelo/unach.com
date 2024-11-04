import React from "react";
import {QRCodeSVG} from 'qrcode.react';
import {useNavigate, useLocation } from "react-router-dom";
import "../assets/css/login.css";

export default function Qr(){
    const location = useLocation();
    const qrData = location.state || 0;
    
    return(
        <div className="body">
            <QRCodeSVG value={""+qrData} />,
        </div>
    )
}