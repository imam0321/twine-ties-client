import { Navigate } from "react-router-dom";
import Main from "../layouts/Main";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return <>{auth?.user ? <Main /> : <Navigate to="/login" />}</>;
};

export default PrivateRoutes;
