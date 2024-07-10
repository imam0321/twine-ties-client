import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Main from "../layouts/Main";

const PrivateRoute = () => {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <main className="mx-auto max-w-[1080px] px-8">
          <div className="container">
            <Main />
          </div>
        </main>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
