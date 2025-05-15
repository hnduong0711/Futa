import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

const TripInfo = () => {
  // Lấy token từ localStorage
  const token = localStorage.getItem('token');

  // State cho tuyến đường
  const [trips, setTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // State cho modal thêm tuyến
  const [openModal, setOpenModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [departureCityId, setDepartureCityId] = useState('');
  const [arrivalCityId, setArrivalCityId] = useState('');
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

  // Lấy danh sách tuyến đường
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/trip-info/getAll', apiConfig);
        setTrips(response.data);
      } catch (error) {
        alert('Không thể tải danh sách tuyến đường');
      }
    };
    fetchTrips();
  }, []);

  // Lấy danh sách thành phố
  const fetchCities = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/city/getAll', apiConfig);
      setCities(response.data);
    } catch (error) {
      alert('Không thể tải danh sách thành phố');
    }
  };

  // Xử lý thêm tuyến đường
  const handleAddTrip = async () => {
    if (!departureCityId || !arrivalCityId) {
      alert('Vui lòng chọn cả thành phố đi và thành phố đến');
      return;
    }
    try {
      await axios.post(
        'http://localhost:8080/api/trip-info/add',
        {
          departureCityId,
          arrivalCityId,
          status: 'OPEN',
        },
        apiConfig
      );
      setOpenModal(false);
      setDepartureCityId('');
      setArrivalCityId('');
      // Làm mới danh sách tuyến đường
      const response = await axios.get('http://localhost:8080/api/trip-info/getAll', apiConfig);
      setTrips(response.data);
    } catch (error) {
      alert('Không thể thêm tuyến đường');
    }
  };

  // Lọc tuyến đường dựa trên tìm kiếm
  const filteredTrips = trips.filter(
    (trip) =>
      trip.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.departureCity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.arrivalCity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic phân trang
  const totalPages = Math.ceil(filteredTrips.length / itemsPerPage);
  const paginatedTrips = filteredTrips.slice(
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
            onClick={() => {
              setOpenModal(true);
              fetchCities();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Thêm tuyến đường
          </button>
        </div>
      </div>

      {/* Bảng tuyến đường */}
      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/3 p-3 text-left">ID</th>
              <th className="w-1/3 p-3 text-left">Thành phố đi</th>
              <th className="w-1/3 p-3 text-left">Thành phố đến</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTrips.map((trip) => (
              <tr key={trip.id} className="border-t">
                <td className="p-3">{trip.id}</td>
                <td className="p-3">{trip.departureCity.name}</td>
                <td className="p-3">{trip.arrivalCity.name}</td>
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

      {/* Modal thêm tuyến đường */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-6">Thêm tuyến đường mới</h2>
            <select
              value={departureCityId}
              onChange={(e) => {
                setDepartureCityId(e.target.value);
                setArrivalCityId(''); // Reset điểm đến khi thay đổi điểm đi
              }}
              className="w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Chọn thành phố đi</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            <select
              value={arrivalCityId}
              onChange={(e) => setArrivalCityId(e.target.value)}
              disabled={!departureCityId}
              className={`w-full p-2 mb-6 border border-gray-300 rounded-lg focus:outline-none ${
                departureCityId ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-100 cursor-not-allowed'
              }`}
            >
              <option value="">Chọn thành phố đến</option>
              {cities
                .filter((city) => city.id !== departureCityId)
                .map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
            </select>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setOpenModal(false);
                  setDepartureCityId('');
                  setArrivalCityId('');
                }}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={handleAddTrip}
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

export default TripInfo;