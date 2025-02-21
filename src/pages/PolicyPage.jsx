import React from 'react'
import { Group, Group2, Store } from '../assets'

const PolicyPage = () => {
  return (
    <div className='flex flex-col px-50 py-8 space-y-2'>
        <span className='text-futa-primary text-4xl text-center font-bold'>FUTA BUS LINES</span>
        <span className='text-3xl text-center font-semibold'>ĐIỀU KHOẢN ĐẶT VÉ TRỰC TUYẾN</span>
        <span className='uppercase font-semibold text-xl'>I. ĐIỀU KHOẢN VÀ QUY ĐỊNH CHUNG</span>
        <span className='font-semibold text-[18px]'>Điều 1. Giải thích từ ngữ và từ viết tắt</span>
        <span>1. “Biểu phí”: là các loại phí thuế theo quy định của Hãng vận tải và Nhà chức trách;</span>
        <span>2. “Bến xe ô tô khách”: là công trình thuộc kết cấu hạ tầng giao thông đường bộ thực hiện chức năng phục vụ xe ô tô đón, trả hành khách và các dịch vụ hỗ trợ vận tải hành khách;</span>
        <span>3.  “Chúng tôi”: là Công Ty Cổ Phần Xe Khách Phương Trang FUTA Bus Lines;</span>
        <span>4. “Điểm đón/trả”: là điểm khởi hành và điểm đến theo lịch trong hành trình của khách hàng;</span>
        <span>5. “Điều kiện bất khả kháng”: là sự kiện xảy ra mang tính khách quan và nằm ngoài tầm kiểm soát của các bên bao gồm, nhưng không giới hạn đến động đất, bão, lũ lụt, lốc, sóng thần, lở đất, hỏa hoạn, chiến tranh hoặc có nguy cơ xảy ra chiến tranh, bạo động, nổi loạn, đình công… và các thảm họa khác chưa lường hết được, sự thay đổi chính sách hoặc ngăn cấm của cơ quan có thẩm quyền của Việt Nam;</span>
        <span>6. “Điều kiện vận chuyển”: là các yêu cầu, nội dung của FUTA thông báo đến hành khách liên quan đến các dịch vụ vận chuyển, bao gồm các thông tin được thể hiện trên vé/phiếu xác nhận hành trình và/hoặc trên website, ứng dụng và/hoặc trong điều khoản sử dụng đã được phê duyệt và/hoặc các hình thức công bố khác;</span>
        <span>7. “Hành khách”: là bất kỳ cá nhân nào sử dụng dịch vụ của FUTA;</span>
        <span>8. “Hành lý”: là những vật phẩm, đồ dùng tư trang và tài sản cá nhân của hành khách mang theo, sử dụng trong chuyến đi của mình, trừ khi được quy định khác đi;</span>
        <span>9. “Hợp đồng vận chuyển”: là các thỏa thuận của Hãng vận chuyển và hành khách trong việc cung cấp các dịch vụ theo nhu cầu của hành khách được thể hiện bằng vé hoặc hình thức khác có giá trị tương đương với vé;</span>
        <span>10. “Hóa đơn điện tử”: hóa đơn có mã hoặc không có mã của cơ quan thuế được thể hiện ở dạng dữ liệu điện tử do FUTA cung cấp dịch vụ, lập bằng phương tiện điện tử để ghi nhận thông tin, cung cấp dịch vụ theo quy định của pháp luật về kế toán, pháp luật về thuế;</span>
        <span>11. “Mã tra cứu”: là mã số bao gồm 9 ký tự được hiển thị trong thông tin mua vé,  dùng cho việc tra cứu hóa đơn điện tử sau khi khách hàng thanh toán thành công;</span>
        <span>12. “Mã đặt vé”: là các thông tin chi tiết của Hành khách đã được nhập vào hệ thống đặt giữ chỗ của Chúng tôi thông qua website/hoặc ứng dụng FUTA, Phòng vé, Đại lý, Tổng đài;</span>
        <span>13. “Ngày”: có nghĩa là các ngày dương lịch, bao gồm bảy (07) ngày trong tuần; với điều kiện là khi dùng trong việc gửi thông báo thì ngày gửi thông báo đi không được tính và khi dùng cho mục đích xác định;</span>
        <span>14.  “Thông tin cá nhân”: Hành khách chấp nhận rằng thông tin cá nhân của hành khách được chuyển cho FUTA vì mục đích sử dụng dịch vụ do FUTA cung cấp. Vì mục đích trên, hành khách đồng ý cho phép FUTA lưu trữ và sử dụng các thông tin cá nhân và chuyển tải các thông tin đó tới hãng vận chuyển, các đại diện ủy quyền phát hành vé, cơ quan nhà nước có thẩm quyền, hoặc các nhà cung cấp dịch vụ liên quan khác;</span>
        <span>15. “Thẻ lên xe (vé)”: là bằng chứng xác nhận hợp đồng vận chuyển hành khách và FUTA Bus Lines. Có giá trị đối với hành khách có tên và hành trình được ghi rõ trong vé. Vé có thể được chuyển, hủy theo quy định của FUTA Bus Lines.</span>
        <span>16. “ZNS”: là dịch vụ gửi thông báo chăm sóc khách hàng trên Zalo.</span>
        <span>17. Đề mục hoặc tiêu đề của mỗi điều của Điều lệ vận chuyển này chỉ được sử dụng cho mục đích thuận tiện tra cứu và không được sử dụng để giải thích nội dung của điều khoản đó.</span>
        <span className='font-semibold text-[18px]'>Điều 2. Quy định đặt vé trực tuyến</span>
        <span>1. Phạm vi áp dụng: Chương trình thanh toán online được áp dụng cho các chuyến xe nhất định của FUTA Bus Lines. Thành viên của FUTA Bus Lines cũng như khách vãng lai thực hiện được hình thức thanh toán này. Việc đăng ký tham gia Thành viên FUTA Bus Lines là hoàn toàn miễn phí.</span>
        <span>2. Đặt chỗ</span>
        <span>a{")"} Quý khách kiểm tra cẩn thận các thông tin vé trước khi tiến hành xác nhận đặt vé và thanh toán. Bằng việc thanh toán qua website này, Quý khách chấp nhận giờ khởi hành, vị trí ghế ngồi v.v mà Quý khách đã đặt. Quý khách đồng ý rằng, trong những trường hợp có sự thay đổi về chuyến đi hoặc bất khả kháng, chúng tôi có quyền hoàn trả lại bất kỳ vé nào từ việc mua bán qua website này hoặc thực hiện việc chuyển vé cho Quý khách qua chuyến khác theo yêu cầu của Quý khách trong trường hợp chúng tôi còn chỗ;</span>
        <span>b{")"} Đặt chỗ chỉ được xác nhận sau khi việc thanh toán tiền vé đã hoàn tất đồng thời FUTA cung cấp cho Hành khách Mã đặt vé xác định tên Hành khách, hành trình, giờ khởi hành, số ghế, giá vé;</span>
        <span>c{")"} Chúng tôi sẽ không chịu trách nhiệm về bất kỳ tổn thất nào mà Hành khách có thể phải chịu từ việc đặt chỗ  thông qua bất kỳ tổ chức/cá nhân nào không phải là Chúng tôi hoặc Bên thứ ba được ủy quyền của Chúng tôi.</span>
        <span>3. Xác nhận thanh toán: Sau khi hoàn thành việc thanh toán vé trực tuyến, Quý khách sẽ nhận được thư xác nhận thông tin chi tiết vé đã đặt thông qua địa chỉ thư điện tử (email) mà Quý khách đã cung cấp. Đồng thời, chúng tôi cũng sẽ gửi tin nhắn (SMS) hoặc ZNS qua Zalo thông báo mã giao dịch tới số điện thoại Quý khách đăng ký.</span>
        <span className='font-semibold '>Lưu ý:</span>
        <span>a{")"} Chúng tôi không chịu trách nhiệm trong trường hợp Quý khách nhập sai địa chỉ email, số điện thoại và thông tin cá nhân khác dẫn đến không nhận được thư xác nhận. Vì vậy Quý khách vui lòng kiểm tra lại chính xác các thông tin trước khi thực hiện thanh toán. Với email, SMS và ZNS chỉ có tính chất xác nhận thông tin vé sau khi Quý khách đã đặt vé thành công;</span>
        <span>b{")"} Chúng tôi đề nghị Quý khách đọc kỹ các thông tin về chuyến đi, giờ khởi hành và chỗ ngồi v.v. trước khi hoàn tất việc xác nhận tất cả các thông tin về vé;</span>
        <span>c{")"} Email xác nhận thông tin đặt vé có thể đi vào hộp thư rác (spam mail) của Quý khách, vì vậy hãy kiểm tra trước khi liên lạc với chúng tôi;</span>
        <span>d{")"} Sau 30 phút kể từ khi Quý khách thanh toán thành công mà vẫn chưa nhận được bất kỳ xác nhận nào (qua email hoặc SMS/ ZNS), Quý khách vui lòng liên hệ chúng tôi qua tổng đài 1900 6067 để được hỗ trợ. Nếu Quý khách không liên hệ lại coi như FUTA Bus Lines đã hoàn thành nghĩa vụ với Quý khách.</span>
        <span>4. Bảo đảm an toàn giao dịch</span>
        <span>a{")"} Quản lý thông tin nhà cung cấp dịch vụ: FUTA Bus Lines (hoặc bên thứ ba - nhà cung cấp cổng thanh toán điện tử, hoặc/và các bên ký kết khác) sẽ sử dụng các công nghệ đặc biệt để nhận biết các hoạt động giả mạo trên trang mạng như: sử dụng thẻ tín dụng giả v.v. Sự chấp nhận hợp tác của Quý khách cùng với nỗ lực của FUTA Bus Lines là rất cần thiết. Quý khách chấp nhận rằng FUTA Bus Lines có thể chấm dứt quyền truy cập và sử dụng trang mạng của FUTA Bus Lines nếu Quý khách hoặc người khác hành động nhân danh Quý khách vì lý do nào đó nằm trong diện nghi vấn có gian lận hoặc vi phạm các điều khoản này;</span>
        <span>b{")"} Kiểm soát giao dịch và thông tin phản hồi khách hàng: FUTA Bus Lines sẽ hết sức cố gắng sử dụng mọi biện pháp và tuân theo mọi cách thức có thể để giữ an toàn cho tất cả các thông tin cá nhân của Quý khách, và chúng tôi cũng sẽ thường xuyên cập nhật những thông tin chính xác nhất. Website này có những công nghệ an ninh đảm bảo việc bảo vệ các thông tin bị thất lạc, lạm dụng hoặc thay đổi. Tất cả các giao dịch và thông tin về thẻ được sử dụng đều được đảm bảo an toàn cho các giao dịch kinh tế ngày nay. Mặc dù vậy, không phải tất cả các dữ liệu truyền qua Internet đều có thể đảm bảo 100%, vì thế chúng tôi không thể đưa ra một sự đảm bảo tuyệt đối rằng mọi thông tin Quý khách cung cấp đều được bảo vệ tất cả mọi lúc.</span>
        <span>5. Thông tin cá nhân</span>
        <span>a{")"} Thông tin cá nhân của Quý khách mà chúng tôi có được trong quá trình giao dịch chỉ dùng vào các mục đích sau:</span>
        <span>- Hỗ trợ và giải đáp các thắc mắc của Quý khách;</span>
        <span>- Cập nhật các thông tin mới nhất về các chương trình, dịch vụ v.v. của FUTA Bus Lines đến Quý khách.</span>
        <span>b{")"} Chúng tôi thu thập và sử dụng thông tin cá nhân của Quý khách phù hợp với mục đích đã nêu bên trên và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật”. Chúng tôi cam kết chỉ sử dụng cho mục đích và phạm vi đã nêu và không tiết lộ cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý bằng văn bản của Quý khách;</span>
        <span>c{")"} Xin lưu ý chúng tôi được quyền cung cấp thông tin cá nhân của Quý khách trong trường hợp khi có yêu cầu từ các cơ quan Nhà nước có thẩm quyền.</span>
        <span>6. Chính sách hoàn/hủy/đổi vé</span>
        <span>a{")"} Quy định hoàn trả tiền mua vé Online do lỗi giao dịch</span>
        <span>- Các trường hợp hoàn trả tiền mua vé online cho khách do lỗi giao dịch:</span>
        <span>- Khách hàng mua vé online giao dịch không thành công (lỗi giao dịch) chưa có Mã đặt vé (code) nhưng đã bị trừ tiền;</span>
        <span>- Hiện nay, có một số Thẻ ATM của khách hàng (Thẻ ATM cũ được làm từ 3-4 năm trước) chỉ thực hiện được hình thức chuyển khoản không có chức năng thanh toán trực tuyến nên khi khách hàng thực hiện giao dịch chuyển khoản vào cuối tuần hoặc vào ngày Lễ, Tết, hệ thống ngân hàng không xác nhận tiền trong tài khoản của FUTA Bus Lines nên khách hàng phải thanh toán trực tiếp tại quầy vé (Khách hàng vừa bị trừ tiền trong tài khoản vừa phải ra quầy vé thanh toán tiền mặt lấy vé).</span>
        <span>b{")"} Thời gian hoàn trả tiền cho khách hàng</span>
        <span>- Đối với Bộ phận Tổng đài: Thời gian hoàn trả tiền tới tài khoản khách hàng là từ 03 ngày đến 05 ngày làm việc kể từ khi Ban Tài chính – Kế toán nhận chứng từ thanh toán;</span>
        <span>- Đối với các quầy vé: Giao dịch trực tiếp với khách hàng và hoàn trả ngay thời điểm giao dịch.</span>
        <span>- Đối với hoàn trả tiền mua vé qua App: Thời gian theo chính sách của từng nhà phát triển App</span>
        <span>c{")"} Quy định thay đổi hoặc hủy vé</span>
        <span>- Chỉ được chuyển đổi vé 1 lần duy nhất</span>
        <span>- Chi phí hủy vé từ 10% – 30% giá vé tùy thuộc thời gian hủy vé so với giờ khởi hành ghi trên vé và số lượng vé cá nhân/tập thể áp dụng theo các quy định hiện hành.</span>
        <span>- Quý khách khi có nhu cầu muốn thay đổi hoặc hủy vé đã thanh toán, cần liên hệ với Trung tâm tổng đài 1900 6067 hoặc quầy vé chậm nhất trước 24h so với giờ xe khởi hành được ghi trên vé, trên email hoặc tin nhắn để được hướng dẫn thêm.</span>
        <span>7. Kênh bán vé</span>
        <span>a{")"} FUTA Bus Lines khuyến cáo Quý khách mua vé lựa chọn một trong các phương thức mua vé bao gồm mua trực tiếp tại website, app, phòng vé chính thức hoặc mua vé qua Tổng đài 1900 6067 để đảm bảo không mua phải vé giả, vé bị nâng giá v.v.;</span>
        <span>b{")"} Nếu phát hiện ra Quý khách gian lận, vi phạm điều khoản sử dụng, có hành vi đầu cơ, mua đi bán lại, bán vé chợ đen. FUTA Bus Lines có quyền từ chối cung cấp dịch vụ và không giải quyết các vấn đề phát sinh nếu Quý khách mua vé từ các kênh không thuộc hệ thống bán vé của FUTA Bus Lines.</span>
        <span>8. Trung chuyển: Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ số điện thoại 1900 6067 trước khi đặt vé. Chúng tôi sẽ không đón/trung chuyển tại những địa điểm xe trung chuyển không thể đến được.</span>
        <span className='font-semibold text-[18px]'>Điều 3: Quy định vận chuyển</span>
        <span>1. Trẻ em dưới 6 tuổi và phụ nữ có thai</span>
        <span>a{")"} Trẻ em dưới 6 tuổi, cao từ 1.3m trở xuống, cân nặng dưới 30kg thì không phải mua vé.</span>
        <span>b{")"} Phụ nữ có thai cần đảm bảo sức khoẻ trong suốt quá trình di chuyển.</span>
        <span>2. Hành lý</span>
        <span>a{")"} Tổng trọng lượng hành lý không vượt quá 20kg;</span>
        <span>b{")"} Đối với hành lý quá khổ, cồng kềnh vui lòng liên hệ Tổng đài 1900 6067</span>
        <span className='uppercase font-semibold text-xl'>II. CHÍNH SÁCH BẢO MẬT</span>
        <span className='font-semibold text-[18px]'>Điều 1. Quy định chung</span>
        <span>1. Nhằm mang lại trải nghiệm tốt nhất cho người dùng trên website của FUTA Bus Lines, thông tin nhận dạng cá nhân hoặc dữ liệu cá nhân của quý khách hàng sẽ được thu thập, sử dụng, tiết lộ, xử lý trong khuôn khổ bảo vệ người dùng;</span>
        <span>2. Sau khi đọc Chính sách bảo mật này, quý khách hàng tự quyết định việc chia sẻ dữ liệu cá nhân với chúng tôi. Dữ liệu cá nhân ở đây đề cập đến mọi thông tin liên quan đến một cá nhân có thể định danh/ nhận dạng được. Khi nhấp chọn "đồng ý", quý khách hàng thừa nhận rằng quý khách hàng đã đọc, đồng ý và chấp thuận cho chúng tôi thu thập, sử dụng và xử lý Dữ liệu cá nhân theo Chính sách bảo mật này và/hoặc các Điều khoản sử dụng. Đồng thời, quý khách hàng cũng thừa nhận rằng toàn bộ Dữ liệu cá nhân mà quý khách hàng đã cung cấp hoặc sẽ cung cấp là dữ liệu chính chủ, đúng và chính xác.</span>
        <span>3.  Tùy từng thời điểm FUTA Bus Lines có thể sửa đổi Chính sách bảo mật này để phản ánh các thay đổi về luật pháp và quy định, thông lệ sử dụng của FUTA Bus Lines, các tính năng Hệ thống và/hoặc các tiến bộ công nghệ. Chúng tôi khuyến khích khách hàng thường xuyên xem lại Chính sách Bảo mật thông tin cá nhân trên FUTA. Cập nhật thông tin liên tục có thể đảm bảo bạn biết và thực hiện tốt quản lý cá nhân.</span>
        <span className='font-semibold text-[18px]'>Điều 1. Quy định chung</span>
        <span>1. Thông tin thu thập: Khi được sự đồng ý của quý khách hàng, chúng tôi có thể thu thập Dữ liệu cá nhân của quý khách hàng để cung cấp dịch vụ của chúng tôi cho quý khách hàng khi sử dụng Hệ thống dữ liệu FUTA. Dữ liệu cá nhân bao gồm những thông tin được trình bày như sau:</span>
        <span>a{")"} Thông tin cá nhân cơ bản: khi quý khách hàng đang sử dụng Hệ thống của chúng tôi, chúng tôi có thể yêu cầu quý khách hàng tạo một tài khoản để tiến hành đặt chỗ. Dữ liệu cá nhân được thu thập sẽ bao gồm, nhưng không giới hạn tên của quý khách hàng, thông tin nhận dạng người dùng và thông tin đăng nhập của FUTA ID, Địa chỉ thư điện tử (email), số điện thoại, địa chỉ và phương thức thanh toán;</span>
        <span>b{")"} Thông tin cá nhân cụ thể: chúng tôi có thể thu thập Dữ liệu cá nhân của quý khách hàng dựa trên quá trình quý khách hàng sử dụng Hệ thống của chúng tôi, ví dụ: chi tiết về quyền thành viên thường xuyên cũng như những đánh giá của quý khách hàng. Chúng tôi cũng có thể thu thập một số thông tin nhất định từ quý khách hàng khi quý khách hàng đang sử dụng Hệ thống của chúng tôi, chẳng hạn như vị trí địa lý, địa chỉ IP, tùy chọn tìm kiếm cũng như các dữ liệu liên quan đến việc sử dụng Internet chung khác;</span>
        <span>2. Mục đích sử dụng thông tin: Chúng tôi sẽ nhận thông tin dữ liệu cá nhân khi khách hàng cài đặt và sử dụng. Khi được sự đồng ý của quý khách hàng, Chúng tôi có thể sử dụng thông tin của quý khách hàng được thu thập thông qua Hệ thống cho các mục đích sau:</span>
        <span>a{")"} Đăng ký sử dụng và/hoặc truy cập hệ thống;</span>
        <span>b{")"} Quản lý, vận hành, quản trị và/hoặc truy cập hệ thống;</span>
        <span>c{")"} Liên hệ với quý khách hàng về các vấn đề liên quan đến việc quý khách hàng sử dụng và/hoặc truy cập vào Hệ thống và quản lý các truy vấn và/hoặc yêu cầu do quý khách hàng gửi qua Hệ thống;</span>
        <span>3. Chia sẻ Dữ liệu cá nhân: Tùy thuộc vào từng trường hợp cụ thể phải cung cấp thông tin cho những người hoặc các tổ chức có thể được tiếp cận, FUTA Bus Lines có thể tiết lộ Dữ liệu cá nhân của quý khách hàng với các điều kiện sau:</span>
        <span>a{")"} Cung cấp thông tin khi có sự chấp thuận: Chúng tôi chỉ chia sẻ Dữ liệu cá nhân của quý khách hàng với Bên thứ ba khi Chúng tôi nhận được sự chấp thuận của quý khách hàng cho phép Chúng tôi làm như vậy. Chúng tôi sẽ cần sự chấp thuận của quý khách hàng để chia sẻ bất kỳ Dữ liệu cá nhân nhạy cảm nào, theo yêu cầu của luật pháp và quy định hiện hành. Khi nhấp chọn nút "Đồng ý", quý khách hàng đã thiết lập một hành động khẳng định rõ ràng và một thỏa thuận tự nguyện, cụ thể, đã hiểu rõ và không mơ hồ về việc xử lý Dữ liệu cá nhân. Điều này có thể bao gồm cả việc chia sẻ Dữ liệu cá nhân đã thu thập cho Bên thứ ba;</span>
        <span>b{")"} Cung cấp thông tin vì lý do pháp lý: Chúng tôi có thể có toàn quyền quyết định về việc chia sẻ Dữ liệu cá nhân của quý khách hàng với Bên thứ ba nếu chúng tôi cho rằng việc chia sẻ dữ liệu là cần thiết</span>
        <span>Thông tin liên hệ của FUTA Bus Lines: Nếu quý khách hàng có bất kỳ câu hỏi hoặc yêu cầu nào liên quan đến Chính sách Bảo mật này, vui lòng liên hệ với Chúng tôi qua: hotro@futabus.vn hoặc gọi đến số điện thoại 1900 6067.</span>
        <div className='flex flex-col space-y-8 pt-8'>
            <span className='text-futa-primary text-4xl text-center font-bold uppercase'>FUTA - Chất lượng là Danh dự</span>
            <div className='grid grid-cols-3 '>
                <div className='flex'>
                    <img src={Group}  className="size-12" alt="" />
                    <div className='flex flex-col items-start pl-8'>
                        <span className='text-futa-primary text-4xl text-center font-bold'>Hơn 200M</span>
                        <span className='text-[14px]'>
                            <div className='text-futa-heading'>Hơn 200 triệu lượt khách</div>
                            <div className=''>Phương Trang phục vụ hơn 200 triệu lượt khách/bình quân 1 năm trên toàn quốc</div>
                        </span>
                    </div>
                </div>
                <div className='flex'>
                    <img src={Group2} className="size-12"  alt="" />
                    <div className='flex flex-col items-start pl-8'>
                        <span className='text-futa-primary text-4xl text-center font-bold'>Hơn 350</span>
                        <span className='text-[14px]'>
                            <div className='text-futa-heading'>Hơn 350 phòng vé, bưu cục</div>
                            <div className=''>Phương Trang có hơn 350 phòng vé, trạm trung chuyển, bến xe... trên toàn hệ thống</div>
                        </span>
                    </div>
                </div>
                <div className='flex'>
                    <img src={Store}  className="size-12" alt="" />
                    <div className='flex flex-col items-start pl-8'>
                        <span className='text-futa-primary text-4xl text-center font-bold'>Hơn 1,000</span>
                        <span className='text-[14px]'>
                            <div className='text-futa-heading'>Hơn 1,000 chuyến mỗi ngày</div>
                            <div className=''>Phương Trang phục vụ hơn 1000 chuyến xe đường dài và liên tỉnh mỗi ngày</div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PolicyPage