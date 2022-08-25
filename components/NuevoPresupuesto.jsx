import {React, useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  console.log(presupuesto)
  const [mensaje, setMensaje] = useState('')
  const handlePresupuesto = (e) => {
      e.preventDefault()
      console.log(presupuesto.presupuesto)
      if(!isNaN(presupuesto) || Number(presupuesto) < 0 )
      {
         setMensaje('no es un presupuesto valido')
      }
      else
      {
         setMensaje('')
      }
     
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo"> 
            <label>Definir Presupuesto</label>
            <input
            className="nuevo-presupuesto"
            type="Number"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={e=> setPresupuesto(e.target.value)}
            />
       </div>
            <input
            type="submit" value="Añadir"/>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        
      </form>
    </div>
  )
}

export default NuevoPresupuesto
