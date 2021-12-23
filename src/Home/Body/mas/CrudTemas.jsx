import React from 'react'

export default function CrudTemas(props) {
    return (
        <div className=" d-flex justify-content-end">
              <i className="bi bi-pencil icon-crud-edit" onClick={()=>props.edittema(props.ids)}></i>
              <i className="bi bi-trash icon-crud-edit" onClick={()=>props.deleteTema(props.ids)} ></i>
              <i className="bi bi-x-square-fill icon-crud-tema" onClick={props.closeCrud}>  Salir</i>
        </div>
    )
}
