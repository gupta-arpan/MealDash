import './App.css'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  )
}

export default App
