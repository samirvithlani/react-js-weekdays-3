import { Outlet } from "react-router-dom";
import { LoginDoctor } from "./components/LoginDoctor";
import { Storage } from "./components/Storage";

const useAuth = () => {
  var name = localStorage.getItem("name");
  const user = name !== null ? true : false;
  return user;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Storage />;
};

export default ProtectedRoute;
