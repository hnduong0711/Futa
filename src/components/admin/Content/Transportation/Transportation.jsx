import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

const Transportation = () => {
  // Lấy token từ localStorage
  const token = localStorage.getItem('token');

  // State cho xe
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // State cho modal thêm xe
  const [openModal, setOpenModal] = useState(false);
  const [vehicleName, setVehicleName] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  // State cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Config header cho API
  const apiConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  // Lấy danh sách xe
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/transportation/getAll', apiConfig);
        setVehicles(response.data);
      } catch (error) {
        alert('Không thể tải danh sách xe');
      }
    };
    fetchVehicles();
  }, []);

  // Xử lý thêm xe
  const handleAddVehicle = async () => {
    if (!vehicleName.trim() || !plateNumber.trim()) {
      alert('Vui lòng nhập tên xe và biển số xe');
      return;
    }
    try {
      await axios.post(
        'http://localhost:8080/api/transportation/add',
        {
          name: vehicleName,
          plateNumber: plateNumber,
          capacity: 36,
        },
        apiConfig
      );
      setOpenModal(false);
      setVehicleName('');
      setPlateNumber('');
      // Làm mới danh sách xe
      const response = await axios.get('http://localhost:8080/api/transportation/getAll', apiConfig);
      setVehicles(response.data);
    } catch (error) {
      alert('Không thể thêm xe');
    }
  };

  // Lọc xe dựa trên tìm kiếm
  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.plateNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic phân trang
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);
  const paginatedVehicles = filteredVehicles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 w-full h-screen overflow-auto">
      {/* Header với thanh tìm kiếm và nút */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Thêm xe mới
          </button>
        </div>
      </div>

      {/* Bảng xe */}
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/3 p-3 text-left">ID</th>
              <th className="w-1/3 p-3 text-left">Tên xe</th>
              <th className="w-1/3 p-3 text-left">Biển số xe</th>
            </tr>
          </thead>
          <tbody>
            {paginatedVehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-t">
                <td className="p-3">{vehicle.id}</td>
                <td className="p-3">{vehicle.name}</td>
                <td className="p-3">{vehicle.plateNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Modal thêm xe */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-6">Thêm xe mới</h2>
            <input
              type="text"
              placeholder="Tên xe"
              value={vehicleName}
              onChange={(e) => setVehicleName(e.target.value)}
              className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Biển số xe"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setOpenModal(false);
                  setVehicleName('');
                  setPlateNumber('');
                }}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={handleAddVehicle}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transportation;