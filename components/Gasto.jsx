import React from 'react'

const Gasto = ({gasto}) => {
    const {categoria, nombre, cantidad, fecha, id} = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto" >
        <div className="descripcion-gasto">
            <p className="categoria">{categoria}</p>
            <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">
                <span>{fecha}</span>
            </p> 
        </div>
      </div>
    </div>
  )
}

export default Gasto
