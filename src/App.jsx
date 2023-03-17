import reactLogo from './assets/react.svg'
import './App.scss'
import Main from './main/Main';
import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Card from './card/Card'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Main />} />
        <Route
        path="/card"
        element={<Card/>}
      />
          <Route
          path="*"
          element={<Navigate to="/" replace />}
          />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
