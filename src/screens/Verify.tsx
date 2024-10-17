import { Button, Input } from 'antd';
import { useEffect, useState } from 'react';

const Verify = () => {
  const [send, setSend] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [verifyloading, setVerifyLoading] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(0);

  const handleSendOTP = async () => {
    setLoading(true);
    setCountdown(30);

    const timeout = setTimeout(() => {
      setLoading(false);
      setSend(true);
    }, 2000);

    return () => clearTimeout(timeout);
  };

  const handleVerify = () => {
    setVerifyLoading(true);

    const timeout = setTimeout(() => {
      setVerifyLoading(false);
      console.log('ok');
    }, 2000);

    return () => clearTimeout(timeout);
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

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col justify-center items-center w-[900px] h-[620px] shadow-2xl rounded-xl text-[1.25rem] p-9'>
        <div className='text-[1.25rem]'>
          <h2 className='text-[48px] mb-10 font-extrabold text-primary-orange text-center'>
            Xác minh email của bạn
          </h2>
          <div>
            <p className='mb-4'>
              {send
                ? 'Vui lòng xác nhận mã OTP được gửi đến mail: '
                : 'Gửi mã otp đến mail: '}
              <span className='text-blue-500 underline'>abc@123.com</span>
            </p>
            <Input
              className='mb-4'
              maxLength={6}
              disabled={send === false}
              size='large'
              placeholder='nhập mã OTP'
            />
            <div className='flex gap-2'>
              <Button
                onClick={handleSendOTP}
                loading={loading}
                size='large'
                type='primary'
                disabled={countdown > 0}
              >
                <p className='text-inherit font-medium'>
                  {countdown === 0 ? 'Gửi mã OTP' : `Gửi lại sau ${countdown}`}
                </p>
              </Button>
              <Button
                onClick={handleVerify}
                loading={verifyloading}
                size='large'
                type='primary'
                disabled={send === false}
              >
                <p className='text-white font-medium'>Xác minh</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
