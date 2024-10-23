import { useLocation, useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { useState } from 'react';
import img from '../assets/login-register-pic.jpg';
import logo from '../assets/LogoSample-orange.png';

interface IState {
  email: string;
  name: string;
  password: string;
}

const AddCompany = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [companyAddress, setAddress] = useState<string>('');
  const [companyPhone, setPhone] = useState<string>('');
  const [companyEmail, setEmail] = useState<string>('');
  const nav = useNavigate();
  const location = useLocation();
  const { email, name, password }: IState = location.state;

  const navToAddUserProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const state = {
      name: name,
      email: email,
      password: password,
      company: {
        name: companyName,
        phonenumber: companyPhone,
        email: companyEmail,
        address: companyAddress,
      },
    };
    nav('/add-user-profile', { state });
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
          <form onSubmit={navToAddUserProfile}>
            <h2 className='text-[48px] font-medium text-primary-orange'>
              Thông tin công ty
            </h2>
            <p className='my-3.5'>Tên công ty</p>
            <Input
              size='large'
              placeholder='Nhập tên công ty'
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <p className='my-3.5'>Số điện thoại</p>
            <Input
              size='large'
              placeholder='Nhập số điện thoại'
              value={companyPhone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <p className='my-3.5'>Email:</p>
            <Input
              size='large'
              placeholder='Nhập email'
              value={companyEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className='my-3.5'>Địa chỉ:</p>
            <Input.TextArea
              size='large'
              placeholder='Nhập địa chỉ:'
              value={companyAddress}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className='flex justify-between'>
              <Button
                onClick={() => nav(-1)}
                className='my-6 w-[160px] h-[60px]'
              >
                <span className='text-primary-orange text-xl font-medium'>
                  Trở lại
                </span>
              </Button>
              <Button
                type='primary'
                htmlType='submit'
                className='my-6 w-[160px] h-[60px]'
              >
                <span className='text-xl font-medium'>Tiếp tục</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCompany;
