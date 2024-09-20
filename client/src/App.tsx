import './App.css'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import MainLayout from './layout/MainLayout'
import HereSection from './components/HereSection'
import Profile from './components/Profile'
import SearchPage from './components/Search'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <HereSection/>
      },
      {
        path: '/profile',
        element: <Profile/>
      },
      {
        path: '/search/:text',
        element: <SearchPage/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword/>
  },
  {
    path: '/reset-password',
    element: <ResetPassword/>
  },
  {
    path: '/verify-email',
    element: <VerifyEmail/>
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
