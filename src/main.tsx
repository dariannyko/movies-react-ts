import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store/reducers";
import App from './App'
import './index.css'

export const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
