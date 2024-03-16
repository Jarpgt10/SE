import { useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CURSOS, HOME, PRIVATE, PUBLIC, USUARIOS } from './router/path'
import { Cursos, Home, Login, Principal, Usuario } from './page'
import { PublicRoute } from './router/PublicRoute'
import { PrivateRoute } from './router/PrivateRoute'
import { UsuarioState } from './context/UsuarioContext'
import { LoginState } from './context/LoginContext'

function App() {


  return (
    <AuthContextProvider>

      <BrowserRouter>

        <Routes >
          <Route path={PUBLIC} element={<PublicRoute />}>
            <Route index element={<Login />} />
          </Route>
          <Route path={PRIVATE} element={<LoginState><PrivateRoute /> </LoginState>}>
            <Route index element={<Principal />} />
            <Route path={HOME} element={<Home />} />
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
