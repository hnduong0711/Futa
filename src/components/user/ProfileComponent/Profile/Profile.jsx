import axios from "axios";
import React, { useState } from "react";
// import { Button } from 'lucide-react';

const AccountInfo = () => {
  const ls = localStorage;
  const token = ls.getItem("token");
  const user = JSON.parse(ls.getItem("user") || "{}");
  const password = ls.getItem("password");
  const userId = user.id;
  const fullname = user.fullname || "";
  const email = user.email || "";
  const phoneNumber = user.phoneNumber || "";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFullname, setEditFullname] = useState(fullname);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhone, setEditPhone] = useState(phoneNumber);

  console.log(phoneNumber);

  const handleSave = async () => {
    console.log("Saving user data:", {
      fullname: editFullname,
      email: editEmail,
      phoneNumber: editPhone,
      password: password,
    });
    
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/update?id=${userId}`,
        {
          fullname: editFullname,
          phoneNumber: editPhone,
          password: password,
          email: editEmail,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        ls.setItem(
          "user",
          JSON.stringify({
            ...user,
            fullname: editFullname,
            email: editEmail,
            phoneNumber: editPhone,
          })
        );
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="w-full mt-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-futa-heading text-2xl mb-6">Thông tin tài khoản</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Họ và tên</label>
          <p className="mt-1 text-gray-900">{fullname}</p>
        </div>
        <div>
          <label className="block text-gray-700">Số điện thoại</label>
          <p className="mt-1 text-gray-900">{phoneNumber}</p>
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <p className="mt-1 text-gray-900">{email}</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 px-4 py-2 bg-futa-primary text-white rounded-lg hover:bg-futa-hover transition-colors"
        >
          Chỉnh sửa
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-futa-heading text-xl mb-4">
              Chỉnh sửa thông tin
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Họ và tên</label>
                <input
                  type="text"
                  value={editFullname}
                  onChange={(e) => setEditFullname(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Số điện thoại</label>
                <input
                  type="text"
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                >
                  Hủy
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-futa-primary text-white rounded-lg hover:bg-futa-hover"
                >
                  Lưu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountInfo;
