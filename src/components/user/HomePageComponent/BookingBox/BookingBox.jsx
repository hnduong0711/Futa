import { Search } from 'lucide-react';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SwitchLocation } from '../../../../assets';
import LocationPicker from '../../../shared/LocationPicker/LocationPicker';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { updateForm, toggleRoundTrip } from '../../../../store/slices/BookingSlice';
import { searchSchedules } from '../../../../store/slices/ScheduleSlice';

const BookingBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, loading: bookingLoading, error: bookingError } = useSelector((state) => state.booking);
  const { loading: scheduleLoading, error: scheduleError } = useSelector((state) => state.schedule);
  const { origin, destination, departureDate, returnDate, isRoundTrip } = form;

  const handleStartDateChange = (date) => {
    dispatch(updateForm({ departureDate: date ? date.format('YYYY-MM-DD') : null }));
  };

  const handleEndDateChange = (date) => {
    dispatch(updateForm({ returnDate: date ? date.format('YYYY-MM-DD') : null }));
  };

  const handleSearch = () => {
    if (!origin || !destination || !departureDate) {
      alert('Vui lòng điền đầy đủ điểm đi, điểm đến và ngày đi');
      return;
    }
    if (isRoundTrip && !returnDate) {
      alert('Vui lòng chọn ngày về cho chuyến khứ hồi');
      return;
    }
    dispatch(searchSchedules({ origin, destination, departureDate, returnDate, isRoundTrip })).then(
      (result) => {
        if (result.meta.requestStatus === 'fulfilled') {
          navigate('/search-results');
        }
      }
    );
  };

  return (
    <div className="bg-futa-primary-hover/10 rounded-2xl p-2">
      <div className="relative bg-white border border-futa-primary-hover rounded-2xl p-4 flex flex-col w-full space-y-2">
        {/* Option type trip */}
        <div className="flex justify-between w-full space-y-4">
          <div className="flex items-center space-x-6">
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                className="size-4 cursor-pointer"
                name="type"
                id="one-way"
                value="one-way"
                checked={isRoundTrip === false} // Rõ ràng giá trị
                onChange={() => dispatch(toggleRoundTrip())}
              />
              <span>Một chiều</span>
            </div>
            <div className="space-x-2 flex items-center">
              <input
                type="radio"
                className="size-4 cursor-pointer"
                name="type"
                id="round-trip"
                value="round-trip"
                checked={isRoundTrip === true} // Rõ ràng giá trị
                onChange={() => dispatch(toggleRoundTrip())}
              />
              <span>Khứ hồi</span>
            </div>
          </div>
          <NavLink to="huong-dan-dat-ve-tren-web" className="text-futa-primary">
            Hướng dẫn mua vé
          </NavLink>
        </div>
        {/* Info ticket booking */}
        <div className="flex items-center">
          <LocationPicker
            start={origin}
            end={destination}
            setStart={(value) => dispatch(updateForm({ origin: value }))}
            setEnd={(value) => dispatch(updateForm({ destination: value }))}
          />
          <div className="p-3 flex flex-col relative space-y-2">
            <span className="absolute top-[-25%] text-[14px]">Ngày đi</span>
            <DatePicker
              onChange={handleStartDateChange}
              value={departureDate ? dayjs(departureDate) : null}
              className="w-full max-w-xs h-[40px] border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              format="DD/MM/YYYY"
            />
          </div>
          {isRoundTrip && (
            <div className="p-3 flex flex-col relative space-y-2">
              <span className="absolute top-[-25%] text-[14px]">Ngày về</span>
              <DatePicker
                onChange={handleEndDateChange}
                value={returnDate ? dayjs(returnDate) : null}
                className="w-full max-w-xs h-[40px] border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                format="DD/MM/YYYY"
                disabledDate={(current) => current && current < dayjs(departureDate)} // Không cho chọn ngày trước departureDate
              />
            </div>
          )}
        </div>
        {/* Button booking */}
        <button
          onClick={handleSearch}
          className="bg-futa-primary rounded-2xl p-2 text-white text-center w-[20%] cursor-pointer mx-auto absolute left-1/2 translate-x-[-50%] top-[87%] hover:bg-futa-primary-hover transition-all duration-300"
          disabled={scheduleLoading || bookingLoading}
        >
          Tìm chuyến
        </button>
      </div>
      {(scheduleLoading || bookingLoading) && <p className="text-gray-500 mt-4">Đang tải...</p>}
      {(scheduleError || bookingError) && <p className="text-red-500 mt-4">Lỗi: {scheduleError || bookingError}</p>}
    </div>
  );
};

export default BookingBox;