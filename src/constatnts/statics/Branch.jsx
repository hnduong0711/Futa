const branches = [
  {
    location: "TP. Hồ Chí Minh",
    address: "80 Trần Hưng Đạo, P. Phạm Ngũ Lão, Quận 1",
    phone: "1900 6067",
  },
  {
    location: "TP. Hồ Chí Minh",
    address: "395-397 Kinh Dương Vương, P. An Lạc, Q. Bình Tân",
    phone: "1900 6067",
  },
  {
    location: "TP. Hồ Chí Minh",
    address: "272 Đề Thám, P. Phạm Ngũ Lão, Quận 1",
    phone: "1900 6067",
  },
  {
    location: "Hà Nội",
    address: "Số 1 Ngõ 72 Nguyễn Trãi, Q. Thanh Xuân",
    phone: "1900 6067",
  },
  {
    location: "Đà Nẵng",
    address: "Tôn Đức Thắng, P. Hòa Minh, Q. Liên Chiểu",
    phone: "1900 6067",
  },
  {
    location: "Đà Lạt",
    address: "01 Tô Hiến Thành, P. 3, TP. Đà Lạt, Lâm Đồng",
    phone: "1900 6067",
  },
  {
    location: "Nha Trang",
    address: "Bến Xe Phía Nam, Vĩnh Trung, TP. Nha Trang, Khánh Hòa",
    phone: "1900 6067",
  },
  {
    location: "Cần Thơ",
    address: "91A Nguyễn Văn Cừ, P. Cái Khế, Q. Ninh Kiều",
    phone: "1900 6067",
  },
  {
    location: "Bạc Liêu",
    address: "522 Trần Phú, P. 7, TP. Bạc Liêu",
    phone: "1900 6067",
  },
  {
    location: "Bảo Lộc",
    address: "280 Trần Phú, Lộc Sơn, TP. Bảo Lộc, Lâm Đồng",
    phone: "1900 6067",
  },
  {
    location: "Buôn Ma Thuột",
    address: "172 Lê Duẩn, P. Tân Thành, TP. Buôn Ma Thuột, Đắk Lắk",
    phone: "1900 6067",
  },
  {
    location: "Cam Ranh",
    address: "01 Lê Duẩn, P. Cam Lộc, TP. Cam Ranh, Khánh Hòa",
    phone: "1900 6067",
  },
  {
    location: "Châu Đốc",
    address: "Bến Xe Châu Đốc, TP. Châu Đốc, An Giang",
    phone: "1900 6067",
  },
  {
    location: "Gia Nghĩa",
    address: "27 Chu Văn An, P. Nghĩa Thành, TP. Gia Nghĩa, Đắk Nông",
    phone: "1900 6067",
  },
  {
    location: "Hà Tiên",
    address: "Cách Mạng Tháng Tám, P. Tô Châu, TP. Hà Tiên, Kiên Giang",
    phone: "1900 6067",
  },
  {
    location: "Mui Né",
    address: "Bến Xe Mui Né, TP. Phan Thiết, Bình Thuận",
    phone: "1900 6067",
  },
  {
    location: "Nam Định",
    address: "KM2 Điện Biên Phủ, TP. Nam Định",
    phone: "1900 6067",
  },
  {
    location: "Phan Thiết",
    address: "01 Từ Văn Tư, P. Phú Trinh, TP. Phan Thiết, Bình Thuận",
    phone: "1900 6067",
  },
  {
    location: "Quảng Ngãi",
    address: "26 Lê Thánh Tôn, P. Nghĩa Chánh Nam, TP. Quảng Ngãi",
    phone: "1900 6067",
  },
  {
    location: "Sa Đéc",
    address: "149/8 Khóm Hòa Khánh, TP. Sa Đéc, Đồng Tháp",
    phone: "1900 6067",
  },
  {
    location: "Bến Tre",
    address: "168C Đại Lộ Đồng Khởi, P. Phú Khương, TP. Bến Tre",
    phone: "1900 6067",
  },
  {
    location: "Cà Mau",
    address: "208 Lý Thường Kiệt, P. 6, TP. Cà Mau",
    phone: "1900 6067",
  },
  {
    location: "Đồng Hới",
    address: "Đường Lý Thường Kiệt, TP. Đồng Hới, Quảng Bình",
    phone: "1900 6067",
  },
  {
    location: "Huế",
    address: "Bến Xe Phía Nam, TP. Huế, Thừa Thiên Huế",
    phone: "1900 6067",
  },
  {
    location: "Long Xuyên",
    address: "Bến Xe Long Xuyên, TP. Long Xuyên, An Giang",
    phone: "1900 6067",
  },
  {
    location: "Phan Rang",
    address: "Bến Xe Phan Rang, TP. Phan Rang-Tháp Chàm, Ninh Thuận",
    phone: "1900 6067",
  },
  {
    location: "Quy Nhơn",
    address: "Bến Xe Quy Nhơn, TP. Quy Nhơn, Bình Định",
    phone: "1900 6067",
  },
  {
    location: "Rạch Giá",
    address: "260A Nguyễn Bỉnh Khiêm, TP. Rạch Giá, Kiên Giang",
    phone: "1900 6067",
  },
  {
    location: "Sóc Trăng",
    address: "23 Lê Duẩn, P. 3, TP. Sóc Trăng",
    phone: "1900 6067",
  },
  {
    location: "Tân An",
    address: "Bến Xe Tân An, TP. Tân An, Long An",
    phone: "1900 6067",
  },
  {
    location: "Thủ Dầu Một",
    address: "Bến Xe Thủ Dầu Một, TP. Thủ Dầu Một, Bình Dương",
    phone: "1900 6067",
  },
  {
    location: "Trà Vinh",
    address: "559 Quốc Lộ 54, P. 9, TP. Trà Vinh",
    phone: "1900 6067",
  },
  {
    location: "Tuy Hòa",
    address: "Bến Xe Phú Lâm, P. Phú Lâm, TP. Tuy Hòa, Phú Yên",
    phone: "1900 6067",
  },
  {
    location: "Vĩnh Long",
    address: "Bến Xe Vĩnh Long, P. 3, TP. Vĩnh Long",
    phone: "1900 6067",
  },
  {
    location: "Vũng Tàu",
    address: "192 Nam Kỳ Khởi Nghĩa, P. 3, TP. Vũng Tàu",
    phone: "1900 6067",
  },
  {
    location: "Bình Phước",
    address: "QL14, P. Tân Phú, TP. Đồng Xoài, Bình Phước",
    phone: "1900 6067",
  },
  {
    location: "Tây Ninh",
    address: "Bến Xe Tây Ninh, TP. Tây Ninh",
    phone: "1900 6067",
  },
  {
    location: "Hải Phòng",
    address: "Bến Xe Niệm Nghĩa, Q. Lê Chân, TP. Hải Phòng",
    phone: "1900 6067",
  },
  {
    location: "Thái Nguyên",
    address: "Bến Xe Thái Nguyên, TP. Thái Nguyên",
    phone: "1900 6067",
  },
  {
    location: "Kon Tum",
    address: "Bến Xe Kon Tum, TP. Kon Tum",
    phone: "1900 6067",
  },
  {
    location: "Pleiku",
    address: "Bến Xe Đức Long Gia Lai, TP. Pleiku, Gia Lai",
    phone: "1900 6067",
  },
  {
    location: "Biên Hòa",
    address: "Bến Xe Biên Hòa, TP. Biên Hòa, Đồng Nai",
    phone: "1900 6067",
  },
  {
    location: "Mỹ Tho",
    address: "Bến Xe Tiền Giang, TP. Mỹ Tho, Tiền Giang",
    phone: "1900 6067",
  },
  {
    location: "Vĩnh Nghiêm",
    address: "Bến Xe Vĩnh Nghiêm, Q. 7, TP. Hồ Chí Minh",
    phone: "1900 6067",
  },
  {
    location: "Ngã Bảy",
    address: "Bến Xe Ngã Bảy, TP. Ngã Bảy, Hậu Giang",
    phone: "1900 6067",
  },
  {
    location: "Cao Lãnh",
    address: "Bến Xe Cao Lãnh, TP. Cao Lãnh, Đồng Tháp",
    phone: "1900 6067",
  },
  {
    location: "Hồng Ngự",
    address: "Bến Xe Hồng Ngự, TX. Hồng Ngự, Đồng Tháp",
    phone: "1900 6067",
  },
  {
    location: "Ninh Hòa",
    address: "Bến Xe Ninh Hòa, TX. Ninh Hòa, Khánh Hòa",
    phone: "1900 6067",
  },
  {
    location: "Thốt Nốt",
    address: "Bến Xe Thốt Nốt, Q. Thốt Nốt, Cần Thơ",
    phone: "1900 6067",
  },
  {
    location: "Vị Thanh",
    address: "Bến Xe Vị Thanh, TP. Vị Thanh, Hậu Giang",
    phone: "1900 6067",
  },
];

export default branches;
