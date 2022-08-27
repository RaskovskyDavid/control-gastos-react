import React from 'react'
import { formatearFecha } from '../src/helpers'
import IconoAhorro from '../src/img/icono_ahorro.svg'
import IconoCasa from '../src/img/icono_casa.svg'
import IconoComida from '../src/img/icono_comida.svg'
import IconoGastos from '../src/img/icono_gastos.svg'
import IconoOcio from '../src/img/icono_ocio.svg'
import IconoSalud from '../src/img/icono_salud.svg'
import IconoSuscripciones from '../src/img/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro : IconoAhorro,
    comida : IconoComida,
    casa : IconoCasa,
    gastos : IconoGastos,
    ocio : IconoOcio,
    salud : IconoSalud,
    suscripciones : IconoSuscripciones
}
const Gasto = ({gasto}) => {
    const {categoria, nombre, cantidad, fecha, id} = gasto;
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto" >
      <img 
                            src={diccionarioIconos[categoria]}
                            alt="Icono Gasto"
                        />
        <div className="descripcion-gasto">
            <p className="categoria">{categoria}</p>
            <p className="nombre-gasto">{nombre}</p>
            <p className="fecha-gasto">
                Agregado el {''}
                <span>{formatearFecha(fecha)}</span>
            </p> 
        </div>
      </div>
    </div>
  )
}

export default Gasto
