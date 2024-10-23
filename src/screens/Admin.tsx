import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';

const Admin = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const clearToken = async () => {
    await localStorage.removeItem('authToken');
    dispatch(logout());
    nav('/login');
  };
  return (
    <div className='bg-[#EEEEEE] w-full h-screen'>
      <Button onClick={clearToken}>Đăng xuất</Button>
    </div>
  );
};

export default Admin;
