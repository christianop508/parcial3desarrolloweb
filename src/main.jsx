import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './assets/index.css'
import Login from './pages/Login'
import JuegosPendientes from './pages/JuegosPendientes'
import Navbar from './pages/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/JuegosPendientes' element={<JuegosPendientes />} />
        <Route path='/Navbar' element={<Navbar />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
