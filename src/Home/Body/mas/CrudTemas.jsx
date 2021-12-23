import React from 'react'

export default function CrudTemas(props) {
    return (
        <div className=" d-flex justify-content-end mx-3 mb-2">
              <i className="bi bi-pencil mx-4" onClick={()=>props.edittema(props.ids)}></i>
              <i className="bi bi-trash" onClick={()=>props.deleteTema(props.ids)} ></i>
              <i className="bi bi-x-square-fill icon-crud-tema" onClick={props.closeCrud}></i>
        </div>
    )
}
