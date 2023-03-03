import React from 'react'
// components
import Footer from './components/Footer'
import Header from './components/Header'
// pages
import Home from './pages/Home'
import RoomDetails from './pages/RoomDetails'

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/room/:id',
    element: <RoomDetails />,
  },
])

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
