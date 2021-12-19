import React from "react";

export default function RenderComandos(props) {
  return (
    <div className="my-4">
      {props.comandos.map((itm) => (
        <div className="card my-3 shadow p-3 mb-5 bg-white rounded  " key={itm._id}>
            <div className="card-header d-flex justify-content-between">
               <h5 className=" text-center render-comando">{itm.comando}</h5>
               <i className="bi bi-pencil"> </i>
            </div>
          <div className="card-body render-descripcion">
            <h6 className="card-title">Descripcion:
              <small className="render-small">  {itm.descripcion}</small> 
            </h6>
            <h5 className="card-text py-3 px-3 render-ejm">
              <small> </small>
              {itm.ejm}
            </h5>
            <a className="card-text render-a" href={itm.link}> {itm.link}</a> 
          </div>
        </div>
      ))}
    </div>
  );
}

