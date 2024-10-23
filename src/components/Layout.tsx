import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className='ml-[140px]'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
