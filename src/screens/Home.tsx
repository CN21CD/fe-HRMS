import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home = () => {
  const user = useSelector((state: RootState) => state.user.user); // test redux
  console.log(user);

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
    </div>
  );
};

export default Home;
