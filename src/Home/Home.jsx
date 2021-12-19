//import module
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
//import view
import Login from "./view/Login";
import Body from '../Home/Body';

export default function Home(props) {
  const [auth, setAuth] = useState(null);
  const [userID, setUserID] = useState("");
  const [regLogin, setRegLogin] = useState({});
  const [msj, setMsj] = useState({message: "la contraseña no coincide"});

  //toaster
  const notify = () => toast.error(`${msj.message}`,{
    style: {
      background: '#fff',
      color: '#000000',
    },
  });

  //llenar datos con el formulario de inicio
  const datosLogin = (e) => {
    setRegLogin({
      ...regLogin,
      [e.target.name]: e.target.value,
    });
  };

  
  const loginUp = async (e)=>{
    e.preventDefault();
    const data = await fetch(`${props.ruta}/user/login`, {
        method: 'POST',
        body: JSON.stringify(regLogin),
        headers: {
            "Content-Type": "application/json",
             "Accept": "application/json",
          },
    });
    const res = await data.json();
    if(res.token){
      setAuth(res.token);
      setUserID(res);
    }else{
      setMsj(res);
      notify();
    }
  };


  //condicionales
  if(!auth){
    return (
       <>
         <Login
           datosLogin={datosLogin}
           loginUp={loginUp}
        />
        <Toaster/>
       </> 
    )
  }else{
    return (
      <Body 
      userID={userID}
      ruta={props.ruta}
      />
    )
  } 
}
