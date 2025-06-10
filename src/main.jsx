import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GridBackgroundDemo } from './components/Background.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/context/ThemeProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <GridBackgroundDemo>
      <App />
    </GridBackgroundDemo>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
