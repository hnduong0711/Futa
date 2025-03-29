// src/components/ProtectedAdminRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAdmin = () => {
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';

  // Nếu chưa đăng nhập, điều hướng về /admin/login
  return isAdminLoggedIn ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedAdmin;