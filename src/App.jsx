import { useState } from 'react'
import Header from '../components/Header'

function App() {
const [presupuesto, setPresupuesto] = useState(0);
const [isValidPersupuesto, setIsValidPresupuesto] = useState(false);
  return (
    <Header
    presupuesto={presupuesto}
    setPresupuesto={setPresupuesto}
    isValidPersupuesto={isValidPersupuesto}
    setIsValidPresupuesto={setIsValidPresupuesto}
    />
  )
}

export default App
