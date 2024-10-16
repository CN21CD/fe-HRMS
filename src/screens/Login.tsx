import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input, Button } from 'antd';
import { useState } from 'react';
import logo from '../assets/LogoSample-orange.png';
import img from '../assets/login-register-pic.jpg';
import axios from 'axios';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const BASE_URL: string = import.meta.env.VITE_APP_API;

  const handleLogin = async () => {
    const userInfo = {
      identifier: email,
      password: password,
    };

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/api/auth/login`, userInfo);
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('authToken', token);
        setLoading(false);
        toast.success('Đăng nhập thành công');
      } else if (res.status === 401) {
        setLoading(false);
        toast.error('Tài khoản không tồn tại');
      } else {
        setLoading(false);
        toast.error('Đăng nhập không thành công');
      }
    } catch (error) {
      setLoading(false);
      toast.error('Đăng nhập không thành công');
      console.error('Lỗi: ', error);
    }
  };

  return (
    <div className='flex justify-center items-center  h-screen'>
      <div className='bg-white flex flex-row w-[900px] h-[620px] shadow-2xl rounded-xl overflow-hidden'>
        <div
          className='flex-1 bg-cover p-9 text-[20px] relative'
          style={{ backgroundImage: `url(${img})` }}
        >
          <h1
            style={{ textShadow: '8px 6px 6px rgba(0,0,0,0.25)' }}
            className='text-[60px] font-extrabold text-primary-orange text-center'
          >
            HRMS
          </h1>
          <p
            style={{ textShadow: '8px 6px 6px rgba(0,0,0,0.25)' }}
            className='text-[28px] text-primary-orange font-medium text-center'
          >
            Giải pháp phần mềm
            <br />
            quản lý nhân sự
          </p>

          <div className='flex justify-between mt-11'>
            <p className='text-white font-medium'>Dễ sử dụng</p>
            <p className='text-white font-medium'>An Toàn bảo mật</p>
          </div>

          <div className='flex justify-between mt-2'>
            <p className='text-white font-medium'>Ổn định</p>
            <p className='text-white font-medium'>Hỗ trợ 24/7</p>
          </div>

          <img
            src={logo}
            alt='logo'
            className='w-[60px] h-[60px ] absolute right-9 bottom-9'
          />
        </div>

        <div className='flex-1 p-9 text-[18px]'>
          <h2 className='text-[48px] font-medium text-primary-orange'>
            Đăng nhập
          </h2>
          <p className='my-3.5'>Email hoặc tài khoản:</p>
          <Input
            size='large'
            placeholder='Nhập email'
            allowClear
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className='my-3.5'>Mật khẩu:</p>
          <Input.Password
            size='large'
            placeholder='Nhập mật khẩu'
            allowClear
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            loading={loading}
            type='primary'
            onClick={handleLogin}
            className='w-[160px] h-[60px] my-6'
          >
            <p className='text-white text-xl font-medium'>Đăng nhập</p>
          </Button>

          <div className='flex gap-1'>
            <p>Chưa có tài khoản?</p>
            <Link className='text-blue-500 underline' to='/register'>
              Đăng ký ngay!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
