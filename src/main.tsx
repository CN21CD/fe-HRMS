import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { StrictMode } from 'react';
import { Routers } from './router/Router.tsx';
import { store } from './redux/store.ts';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
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
    </Provider>
  </StrictMode>
);
