import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

const Schedule = () => {
  const token = localStorage.getItem('token');

  const [schedules, setSchedules] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTripId, setEditTripId] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [tripInfos, setTripInfos] = useState([]);
  const [pickupAreas, setPickupAreas] = useState([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  const [selectedTripInfoId, setSelectedTripInfoId] = useState('');
  const [selectedPickupAreaId, setSelectedPickupAreaId] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [travelHours, setTravelHours] = useState('');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteTripId, setDeleteTripId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedCityId, setSelectedCityId] = useState('');

  const apiConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  // Hàm format thời gian giữ múi giờ +07:00
  const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/trip/getAll', apiConfig);
        console.log('Schedules response:', response.data);
        const schedulesData = Array.isArray(response.data) ? response.data : [];
        setSchedules(schedulesData);
      } catch (error) {
        console.error('Lỗi khi tải lịch trình:', error);
        alert('Không thể tải danh sách lịch trình');
      }
    };
    fetchSchedules();
  }, []);

  const fetchData = async () => {
    try {
      const [vehiclesRes, tripInfosRes, pickupAreasRes] = await Promise.all([
        axios.get('http://localhost:8080/api/transportation/getAll', apiConfig),
        axios.get('http://localhost:8080/api/trip-info/getAll', apiConfig),
        axios.get('http://localhost:8080/api/pickuparea/getAll', apiConfig),
      ]);
      setVehicles(vehiclesRes.data);
      setTripInfos(tripInfosRes.data);
      setPickupAreas(pickupAreasRes.data);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu:', error);
      alert('Không thể tải dữ liệu xe, tuyến đường hoặc trạm');
    }
  };

  const handleAddSchedule = async () => {
    if (!selectedVehicleId || !selectedTripInfoId || !selectedPickupAreaId || !departureTime || !travelHours) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    const departureDate = new Date(departureTime);
    const arrivalDate = new Date(departureDate.getTime() + travelHours * 60 * 60 * 1000);
    const createdAt = formatDateTime(new Date()); // Format createdAt

    try {
      await axios.post(
        'http://localhost:8080/api/trip/add',
        {
          tripInfoId: selectedTripInfoId,
          transportationId: selectedVehicleId,
          departureTime: formatDateTime(departureDate), // Giữ múi giờ +07:00
          arrivalTime: formatDateTime(arrivalDate),     // Giữ múi giờ +07:00
          pickupAreaId: selectedPickupAreaId,
          availableSeats: 36,
          status: 'SELLING',
          createdAt: createdAt,
        },
        apiConfig
      );
      setOpenModal(false);
      resetModal();
      const response = await axios.get('http://localhost:8080/api/trip/getAll', apiConfig);
      const schedulesData = Array.isArray(response.data) ? response.data : [];
      setSchedules(schedulesData);
    } catch (error) {
      console.error('Lỗi khi thêm lịch trình:', error);
      alert('Không thể thêm lịch trình');
    }
  };

  const handleEditSchedule = async () => {
    if (!selectedVehicleId || !selectedTripInfoId || !selectedPickupAreaId || !departureTime || !travelHours) {
      alert('Vui lòng điền đầy đủ thông tin');
      return;
    }

    const departureDate = new Date(departureTime);
    const arrivalDate = new Date(departureDate.getTime() + travelHours * 60 * 60 * 1000);
    const createdAt = formatDateTime(new Date());

    try {
      await axios.put(
        `http://localhost:8080/api/trip/update/${editTripId}`,
        {
          tripInfoId: selectedTripInfoId,
          transportationId: selectedVehicleId,
          departureTime: formatDateTime(departureDate), // Giữ múi giờ +07:00
          arrivalTime: formatDateTime(arrivalDate),     // Giữ múi giờ +07:00
          pickupAreaId: selectedPickupAreaId,
          availableSeats: 36,
          status: 'SELLING',
          createdAt: createdAt,
        },
        apiConfig
      );
      setOpenModal(false);
      resetModal();
      const response = await axios.get('http://localhost:8080/api/trip/getAll', apiConfig);
      const schedulesData = Array.isArray(response.data) ? response.data : [];
      setSchedules(schedulesData);
    } catch (error) {
      console.error('Lỗi khi cập nhật lịch trình:', error);
      alert('Không thể cập nhật lịch trình');
    }
  };

  const handleDeleteSchedule = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/trip/delete/${deleteTripId}`, apiConfig);
      setOpenDeleteModal(false);
      setDeleteTripId(null);
      const response = await axios.get('http://localhost:8080/api/trip/getAll', apiConfig);
      const schedulesData = Array.isArray(response.data) ? response.data : [];
      setSchedules(schedulesData);
    } catch (error) {
      console.error('Lỗi khi xóa lịch trình:', error);
      alert('Không thể xóa lịch trình');
    }
  };

  const resetModal = () => {
    setSelectedVehicleId('');
    setSelectedTripInfoId('');
    setSelectedPickupAreaId('');
    setDepartureTime('');
    setTravelHours('');
    setSelectedCityId('');
    setIsEditMode(false);
    setEditTripId(null);
  };

  const loadScheduleForEdit = async (tripId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/trip/get/${tripId}`, apiConfig);
      console.log('Trip response:', response.data);

      if (!response.data || !response.data.trip) {
        alert('Dữ liệu lịch trình không hợp lệ hoặc không tìm thấy');
        return;
      }

      const schedule = response.data.trip;

      if (!schedule.transportation || !schedule.tripInfo || !schedule.pickupArea) {
        console.error('Dữ liệu lịch trình thiếu các thuộc tính cần thiết:', schedule);
        alert('Dữ liệu lịch trình không đầy đủ');
        return;
      }

      setIsEditMode(true);
      setEditTripId(tripId);
      setSelectedVehicleId(schedule.transportation.id || '');
      setSelectedTripInfoId(schedule.tripInfo.id || '');
      setSelectedPickupAreaId(schedule.pickupArea.id || '');
      setDepartureTime(schedule.departureTime ? schedule.departureTime.slice(0, 16) : '');
      const departure = new Date(schedule.departureTime);
      const arrival = new Date(schedule.arrivalTime);
      const hours = isNaN(arrival - departure) ? '' : (arrival - departure) / (1000 * 60 * 60);
      setTravelHours(hours ? hours.toString() : '');
      setSelectedCityId(schedule.tripInfo.departureCity?.id || '');
      setOpenModal(true);
      fetchData();
    } catch (error) {
      console.error('Lỗi khi tải lịch trình:', error);
      alert('Không thể tải thông tin lịch trình');
    }
  };

  const filteredSchedules = schedules.filter(
    (schedule) =>
      schedule.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (schedule.transportation?.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${schedule.tripInfo?.departureCity?.name || ''} - ${schedule.tripInfo?.arrivalCity?.name || ''}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (schedule.departureTime || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (schedule.arrivalTime || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (schedule.pickupArea?.number || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (schedule.createdAt || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredSchedules.length / itemsPerPage);
  const paginatedSchedules = filteredSchedules.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const filteredPickupAreas = pickupAreas.filter(
    (area) => area.city.id === selectedCityId
  );

  return (
    <div className="p-6 w-full h-screen overflow-auto">
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
              fetchData();
              resetModal();
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Thêm lịch trình mới
          </button>
        </div>
      </div>

      <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="w-1/8 p-3 text-left">ID</th>
              <th className="w-1/8 p-3 text-left">Tên xe</th>
              <th className="w-1/8 p-3 text-left">Tuyến đường</th>
              <th className="w-1/8 p-3 text-left">Thời gian khởi hành</th>
              <th className="w-1/8 p-3 text-left">Thời gian đến</th>
              <th className="w-1/8 p-3 text-left">Trạm đón</th>
              <th className="w-1/8 p-3 text-left">Ngày tạo</th>
              <th className="w-1/8 p-3 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSchedules.map((schedule) => (
              <tr key={schedule.id} className="border-t">
                <td className="p-3">{schedule.id}</td>
                <td className="p-3">{schedule.transportation?.name || 'N/A'}</td>
                <td className="p-3">
                  {schedule.tripInfo?.departureCity?.name || 'N/A'} - {schedule.tripInfo?.arrivalCity?.name || 'N/A'}
                </td>
                <td className="p-3">{schedule.departureTime ? new Date(schedule.departureTime).toLocaleString('vi-VN') : 'N/A'}</td>
                <td className="p-3">{schedule.arrivalTime ? new Date(schedule.arrivalTime).toLocaleString('vi-VN') : 'N/A'}</td>
                <td className="p-3">{schedule.pickupArea?.number || 'N/A'}</td>
                <td className="p-3">{schedule.createdAt ? new Date(schedule.createdAt).toLocaleString('vi-VN') : 'N/A'}</td>
                <td className="p-3">
                  <button
                    onClick={() => loadScheduleForEdit(schedule.id)}
                    className="mr-2 text-blue-600 hover:text-blue-800"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => {
                      setOpenDeleteModal(true);
                      setDeleteTripId(schedule.id);
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-6">
              {isEditMode ? 'Sửa lịch trình' : 'Thêm lịch trình mới'}
            </h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Chọn xe</label>
              <select
                value={selectedVehicleId}
                onChange={(e) => setSelectedVehicleId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Chọn xe</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Chọn tuyến đường</label>
              <select
                value={selectedTripInfoId}
                onChange={(e) => {
                  setSelectedTripInfoId(e.target.value);
                  const selectedTrip = tripInfos.find((trip) => trip.id === e.target.value);
                  if (selectedTrip) {
                    setSelectedCityId(selectedTrip.departureCity.id);
                  } else {
                    setSelectedCityId('');
                  }
                  setSelectedPickupAreaId('');
                }}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Chọn tuyến đường</option>
                {tripInfos.map((trip) => (
                  <option key={trip.id} value={trip.id}>
                    {trip.departureCity.name} - {trip.arrivalCity.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Chọn trạm đón</label>
              <select
                value={selectedPickupAreaId}
                onChange={(e) => setSelectedPickupAreaId(e.target.value)}
                disabled={!selectedCityId}
                className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none ${
                  selectedCityId ? 'focus:ring-2 focus:ring-blue-500' : 'bg-gray-100 cursor-not-allowed'
                }`}
              >
                <option value="">Chọn trạm đón</option>
                {filteredPickupAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.city.name} - {area.number}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Thời gian đi</label>
              <input
                type="datetime-local"
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Số giờ đi</label>
              <input
                type="number"
                placeholder="Số giờ đi"
                value={travelHours}
                onChange={(e) => setTravelHours(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setOpenModal(false);
                  resetModal();
                }}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={isEditMode ? handleEditSchedule : handleAddSchedule}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}

      {openDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-6">Xác nhận xóa</h2>
            <p className="mb-6">Bạn có chắc chắn muốn xóa lịch trình này?</p>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setOpenDeleteModal(false);
                  setDeleteTripId(null);
                }}
                className="mr-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={handleDeleteSchedule}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;