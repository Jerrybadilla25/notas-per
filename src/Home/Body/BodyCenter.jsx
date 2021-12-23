import React, {useState} from "react";
import Formtema from "./Formtema";
import FormComando from "./FormComando";
import FormEditComando from "./FormEditComando";
import RenderComandos from "./RenderComandos";
import BodyInfo from "./BobyInfo";
import Box from "./Box";
import FormEditTema from "./FormEdittema";
import CrudTemas from './mas/CrudTemas'

export default function BodyCenter(props) {

  const [crud, setCrud] = useState(null);

  const viewCrud =()=>{
    setCrud("view");
  }
  const closeCrud = ()=>{
    setCrud(null);
  }

  if (props.estadoBody === "info") {
    return (
      <BodyInfo/>
    );
  }


  if (props.estadoBody === "Temas") {
    return (
      <div className="">
        <div className="py-4 bb-red">
          <h3 className="render-tema">{props.dataTema.tema}</h3>
          <h4 className="render-descripcion">{props.dataTema.descripcion}</h4>
          <div className="d-flex justify-content-between">
            <i className="bi bi-plus-circle" onClick={()=>props.addComando(props.dataTema._id)}> Add Comando</i>

            
            {
              crud === null 
              ? <div><small 
              className="mas-crud" 
              onClick={viewCrud}
              >Mas...</small></div>
              : <CrudTemas
                edittema={props.edittema}
                deleteTema={props.deleteTema}
                closeCrud={closeCrud}
                ids={props.dataTema._id}
            />
            }
            
            
          </div>
        </div>
        {props.dataTema.comandos.length >= 1
          ? <RenderComandos 
           comandos={props.dataTema.comandos}
           selectEditComando={props.selectEditComando}
           deleteComando={props.deleteComando}
           formTema={props.formTema}

           />
          : <Box/>
        }
      </div>
    );
  }
  if(props.estadoBody === "AddComando"){
    return (
      <div  className="">
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
        formComando={props.formComando}
        butonCancel={props.butonCancel}
        editComando={props.editComando}
        />
      </div>
      
    );
  }

  if(props.estadoBody === "editComando"){
    return (
      <div  className="">
        <div className="py-4 bb-red ">
          <h3 className="render-tema">{props.dataTema.tema}</h3>
          <h4 className="render-descripcion">{props.dataTema.descripcion}</h4>
          <div className="d-flex justify-content-between">
            <i className="bi bi-plus-circle" onClick={()=>props.addComando(props.dataTema._id)}> Add Comando</i>
            <i className="bi bi-pencil"></i>
          </div>
        </div>
        <FormEditComando
        datosFormComando={props.datosFormComando}
        submitFormComando={props.submitFormComando}
        formComando={props.formComando}
        butonCancel={props.butonCancel}
        editComando={props.editComando}
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
  if(props.estadoBody === "editTema"){
    return (
      <FormEditTema
      formTema={props.formTema}
      datosFormTema={props.datosFormTema}
      editTemaFun={props.editTemaFun}
      />
    )
  }


}

