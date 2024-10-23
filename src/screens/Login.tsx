import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { Input, Button } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { loginSuccess } from '../redux/slices/userSlice';
import logo from '../assets/LogoSample-orange.png';
import img from '../assets/login-register-pic.jpg';

interface IState {
  identifier: string;
  password: string;
}

interface IJwtPayload {
  account_id: string;
  company_id: string;
  role: string;
}

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const BASE_URL = import.meta.env.VITE_APP_API;
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const state: IState = {
      identifier: email,
      password: password,
    };

    try {
      setLoading(true);
      const res = await axios.post(`${BASE_URL}/auth/login`, state);
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('authToken', token);
        const decodeToken: IJwtPayload = jwtDecode(token);
        const user: IJwtPayload = {
          account_id: decodeToken.account_id,
          company_id: decodeToken.company_id,
          role: decodeToken.role,
        };
        dispatch(loginSuccess(user));
        setLoading(false);
        toast.success('Đăng nhập thành công');
        nav('/');
      } else if (res.status === 401) {
        setLoading(false);
        toast.error('Tài khoản không tồn tại');
      } else {
        setLoading(false);
        toast.error('Lỗi không xác định');
      }
    } catch (error) {
      setLoading(false);
      toast.error('Đăng nhập không thành công');
      console.error('Lỗi: ', error);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
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
            className='w-[60px] h-[60px] absolute left-9 bottom-9'
          />
        </div>

        <div className='flex-1 p-9 text-[18px]'>
          <form onSubmit={handleLogin}>
            <h2 className='text-[48px] font-medium text-primary-orange'>
              Đăng nhập
            </h2>
            <p className='my-3.5'>Email</p>
            <Input
              size='large'
              placeholder='Nhập email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className='my-3.5'>Mật khẩu</p>
            <Input.Password
              size='large'
              placeholder='Nhập mật khẩu'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              loading={loading}
              type='primary'
              htmlType='submit'
              className='my-6 w-[160px] h-[60px]'
            >
              <span className='text-xl font-medium'>Đăng nhập</span>
            </Button>
          </form>

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
