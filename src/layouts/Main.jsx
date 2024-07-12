import { Outlet } from "react-router-dom";
import Header from "../pages/Shares/Header/Header";

const Main = () => {
  return (
    <>
    <Header />
      <main className="mx-auto max-w-[1080px] py-8">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Main;
