import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import PrivateRoutes from './routes/PrivateRoutes'
import HomePage from './component/HomePage'
import Navbar from './common/Navbar'
import PaymentSuccess from './payment/PaymentSuccess'
import ForgotPassword from './auth/ForgotPassword'
import Homepage from './component/HomePage'
import GuestProfilePage from './component/GuestProfile/GuestProfilePage'
import Header from './component/Home/Header'
import PartyPage from './component/Party/PartyPage'
import PartyDetails from './component/Party/PartyDetails'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',
      element :  <><HomePage></HomePage></>,
    },
    //  {
    //    path: '/dashboard',
    //    element : <PrivateRoutes element={<><Navbar></Navbar><Dashboard /></>} />,
    //  },
    {
       path: '/dashboard',
        element : <PrivateRoutes element={<><Navbar></Navbar><Dashboard /></>} />,
      },
     {
      path : 'login',
      element :  <Login></Login>
     },
     {
      path : 'signup',
      element :  <SignUp></SignUp>
     },
     {
      path: '/party',
       element : <PrivateRoutes element={<><PartyPage /></>} />,
     },
     {
      path: '/party-details/:id',
       element : <PrivateRoutes element={<><PartyDetails /></>} />,
     },
      {
       path: '/profile',
        element : <PrivateRoutes element={<><GuestProfilePage /></>} />,
      },
     {
      path : 'payment-success',
      element :  <PaymentSuccess></PaymentSuccess>
     },
     {
      path : 'forgot-password',
      element :  <ForgotPassword></ForgotPassword>
     },
  ])

  return (
    <>
     
      <RouterProvider router={router}></RouterProvider>

 
    </>
  )
}

export default App
