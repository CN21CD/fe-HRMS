import {
  FaUser,
  FaGithub,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaLock,
} from 'react-icons/fa';
import img from '../assets/react.svg';
import { Input, Button } from 'antd';

const Register = () => {
  return (
    <div className='flex bg-[#ff7b1d]'>
      {/* Thẻ div trái */}
      <div className='bg-white relative w-4/5 h-screen rounded-tr-[400px] rounded-br-[400px] flex items-center justify-center'>
        <div>
          <div className='shadow-2xl mb-10 rounded-xl p-2'>
            <img src={img} className='w-[500px] h-[80px]' />
          </div>

          <p className='font-bold text-2xl text-center text-[#62748c] mb-4'>
            Đăng ký
          </p>

          <div className='flex items-center gap-2 mb-2 text-[#64728c]'>
            <FaUser size={'12px'} />
            <p className='text-sm'>Tên đăng nhập</p>
          </div>

          <Input className='mb-2' size='large' placeholder='Tên đăng nhập' />

          <div className='flex items-center gap-2 mb-2 text-[#64728c]'>
            <FaLock size={'12px'} />
            <p className='text-sm'>Mật khẩu</p>
          </div>

          <Input className='mb-2' size='large' placeholder='Mật khẩu' />

          <div className='flex items-center gap-2 mb-2 text-[#64728c]'>
            <FaLock size={'12px'} />
            <p className='text-sm'>Xác nhận mật khẩu</p>
          </div>

          <Input
            className='mb-4'
            size='large'
            placeholder='Nhập lại mật khẩu'
          />

          <Button type='primary' size='large' block shape='round'>
            Đăng ký
          </Button>

          <a
            href='#'
            className='text-[#ff7b1d] text-center w-full block mt-4 underline'
          >
            Đã có tài khoản, đăng nhập ngay!
          </a>

          <div className='flex gap-2 absolute left-0 bottom-0 p-4 '>
            <a href='#'>
              <FaFacebook size={'20px'} color='#62748c' />
            </a>
            <a href='#'>
              <FaGithub size={'20px'} color='#62748c' />
            </a>
            <a href='#'>
              <FaTiktok size={'20px'} color='#62748c' />
            </a>
            <a href='#'>
              <FaYoutube size={'20px'} color='#62748c' />
            </a>
          </div>

          <div className='w-[180px] h-[180px] bg-[#f6f5fb] rounded-full absolute right-[-90px] top-1/2 flex items-center justify-center -translate-y-2/4'>
            <img src={img} alt='' className='w-20' />
          </div>
        </div>
      </div>

      {/* Thẻ div phải */}
      <div className='bg-[#ff7b1d] w-1/5 h-screen'></div>
    </div>
  );
};

export default Register;
