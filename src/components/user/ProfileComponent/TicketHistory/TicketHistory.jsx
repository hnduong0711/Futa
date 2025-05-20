import axios from 'axios';
import React, { useState, useEffect } from 'react';

const TicketHistory = () => {
  const ls = localStorage;
  const token = ls.getItem('token');
  const user = JSON.parse(ls.getItem('user') || '{}');
  const userId = user.id;
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/booking/getByUserId/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.data) {
          console.log('tickets:', response.data);
          
          setTickets(response.data);
        }
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, [userId, token]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-futa-heading text-2xl mb-6">Lịch sử mua vé</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Mã đặt chỗ</th>
              <th className="py-2 px-4 border-b text-left">Ngày đặt</th>
              <th className="py-2 px-4 border-b text-left">Tổng tiền</th>
              <th className="py-2 px-4 border-b text-left">Trạng thái</th>
              <th className="py-2 px-4 border-b text-left">Ghế</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{ticket.id}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(ticket.bookingDate).toLocaleString()}
                </td>
                <td className="py-2 px-4 border-b">
                  {ticket.totalAmount.toLocaleString('vi-VN')} VNĐ
                </td>
                <td className="py-2 px-4 border-b">Đã thanh toán</td>
                <td className="py-2 px-4 border-b">
                  {ticket.tripBookings.flatMap((tb) =>
                    tb.seatBookings.map((sb) => sb.seatId)
                  ).join(', ')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tickets.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Không có lịch sử đặt vé.</p>
      )}
    </div>
  );
};

export default TicketHistory;