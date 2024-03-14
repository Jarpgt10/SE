import { useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CURSOS, PRIVATE, PUBLIC, USUARIOS } from './router/path'
import { Cursos, Home, Login, Usuario } from './page'
import { PublicRoute } from './router/PublicRoute'
import { PrivateRoute } from './router/PrivateRoute'
import { UsuarioState } from './context/UsuarioContext'

function App() {


  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes >
          <Route path={PUBLIC} element={<PublicRoute />}>
            <Route index element={<Login />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path={CURSOS} element={<Cursos />} />
            <Route path={USUARIOS} element={
              <UsuarioState>
                < Usuario />
              </UsuarioState>
            } />
          </Route>
        </Routes>

      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
