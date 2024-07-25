import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from './App.jsx';
import AboutPage from './pages/about/index.jsx';
import FaqPage from './pages/faq/index.jsx';
import LoginPage from './pages/auth/login.jsx';
import RegisterPage from './pages/auth/register.jsx';
import ForgotBasePage from './pages/auth/forgotBase.jsx';
import ForgotMainPage from './pages/auth/forgotMain.jsx';
import NotFoundPage from './pages/404.jsx';
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
  },
  {
    path: "/faq",
    element: (
      <FaqPage />
    )
  },
  {
    path: "/login",
    element: (
      <LoginPage />
    )
  },
  {
    path: "/register",
    element: (
      <RegisterPage />
    )
  },
  {
    path: "/forgot-confirm-email",
    element: (
      <ForgotBasePage />
    )
  },
  {
    path: "/forgot-confirm-password",
    element: (
      <ForgotMainPage />
    )
  },
  {
    path: "*",
    element: (
      <NotFoundPage />
    )
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);