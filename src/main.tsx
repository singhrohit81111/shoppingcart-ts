import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { vals } from './Redux/Store.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Provider store={vals}>
      <App />
    </Provider>
  </React.StrictMode>,
)
