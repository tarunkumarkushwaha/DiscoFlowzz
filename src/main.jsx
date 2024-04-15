import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './routes/Dashboard'
import EditProject from './routes/EditProject.jsx';
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/><Dashboard /></>,
    errorElement: <><App/><ErrorPage/></>
  },
  {
    path: "/edit",
    element: <><App/><EditProject /></>,
    errorElement: <><App/><ErrorPage/></>
  },
  {
    path: "/edit/:project",
    element: <><App/><EditProject /></>,
    errorElement: <><App/><ErrorPage/></>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
