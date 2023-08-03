import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import { Navbar, Navbarr } from './components/navbar/Navbar';
import { Addbook } from './pages/addbook/Addbook';
export function App() {
  return (
    <>
    <Navbarr/>
    <Routes>
     <Route path='/' element={<h1>home</h1>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/signup' element={<Register/>}></Route>
     <Route path='/addbook' element={<Addbook/>}></Route>
    </Routes>
    </>
  )
}

