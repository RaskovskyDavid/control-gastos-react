import { useState } from 'react'
import Header from '../components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from '../components/Modal';
import {generarId} from './helpers';
import ListadoGastos from '../components/ListadoGastos';
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
  gasto.id = generarId();
  gasto.fecha = Date.now();
  setGastos([...gastos, gasto])

  setAnimarModal(false)
        setTimeout(() =>{
            setModal(false)
        }, 500)
}
  return (
   <>
   <div className={modal ? "fijar": ""} >
    <Header
    presupuesto={presupuesto}
    setPresupuesto={setPresupuesto}
    isValidPersupuesto={isValidPersupuesto}
    setIsValidPresupuesto={setIsValidPresupuesto}
    gastos={gastos}
    />
    
    {isValidPersupuesto && (
      <>
      <main>
        <ListadoGastos 
          gastos={gastos}
        />
      </main>
        <div className="nuevo-gasto">
          <img 
          src={IconoNuevoGasto} 
          alt='Icono Nuevo Gasto'
          onClick={handleNuevoGasto} />
        </div>
    </>
    ) 
  }

  {modal && <Modal 
  setAnimarModal={setAnimarModal}
  animarModal={animarModal}
  setModal={setModal}
  guardarGasto={guardarGasto} />}
      </div>
    </>
  )
}

export default App
