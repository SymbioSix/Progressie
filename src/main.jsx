import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProtectPage from "./components/protectRoute.jsx";

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
import DashboardCoursePage from './pages/dashboard/pages/course/index.jsx';
import DashboardAchievementPage from './pages/dashboard/pages/achievement.jsx';
import DashboardToDoListPage from './pages/dashboard/pages/todolist/index.jsx';
import DashboardToDoListCoursePage from './pages/dashboard/pages/todolist/todo-Course.jsx';
import DashboardToDoListTargetPage from './pages/dashboard/pages/todolist/todo-Target.jsx';
import DashboardSettingsPage from './pages/dashboard/pages/setting.jsx';
import DashboarProfilePage from './pages/dashboard/pages/profile.jsx';
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
      <ProtectPage>
        <DashboardPage />
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/course",
    element: (
      <ProtectPage>
        <DashboardCoursePage />
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/achievement",
    element: (
      <ProtectPage>
        <DashboardAchievementPage />
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/todolist",
    element: (
      <ProtectPage>
        <DashboardToDoListPage />
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/todolist/course",
    element: (
      <ProtectPage>
        <DashboardToDoListCoursePage />
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/todolist/target",
    element: (
      <ProtectPage>
        <DashboardToDoListTargetPage />
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/settings",
    element: (
      <ProtectPage>
        <DashboardSettingsPage />
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/profile",
    element: (
      <ProtectPage>
        <DashboarProfilePage />
      </ProtectPage>
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