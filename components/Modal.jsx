import {React, useState, useEffect} from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../src/img/cerrar.svg'
import ListadoGastos from './ListadoGastos';

const Modal = ({setModal,animarModal, setAnimarModal,guardarGasto,gastoEditar, setGastoEditar}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [id, setId] = useState('');
    const [mensaje, setMensaje] = useState('');
    const ocultarModal =() => {
        
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() =>{
            setModal(false)
        }, 500)
    }
    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0)
        {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setFecha(gastoEditar.fecha)
            setId(gastoEditar.id)
        }
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre, cantidad, categoria].includes(''))
        {
            setMensaje("Todos los campos son obligatorios")
            setTimeout(() =>{
                setMensaje("")
            }, 3000)
            return;
        }
        guardarGasto({nombre,cantidad,categoria, id, fecha})

    }
    
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={CerrarBtn}
                alt="Cerrar"
                onClick={ocultarModal}
             />
        </div>
        <form  onSubmit={handleSubmit}
        className={`formulario ${animarModal? "animar" : "cerrar"}`}>
            
            <legend>{gastoEditar.nombre ? "Editar Gasto": "Nuevo Gasto"}</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <div className='campo'>
            <label htmlFor="nombre">Nombre Gasto</label>    
            <input 
            type="text"
            placeholder="A??ade el Nombre del Gasto"
            value={nombre}
            onChange={e=>{setNombre(e.target.value)}}
            />
            </div>
            <div className='campo'>
            <label htmlFor="cantidad">Cantidad</label>    
            <input 
            type="number"
            placeholder="Cantidad del Gasto"
            value={cantidad}
            onChange={e => {setCantidad(Number(e.target.value))}}
            />
            </div>
            <div className='campo'>
            <label htmlFor="categoria">Categoria</label>    
            <select id='categoria' 
                value={categoria}
                onChange={e => {setCategoria(e.target.value)}}
            >
                 <option value="">-- Todas las Categor??as --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
            </select>
            </div>
            <input
            type="submit"
            value={gastoEditar.nombre?"Guardar cambios" :"a??adir gasto"}
            />
        </form>
      
    </div>
  )
}

export default Modal
