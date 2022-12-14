//React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Fichier
import Headers from './Components/Headers/Headers'
import Footer from './Components/Footer/Footer'
import Dashboard from './Pages/Dashboard/Dashboard'
import Error from './Pages/Error/Error'

//CSS
import './index.css'
/**
 * @return {string} HTML content of the application
 */
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route
          path="/user/:id"
          element={
            <div className="body">
              <Footer />
              <Dashboard />
            </div>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
