import { Link } from 'react-router-dom';

const Home = () => {
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
    </div>
  );
};

export default Home;
