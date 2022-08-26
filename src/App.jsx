import { useState } from 'react'
import Header from '../components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from '../components/Modal';
function App() {
const [presupuesto, setPresupuesto] = useState(0);
const [isValidPersupuesto, setIsValidPresupuesto] = useState(false);
const [modal, setModal] = useState(false);

const handleNuevoGasto = () => {
  setModal(true)
}
  return (
   <>
    <Header
    presupuesto={presupuesto}
    setPresupuesto={setPresupuesto}
    isValidPersupuesto={isValidPersupuesto}
    setIsValidPresupuesto={setIsValidPresupuesto}
    />
    {isValidPersupuesto && (
      <div className="nuevo-gasto">
      <img 
      src={IconoNuevoGasto} 
      alt='Icono Nuevo Gasto'
      onClick={handleNuevoGasto} />
    </div>

    ) 
  }
  {modal && <Modal setModal={setModal} />}
    
    </>
  )
}

export default App
