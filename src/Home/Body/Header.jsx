import React from "react";

export default function Header(props) {
  return (
    <>
      <div className="row py-3 bg-header ">
        <div className="d-flex justify-content-between px-5">
          <h5>
            {" "}
            <i className="bi bi-journal-album"></i> Notas personales
          </h5>
          <button className="btn btn-light btn-sm px-2" onClick={props.logOut}>
            <i className="bi bi-door-open"> Salir</i>
          </button>
        </div>
      </div>
      <div className="row bg-search">
        <div className="d-flex justify-content-between px-5 py-2">
          <div>
            <button 
            className="btn btn-sm px-2"
            onClick={props.buttonHome}
            >
              <i className="bi bi-house"></i>
            </button>
          </div>
          <div>
            <small className="text-muted px-2">Add tema nuevo</small>
            <button
              className="btn btn-sm px-2"
              onClick={() => props.addTema(props.ID)}
            >
              <i className="bi bi-folder-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
