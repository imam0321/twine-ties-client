import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Header from "../pages/Shares/Header/Header";

const Main = () => {
  const { user } = useAuth();
  return (
    <>
      {user && <Header />}
      <main className="mx-auto max-w-[1080px] py-8">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Main;
