import React, { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Criar from './components/telas/Criar';
import Editar from './components/telas/Editar';
import Deletar from './components/telas/Deletar';
import Mostrar from './components/telas/Mostrar';
import Login from './components/telas/Login';
import Cadastro from './components/telas/Cadastro';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();
  const rotaLogin = location.pathname === '/login' || location.pathname === '/cadastro';

  return (
    <>
    <DndProvider backend={ HTML5Backend }>
      {!rotaLogin && <Navbar />}
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route index element={<Home />} />
          <Route path='criar' element={<Criar />} />
          <Route path=':cardId/editar' element={<Editar />} />
          <Route path=':cardId/deletar' element={<Deletar />} />
          <Route path=':cardId' element={<Mostrar />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='cadastro' element={<Cadastro />} />
      </Routes>
    </DndProvider>
    </>
  )
}

export default App
