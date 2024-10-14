import { createBrowserRouter } from 'react-router-dom';
import AddUserProfile from '../screens/AddUserProfile';
import AddCompany from '../screens/AddCompany';
import Register from '../screens/Register';
import Login from '../screens/Login';
import Home from '../screens/Home';
import App from '../App';

export const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/add-company',
        element: <AddCompany />,
      },
      {
        path: '/add-user-profile',
        element: <AddUserProfile />,
      },
    ],
  },
]);
