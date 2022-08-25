import {React, useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {
  console.log(presupuesto)
  const [mensaje, setMensaje] = useState('')
  const handlePresupuesto = (e) => {
      e.preventDefault()
      console.log(presupuesto)
      if(!Number(presupuesto) || presupuesto < 0 )
      {
         setMensaje('no es un presupuesto valido')
         return
      }
      else
      {
         setMensaje('')
         setIsValidPresupuesto(true)
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
            onChange={e=> setPresupuesto(Number(e.target.value))}
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
