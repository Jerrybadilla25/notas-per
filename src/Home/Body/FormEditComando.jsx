import React from 'react'

export default function FormEditComando(props) {
    return (
        <div className="mt-4 px-3 py-3 ">
        <form className="form-comando" onSubmit={props.editComando} >
          <h5 className="mb-3 l-red">Editar Comando</h5>
          <div className="form-group mt-3">
            <label 
            className='label-form'
            htmlFor="exampleInputEmail1"><i className="bi bi-arrow-right-circle-fill"></i> Comando</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="comando"
              onChange={props.datosFormComando}
              value={props.formComando.comando}
            />
            
          </div>
          <div className="form-group mt-3">
            <label 
            className='label-form'
            htmlFor="exampleInputPassword1"> <i className="bi bi-journal-code"></i> Descripcion</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="descripcion"
              onChange={props.datosFormComando}
              value={props.formComando.descripcion}
            />
          </div>
          <div className="form-group mt-3">
            <label 
            className='label-form'
            htmlFor="exampleFormControlTextarea1"> <i className="bi bi-journal-check"></i> Ejemplo</label>
             <textarea 
             className="form-control" 
             id="exampleFormControlTextarea1" 
             rows="3"
             name="ejm"
             onChange={props.datosFormComando}
             value={props.formComando.ejm}
             >
             </textarea>
           </div>
          <div className="form-group my-3">
            <label 
            className='label-form'
            htmlFor="exampleInputPassword1"> <i className="bi bi-link"></i> Link</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="link"
              onChange={props.datosFormComando}
              value={props.formComando.link}
            />
          </div>
          <div className='d-flex justify-content-around'>
          <button type="submit" className="btn btn-primary mt-2">
             <i className="bi bi-cloud-arrow-up"></i> Cambiar 
          </button>
          <button type="submit" className="btn btn-danger mt-2" onClick={props.butonCancel}>
             <i className="bi bi-x-octagon"></i> Salir sin guardar
          </button>
        </div>
        </form>
      </div>
    )
}



