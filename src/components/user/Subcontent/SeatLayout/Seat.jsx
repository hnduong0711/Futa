import React from "react";

const Seat = ({isBooked, isSelected, isVirtual, onClick, seatNumber}) => {
  const seatStatus = (isBooked, isSelected, isVirtual) => {
    if (isBooked && (isSelected || !isSelected) && !isVirtual) {
      return "bg-disable-seat text-[#979ca3]";
    } else if (!isBooked && !isSelected && !isVirtual) {
      return "bg-active-seat text-futa-priamry";
    } else if (!isBooked && isSelected && !isVirtual) {
      return "bg-selecting-seat text-futa-primary";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`w-full p-3 text-xs font-bold bg-no-repeat bg-center
        ${seatStatus(isBooked, isSelected, isVirtual)}
      `}
      disabled={isBooked || isVirtual}
    >
      {seatNumber}
    </button>
  );
};

export default Seat;
