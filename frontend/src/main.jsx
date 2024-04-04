import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalContext from './Context/GlobalContext.jsx'
import { Provider } from 'react-redux'
import store from './redux/app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
   <GlobalContext>
    <Provider store={store}>
      <App />
    </Provider>
   </GlobalContext>
)
