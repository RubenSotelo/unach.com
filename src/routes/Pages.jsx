import React  from "react";

//Importacion de las vistas 
export const Qr = React.lazy(() => import("../component/Qr"));
export const Login = React.lazy(() => import("../component/Login"));
export const Scanner = React.lazy(()=> import("../component/Scanner"));
//Impotacion de las vistas de Listas
export const ListUser = React.lazy(()=> import("../component/Listas/ListUser"));
export const ListReserve = React.lazy(()=> import("../component/Listas/ListReserve"));
export const ListTimetable = React.lazy(()=> import("../component/Listas/ListTimetable"));
//Impotacion de las vistas de Registros
export const RegisterHour = React.lazy(() => import("../component/Registers/RegisterHour"));
export const RegisterUser = React.lazy(() => import("../component/Registers/RegisterUser"));