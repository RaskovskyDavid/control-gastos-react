import { useState } from 'react'
import Header from '../components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from '../components/Modal';
function App() {
const [presupuesto, setPresupuesto] = useState(0);
const [isValidPersupuesto, setIsValidPresupuesto] = useState(false);
const [modal, setModal] = useState(false);
const [animarModal, setAnimarModal] = useState(false);
const [gastos, setGastos] = useState([]);
const handleNuevoGasto = () => {
  setModal(true)
  setTimeout(()=>{
    setAnimarModal(true)
  },500)
}
const guardarGasto = (gasto) => {

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
  {modal && <Modal 
  setAnimarModal={setAnimarModal}
  animarModal={animarModal}
  setModal={setModal}
  guardarGasto={guardarGasto} />}
    
    </>
  )
}

export default App
