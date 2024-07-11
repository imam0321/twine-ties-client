import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>loading....</p>;
  } 
  else if (user) {
    return children;
  } 
  else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
