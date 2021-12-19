import React from 'react'

export default function BobyInfo() {
    return (
        <div className='mt-5 px-5'>
            <h5 className='render-tema'>Bienvenido al bloc de notas</h5>
            <h6></h6>
            <p className='render-descripcion'>
                En este pagina en la nube, podemos tener un espacio para guardar diferentes tipos de informacion relacionados con la programacion, ejm guardar comandos basicos de diferentes temas.
            </p>
            <p className='render-descripcion'>
                <strong className='render-tema'>Boton Temas  </strong>
                  En la seccion izquierda vemos el boton <i className="bi bi-arrow-repeat"></i> este boton lo usamos para recargar los temas ya creados.
                  Al darle click a este boton se nos muestra los temas ya creados.
                  Al darle click sobre uno de los temas ya creados, nos redirige a la vista detallada de los temas.
                  En dicha vista podemos darle click a   
                <i className="bi bi-plus-circle px-2"> Add Comando</i>
                  para crear un nuevo comando.
            </p>
            <h6 className='render-tema'>Craar nuevo Tema</h6>
            <p className='render-descripcion'>
            En la seccion del heder, encontramos el boton en forma de carpeta, con este podemos crear un tema nuevo y el mismo se visualizara en la parte izquierda de la pantalla.
            </p>
        </div>
    )
}
