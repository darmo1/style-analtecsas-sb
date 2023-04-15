import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Btn from './components/Btn/Btn'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Btn className='text-center'>Hola</Btn>
  </React.StrictMode>,
)
