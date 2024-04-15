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
import Output from './routes/Output.jsx';
import RecordVideos from './routes/RecordVideos.jsx';

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
  {
    path: "/output",
    element: <><App/><Output/></>,
    errorElement: <><App/><ErrorPage/></>
  },
  {
    path: "/record",
    element: <><App/><RecordVideos/></>,
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
