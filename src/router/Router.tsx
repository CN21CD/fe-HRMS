import { createBrowserRouter } from 'react-router-dom';
import AddUserProfile from '../screens/AddUserProfile';
import AddSystemUser from '../screens/AddSystemUser';
import AddCompany from '../screens/AddCompany';
import SystemUser from '../screens/SystemUser';
import EditUser from '../screens/EditUser';
import Register from '../screens/Register';
import Verify from '../screens/Verify';
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
        path: '/admin',
        element: <SystemUser />,
      },
      {
        path: '/admin/addUser',
        element: <AddSystemUser />,
      },
      {
        path: '/admin/editUser',
        element: <EditUser />,
      },
    ],
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
    path: '/verify',
    element: <Verify />,
  },
  {
    path: '/add-company',
    element: <AddCompany />,
  },
  {
    path: '/add-user-profile',
    element: <AddUserProfile />,
  },
]);
