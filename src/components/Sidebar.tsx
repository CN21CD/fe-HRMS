import { FiHome, FiUser, FiCalendar, FiKey, FiUserCheck } from 'react-icons/fi';
import { PiMoney, PiGear } from 'react-icons/pi';
import { Link, NavLink } from 'react-router-dom';
import avt from '../assets/LogoSample-orange.png';
import { Divider } from 'antd';

const SIDEBAR_ITEMS = [
  {
    icon: <FiHome />,
    label: 'Trang chủ',
    link: '/',
  },
  {
    icon: <FiUser />,
    label: 'Nhân sự',
    link: '/employee',
  },
  {
    icon: <FiCalendar />,
    label: 'Chấm công',
    link: '/timekeeping',
  },
  {
    icon: <PiMoney />,
    label: 'Tính lương',
    link: '/pay',
  },
  {
    icon: <FiKey />,
    label: 'Admin',
    link: '/admin/systemUser',
  },
  {
    icon: <FiUserCheck />,
    label: 'Thông tin',
    link: '/profile',
  },
  {
    icon: <PiGear />,
    label: 'Thiết lập',
    link: '/setting',
  },
];

const Sidebar = () => {
  return (
    <div className='w-[140px] fixed left-0 top-0 z-10 h-screen'>
      <img src={avt} alt='' className='w-[100px] h-[100px] m-5' />
      <p className='text-center'>Hoàng Anh</p>
      <p className='text-center'>(admin)</p>
      <Divider />
      {SIDEBAR_ITEMS.map((item, index) => (
        <NavLink
          className={(navClass) =>
            navClass.isActive
              ? 'bg-primary-light-gray text-primary-orange font-medium flex items-center pl-5 py-2.5 gap-2.5'
              : 'flex items-center p-2.5 gap-2.5'
          }
          to={item.link}
          key={index}
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
