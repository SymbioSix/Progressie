import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { UserProvider } from "./context/user.jsx";
import ProtectPage from "./components/protectRoute.jsx";

// Landing Page
import MainPage from './App.jsx';
import AboutPage from './pages/about/index.jsx';
import FaqPage from './pages/faq/index.jsx';
import LoginPage from './pages/auth/login.jsx';
import RegisterPage from './pages/auth/register.jsx';
import ForgotBasePage from './pages/auth/forgotBase.jsx';
import ForgotMainPage from './pages/auth/forgotMain.jsx';

// Dashboard Page
import DashboardPage from './pages/dashboard/home.jsx';
import DashboardCoursePage from './pages/dashboard/pages/course/index.jsx';
import DashboardAchievementPage from './pages/dashboard/pages/achievement.jsx';
import DashboardToDoListPage from './pages/dashboard/pages/todolist/index.jsx';
import DashboardToDoListCoursePage from './pages/dashboard/pages/todolist/todo-Course.jsx';
import DashboardToDoListTargetPage from './pages/dashboard/pages/todolist/todo-Target.jsx';
import DashboardSettingsPage from './pages/dashboard/pages/setting.jsx';
import DashboarProfilePage from './pages/dashboard/pages/profile.jsx';

// Course Page
import CourseReadingPage from './pages/dashboard/pages/course/course-Reading.jsx';

import NotFoundPage from './pages/404.jsx';
import UnauthorizedPage from './pages/403.jsx';
import './index.css';
import CoursePage from './pages/dashboard/pages/course/course-Video.jsx';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        <AboutPage />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
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
      <ProtectPage allowedRoles={['BasicUser', 'Administrator']}>
        <QueryClientProvider client={queryClient}>
          <DashboardPage />
        </QueryClientProvider>
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/course",
    element: (
      <ProtectPage allowedRoles={['BasicUser', 'Administrator']}>
        <QueryClientProvider client={queryClient}>
          <DashboardCoursePage />
        </QueryClientProvider>
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/course/:courseId",
    element: (
      <ProtectPage allowedRoles={['BasicUser', 'Administrator']}>
        <QueryClientProvider client={queryClient}>
          <CoursePage />
        </QueryClientProvider>
      </ProtectPage>
    ),
  },
  {
    path: "/dashboard/course/:courseId/:subcourseId",
    element: (
      <ProtectPage allowedRoles={['BasicUser', 'Administrator']}>
        <QueryClientProvider client={queryClient}>
          <CoursePage />
        </QueryClientProvider>
      </ProtectPage>
    ),
  },
  {
    path: "/dashboard/course/:courseId/:subcourseId/r",
    element: (
      <ProtectPage allowedRoles={['BasicUser', 'Administrator']}>
        <QueryClientProvider client={queryClient}>
          <CourseReadingPage />
        </QueryClientProvider>
      </ProtectPage>
    ),
  },
  {
    path: "/dashboard/course/:courseId/:subcourseId/r/recommend",
    element: (
      <ProtectPage allowedRoles={['BasicUser', 'Administrator']}>
        <QueryClientProvider client={queryClient}>
          <CourseReadingPage />
        </QueryClientProvider>
      </ProtectPage>
    ),
  },
  {
    path: "/dashboard/achievement",
    element: (
      <ProtectPage allowedRoles={['BasicUser']}>
        <QueryClientProvider client={queryClient}>
          <DashboardAchievementPage />
        </QueryClientProvider>
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/todolist",
    element: (
      <ProtectPage allowedRoles={['BasicUser']}>
        <QueryClientProvider client={queryClient}>
          <DashboardToDoListPage />
        </QueryClientProvider>
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/todolist/course",
    element: (
      <ProtectPage allowedRoles={['BasicUser']}>
        <QueryClientProvider client={queryClient}>
          <DashboardToDoListCoursePage />
        </QueryClientProvider>
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/todolist/target",
    element: (
      <ProtectPage allowedRoles={['BasicUser']}>
        <QueryClientProvider client={queryClient}>
          <DashboardToDoListTargetPage />
        </QueryClientProvider>
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/settings",
    element: (
      <ProtectPage allowedRoles={['BasicUser', 'Administrator']}>
        <QueryClientProvider client={queryClient}>
          <DashboardSettingsPage />
        </QueryClientProvider>
      </ProtectPage>
    )
  },
  {
    path: "/dashboard/profile",
    element: (
      <ProtectPage allowedRoles={['BasicUser', 'Administrator']}>
        <QueryClientProvider client={queryClient}>
          <DashboarProfilePage />
        </QueryClientProvider>
      </ProtectPage>
    )
  },
  {
    path: "/unauthorized",
    element: (
      <UnauthorizedPage />
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
    <UserProvider>
      <RouterProvider router={routes} />
    </UserProvider>
  </React.StrictMode>
);