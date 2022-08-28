import { useState, useEffect } from 'react'
import Header from '../components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from '../components/Modal';
import {generarId} from './helpers';
import ListadoGastos from '../components/ListadoGastos';
import { object } from 'prop-types';
function App() {
const [presupuesto, setPresupuesto] = useState(0);
const [isValidPersupuesto, setIsValidPresupuesto] = useState(false);
const [modal, setModal] = useState(false);
const [animarModal, setAnimarModal] = useState(false);
const [gastoEditar, setGastoEditar] = useState({})
const [gastos, setGastos] = useState([]);
const eliminarGasto = (id) => {
  const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
  setGastos(gastosActualizados)
}
useEffect(()=> {
  if(Object.keys(gastoEditar).length > 0)
  {
    setModal(true)
    setTimeout(()=>{
      setAnimarModal(true)
    },500)
  }
},[gastoEditar])
const handleNuevoGasto = () => {
  setModal(true)
  setGastoEditar({})
  setTimeout(()=>{
    setAnimarModal(true)
  },500)
}
const guardarGasto = (gasto) => {
  if(gasto.id)
  {
    //actualizar
    const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id? gasto : gastoState)
    setGastos(gastosActualizados)
  }
  else
  {
    //nuevo gasto
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto])
  }
  

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
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
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
  guardarGasto={guardarGasto}
  gastoEditar={gastoEditar}
  />}
      </div>
    </>
  )
}

export default App
