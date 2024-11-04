import { element } from "prop-types";
import {Qr,Login,Scanner,ListUser,ListReserve,ListTimetable,RegisterHour,RegisterUser} from "./Pages";

export const ConfigRoutes = [
  { path: "/", element: <Login/>, access: null},
  { path: "/Login", element: <Login/>, access: null},
  { path: "/Qr", element: <Qr/>, access: "PROFESOR"},
  { path: "/Escaneo", element: <Scanner/>, access: "ALUMNO" },
  { path: "/Administradores", element: <ListUser/>, access: "ADMINISTRADOR"},
  { path: "/Profesores", element: <ListUser/>, access: "ADMINISTRADOR"},
  { path: "/Alumnos", element: <ListUser/>, access: "ADMINISTRADOR"},
  { path: "/Reservaciones", element: <ListReserve/>, access: "ADMINISTRADOR"},
  { path: "/Horario", element: <ListTimetable/>, access: "PROFESOR"},
  { path: "/Registro/Hora", element: <RegisterHour/>, access: "ADMINISTRADOR" },
  { path: "/Registro/User", element: <RegisterUser/>, access: "ADMINISTRADOR" },
];