import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import"@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import { LanguageContext } from './context/LanguageContext.js'
// import { useContext } from 'react'
// const { language } = useContext(LanguageContext);
// axios.defaults.headers.common['Accept-Language'] = language; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
