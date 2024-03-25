import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/transconst' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider basename="/transconst" router={router} />
  </React.StrictMode>,
)
