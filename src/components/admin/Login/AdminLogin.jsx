import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const loginButtonRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn submit mặc định của form
    if (!phoneNumber || !password) {
      setError("Vui lòng nhập số điện thoại và mật khẩu");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        phoneNumber,
        password,
      });
      if (response.status === 200 && response.data.token) {
        console.log("Đăng nhập thành công:", response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("admin", JSON.stringify(response.data.user));
        localStorage.setItem("isAdminLoggedIn", "true");
        navigate("/admin/dashboard");
      } else {
        throw new Error("Đăng nhập thất bại");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Sai thông tin đăng nhập hoặc lỗi kết nối";
      setError(errorMessage);
      console.error("Lỗi đăng nhập:", error);
    } finally {
      setLoading(false);
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
        {error && <div className="mb-4 text-red-600">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1">Số điện thoại</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
          disabled={loading}
          className={`w-full p-2 rounded ${loading ? "bg-gray-400" : "bg-blue-500 text-white hover:bg-blue-600"} transition-colors`}
          ref={loginButtonRef}
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;