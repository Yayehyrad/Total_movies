import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './route/index.ts'
import { RouterProvider } from 'react-router-dom'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

axios.defaults.baseURL = "https://api.themoviedb.org/3"
axios.defaults.headers.common["Authorization"] = `Bearer ${import.meta.env.VITE_TDMB_APP_API_ACCESS_TOKEN}` 

console.log(store)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
