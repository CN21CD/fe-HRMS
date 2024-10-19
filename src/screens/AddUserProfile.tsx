import { useLocation, useNavigate } from 'react-router-dom';
import { Input, DatePicker, Button } from 'antd';
import type { DatePickerProps } from 'antd';
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import logofb from '../assets/facebook.png';
import logo from '../assets/react.svg';
import logozl from '../assets/zalo.png';

interface IState {
  email: string;
  name: string;
  password: string;
  company: {
    name: string;
    phonenumber: string;
    email: string;
    address: string;
  };
}

const AddUserProfile = () => {
  const [fullName, setName] = useState<string>('');
  const [userEmail, setEmail] = useState<string>('');
  const [birthday, setBirthday] = useState<string | string[]>('');
  const [userAddress, setAddress] = useState<string>('');
  const [userPhonenumber, setPhonenumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const nav = useNavigate();
  const location = useLocation();
  const BASE_URL = import.meta.env.VITE_APP_API;
  const { name, email, password, company }: IState = location.state;

  const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date);
    setBirthday(dateString);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const info = {
      name: name,
      email: email,
      password: password,
      company,
      userinfo: {
        fullname: fullName,
        birthday: birthday,
        email: userEmail,
        address: userAddress,
        phonenumber: userPhonenumber,
      },
    };

    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, info);
      if (res.status === 200) {
        toast.success('Đăng ký thành công, vui lòng xác minh OTP');
        const state = { email: userEmail };
        nav('/verify', { state });
        setLoading(false);
      } else if (res.status === 400) {
        toast.error('Lỗi, email này đã được đăng ký');
        setLoading(false);
      } else {
        toast.error('Lỗi, đăng ký không thành công');
        setLoading(false);
      }
    } catch (error) {
      toast.error('Lỗi, đăng ký không thành công');
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className='justify-center items-center flex h-screen'>
      <div className='bg-white flex flex-row rounded-xl shadow-2xl w-[900px] h-[620px] overflow-hidden'>
        <div className='w-[450px] p-9 text-[18px]'>
          <form onSubmit={handleRegister}>
            <h2 className='my-4 text-primary-orange text-[46px] font-medium'>
              Thông tin cá nhân
            </h2>

            <p className='my-4'>Họ tên</p>
            <Input
              size='large'
              placeholder='Họ tên'
              value={fullName}
              onChange={(e) => setName(e.target.value)}
            />

            <p className='my-4'>Email</p>
            <Input
              size='large'
              placeholder='Email'
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className='flex'>
              <div>
                <p className='my-4'>Ngày sinh</p>
                <DatePicker
                  onChange={onDateChange}
                  size='large'
                  placeholder='Ngày sinh'
                  className='w-[150px]'
                />
              </div>

              <div className='px-10'>
                <p className='my-4'>Số điện thoại</p>
                <Input
                  className='flex w-[185px]'
                  size='large'
                  placeholder='Số điện thoại'
                  value={userPhonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
            </div>

            <p className='my-4'>Địa chỉ</p>
            <Input.TextArea
              placeholder='Địa chỉ'
              value={userAddress}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <div className='flex justify-between'>
              <Button
                className='w-[160px] h-[60px] my-6 text-white'
                size='large'
                onClick={() => nav(-1)}
              >
                <p className='text-primary-orange text-xl font-medium'>
                  Trở lại
                </p>
              </Button>

              <Button
                className='w-[160px] h-[60px] my-6 '
                size='large'
                type='primary'
                htmlType='submit'
                loading={loading}
              >
                <p className='text-white text-xl font-medium'>Đăng ký</p>
              </Button>
            </div>

            <div className='justify-center flex absolute left-6 bottom-6'>
              <img src={logozl} alt='logozl' className='w-[40xp] h-[40px]' />
              <img
                src={logofb}
                alt='logofb'
                className='w-[40xp] h-[40px] mx-3'
              />
            </div>
          </form>
        </div>
        <div className='flex flex-row w-[450px] bg-[#c6c6c0] items-center justify-center'>
          <img src={logo} alt='logo' className='w-[60px] h-[60px]' />
        </div>
      </div>
    </div>
  );
};

export default AddUserProfile;
