import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route'
import AuthProvider from './provider/AuthProvider'

import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
   <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   </QueryClientProvider>
  </React.StrictMode>,
)
