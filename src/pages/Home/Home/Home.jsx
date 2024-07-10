import useAuth from "../../../hooks/useAuth";
import Header from "../../Shares/Header/Header";


const Home = () => {
  const {user} = useAuth();
  return (
    <>
      {/* {user && <Header/>} */}
      <p>Home</p>
      {
        !user ? "" : <h1>{user.displayName || user.email}</h1>
      }
    </>
  );
};

export default Home;