import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Dashboard } from './pages/Dashboard'
import { Clientes } from './pages/Clientes'
import { IVA } from './pages/iva/IVA'
import { IVADetalle } from './pages/iva/IVADetalle'
import { IVAFlujo } from './pages/iva/IVAFlujo'
import { Sueldos } from './pages/Sueldos'
import { Estructura } from './pages/Estructura'
import { Balances } from './pages/Balances'
import { PortalClientes } from './pages/PortalClientes'
import { Tareas } from './pages/Tareas'
import { NotFound } from './pages/NotFound'
import './styles/global.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/iva" element={<IVA />} />
          <Route path="/iva/flujo" element={<IVAFlujo />} />
          <Route path="/iva/detalle/:id" element={<IVADetalle />} />
          <Route path="/sueldos" element={<Sueldos />} />
          <Route path="/estructura" element={<Estructura />} />
          <Route path="/balances" element={<Balances />} />
          <Route path="/portal-clientes" element={<PortalClientes />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/ganancias" element={<div><h1>Liquidación de Ganancias</h1><p className="text-muted">Próximamente</p></div>} />
          <Route path="/iibb" element={<div><h1>IIBB</h1><p className="text-muted">Próximamente</p></div>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
