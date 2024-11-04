import { Route, Routes } from "react-router-dom";
import { ConfigRoutes } from "./ConfigRoutes";
import ProtecRouter from "../component/auth/ProtecRouter";

export const Router = () => {
  return (
    <Routes>
      {
        ConfigRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={
            <ProtecRouter access={route.access}> {route.element}</ProtecRouter>}>
          </Route>
        ))
      }
    </Routes>
  )
};
