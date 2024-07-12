import { Navigate } from "react-router-dom";
import Main from "../layouts/Main";
import useAuth from "../hooks/useAuth";
import { ProfileProvider } from "../providers";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return auth?.authToken ? <ProfileProvider><Main /></ProfileProvider> : <Navigate to="/login" />;
};

export default PrivateRoutes;
