import useAxios from "../../../hooks/useAxios"
import { useReducer } from "react";
import { initialState, postReducer } from "../../../reducers/PostReducer";

const Home = () => {
  const {api} = useAxios();
  const [state, dispatch] = useReducer(postReducer, initialState) 


  
  



  return (
    <>
      <div className="card relative">
        
      </div>
    </>
  );
};

export default Home;
