import React, { useState } from "react";
import Seat from "../Seat/Seat";

const SeatLayout = ({ bookedSeats = [], selectedSeats = [], onSeatClick, title }) => {
  // Mặc định 36 ghế, 2 tầng, mỗi tầng 18 ghế (3 cột, 6 hàng)
  const seatsPerTier = 18;

  // Tạo danh sách ghế cho tầng A và B
  const generateSeatNumbers = (tier, count) => {
    const seats = [];
    for (let i = 1; i <= count; i++) {
      seats.push(`${tier}${i.toString().padStart(2, "0")}`);
    }
    return seats;
  };

  const lowerTierSeats = generateSeatNumbers("A", seatsPerTier);
  const upperTierSeats = generateSeatNumbers("B", seatsPerTier);

  // Render một tầng ghế
  const renderTier = (tierSeats, tierLabel) => (
    <div className="mb-6 flex flex-col items-center w-full">
      <h3 className="text-lg font-bold text-futa-primary mb-4">{tierLabel}</h3>
      <div className="grid grid-cols-3 gap-2 max-w-[240px]">
        {tierSeats.map((seatNumber, index) => (
          <div key={seatNumber} className="w-[60px] h-[40px]">
            <Seat
              isBooked={bookedSeats.includes(seatNumber)}
              isSelected={selectedSeats.includes(seatNumber)}
              isVirtual={false} // Không có ghế ảo vì luôn 36 ghế
              onClick={() => onSeatClick(seatNumber)}
              seatNumber={seatNumber}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 rounded-lg max-w-[600px] mx-auto">
      <h2 className="text-xl font-semibold text-futa-heading mb-4 text-center">{title}</h2>
      <div className="flex space-x-8">
        {renderTier(lowerTierSeats, "Tầng dưới (A)")}
        {renderTier(upperTierSeats, "Tầng trên (B)")}
      </div>
    </div>
  );
};

export default SeatLayout;