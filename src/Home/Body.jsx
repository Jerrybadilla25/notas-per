import React, { useState } from "react";
import BodyCenter from "./Body/BodyCenter";
import BodyLeft from "./Body/BodyLeft";
import Footer from "./Body/Footer";
import toast, { Toaster } from "react-hot-toast";

//import view
import Header from "./Body/Header";

export default function Body(props) {
  const [dataUser, setDataUser] = useState([]); //array con los temas//
  const [dataTema, setDataTema] = useState(null); //datos usuario mas array temas//
  const [estadoBody, setEstadoBody] = useState("info");
  const [formComando, setFormComando] = useState({});
  const [formTema, setFormTema] = useState({});
  const [idTema, setIdTema] = useState(null);
  const [msj, setMsj] = useState(null);

  //toaster
  const notify = (mesage) =>
    toast.success(`${mesage}`, {
      style: {
        background: "#fff",
        color: "#000000",
      },
    });

  //delete tema
  const deleteTema = async (id) => {
    if(dataTema.comandos.length >=1){
      let mesage = "Primero elimine los subelementos asociados ";
      notify(mesage);
    }else{
      const data = await fetch(`${props.ruta}/tema/${props.userID._id}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": props.userID.token,
      },
    });
    const res = await data.json();
    setMsj(res);
    if(dataUser[0]){
      renderTemas(dataUser[0]._id);
      getTemas();
      let mesage = "Tema eliminado";
      notify(mesage);
    }else{
      setEstadoBody("info");
    }
    }
    
    
  };

  //edit tema
  const edittema = async (id) => {
    console.log(id);
    setEstadoBody("editTema");
    setFormTema({
      tema: dataTema.tema,
      descripcion: dataTema.descripcion,
      id: dataTema._id,
    });
  };
  //boton edit tema
  const editTemaFun = async (e) => {
    e.preventDefault();
    const data = await fetch(`${props.ruta}/tema/${formTema.id}`, {
      method: "PUT",
      body: JSON.stringify({
        tema: formTema.tema,
        descripcion: formTema.descripcion,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": props.userID.token,
      },
    });
    const res = await data.json(data);
    setMsj(res);
    renderTemas(formTema.id);
    getTemas();
    let mesage = "Tema modificado";
    notify(mesage);
  };

  //boton delete
  const deleteComando = async (id) => {
    const data = await fetch(`${props.ruta}/comando/${dataTema._id}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": props.userID.token,
      },
    });
    const res = await data.json();
    setMsj(res);
    renderTemas(dataTema._id);
    let mesage = "Item Eliminado";
    notify(mesage);
  };

  //edit comando
  const selectEditComando = (id) => {
    const edittema = dataTema.comandos.find((x) => x._id === id);
    setFormComando(edittema);
    setEstadoBody("editComando");
  };

  const butonCancel = () => {
    setFormComando({});
    setEstadoBody("Temas");
  };

  const editComando = async (e) => {
    e.preventDefault();
    const data = await fetch(`${props.ruta}/comando/${formComando._id}`, {
      method: "PUT",
      body: JSON.stringify({
        comando: formComando.comando,
        descripcion: formComando.descripcion,
        ejm: formComando.ejm,
        link: formComando.link,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": props.userID.token,
      },
    });
    const res = await data.json();
    setMsj(res);
    renderTemas(dataTema._id);
    let mesage = "Item modificado";
    notify(mesage);
  };

  //consultar temas por id
  const getTemas = async () => {
    const data = await fetch(`${props.ruta}/temas/${props.userID._id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": props.userID.token,
      },
    });
    const res = await data.json();
    setDataUser(res);
  };

  //render temas en body
  const renderTemas = async (id) => {
    const data = await fetch(`${props.ruta}/comando/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": props.userID.token,
      },
    });
    const res = await data.json();
    setDataTema(res);
    setEstadoBody("Temas");
  };

  //funcion add tema
  const addTema = (id) => {
    if(estadoBody !== "FormTema"){
      setEstadoBody("FormTema");
    }else if(dataUser[0]){
      renderTemas(dataUser[0]);
      setEstadoBody('Temas');
    }else{
      setEstadoBody('info');
    }
  };
  const datosFormTema = (e) => {
    setFormTema({
      ...formTema,
      [e.target.name]: e.target.value,
    });
  };

  const addTemaNuevo = async (e) => {
    e.preventDefault();
    const data = await fetch(`${props.ruta}/temas/${props.userID._id}`, {
      method: "POST",
      body: JSON.stringify(formTema),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": props.userID.token,
      },
    });
    const res = await data.json();
    setMsj(res);
    getTemas();
    setEstadoBody("FormTema");
    let mesage = "Tema nuevo creado";
    notify(mesage);
    e.target.reset();
  };

  //llenar datos con el formulario comandos
  const datosFormComando = (e) => {
    setFormComando({
      ...formComando,
      [e.target.name]: e.target.value,
    });
  };

  const submitFormComando = async (e) => {
    e.preventDefault();
    const data = await fetch(`${props.ruta}/comando/${idTema}`, {
      method: "POST",
      body: JSON.stringify(formComando),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-access-token": props.userID.token,
      },
    });
    const res = await data.json();
    setMsj(res);
    getTemas();
    renderTemas(dataTema._id);
    setEstadoBody("Temas");
    let mesage = "Item creado";
    notify(mesage);
  };

  const addComando = (id) => {
    setFormComando({});
    setEstadoBody("AddComando");
    setIdTema(id);
  };

  //boton home
  const buttonHome = () => {
    setEstadoBody("info");
  };

  return (
    <div>
      <Header
        ID={props.userID._id}
        addTema={addTema}
        buttonHome={buttonHome}
        logOut={props.logOut}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-1 mt-3 mb-3 bg-gray col-lado-a">
            <BodyLeft
              getTemas={getTemas}
              dataUser={dataUser}
              renderTemas={renderTemas}
            />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-1 mt-3 mb-3 bg-gray bg-center col-lado-b">
            {estadoBody && (
              <BodyCenter
                dataTema={dataTema}
                estadoBody={estadoBody}
                addComando={addComando}
                datosFormComando={datosFormComando}
                submitFormComando={submitFormComando}
                datosFormTema={datosFormTema}
                addTemaNuevo={addTemaNuevo}
                selectEditComando={selectEditComando}
                formComando={formComando}
                butonCancel={butonCancel}
                editComando={editComando}
                deleteComando={deleteComando}
                edittema={edittema}
                formTema={formTema}
                editTemaFun={editTemaFun}
                deleteTema={deleteTema}
              />
            )}
          </div>
          <div className="col-lg-1  col-sm-1 mt-3 mb-3 bg-gray col-lado-c"></div>
        </div>
      </div>
      <Toaster />
      <Footer />
    </div>
  );
}
