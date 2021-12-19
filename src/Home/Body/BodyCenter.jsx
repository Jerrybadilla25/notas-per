import React from "react";
import Formtema from "./Formtema";
import FormComando from "./FormComando";
import RenderComandos from "./RenderComandos";
import BodyInfo from "./BobyInfo";

export default function BodyCenter(props) {

  if (props.estadoBody === "info") {
    return (
      <BodyInfo/>
    );
  }


  if (props.estadoBody === "Temas") {
    return (
      <div>
        <div className="py-4 bb-red">
          <h3 className="render-tema">{props.dataTema.tema}</h3>
          <h4 className="render-descripcion">{props.dataTema.descripcion}</h4>
          <div className="d-flex justify-content-between">
            <i className="bi bi-plus-circle" onClick={()=>props.addComando(props.dataTema._id)}> Add Comando</i>
            <i className="bi bi-pencil"></i>
          </div>
        </div>
        {props.dataTema.comandos.length >= 1 && (
          <RenderComandos comandos={props.dataTema.comandos} />
        )}
      </div>
    );
  }
  if(props.estadoBody === "AddComando"){
    return (
      <div>
        <div className="py-4 bb-red ">
          <h3 className="render-tema">{props.dataTema.tema}</h3>
          <h4 className="render-descripcion">{props.dataTema.descripcion}</h4>
          <div className="d-flex justify-content-between">
            <i className="bi bi-plus-circle" onClick={()=>props.addComando(props.dataTema._id)}> Add Comando</i>
            <i className="bi bi-pencil"></i>
          </div>
        </div>
        <FormComando
        datosFormComando={props.datosFormComando}
        submitFormComando={props.submitFormComando}
        />
      </div>
      
    );
  }

  if(props.estadoBody === "FormTema"){
    return (
      <Formtema
      datosFormTema={props.datosFormTema}
      addTemaNuevo={props.addTemaNuevo}
      />
    );
  }


}

