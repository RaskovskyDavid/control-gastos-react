import {React, useEffect, useState } from 'react'
import Gasto from './Gasto';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({gastos, presupuesto, setGastos, setPresupuesto, setIsValidPresupuesto}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

    if(resultado) {
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
    } 
}
  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto ) => gasto.cantidad + total, 0);
   
    setGastado(totalGastado)
    const totalDisponible = presupuesto - totalGastado;
     // Calcular el porcentaje gastado
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);

    setDisponible(totalDisponible);
    setTimeout(() =>{
      setPorcentaje(nuevoPorcentaje)
    },500)
  }, [gastos]);

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US',{
            style:'currency',
            currency: 'USD'
        })
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
      <CircularProgressbar 
      value={porcentaje}
       text={`${porcentaje}% Gastado`}
       styles={buildStyles({
        // Colors
        pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
        trailColor: '#F5F5F5',
              })}
       />
      </div>
      <div className="contenido-presupuesto">
      <button
                     className="reset-app"
                     type="button"
                     onClick={handleResetApp}
                >
                    Resetear App
                </button>
        <p><span>Presupuesto: </span>{formatearCantidad(presupuesto)}</p>
        <p className={`${disponible < 0 ? 'negativo' : '' }`}>
        <span>Disponible: </span>{formatearCantidad(disponible)}</p>
        <p><span>Gastado: </span>{formatearCantidad(gastado)}</p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
