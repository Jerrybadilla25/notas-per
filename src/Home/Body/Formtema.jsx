import React from 'react'

export default function Formtema(props) {
    return (
    <div className="mt-4 px-3 py-3 view-h">
      <form className='form-comando' onSubmit={props.addTemaNuevo} >
      <h5 className="mb-3 l-red">Agergar tema</h5>
        <div className="form-group">
          <label 
          className='label-form'
          htmlFor="exampleInputEmail1"> <i className="bi bi-folder-plus"></i> Tema nuevo</label>
          <input
            type="text"
            placeholder='Ejm:javascrip'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="tema"
            onChange={props.datosFormTema}
          />
        </div>
        <div className="form-group mt-4">
          <label 
          className='label-form'
          htmlFor="exampleInputPassword1"> <i className="bi bi-file-earmark-bar-graph"></i> Descripcion</label>
          <input
            type="text"
            placeholder='descripcion breve del tema'
            className="form-control"
            id="exampleInputPassword1"
            name="descripcion"
            onChange={props.datosFormTema}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3"> <i className="bi bi-cloud-arrow-up"></i> Guardar
        </button>
      </form>
    </div>
    )
}
