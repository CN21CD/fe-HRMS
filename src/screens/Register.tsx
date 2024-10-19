import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Input, Button } from 'antd';
import { useState } from 'react';
import img from '../assets/login-register-pic.jpg';
import logo from '../assets/LogoSample-orange.png';

const Register = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPass, setConfirmPass] = useState<string>('');
  const nav = useNavigate();

  const navToUserProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmPass != password) {
      toast.error('Lỗi, mật khẩu không đúng');
      return;
    }

    const state = {
      name,
      email,
      password,
    };
    nav('/add-company', { state });
  };

  return (
    <div className='flex justify-center items-center  h-screen'>
      <div className='bg-white flex flex-row w-[900px] h-[620px] shadow-2xl rounded-xl overflow-hidden'>
        <div className='flex-1 p-9 text-[18px]'>
          <form onSubmit={navToUserProfile}>
            <h2 className='text-[48px] font-medium text-primary-orange'>
              Đăng ký
            </h2>
            <p className='my-3.5'>Email</p>
            <Input
              size='large'
              placeholder='Nhập email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className='my-3.5'>Tài khoản</p>
            <Input
              size='large'
              placeholder='Nhập tên tài khoản'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className='my-3.5'>Mật khẩu</p>
            <Input.Password
              size='large'
              placeholder='Nhập mật khẩu'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className='my-3.5'>Nhập lại mật khẩu</p>
            <Input.Password
              size='large'
              placeholder='Nhập lại mật khẩu'
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />

            <Button
              htmlType='submit'
              type='primary'
              className='w-[160px] h-[60px] my-6'
            >
              <p className='text-white text-xl font-medium'>Tiếp tục</p>
            </Button>
          </form>

          <div className='flex gap-1'>
            <p>Đã có tài khoản?</p>
            <Link className='text-blue-500 underline' to='/login'>
              Đăng nhập ngay
            </Link>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Register;
