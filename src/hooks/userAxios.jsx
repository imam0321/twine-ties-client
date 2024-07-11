import { useEffect } from "react";
import { api } from "../api";
import {useAuth} from "../hooks/useAuth"


const userAxios = () => {
  const {user} = useAuth();
  
  useEffect(()=>{
    
    api.interceptors.request.use((config)=>{
      const authToken = user?.authToken;
      if(authToken){
        config.headers.Authorization = `Bearer ${authToken}`; 
      }
      return config;
    })


  },[])
};

export default userAxios;