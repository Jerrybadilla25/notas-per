import React from 'react'

export default function ButonEdit(props) {
    return (
        <div className='d-flex justify-content-around'>
          <button type="submit" className="btn btn-primary mt-2" onClick={props.editComando}>
             <i className="bi bi-cloud-arrow-up"></i> save edit
          </button>
          <button type="submit" className="btn btn-danger mt-2" onClick={props.butonCancel}>
             <i className="bi bi-x-octagon"></i> cancelar
          </button>
        </div>
    )
}
