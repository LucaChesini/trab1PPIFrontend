import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Criar from './components/telas/Criar';
import Editar from './components/telas/Editar';
import Deletar from './components/telas/Deletar';
import Mostrar from './components/telas/Mostrar';
import Login from './components/telas/Login';

function App() {
  return (
    <>
    <DndProvider backend={ HTML5Backend }>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='criar' element={<Criar />} />
        <Route path=':cardId/editar' element={<Editar />} />
        <Route path=':cardId/deletar' element={<Deletar />} />
        <Route path=':cardId' element={<Mostrar />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </DndProvider>
    </>
  )
}

export default App
