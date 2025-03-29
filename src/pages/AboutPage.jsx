import React from 'react'

const AboutPage = () => {
  return (
      <div className='w-full px-4'>
        <div className="ml-50 mr-50 px-4 py-10 xl:px-0">
          <div className="flex flex-col text-base">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-orange-600">PHƯƠNG TRANG</h1>
              <h3 className="text-xl font-semibold">“Chất lượng là danh dự”</h3>
            </div>
            <p className="mt-4 text-justify">
              Tập đoàn Phương Trang – FUTA Group được thành lập năm 2001. Với hoạt động kinh doanh chính
              trong lĩnh vực mua bán xe ô tô, vận tải hành khách, bất động sản và kinh doanh dịch vụ.
              Phương Trang dần trở thành cái tên quen thuộc đồng hành cùng người Việt trên mọi lĩnh vực.
            </p>
            <p className="mt-4 text-justify">
              Trải qua hơn 24 năm hình thành và phát triển đặt khách hàng là trọng tâm, chúng tôi tự hào
              trở thành doanh nghiệp vận tải nòng cốt đóng góp tích cực vào sự phát triển chung của ngành
              vận tải nói riêng và nền kinh tế đất nước nói chung. Luôn cải tiến mang đến chất lượng dịch
              vụ tối ưu nhất dành cho khách hàng, Công ty Phương Trang được ghi nhận qua nhiều giải thưởng danh giá...
            </p>
            <div className="mx-auto mt-8 flex w-28 cursor-pointer items-center justify-center gap-2 text-lg text-gray-500">
              Xem thêm
              <img src="/src/assets/images/AboutPage/arrow_right.svg" alt="" className="rotate-90 w-4 h-4"/>
            </div>
            {/* TẦM NHÌN VÀ SỨ MỆNH */}
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row">
              <div className="aspect-[3/2] w-full sm:flex-1">
                <img
                    src="https://cdn.futabus.vn/futa-busline-web-cms-prod/Artboard_3_3x_fb31ff2c98/Artboard_3_3x_fb31ff2c98.png"
                    alt="Tầm nhìn" className="rounded-lg w-full"/>
              </div>
              <div className="flex-1">
                <h2 className="mb-6 text-3xl font-semibold text-orange-600">TẦM NHÌN VÀ SỨ MỆNH</h2>
                <p className="text-lg font-semibold text-red-600">BÁO ĐÁP TỔ QUỐC VÌ MỘT VIỆT NAM HÙNG CƯỜNG.</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Tạo môi trường làm việc năng động, thân thiện.</li>
                  <li>Phát triển từ lòng tin của khách hàng.</li>
                  <li>Trở thành tập đoàn dẫn đầu chuyên nghiệp.</li>
                </ul>
              </div>
            </div>
            {/* GIÁ TRỊ CỐT LÕI */}
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row-reverse">
              <div className="aspect-[3/2] w-full sm:flex-1">
                <img
                    src="https://cdn.futabus.vn/futa-busline-web-cms-prod/Artboard_4_3x_44277bbc3b/Artboard_4_3x_44277bbc3b.png"
                    alt="Giá trị cốt lõi" className="rounded-lg w-full"/>
              </div>
              <div className="flex-1">
                <h2 className="mb-6 text-3xl font-semibold text-orange-600">GIÁ TRỊ CỐT LÕI</h2>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong className="text-red-600">Phương:</strong> Chính trực, phẩm chất đạo đức tốt đẹp.</li>
                  <li><strong className="text-red-600">Trang:</strong> Hướng tới sự thành công vượt bậc.</li>
                  <li>Luôn phát triển dựa trên giá trị đạo đức tốt đẹp nhất.</li>
                </ul>
              </div>
            </div>

            {/* TRIẾT LÝ */}
            <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row">
              <div className="aspect-[3/2] w-full sm:flex-1">
                <img
                    src="https://cdn.futabus.vn/futa-busline-web-cms-prod/Artboard_5_3x_cf15563d46/Artboard_5_3x_cf15563d46.png"
                    alt="Triết lý" className="rounded-lg w-full"/>
              </div>
              <div className="flex-1">
                <h2 className="mb-6 text-3xl font-semibold text-orange-600">TRIẾT LÝ</h2>
                <p>
                  Hội nhập và phát triển góp phần vào sự thịnh vượng của đất nước. Nguồn nhân lực chính là
                  nhân tố then chốt, là tài sản lớn nhất của Công ty Phương Trang, chú trọng tạo ra môi
                  trường làm việc hiện đại, năng động, thân thiện và trao cơ hội phát triển nghề nghiệp.
                </p>
              </div>
            </div>
            <div className="mt-12 border-b"></div>
          </div>
        </div>
      </div>
  )
}

export default AboutPage