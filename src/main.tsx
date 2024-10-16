import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { StrictMode } from 'react';
import { Routers } from './router/Router.tsx';
import { ToastContainer } from 'react-toastify';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer
      position='top-right'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      theme='light'
    />
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ff7b1d',
        },
      }}
    >
      <RouterProvider router={Routers} />
    </ConfigProvider>
  </StrictMode>
);
