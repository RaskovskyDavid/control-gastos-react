import { useState, useEffect } from 'react'
import Header from '../components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from '../components/Modal';
import {generarId} from './helpers';
import ListadoGastos from '../components/ListadoGastos';
import { object } from 'prop-types';
import Filtros from '../components/Filtros';
function App() {
const [presupuesto, setPresupuesto] = useState(
 Number(localStorage.getItem('presupuesto')) ?? 0
);
const [isValidPersupuesto, setIsValidPresupuesto] = useState(false);
const [modal, setModal] = useState(false);
const [animarModal, setAnimarModal] = useState(false);
const [gastoEditar, setGastoEditar] = useState({})
const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []);
const [filtro, setFiltro] = useState('');
const [gastosFiltrados, setGastosFiltrados] = useState([]);
const eliminarGasto = (id) => {
  const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
  setGastos(gastosActualizados)
}
useEffect(() =>{
  const presupuestoToLS = Number(localStorage.getItem('presupuesto')) ?? 0;

  if(presupuestoToLS > 0)
  {
    setIsValidPresupuesto(true)
  }
},[])
useEffect(() =>{
  if(filtro)
  {
    const gastosDelFiltrados = gastos.filter( gasto => gasto.categoria === filtro);
    setGastosFiltrados(gastosDelFiltrados)
  }
},[filtro])
  useEffect(() =>{
    localStorage.setItem('gastos', JSON.stringify(gastos)?? [])
  },[gastos])
useEffect(() =>{
  localStorage.setItem('presupuesto', presupuesto?? 0)
},[presupuesto])
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
    setGastoEditar({})
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
    setGastos={setGastos}
    />
    
    {isValidPersupuesto && (
      <>
      <main>
        <Filtros 
        filtro={filtro}
        setFiltro={setFiltro}
        />
        <ListadoGastos 
          gastos={gastos}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
          filtro={filtro}
          gastosFiltrados={gastosFiltrados}
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
  setGastoEditar={setGastoEditar}
  />}
      </div>
    </>
  )
}

export default App
