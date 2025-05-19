import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Routes/Route.jsx';
import Home from './layout/Home.jsx';
import VewServices from './components/VewServices.jsx';
import FeedbackSection from './components/FeedbackSection.jsx';
import Login from './components/UserService/Login.jsx';
import Signup from './components/UserService/SignUp.jsx';
import BlogPage from './layout/BlogPage.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivetRout from './PrivetRout/PrivetRout.jsx';
import ErorPage from './components/ErorPage.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement:<ErorPage></ErorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/public/category.json')
      },
      {
        path: '/services/:category',
        element:<PrivetRout><VewServices></VewServices></PrivetRout>,
        loader:()=> fetch('/public/services.json')
      }, 
      {
        path:'/feedback',
        element:<PrivetRout><FeedbackSection></FeedbackSection></PrivetRout>
      },
      {
       path:'/login',
       element:<Login></Login>
       
      },
      {
        path:'/register',
        element:<Signup></Signup>
      },
      {
        path:'/blog',
        element:<PrivetRout><BlogPage></BlogPage></PrivetRout> 
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  
  </StrictMode>,
)
