import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import Main from "../layouts/Main";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return <>{auth?.user ? <Main /> : <Navigate to="/login" />}</>;
};

export default PrivateRoutes;
