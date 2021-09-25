import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Repos from './pages/Repos';
import useLocalStorage from './hooks/useLocalStorage';
// ----------------------------------------------------------------------

export default function Router() {
  const key = 'user';
  const [user] = useLocalStorage(key);
  console.log(user);
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/repos" replace /> },
        { path: 'repos', element: <Repos login={user} /> },
        { path: 'favorites', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { element: <Login to="/dashboard/repos" replace /> },
        { path: 'repos', element: <Repos login={user} /> },
        { path: 'register', element: <Register /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
