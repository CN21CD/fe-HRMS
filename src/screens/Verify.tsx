import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Input } from 'antd';
import axios from 'axios';

interface IState {
  email: string;
}

const Verify = () => {
  const [senOtpLoading, setSendLoading] = useState<boolean>(false);
  const [verifyloading, setVerifyLoading] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(300);
  const [otpCountdown, setOtpCountdown] = useState<number>(30);
  const [otp, setOtp] = useState<string>('');
  const location = useLocation();
  const { email }: IState = location.state;
  const nav = useNavigate();
  const BASE_URL = import.meta.env.VITE_APP_API;

  const handleSendOTP = async () => {
    setSendLoading(true);
    setOtpCountdown(30);

    try {
      const res = await axios.post(`${BASE_URL}/data/resend-otp`, {
        email: email,
      });
      if (res.status === 200) {
        toast.success('Đã gửi lại mã OTP');
        setCountdown(300);
        setSendLoading(false);
      } else {
        setSendLoading(false);
        toast.error('Lỗi, đăng ký không thành công');
      }
    } catch (error) {
      setSendLoading(false);
      toast.error('Lỗi, gửi OTP không thành công');
      console.error(error);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyLoading(true);

    const info = {
      email: email,
      otp: otp,
    };

    try {
      const res = await axios.post(`${BASE_URL}/auth/verify-otp`, info);
      if (res.status === 201) {
        setVerifyLoading(false);
        nav('/login');
      } else {
        setVerifyLoading(false);
        toast.error('Lỗi, xác minh OTP không thành công');
      }
    } catch (error) {
      setVerifyLoading(false);
      toast.error('Lỗi, xác minh OTP không thành công');
      console.error(error);
    }
  };

  useEffect(() => {
    let interval: any;

    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  useEffect(() => {
    let interval: any;

    if (otpCountdown > 0) {
      interval = setInterval(() => {
        setOtpCountdown(otpCountdown - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [otpCountdown]);

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center w-[900px] h-[620px] shadow-2xl rounded-xl text-[1.25rem] p-9'>
        <form onSubmit={handleVerify} className='text-[1.25rem]'>
          <h2 className='text-[48px] mb-10 font-extrabold text-primary-orange'>
            Xác minh email của bạn
          </h2>
          <p className='mb-4'>
            Vui lòng xác nhập mã OTP được gửi đến mail:{' '}
            <span className='text-blue-500 underline'>{email}</span>
          </p>
          <p className='mb-4'>
            Mã OTP có hiệu lực trong{' '}
            <span className='font-semibold'>{countdown}s</span>
          </p>
          <Input
            className='mb-4'
            maxLength={6}
            size='large'
            placeholder='nhập mã OTP'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <div className='flex gap-2'>
            <Button
              onClick={handleSendOTP}
              loading={senOtpLoading}
              size='large'
              disabled={otpCountdown > 0}
            >
              {otpCountdown === 0
                ? 'Gửi lại mã OTP'
                : `Gửi lại sau ${otpCountdown}`}
            </Button>
            <Button
              loading={verifyloading}
              htmlType='submit'
              size='large'
              type='primary'
            >
              <p className='text-white font-medium'>Xác minh</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verify;
