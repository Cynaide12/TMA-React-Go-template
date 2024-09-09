import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../components/App.tsx'
import '@telegram-apps/telegram-ui/dist/styles.css';
import "./main.css"
// import '../mockEnv.ts';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
