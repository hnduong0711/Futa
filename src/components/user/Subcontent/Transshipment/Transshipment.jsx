import React from "react";

const Transshipment = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 max-h-[400px] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Đón/Trả Tận Nơi</h1>

      <section>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Thời gian nhận khách: Trước 4 tiếng.</li>
          <li>
            Thời gian xe đón: Chuẩn bị trước 2 - 3 tiếng, do mật độ giao thông
            trong thành phố và sẽ kết hợp đón nhiều điểm khác nhau nên thời gian
            đón cụ thể tài xế sẽ liên hệ hẹn giờ.
          </li>
          <li>
            Hẻm nhỏ xe không quay đầu được: Xe trung chuyển sẽ đón Khách đầu
            hẻm/đầu đường.
          </li>
          <li>
            Khu vực có biển cấm dừng đỗ xe không đón được: Xe trung chuyển sẽ
            đón tại vị trí gần nhất có thể.
          </li>
          <li>
            Hành lý: Hành lý nhỏ gọn dưới 20kg, không vận chuyển kèm động vật,
            thú cưng, không mang đồ có mùi, đồ chảy nước trên xe.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Transshipment;
