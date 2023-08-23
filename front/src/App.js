import logo from './logo.svg';

import Login from './page/login/Login';
import Register from './page/register/Register';
import { Navigate, RouterProvider, createBrowserRouter, Route, Outlet } from "react-router-dom"
import Navbar from './coponents/navber/navbar';
import RightBar from './coponents/rightBar/rightBar';
import LeftBar from './coponents/leftBar/leftBar';
import Home from './page/home/home';
import Proflie from './page/profile/Profile';
import "./style.scss"
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModecontext';
import { AuthContext } from './context/authcontext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            <LeftBar />
            <div style={{ flex: 6 }}><Outlet /></div>
            <RightBar />
          </div>
        </div>
        </QueryClientProvider>
    )
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        }, {
          path: "/profile/:id",
          element: <Proflie />
        }
      ]

    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
