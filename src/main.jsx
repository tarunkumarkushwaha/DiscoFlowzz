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
import Foot from './component/Foot.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/><Dashboard /><Foot/></>,
    errorElement: <><App/><ErrorPage/><Foot/></>
  },
  {
    path: "/edit",
    element: <><App/><EditProject /><Foot/></>,
    errorElement: <><App/><ErrorPage/><Foot/></>
  },
  {
    path: "/edit/:project",
    element: <><App/><EditProject /><Foot/></>,
    errorElement: <><App/><ErrorPage/><Foot/></>
  },
  {
    path: "/output",
    element: <><App/><Output/><Foot/></>,
    errorElement: <><App/><ErrorPage/><Foot/></>
  },
  {
    path: "/record",
    element: <><App/><RecordVideos/><Foot/></>,
    errorElement: <><App/><ErrorPage/><Foot/></>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
