import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Landing Page
import MainPage from './App.jsx';
import AboutPage from './pages/about/index.jsx';
import FaqPage from './pages/faq/index.jsx';
import LoginPage from './pages/auth/login.jsx';
import RegisterPage from './pages/auth/register.jsx';
import ForgotBasePage from './pages/auth/forgotBase.jsx';
import ForgotMainPage from './pages/auth/forgotMain.jsx';

// Dashboard User Page
import DashboardPage from './pages/dashboard/home.jsx';
import DashboardCoursePage from './pages/dashboard/user/course.jsx';
import DashboardAchievementPage from './pages/dashboard/user/achievement.jsx';
import DashboardToDoListPage from './pages/dashboard/user/todolist/index.jsx';
import DashboardToDoListCoursePage from './pages/dashboard/user/todolist/todo-Course.jsx';
import DashboardToDoListTargetPage from './pages/dashboard/user/todolist/todo-Target.jsx';
import DashboardSettingsPage from './pages/dashboard/user/settings.jsx';
import DashboarProfilePage from './pages/dashboard/user/profile.jsx';
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
    path: "/dashboard",
    element: (
      <DashboardPage />
    )
  },
  {
    path: "/dashboard/course",
    element: (
      <DashboardCoursePage />
    )
  },
  {
    path: "/dashboard/achievement",
    element: (
      <DashboardAchievementPage />
    )
  },
  {
    path: "/dashboard/to-do-list",
    element: (
      <DashboardToDoListPage />
    )
  },
  {
    path: "/dashboard/to-do-list",
    element: (
      <DashboardToDoListCoursePage />
    )
  },
  {
    path: "/dashboard/to-do-list",
    element: (
      <DashboardToDoListTargetPage />
    )
  },
  {
    path: "/dashboard/settings",
    element: (
      <DashboardSettingsPage />
    )
  },
  {
    path: "/dashboard/profile",
    element: (
      <DashboarProfilePage />
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