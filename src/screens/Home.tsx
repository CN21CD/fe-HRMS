import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Button } from 'antd';
import { logout } from '../redux/slices/userSlice';

const Home = () => {
  const user = useSelector((state: RootState) => state.user.user); // test redux
  const nav = useNavigate();
  const dispatch = useDispatch();

  console.log(user);

  const clearToken = async () => {
    await localStorage.removeItem('authToken');
    dispatch(logout());
    nav('/login');
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <p>Home</p>
      <Link className='border rounded-lg bg-primary-orange' to={'/login'}>
        <p className='px-4 pt-2 text-white'>Đến đăng nhập</p>
      </Link>
      <Link className='border rounded-lg bg-primary-orange' to={'/register'}>
        <p className='px-4 pt-2 text-white'>Đến đăng ký</p>
      </Link>
      <Link className='border rounded-lg bg-primary-orange' to={'add-company'}>
        <p className='px-4 pt-2 text-white'>Thêm thông tin công ty</p>
      </Link>
      <Link
        className='border rounded-lg bg-primary-orange'
        to={'add-user-profile'}
      >
        <p className='px-4 pt-2 text-white'>Thêm thông tin người dùng</p>
      </Link>
      <Link className='border rounded-lg bg-primary-orange' to={'/verify'}>
        <p className='px-4 pt-2 text-white'>Đến xác minh</p>
      </Link>
      <Button onClick={clearToken} type='primary' size='large'>
        <p className='text-white'>Đăng xuất</p>
      </Button>
    </div>
  );
};

export default Home;
