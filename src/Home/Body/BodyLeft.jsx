import React from "react";


export default function BodyLeft(props) {
  return (
    <div className="body-left pt-2">
      <div>
        <div>
          <h4 className="pt-3 render-tema" onClick={props.getTemas}>
            <i className="bi bi-arrow-repeat"></i> Temas
          </h4>
          <small className="text-muted">Mostrar temas creados</small>
        </div>
        <div className="mt-3">
          {props.dataUser.length >= 1 && (
            <div>
              {props.dataUser.map(itm => (
                <div key={itm._id} className="my-3" >
                  <h5 onClick={()=>props.renderTemas(itm._id)}>{itm.tema}</h5>
                  <small>{itm.descripcion}</small>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
