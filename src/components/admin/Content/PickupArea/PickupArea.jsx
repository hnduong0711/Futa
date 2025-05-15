import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";

const PickupArea = () => {
  // Lấy token từ localStorage
  const token = localStorage.getItem("token");
  console.log(token);

  // State cho điểm đón
  const [pickupAreas, setPickupAreas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // State cho modal thêm thành phố
  const [openCityModal, setOpenCityModal] = useState(false);
  const [cityName, setCityName] = useState("");
  const [cityCode, setCityCode] = useState("");
  // State cho modal thêm điểm đón
  const [openPickupModal, setOpenPickupModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState("");
  const [pickupNumber, setPickupNumber] = useState("");
  // State cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Config header cho API
  const apiConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // Lấy danh sách điểm đón
  useEffect(() => {
    const fetchPickupAreas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/pickuparea/getAll",
          apiConfig
        );
        setPickupAreas(response.data);
      } catch (error) {
        alert("Không thể tải danh sách điểm đón");
      }
    };
    fetchPickupAreas();
  }, []);

  // Lấy danh sách thành phố
  const fetchCities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/city/getAll",
        apiConfig
      );
      setCities(response.data);
    } catch (error) {
      alert("Không thể tải danh sách thành phố");
    }
  };

  // Xử lý thêm thành phố
  const handleAddCity = async () => {
    if (!cityName.trim() || !cityCode.trim()) {
      alert("Tên thành phố và mã thành phố là bắt buộc");
      return;
    }
    try {
      await axios.post(
        "http://localhost:8080/api/city/add",
        { name: cityName, cityCode: cityCode },
        apiConfig
      );
      setOpenCityModal(false);
      setCityName("");
      setCityCode("");
      alert("Thêm thành phố thành công");
    } catch (error) {
      alert("Không thể thêm thành phố");
    }
  };

  // Xử lý thêm điểm đón
  const handleAddPickupArea = async () => {
    if (!selectedCityId || !pickupNumber.trim()) {
      alert("Thành phố và địa chỉ là bắt buộc");
      return;
    }
    try {
      await axios.post(
        "http://localhost:8080/api/pickuparea/add",
        { cityId: selectedCityId, number: pickupNumber },
        apiConfig
      );
      setOpenPickupModal(false);
      setSelectedCityId("");
      setPickupNumber("");
      alert("Thêm điểm đón thành công");
      // Làm mới danh sách điểm đón
      const response = await axios.get(
        "http://localhost:8080/api/pickuparea/getAll",
        apiConfig
      );
      setPickupAreas(response.data);
    } catch (error) {
      alert("Không thể thêm điểm đón");
    }
  };

  // Lọc điểm đón dựa trên tìm kiếm
  const filteredPickupAreas = pickupAreas.filter(
    (area) =>
      area.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      area.number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic phân trang
  const totalPages = Math.ceil(filteredPickupAreas.length / itemsPerPage);
  const paginatedAreas = filteredPickupAreas.slice(
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
            onClick={() => setOpenCityModal(true)}
            className="mr-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Thêm thành phố
          </button>
          <button
            onClick={() => {
              setOpenPickupModal(true);
              fetchCities();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Thêm điểm đón
          </button>
        </div>
      </div>

      {/* Bảng điểm đón */}
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/4 p-3 text-left">ID</th>
              <th className="w-1/4 p-3 text-left">Thành phố</th>
              <th className="w-2/4 p-3 text-left">Địa chỉ khởi hành</th>
            </tr>
          </thead>
          <tbody>
            {paginatedAreas.map((area) => (
              <tr key={area.id} className="border-t">
                <td className="p-3">{area.id}</td>
                <td className="p-3">{area.city.name}</td>
                <td className="p-3">{area.number}</td>
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

      {/* Modal thêm thành phố */}
      {openCityModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-6">Thêm thành phố mới</h2>
            <input
              type="text"
              placeholder="Tên thành phố"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Mã thành phố"
              value={cityCode}
              onChange={(e) => setCityCode(e.target.value)}
              className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setOpenCityModal(false)}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={handleAddCity}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal thêm điểm đón */}
      {openPickupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-6">Thêm điểm đón mới</h2>
            <select
              value={selectedCityId}
              onChange={(e) => setSelectedCityId(e.target.value)}
              className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Chọn thành phố</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Địa chỉ khởi hành"
              value={pickupNumber}
              onChange={(e) => setPickupNumber(e.target.value)}
              className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setOpenPickupModal(false)}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={handleAddPickupArea}
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

export default PickupArea;
