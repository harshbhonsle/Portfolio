import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Component/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from './Context/theme.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeContextProvider>

    <BrowserRouter>
      <Navbar/>
      <App />
    </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
)

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <ThemeContextProvider>
//             <App />
//         </ThemeContextProvider>
//     </StrictMode>
// )