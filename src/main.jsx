import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './App.jsx';
import AboutPage from './pages/about/index.jsx';
import './index.css';


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
        <MainPage />
    ),
  },
  {
    path: "/about",
    element: (
      <AboutPage />
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);