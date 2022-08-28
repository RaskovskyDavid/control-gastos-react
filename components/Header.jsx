import React from 'react'
import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({presupuesto, setPresupuesto, isValidPersupuesto, setIsValidPresupuesto, gastos }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidPersupuesto ? (
        <ControlPresupuesto
        presupuesto={presupuesto}
        gastos={gastos}
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
