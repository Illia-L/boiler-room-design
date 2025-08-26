import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/reset.css'
import './css/colors.css'
import './css/index.css'
import './css/swiper.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
