import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { StrictMode } from 'react';
import { Routers } from './router/Router.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
