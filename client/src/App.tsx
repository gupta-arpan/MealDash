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
import SearchPage from './components/SearchPage'
import RestaurantDetail from './components/RestaurantDetailPage'
import Cart from './components/Cart'
import Restaurant from './admin/Restaurant'
import AddMenu from './admin/AddMenu'
import Orders from './admin/Orders'
import Success from './components/Success'

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
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantDetail/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/order/status',
        element: <Success/>
      },
      {
        path: '/admin/restaurant',
        element: <Restaurant/>
      },
      {
        path: '/admin/menu',
        element: <AddMenu/>
      },
      {
        path: '/admin/orders',
        element: <Orders/>
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
