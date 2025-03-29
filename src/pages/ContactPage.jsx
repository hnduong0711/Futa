import React from 'react'

const ContactPage = () => {
    return (<div className='w-full'>
        <div className='flex flex-col gap-12 pb-12 pt-8 text-base text-black ml-50 mr-50 sm:flex-row'>
            <div className='flex flex-col sm:min-h-[450px] sm:min-w-[300px] sm:max-w-[413px]'>
                <div className='pl-4 text-lg font-bold uppercase sm:pl-0'>LIÊN HỆ VỚI CHÚNG TÔI</div>
                <div className="w-fit border-none">
                    <div className="flex items-center gap-2 cursor-pointer" role="button" tabIndex="0">
                        <img src="/src/assets/images/ContactImage/icon_form_droplist.svg" className='rotate-270' alt="arrow"/>
                        <span className="font-normal">FUTA BUS LINES</span>
                    </div>
                    <div className="mt-2 border-t border-gray-200">
                        <div className="p-2 flex flex-col gap-2 text-base leading-6">
                            <div className="text-lg font-medium text-orange-500">
                                CÔNG TY CỔ PHẦN XE KHÁCH PHƯƠNG TRANG - FUTA BUS LINES
                            </div>
                            <span className="text-gray-600">Địa chỉ:
                                <span className="text-black">Số 01 Tô Hiến Thành, Phường 3, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam</span>
                            </span>
                            <span
                                className="text-gray-600">
                                Website: <a className="text-blue-600 underline" href="https://futabus.vn/" target="_blank" rel="noreferrer">https://futabus.vn/</a>
                            </span>
                            <span className="text-gray-600">
                                Điện thoại:
                                <a className="text-black font-semibold" href="tel:02838386852">02838386852</a>
                            </span>
                            <span className="text-gray-600">
                                Fax:
                                <a className="text-black font-semibold" href="tel:02838386853">02838386853</a>
                            </span>
                            <span className="text-gray-600">
                                Email:
                                <a className="text-black font-semibold" href="mailto:hotro@futa.vn">hotro@futa.vn</a>
                            </span>
                            <span className="text-gray-600">
                                Hotline:
                                <a className="text-black font-semibold" href="tel:19006067">19006067</a>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-30 relative min-h-[300px] w-full flex-col sm:mt-0 sm:flex'>
                <div className='relative right-0 top-[-30px] z-40 min-h-[500px] w-full max-w-[825px] rounded-[10px] bg-[#F2F2F2] sm:absolute'>
                    <div className='flex h-20 items-center gap-4 rounded-t-[10px] bg-white p-8 text-xl font-semibold text-orange'>
                        <img src="/src/assets/images/ContactImage/mail_send.svg" alt=""/>
                        Gửi thông tin liên hệ đến chúng tôi
                    </div>
                    <form className="p-2 sm:p-6">
                        <div className="grid grid-cols-2 gap-x-6 pb-6">
                            <div className="flex flex-col pb-6">
                                <div className="relative">
                                    <select id="group"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
                                            disabled>
                                        <option selected>FUTA BUS LINES</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col pb-6">
                                <div className="relative">
                                    <input type="text" id="name" name="name" placeholder="Họ và tên"
                                           className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 peer"/>
                                    <button type="button"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 opacity-0 peer-placeholder-shown:opacity-0 peer-focus:opacity-100 transition">
                                        ✕
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="relative">
                                    <input type="email" id="email" placeholder="Email"
                                           className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 peer"/>
                                    <button type="button"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 opacity-0 peer-placeholder-shown:opacity-0 peer-focus:opacity-100 transition">
                                        ✕
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="relative">
                                    <input type="tel" id="phone" placeholder="Điện thoại"
                                           className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 peer"/>
                                    <button type="button"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 opacity-0 peer-placeholder-shown:opacity-0 peer-focus:opacity-100 transition">
                                        ✕
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="relative pb-6">
                            <input type="text" id="subject" placeholder="Nhập Tiêu đề"
                                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                            <button type="button"
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600">
                            </button>
                        </div>

                        <div className="relative">
                <textarea
                    id="content"
                    placeholder="Nhập ghi chú"
                    className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            <button
                                type="button"
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                                onClick="document.getElementById('content').value=''">
                            </button>
                        </div>

                    </form>
                    <div className="mt-auto w-full pb-6 text-center">
                        <button type="button"
                                className="w-40 rounded-[10px] bg-[#F15A24] text-white py-2 hover:bg-[#d94e1f] transition cursor-pointer">
                            Gửi
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}

export default ContactPage