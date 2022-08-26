import React from 'react'
import CerrarBtn from '../src/img/cerrar.svg'

const Modal = ({setModal}) => {
    const ocultarModal =() => {
        setModal(false)
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
      
    </div>
  )
}

export default Modal
