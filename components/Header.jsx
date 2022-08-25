import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, isValidPersupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidPersupuesto ? (
        <ControlPresupuesto
        presupuesto={presupuesto}
        />
      ):(
        <NuevoPresupuesto
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      setIsValidPresupuesto={setIsValidPresupuesto}
      />
      )}
      
    </header>
  )
}

export default Header
