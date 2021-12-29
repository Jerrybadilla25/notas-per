import React from "react";


export default function RenderComandos(props) {
    return (
    <div className="my-4">
      {props.comandos.map((itm) => (
        <div className="card my-3 shadow  mb-5 bg-white rounded movil-card " key={itm._id}>
            <div className="card-header d-flex justify-content-between">
               <h5 className=" text-center render-comando">{itm.comando}</h5>
               
            </div>
          <div className="card-body render-descripcion ">
            <h6 className="card-title">Descripcion:
              <small className="render-small">  {itm.descripcion}</small> 
            </h6>
            <h5 className="card-text py-3 px-3 render-ejm">
              <pre><code>
               {itm.ejm} 
              </code></pre>
              
            </h5>
            <a className="card-text render-a" href={itm.link}> {itm.link}</a> 
          </div>
          <div className=" d-flex justify-content-end mx-3 mb-2">
               <i className="bi bi-pencil mx-4 icon-crud" onClick={()=>props.selectEditComando(itm._id)}></i>
               <i className="bi bi-trash icon-crud" onClick={()=> props.deleteComando(itm._id)}></i> 
          </div> 
        </div>
      ))}
    </div>
  );
}

