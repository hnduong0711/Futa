// src/pages/AdminLoginPage.jsx
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const passwordRef = useRef(null); 
  const loginButtonRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "123123") {
      localStorage.setItem("isAdminLoggedIn", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Sai thông tin đăng nhập!");
    }
  };

  const handleUsernameKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      passwordRef.current.focus(); 
    }
  };

  const handlePasswordKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      loginButtonRef.current.click();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md">
        <h2 className="mb-4 text-xl font-bold">Đăng nhập Admin</h2>
        <div className="mb-4">
          <label className="block mb-1">Tên đăng nhập</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleUsernameKeyDown}
            className="w-full p-2 border rounded"
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Mật khẩu</label>
          <input
            type="password"
            value={password}
            onKeyDown={handlePasswordKeyDown}
            ref={passwordRef} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
          ref={loginButtonRef}
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
