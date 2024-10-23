import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  {
    label: 'Quản lý người dùng',
    link: '/admin',
  },
  {
    label: 'Modules',
    link: '/admin/modules',
  },
  {
    label: 'Tổ chức',
    link: '/admin/organization',
  },
];

const Header = () => {
  return (
    <div className='bg-white h-[80px] p-5 flex gap-5 items-center'>
      {NAV_LINKS.map((item, index) => (
        <NavLink
          className={(navClass) =>
            navClass.isActive
              ? 'text-primary-orange transition-all font-medium'
              : 'transition-all hover:text-primary-orange'
          }
          to={item.link}
          key={index}
        >
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Header;
