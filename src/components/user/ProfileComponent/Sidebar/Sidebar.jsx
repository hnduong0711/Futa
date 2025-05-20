import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User, Ticket, Key, LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    navigate('/dang-nhap');
  };

  const menuItems = [
    { title: 'Thông tin tài khoản', icon: <User size={24} />, path: '/profile/thong-tin' },
    { title: 'Lịch sử mua vé', icon: <Ticket size={24} />, path: '/profile/lich-su' },
    { title: 'Đổi mật khẩu', icon: <Key size={24} />, path: '/profile/doi-mat-khau' },
    { title: 'Đăng xuất', icon: <LogOut size={24} />, path: '/logout', onClick: handleLogout },
  ];


  return (
    <div className="w-96 bg-white shadow-md rounded-lg p-4">
      <div className="text-2xl font-bold text-green-600 mb-4 cursor-pointer" onClick={() => navigate('/')}>
        <img src="https://storage.googleapis.com/futa-express-web-cms-prod/LOGO_FUTA_GROUP_2023_01_51a8be4af1/LOGO_FUTA_GROUP_2023_01_51a8be4af1.png" alt="" srcset="" />
      </div>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => (item.onClick ? item.onClick() : navigate(item.path))}
              className={`flex items-center w-full p-3 rounded-lg text-left transition-colors ${
                location.pathname === item.path
                  ? 'bg-futa-primary-hover/20 text-futa-primary'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;