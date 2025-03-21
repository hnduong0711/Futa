import React from 'react'

const NewsPage = () => {
  return (
      <div className='news-page w-full bg-[#F7F7F7] px-4 sm:px-0'>
        <div className='flex  items-center justify-center py-2'>
          <div className='hide-scroll-bar flex w-[60%] items-center gap-8 overflow-x-auto sm:w-auto'>
            <div className='cursor-pointer whitespace-nowrap text-[15px] font-semibold text-orange-600'>
              <div className='flex items-center'>
                <img className='mr-2' src="/src/assets/images/shape.png" alt=""/>
                Tin tức tổng hợp
              </div>
            </div>
            <div className='cursor-pointer whitespace-nowrap text-[15px] font-semibold text-orange'>
              <div className='flex items-center'>FUTA Bus Lines</div>
            </div>
            <div className='cursor-pointer whitespace-nowrap text-[15px] font-semibold text-orange'>
              <div className='flex items-center'>FUTA City Bus</div>
            </div>
            <div className='cursor-pointer whitespace-nowrap text-[15px] font-semibold text-orange'>
              <div className='flex items-center'>
                Khuyến mãi
              </div>
            </div>
            <div className='cursor-pointer whitespace-nowrap text-[15px] font-semibold text-orange'>
              <div className='flex items-center'>
                Giải thưởng
              </div>
            </div>
            <div className='cursor-pointer whitespace-nowrap text-[15px] font-semibold text-orange'>
              <div className='flex items-center'>
                Trạm dừng
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 py-10 ml-50 mr-50 sm:px-0'>
          <div className='flex w-full items-center gap-6 pb-6'>
            <div className='text-green text-[28px] font-semibold'>Tin tức mới nhất</div>
            <div className='mt-1 h-[2px] flex-auto bg-[#00613D]'></div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div className='flex cursor-pointer flex-col col-span-4 row-span-2 sm:col-span-2'>
              <div className='relative rounded-lg aspect-[3/1.7]'>
                <img src="/src/assets/images/vpTB-cnDN.png" alt=""
                     className='transition-all duration-200 relative rounded-lg aspect-[3/1.7]'/>
              </div>
              <div className='line_clamp font-medium text-[#111111] hover:opacity-90 mt-5 text-xl leading-6'></div>
              <div className='line_clamp text-gray mt-2 text-[15px]'>FUTA ĐỒNG HÀNH CÙNG SHB - X3 QUÀ TẶNG</div>
              <span className='text-gray mt-1 text-[13px]'>14:35 26/07/2023</span>
            </div>
            <div className='flex cursor-pointer flex-col col-span-2 sm:col-span-1'>
              <div className='relative rounded-lg aspect-[7/4]'>
                <img src="/src/assets/images/bxMT-LV.png" alt=""
                     className='class="transition-all duration-200 relative rounded-lg aspect-[7/4]"'/>
              </div>
              <div
                  className='line_clamp font-medium text-[#111111] hover:opacity-90 mt-3 text-[15px] leading-[18px]'>CÔNG
                TY PHƯƠNG TRANG KHAI TRƯƠNG VĂN PHÒNG TRẢNG BOM - ĐỒNG NAI
              </div>
              <span className='text-gray mt-1 text-[13px]'>13:44 13/03/2025</span>
            </div>
            <div className='flex cursor-pointer flex-col col-span-2 sm:col-span-1'>
              <div className='relative rounded-lg aspect-[7/4]'>
                <img src="/src/assets/images/vpMA.png" alt=""
                     className='class="transition-all duration-200 relative rounded-lg aspect-[7/4]"'/>
              </div>
              <div className='line_clamp font-medium text-[#111111] hover:opacity-90 mt-3 text-[15px] leading-[18px]'>
                  CÔNG TY PHƯƠNG TRANG TƯNG BỪNG KHAI TRƯƠNG TUYẾN BẾN XE LAI VUNG - BẾN XE MIỀN TÂY
              </div>
              <span className='text-gray mt-1 text-[13px]'>11:08 13/03/2025</span>
            </div>
            <div className='flex cursor-pointer flex-col col-span-2 sm:col-span-1'>
              <div className='relative rounded-lg aspect-[7/4]'>
                <img src="/src/assets/images/vpMA.png" alt=""
                     className='class="transition-all duration-200 relative rounded-lg aspect-[7/4]"'/>
              </div>
              <div className='line_clamp font-medium text-[#111111] hover:opacity-90 mt-3 text-[15px] leading-[18px]'>
                CÔNG TY PHƯƠNG TRANG KHAI TRƯƠNG VĂN PHÒNG MỸ AN (ĐỒNG THÁP)
              </div>
              <span className='text-gray mt-1 text-[13px]'>15:39 12/03/2025</span>
            </div>
            <div className='flex cursor-pointer flex-col col-span-2 sm:col-span-1'>
              <div className='relative rounded-lg aspect-[7/4]'>
                <img src="/src/assets/images/bxVT-AS.png" alt=""
                     className='class="transition-all duration-200 relative rounded-lg aspect-[7/4]"'/>
              </div>
              <div className='line_clamp font-medium text-[#111111] hover:opacity-90 mt-3 text-[15px] leading-[18px]'>
                DI CHUYỂN THUẬN TIỆN VỚI TUYẾN MỚI BẾN XE VĨNH THẠNH (BÌNH ĐỊNH) ↔ BẾN XE AN SƯƠNG (TP.HCM) CÙNG CÔNG TY PHƯƠNG TRANG
              </div>
              <span className='text-gray mt-1 text-[13px]'>13:44 13/03/2025</span>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-4 mt-6 flex h-56 flex-col justify-center rounded-lg p-3 text-center text-white sm:col-span-1 bg-gradient-to-l from-orange-500 to-orange-300'>
              <div className='mb-3 text-2xl font-semibold'>Tiêu điểm</div>
              <div className='text-[15px] font-medium'>FUTA City Bus</div>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-4 mt-10 flex items-center gap-6 pb-6'>
              <div className='text-green text-[28px] font-semibold'>Tất cả tin tức</div>
              <div className='mt-1 h-[2px] flex-auto bg-[#00613D]'></div>
            </div>
            <div className='col-span-4 flex cursor-pointer flex-col gap-4 sm:col-span-2 sm:flex-row'>
              <div className='relative min-h-[150px] rounded-lg'>
                <img src="/src/assets/images/vpTB-cnDN.png" alt="" className='transition-all duration-200 relative aspect-[7/4] min-h-[150px] rounded-lg'/>
              </div>
              <div className='min-w-[50%]'>
                <div className='line-clamp-none text-[15px] font-medium leading-[22px] text-[#111111] hover:opacity-80 '>FUTA ĐỒNG HÀNH CÙNG SHB - X3 QUÀ TẶNG</div>
                <div className='line-clamp-3 text-gray my-1 text-[15px]'></div>
                <span className='text-gray flex-1 text-[13px]'>13:44 13/03/2025</span>
              </div>
            </div>
            <div className='col-span-4 flex cursor-pointer flex-col gap-4 sm:col-span-2 sm:flex-row'>
              <div className='relative aspect-[7/4] min-h-[150px] rounded-lg'>
                <img src="/src/assets/images/vpTB-cnDN.png" alt=""
                     className='transition-all duration-200 relative aspect-[7/4] min-h-[150px] rounded-lg'/>
              </div>
              <div className='min-w-[50%]'>
                <div className='line-clamp-none text-[15px] font-medium leading-[22px] text-[#111111] hover:opacity-80 '>CÔNG
                  TY PHƯƠNG TRANG KHAI TRƯƠNG VĂN PHÒNG TRẢNG BOM - ĐỒNG NAI
                </div>
                <div className='line-clamp-3 text-gray my-1 text-[15px]'>
                  📣Từ ngày 17/03/2025, Công ty Phương Trang chính thức khai trương Văn phòng Trảng Bom nhằm đáp ứng nhu
                  cầu di chuyển ngày càng tăng cao của Quý Khách tại khu vực Đồng Nai.
                </div>
                <span className='text-gray flex-1 text-[13px]'>13:44 13/03/2025</span>
              </div>
            </div>
            <div className='col-span-4 flex cursor-pointer flex-col gap-4 sm:col-span-2 sm:flex-row'>
              <div className='relative aspect-[7/4] min-h-[150px] rounded-lg'>
                <img src="/src/assets/images/vpTB-cnDN.png" alt=""
                     className='transition-all duration-200 relative aspect-[7/4] min-h-[150px] rounded-lg'/>
              </div>
              <div className='min-w-[50%]'>
                <div className='line-clamp-none text-[15px] font-medium leading-[22px] text-[#111111] hover:opacity-80 '>CÔNG
                  TY PHƯƠNG TRANG KHAI TRƯƠNG VĂN PHÒNG TRẢNG BOM - ĐỒNG NAI
                </div>
                <div className='line-clamp-3 text-gray my-1 text-[15px]'>
                  📣Từ ngày 17/03/2025, Công ty Phương Trang chính thức khai trương Văn phòng Trảng Bom nhằm đáp ứng nhu
                  cầu di chuyển ngày càng tăng cao của Quý Khách tại khu vực Đồng Nai.
                </div>
                <span className='text-gray flex-1 text-[13px]'>13:44 13/03/2025</span>
              </div>
            </div>
            <div className='col-span-4 flex cursor-pointer flex-col gap-4 sm:col-span-2 sm:flex-row'>
              <div className='relative aspect-[7/4] min-h-[150px] rounded-lg'>
                <img src="/src/assets/images/vpTB-cnDN.png" alt=""
                     className='transition-all duration-200 relative aspect-[7/4] min-h-[150px] rounded-lg'/>
              </div>
              <div className='min-w-[50%]'>
                <div className='line-clamp-none text-[15px] font-medium leading-[22px] text-[#111111] hover:opacity-80 '>CÔNG
                  TY PHƯƠNG TRANG KHAI TRƯƠNG VĂN PHÒNG TRẢNG BOM - ĐỒNG NAI
                </div>
                <div className='line-clamp-3 text-gray my-1 text-[15px]'>
                  📣Từ ngày 17/03/2025, Công ty Phương Trang chính thức khai trương Văn phòng Trảng Bom nhằm đáp ứng nhu
                  cầu di chuyển ngày càng tăng cao của Quý Khách tại khu vực Đồng Nai.
                </div>
                <span className='text-gray flex-1 text-[13px]'>13:44 13/03/2025</span>
              </div>
            </div>
          </div>
          <div className='mt-4 flex justify-center'>
            <div className='col-span-12 py-5 text-center'>
              <ul className='mb-0 flex' role='navigation' aria-label='Pagination'>
                <li className='previous disabled'>
                  <a href="" className='py-1 px-2 w-10 text-center border border-[#C8CCD3] text-[13px] mx-1 rounded-[4px] text-black ' tabIndex='-1' role='button' aria-disabled='true' aria-label='Previous page' rel='prev'></a>
                  <span role='img' aria-label='caret-left' className='anticon anticon-caret-left align-[0px]'>

                  </span>
                </li>
                <li className='selected'>
                  <a rel="canonical" role="button"
                     className="py-1 mx-1 px-2 w-10 text-center border border-[#C8CCD3] text-[13px] rounded-[4px] text-black bg-slate-100 text-color-orange"
                     tabIndex="-1" aria-label="Page 1 is your current page" aria-current="page">1</a>
                </li>
                <li>
                  <a role="button"
                     className="py-1 mx-1 px-2 w-10 text-center border border-[#C8CCD3] text-[13px] rounded-[4px] text-black"
                     tabIndex="0" aria-label="Page 2" rel="next">2</a>
                </li>
                <li>
                  <a role="button"
                     className="py-1 mx-1 px-2 w-10 text-center border border-[#C8CCD3] text-[13px] rounded-[4px] text-black"
                     tabIndex="0" aria-label="Page 3">3</a>
                </li>
                <li>
                  <a role="button"
                     className="py-1 mx-1 px-2 w-10 text-center border border-[#C8CCD3] text-[13px] rounded-[4px] text-black"
                     tabIndex="0" aria-label="Page 4">4</a>
                </li>
                <li>
                  <a role="button"
                     className="py-1 mx-1 px-2 w-10 text-center border border-[#C8CCD3] text-[13px] rounded-[4px] text-black"
                     tabIndex="0" aria-label="Page 5">5</a>
                </li>
                <li>
                  <a className="py-1 px-2 w-10 text-center border border-[#C8CCD3] text-[13px] rounded-[4px] text-black"
                     role="button" tabIndex="0" aria-label="Jump forward">...</a>
                </li>
                <li>
                  <a role="button"
                     className="py-1 mx-1 px-2 w-10 text-center border border-[#C8CCD3] text-[13px] rounded-[4px] text-black"
                     tabIndex="0" aria-label="Page 51">51</a>
                </li>
                <li>
                  <a role="button"
                     className="py-1 mx-1 px-2 w-10 text-center border border-[#C8CCD3] text-[13px] rounded-[4px] text-black"
                     tabIndex="0" aria-label="Page 52">52</a>
                </li>
                <li>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NewsPage