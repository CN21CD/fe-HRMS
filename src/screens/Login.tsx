import { FaRegUser } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import { CiLock } from 'react-icons/ci';

const Login = () => {
  return (
    <div className='flex bg-[#ff7b1d]'>
      {/* Thẻ div trái */}
      <div className='bg-white relative w-4/5 h-screen rounded-tr-[400px] rounded-br-[400px] flex items-center justify-center'>
        <div>
          <img
            src='https://www.freepik.com/free-vector/general-business-horizontal-banner-template_13914232.htm#fromView=search&page=1&position=6&uuid=230ac39d-0b7d-4102-ae09-7359a49db816'
            alt=''
            className='w-[520px] h-[80px] shadow-lg mb-10 rounded-xl'
          />

          <p className='font-bold text-2xl text-center text-[#62748c]'>
            Đăng nhập
          </p>

          <div className='flex items-center gap-2 mb-2'>
            <FaRegUser />
            <p>Username</p>
          </div>

          <input
            type='text'
            placeholder='Tên đăng nhập'
            className='border rounded-xl w-full p-2 mb-2'
          />

          <div className='flex items-center gap-2  mb-2'>
            <CiLock />
            <p>Password</p>
          </div>

          <input
            type='text'
            placeholder='Mật khẩu'
            className='border rounded-xl w-full p-2 mb-5'
          />

          <button className='bg-[#ff7b1d] text-white font-semibold w-full py-3 rounded-3xl'>
            Login
          </button>

          <a href='#' className='text-[#ff7b1d] text-center w-full block mt-4'>
            Quên mật khẩu
          </a>

          <div className='flex gap-2 absolute left-0 bottom-0 p-4'>
            <CiFacebook size={'30px'} color='#62748c' />
            <CiFacebook size={'30px'} color='#62748c' />
            <CiFacebook size={'30px'} color='#62748c' />
            <CiFacebook size={'30px'} color='#62748c' />
          </div>

          <div className='w-[180px] h-[180px] bg-[#f6f5fb] rounded-full absolute right-[-90px] top-1/2 flex items-center justify-center'>
            <p>hehe</p>
          </div>
        </div>
      </div>

      {/* Thẻ div phải */}
      <div className='bg-[#ff7b1d] w-1/5 h-screen'>2</div>
    </div>
  );
};

export default Login;
