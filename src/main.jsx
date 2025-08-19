import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Home.jsx'
import Work from './pages/Work.jsx'
import AboutDetail from './pages/AboutDetail.jsx'
import ContactForm from './pages/ContactForm.jsx';
import Experience from './pages/Experience.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/works",
    element: <Work />,
  },
  {
    path: "/about",
    element: <AboutDetail />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
