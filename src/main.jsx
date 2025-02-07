import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, HashRouter } from "react-router-dom";
import App from './App.jsx'
import { Gallery } from './Gallery.jsx';
import "./styles/reset.css";
import "./assets/fontawesome-pro-6.7.1-web/css/all.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)

