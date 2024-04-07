import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Criar from './components/Criar';

function App() {
  return (
    <>
    <DndProvider backend={ HTML5Backend }>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='criar' element={<Criar />} />
      </Routes>
    </DndProvider>
    </>
  )
}

export default App
