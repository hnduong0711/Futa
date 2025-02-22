const QnA1 = [
  {
    id: 1,
    question:
      "Khách hàng có thể biết được khi chuyến xe đã mua có sự thay đổi (giờ xe khởi hành/..v..v) ?",
    answer:
      "Công ty sẽ chủ động liên hệ khách hàng để thông tin/thông báo về sự việc thay đổi chuyến đi của khách cũng như hướng khắc phục, giải quyết thỏa đáng trong điều kiện nhanh nhất có thể.",
  },
  {
    id: 2,
    question: "Chính sách mua vé dành cho trẻ em như thế nào?",
    answer: (
      <>
        {" "}
        <div>Theo chính sách công ty thì: </div>
        <ul className="list-disc pl-5">
          <li>
            Trẻ em từ 6 tuối trở lên: Vé tương đương với giá vé người lớn thông
            thường.
          </li>
          <li>
            Trẻ em dưới 6 tuổi, chiều cao dưới 1.3m, cân nặng dưới 30kg: Có thể
            đi kèm với người lớn ( 1 người lớn chỉ được kèm 1 trẻ).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    question: "Mua vé trực tiếp tại các văn phòng vé Phương Trang.",
    answer: (
      <ul className="list-disc pl-5">
        <li>Mua vé qua hình thức webiste/app FUTA/app liên kết với Công ty</li>
        <li>
          Đăng ký vé giữ chỗ qua Trung Tâm Tổng Đài -Thanh toán trực tuyến bằng
          hình thức QR code
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    question:
      "Sẽ có bất kỳ phụ phí nào ngoài giá vé được hiển thị trên website?",
    answer: (
      <p>
        Không có bất kỳ phụ phí nào ngoài tổng số tiền (giá vé) được hiển thị
        trên website.
        <br />
        Trừ trường hợp hành lý đi kèm với khách vượt quá mức quy định (quá 20kg)
        thì bắt buộc khách hàng phải thêm phí hàng hóa theo kèm.
      </p>
    ),
  },
  {
    id: 5,
    question:
      "Giá vé được hiển thị trên website của các chuyến đi đã bao gồm những phí gì?",
    answer: (
      <p>
        Giá vé xe của Công ty đã bao gồm thuế VAT, phí bảo hiểm du lịch và không
        phát sinh thêm phụ phí.
      </p>
    ),
  },
  {
    id: 6,
    question:
      "Tôi có thể mua vé chiều đi lẫn chiều về ngay trên website không?",
    answer: (
      <p>
        Anh/Chị có thể chủ động thao tác mua vé đi và khứ hồi ngay trên website.
      </p>
    ),
  },
  {
    id: 7,
    question:
      "Trường hợp tôi mua vé online, tài khoản cá nhân đã thông báo giao dịch thành công nhưng tôi vẫn chưa nhận được thông tin xác nhận, tôi phải làm gì và liên hệ với bộ phận nào?",
    answer: (
      <p>
        Trong trường hợp trên, Anh/Chị vui lòng liên hệ ngay TTTĐ 19006067 gặp
        Bộ Phận Online hoặc nhắn tin trực tiếp với nhân viên CSKH ngay trên
        website cung cấp đầy đủ thông tin để được hỗ trợ.
      </p>
    ),
  },
  {
    id: 8,
    question: "Tôi đặt vé qua TTTĐ, có thể thanh toán vé bằng hình thức nào?",
    answer: (
      <ul className="list-disc pl-5">
        <li>Thanh toán trực tiếp bằng tiền mặt tại văn phòng vé.</li>
        <li>
          Thanh toán trực tuyến qua QR code được gửi tự động về ZALO cá nhân.
          (Các hình thức như: Thanh toán thẻ VISA/MASTER card, thẻ ATM nội địa
          (có đăng ký thanh toán trực tuyến và internet banking), ví điện tử
          (Momo, Zalo, Shopee, VN PAY), ví FUTA PAY.)
        </li>
      </ul>
    ),
  },
  {
    id: 9,
    question:
      "Tôi đã mua vé thành công, làm sao để tôi có thể kiểm tra lại thông tin chuyến đi đã mua?",
    answer: (
      <ul className="list-disc pl-5">
        <li>
          Trường hợp đặt vé online trên Website, vui lòng kiểm tra tin nhắn xác
          nhận được gửi về số điện thoại đặt vé hoặc qua email.
        </li>
        <li>
          Trường hợp đặt vé online trên App FUTA, vui lòng kiểm tra mục lịch sử
          mua vé trên App hoặc qua email.
        </li>
        <li>
          Trường hợp đặt vé online trên App liên kết với Công ty, vui lòng kiểm
          tra thông tin được hiển thị ngay trên app.
        </li>
        <li>
          Trường hợp đặt vé qua tổng đài, vui lòng kiểm tra tin nhắn xác nhận từ
          Zalo của Phương Trang Futa Buslines.
        </li>
      </ul>
    ),
  },
  {
    id: 10,
    question:
      "Ngoài hình thức mua vé qua website thì tôi có thể chọn vị trí chỗ ngồi qua các hình thức mua vé khác không?",
    answer: (
      <ul className="list-disc pl-5">
        <li>
          Anh/Chị có thể yêu cầu vị trí chỗ ngồi theo nhu cầu cá nhân khi đăng
          ký vé giữ chỗ qua hotline 19006067.
        </li>
        <li>
          Anh/Chị có thể yêu cầu vị trí chỗ ngồi theo nhu cầu cá nhân khi mua vé
          trực tiếp tại các văn phòng vé.
        </li>
      </ul>
    ),
  },
];

const QnA2 = [
  {
    id: 1,
    question:
      "Khi sử dụng dịch vụ nạp tiền vào Ví Futa không sử dụng nữa, nhưng tôi không được rút tiền về tài khoản được ạ?",
    answer: (
      <p>
        Phương Trang đang hỗ trợ ví FUTAPay với Ngân Hàng SHB để dễ dàng thanh
        toán cũng như khi không cần sử dụng giao dịch nữa Anh/Chị có thể rút
        tiền về tài khoản (với điều kiện nguồn nạp tiền trước đó xuất phát từ
        thẻ/tài khoản SHB của Anh/Chị).
        <br />
        Trường hợp Anh/Chị không sử dụng ngân hàng SHB, rất tiếc hiện tại Công
        ty chưa hỗ trợ hết các ngân hàng khác tại thời điểm hiện tại, số dư trên
        ví chỉ sử dụng để mua vé trên ứng dụng FUTA. Tuy nhiên, Chúng tôi xin
        ghi nhận thông tin của Anh/Chị và sẽ sớm phản hồi khi có sự thay đổi.
        <br />
        Chi tiết vui lòng liên hệ Tổng đài 19006067 gặp trực tiếp BP Online để
        tư vấn thêm.
      </p>
    ),
  },
  {
    id: 2,
    question: "Tôi đặt vé trên App FUTA có được hủy và hoàn tiền không?",
    answer: (
      <>
        <p>Nếu Anh/Chị đặt vé online trên ứng dụng FUTA và chưa đổi ra vé giấy, nếu
        có nhu cầu hủy vé vui lòng truy cập App, chọn mục "Lịch sử" (được thể
        hiện ở phía dưới màn hình, cùng vị trí ngang với mục "Trang chủ") chọn
        vé cần hủy {"=>"} bấm hủy.</p>
        <br />
        <strong>Lưu ý:</strong>
        <ul className="list-disc pl-5">
          <li>
            Hủy vé trên ứng dụng FUTA sẽ hủy đồng loạt tất cả các vé trên cùng 1
            mã vé, không thể tách riêng.
          </li>
          <li>
            Từ 1-3 vé hủy trước ít nhất 24 tiếng giờ khởi hành, phí hủy 10% (vé
            ngày thường).
          </li>
          <li>
            Tiền hủy vé sẽ được hoàn lại tài khoản thanh toán ban đầu (7-15 ngày
            tùy vào thời gian làm việc của Ngân hàng).
          </li>
          <li>KHÔNG HỖ TRỢ NHỮNG VÉ ĐÃ CÓ SỰ THAY ĐỔI TRƯỚC ĐÓ.</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    question: "APP FUTA được dùng với mục đích gì?",
    answer: (
      <p>
        APP FUTA hỗ trợ khách hàng mua vé xe mọi lúc mọi nơi, nhiều phương thức
        thanh toán tiện lợi. Người dùng có thể quản lý lịch sử mua vé, kiểm tra
        lịch trình xe chạy, vị trí giường, giá vé, và cập nhật thông tin khuyến
        mãi.
      </p>
    ),
  },
];

const QnA3 = [
  {
    id: 1,
    question: "Dịch vụ trung chuyển được áp dụng tại khu vực nào?",
    answer: (
      <p>
        Dịch vụ trung chuyển của Công ty hiện đang áp dụng tại các khu vực tỉnh
        thành có văn phòng vé Phương Trang (các văn phòng vé có hỗ trợ dịch vụ
        trên).
        <br />
        Anh/Chị có thể liên hệ trực tiếp TTTĐ 19006067 để được tư vấn thêm.
      </p>
    ),
  },
  {
    id: 2,
    question:
      "Trong trường hợp gần đến giờ xe xuất bến nhưng tôi vẫn chưa được hỗ trợ đón, tôi phải làm gì?",
    answer: (
      <p>
        Vì đây là dịch vụ trung chuyển công cộng kết hợp với các hãng xe khác
        tại Bến xe nên Anh/Chị sẽ phải chuẩn bị hành lý trước 3-4 tiếng so với
        giờ xe khởi hành.
        <br />
        Trong khoảng thời gian này, tài xế trung chuyển sẽ liên hệ thông báo
        thời gian đón cụ thể.
      </p>
    ),
  },
  {
    id: 3,
    question:
      "Tôi phải liên hệ theo thời gian như thế nào để được hỗ trợ cập nhật điểm đón/điểm trung chuyển?",
    answer: (
      <p>
        <strong>Thời gian cập nhật điểm đón:</strong>
        <br />
        <strong>Tại TPHCM</strong> (chỉ áp dụng với các tuyến xe đi Đà Lạt, Nha
        Trang, Phan Thiết/Mũi Né, Phan Rang, Buôn Mê Thuột, miền Trung):
        <ul className="list-disc pl-5">
          <li>
            Các tuyến xe xuất bến tại Bến xe Miền Tây/ Bến xe An Sương: Đăng ký
            trung chuyển ít nhất trước 04 tiếng giờ xe khởi hành, phạm vi trung
            chuyển 5-7,5 km.
          </li>
          <li>
            Các tuyến xe xuất bến tại Bến xe Miền Đông mới: Đăng ký trung chuyển
            ít nhất trước 24 tiếng giờ xe khởi hành, phạm vi trung chuyển tùy
            thuộc địa điểm (trừ khu vực Nhà Bè-Cần Giờ).
          </li>
        </ul>
        <strong>
          Tại các văn phòng tỉnh thành có hỗ trợ dịch vụ trung chuyển:
        </strong>
        <ul className="list-disc pl-5">
          <li>
            Đăng ký trung chuyển ít nhất trước 04 tiếng giờ xe khởi hành, phạm
            vi trung chuyển 8-10 km.
          </li>
        </ul>
        Vui lòng liên hệ trực tiếp 19006067 (TTTĐ) hoặc Văn phòng vé trực thuộc
        để được hỗ trợ thông tin.
      </p>
    ),
  },
  {
    id: 4,
    question: "Dịch vụ này có mất phí không?",
    answer: (
      <p>
        Dịch vụ trung chuyển là dịch vụ miễn phí đi kèm dành cho khách hàng.
      </p>
    ),
  },
  {
    id: 5,
    question: "Thông tin về dịch vụ trung chuyển tận nơi tại TPHCM là gì?",
    answer: (
      <p>
        Hiện tại Phương Trang có dịch vụ trung chuyển tận nơi tại TPHCM cho các
        tuyến đi Đà Lạt, Nha Trang, Phan Thiết/Mũi Né, Phan Rang, Buôn Mê Thuột,
        Tây Ninh, các tỉnh miền Trung.
        <br />
        Điều kiện đăng ký trung chuyển trước ít nhất 04 tiếng giờ xe khởi hành,
        phạm vi trung chuyển 5-7,5 km.
        <br />
        <strong>Riêng các tuyến xuất bến tại Bến xe Miền Đông mới:</strong> Được
        trung chuyển các quận nội ô TPHCM, đăng ký trung chuyển trước ít nhất 24
        tiếng giờ xe khởi hành.
        <br />
        Chi tiết xin vui lòng liên hệ tổng đài trung chuyển 19006918 để được hỗ
        trợ thêm.
      </p>
    ),
  },
];

export { QnA1, QnA2, QnA3 };
