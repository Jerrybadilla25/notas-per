import React, { useState } from "react";
import BodyCenter from "./Body/BodyCenter";
import BodyLeft from "./Body/BodyLeft";
import Footer from "./Body/Footer";

//import view
import Header from "./Body/Header";

export default function Body(props) {
  const [dataUser, setDataUser] = useState([]); //array con los temas//
  const [dataTema, setDataTema] = useState(null); //datos usuario mas array temas//
  const [estadoBody, setEstadoBody]= useState("info");
  const [formComando, setFormComando]= useState({});
  const [formTema, setFormTema]= useState({});
  const [idTema, setIdTema] = useState(null);


//consultar temas por id
  const getTemas = async () => {
    const data = await fetch(`${props.ruta}/temaget/${props.userID._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-access-token": props.userID.token,
      },
    });
    const res = await data.json();
    setDataUser(res);
  };

  //render temas en body
  const renderTemas = (id) => {
    let temaSearch = dataUser.find((x) => x._id === id);
    setDataTema(temaSearch);
    setEstadoBody("Temas");
  };

  //funcion add tema
  const addTema = (id)=>{
    setEstadoBody("FormTema");
  }
  const datosFormTema = (e) => {
    setFormTema({
       ...formTema,
        [e.target.name]: e.target.value,
    });
  };

  const addTemaNuevo = async (e)=>{
    e.preventDefault();
    const data = await fetch(`${props.ruta}/addtema/${props.userID._id}`,{
        method: "POST",
        body: JSON.stringify(formTema),
        headers: {
          "Content-Type": "application/json",
           "Accept": "application/json",
           "x-access-token": props.userID.token,
        },
    });
    const res = await data.json();
    getTemas();
    setEstadoBody("FormTema");
    e.target.reset();
  }





  //llenar datos con el formulario comandos
  const datosFormComando = (e) => {
    setFormComando({
       ...formComando,
        [e.target.name]: e.target.value,
    });
  };

  
  const submitFormComando = async (e)=>{
    e.preventDefault();
    const data = await fetch(`${props.ruta}/comandoAdd/${idTema}`,{
          method: "POST",
          body: JSON.stringify(formComando),
          headers: {
            "Content-Type": "application/json",
             "Accept": "application/json",
             "x-access-token": props.userID.token,
          },
    });
    const res = await data.json();
    getTemas();
    setEstadoBody("Temas");
  }

  const addComando = (id)=>{
    setEstadoBody("AddComando");
    setIdTema(id);
  }

  //boton home
  const buttonHome = ()=>{
    setEstadoBody("info");
  }


  return (
    <div>
      <Header
      ID={props.userID._id}
      addTema={addTema}
      buttonHome={buttonHome}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-1 mt-3 mb-3 bg-gray col-lado-a">
              <BodyLeft
              getTemas={getTemas}
              dataUser={dataUser}
              renderTemas={renderTemas}
            />
          </div>
          <div className="col-md-9 col-sm-1 mt-3 mb-3 bg-gray bg-center col-lado-b">
            {
              estadoBody && 
              <BodyCenter
              dataTema={dataTema}
              estadoBody={estadoBody}
              addComando={addComando}
              datosFormComando={datosFormComando}
              submitFormComando={submitFormComando}
              datosFormTema={datosFormTema}
              addTemaNuevo={addTemaNuevo}
              />
            }
          </div>
          <div className="col-md-1 col-sm-1 mt-3 mb-3 bg-gray col-lado-c"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

