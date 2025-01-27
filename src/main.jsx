import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Gallery } from './Gallery.jsx';
import "./styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/fontawesome-pro-6.7.1-web/css/all.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

