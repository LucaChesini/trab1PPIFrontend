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

function App() {
  return (
    <>
    <DndProvider backend={ HTML5Backend }>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='criar' element={<Criar />} />
        <Route path=':id/editar' element={<Editar />} />
        <Route path=':id/deletar' element={<Deletar />} />
        <Route path=':id' element={<Mostrar />} />
      </Routes>
    </DndProvider>
    </>
  )
}

export default App
