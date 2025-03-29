import React from 'react'

const ReceiptPage = () => {
  return (
      <div className="w-full px-4 sm:px-0">
        <div className="flex items-center justify-start py-2 bg-orange-500 w-full">
          <div className="flex w-full sm:w-auto items-center gap-8 overflow-x-auto px-4">
            <div className='cursor-pointer whitespace-nowrap text-[15px] font-semibold'>
              <img src="/src/assets/images/BusLines.svg" alt="" className='w-32 h-auto inline-block '/>
            </div>
            <div className='cursor-pointer whitespace-nowrap text-[15px] font-normal'>
              <img src="/src/assets/images/ReceiptImage/search.svg" alt="" className='w-5 h-5 inline-block'/>
              <span className=''>Tra cứu hoá đơn</span>
            </div>
            <div className='cursor-pointer whitespace-nowrap text-[15px] font-normal'>
              <img src="/src/assets/images/ReceiptImage/receipt-text.svg" alt="" className='w-5 h-5 inline-block'/>
              <span className=''>Xác thực hoá đơn</span>
            </div>
          </div>
        </div>
        <div className='px-4 py-10 ml-125 mr-125 sm:px-0'>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Xác Thực Hóa Đơn</h2>
            <form action="/upload" method="POST" encType="multipart/form-data" className="space-y-4">
              <div>
                <div>
                  <input type="file" id="invoiceFile" name="invoiceFile" accept=".xml" className="hidden"
                         onChange={(e) => {
                           const fileName = e.target.files[0]?.name || "Chọn file XML";
                           document.getElementById("fileLabel").innerText = fileName;
                         }}/>
                  <div
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 cursor-pointer text-gray-500"
                      onClick={() => document.getElementById("invoiceFile").click()}
                      id="fileLabel">
                    Chọn file XML
                  </div>
                </div>
              </div>
              <div>
                <input className="mt-1 p-2 w-full border border-gray-300 rounded-md cursor-pointer"
                       placeholder='Nhập mã xác thực'/>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-gray-600">Xác
                Thực
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default ReceiptPage