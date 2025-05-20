import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const ChangePassword = () => {
  const ls = localStorage;
  const token = ls.getItem("token");
  const user = JSON.parse(ls.getItem("user") || "{}");
  const userId = user.id;
  const password = ls.getItem("password");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleSave = async () => {
    if (newPassword !== confirmPassword) {
      alert("Mật khẩu mới và xác nhận mật khẩu không khớp!");
      return;
    }

    if(oldPassword !== password){
      alert("Mật khẩu cũ không đúng!");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/update?id=${userId}`,
        {
          fullname: user.fullname,
          phoneNumber: user.phoneNumber,
          password: newPassword,
          email: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        }
      );
      if (response.data) {
        alert("Đổi mật khẩu thành công!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-futa-heading text-2xl mb-6">Đổi mật khẩu</h2>
      <div className="space-y-4">
        <div className="relative">
          <label className="block text-gray-700">Mật khẩu cũ</label>
          <input
            type={showOldPass ? "text" : "password"}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg pr-10"
          />
          <button
            type="button"
            onClick={() => setShowOldPass(!showOldPass)}
            className="absolute right-2 top-9 text-gray-500"
          >
            {showOldPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="relative">
          <label className="block text-gray-700">Mật khẩu mới</label>
          <input
            type={showNewPass ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg pr-10"
          />
          <button
            type="button"
            onClick={() => setShowNewPass(!showNewPass)}
            className="absolute right-2 top-9 text-gray-500"
          >
            {showNewPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="relative">
          <label className="block text-gray-700">Nhập lại mật khẩu mới</label>
          <input
            type={showConfirmPass ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPass(!showConfirmPass)}
            className="absolute right-2 top-9 text-gray-500"
          >
            {showConfirmPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-futa-primary text-white rounded-lg hover:bg-futa-hover transition-colors w-full"
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
