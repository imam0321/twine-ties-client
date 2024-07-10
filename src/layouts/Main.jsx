import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../pages/Shares/Header/Header";

const Main = () => {
  const { user } = useAuth();
  return (
    <>
      {user && <Header />}
      <Outlet />
    </>
  );
};

export default Main;
