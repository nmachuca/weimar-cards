import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import "./styles/reset.css";
import "./assets/fontawesome-pro-6.7.1-web/css/all.css"
import Routes from './Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </StrictMode>,
)

