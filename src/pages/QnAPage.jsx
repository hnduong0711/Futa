import React, { useState } from "react";
import { BannerQnA, qna1, qna2, qna3 } from "../assets";
import { Search, ArrowLeft } from "lucide-react";
import { QnA1, QnA2, QnA3 } from "../constatnts/statics/QnA";

const QnAPage = () => {
  // nội dung danh sách câu hỏi
  const [content, setContent] = useState(0);
  // câu trả lời dựa vào id của câu hỏi
  const [answer, setAnswer] = useState(null);
  // id của câu hỏi để làm hover
  const [question, setQuestion] = useState(null);
  // tìm kiếm câu hỏi
  const [query, setQuery] = useState("");
  // state ẩn hiện danh sách gợi ý
  const [showSuggestion, setShowSuggestion] = useState(false);

  const handleContent = (index) => {
    if (index === 0) {
      setAnswer(null);
      setQuestion(null);
    }
    setContent(index);
    window.scrollTo(0, 0);
  };

  const handleSearch = (query) => {
    const QnA = content === 1 ? QnA1 : content === 2 ? QnA2 : QnA3;
    if (!query) return [];
    return QnA.filter((item) =>
      item.question.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleAnswer = (id) => {
    const QnA = content === 1 ? QnA1 : content === 2 ? QnA2 : QnA3;
    const result = QnA.find((item) => item.id === id);
    if (result) {
      setQuestion(id);
      setAnswer(result);
    }
  };

  const handleSelect = (question) => {
    handleAnswer(question.id);
    setQuery(question.question);
    setShowSuggestion(false);
  };

  const filteredQnA = handleSearch(query);

  if (content === 0) {
    return (
      <div className="px-50 py-10">
        <div className="flex flex-col justify-center border border-slate-200 items-center rounded-lg space-y-8 px-6 py-8">
          <span className="uppercase text-futa-primary text-4xl font-semibold">
            LIÊN HỆ VỚI CHÚNG TÔI
          </span>
          <span className="text-2xl">
            Chúng tôi luôn sẵn sàng hỗ trợ, dù bạn ở bất cứ đâu!
          </span>
          <img src={BannerQnA} alt="" />
          <span className="text-futa-heading text-4xl font-semibold">
            Chủ đề phổ biến
          </span>
          <div className="grid grid-cols-3 gap-2">
            <div className="shadow-lg w-full h-[300px] rounded-lg flex flex-col justify-between px-8 py-12 space-y-5">
              <div className="flex items-center justify-evenly">
                <img src={qna1} alt="qna" />
                <span className="text-2xl font-semibold">FUTA BUS LINES</span>
              </div>
              <span className="text-center">
                Khách hàng dễ dàng tìm kiếm các thông tin bao gồm: giá vé, hành
                trình, quy định..v.v..
              </span>
              <span
                className="rounded-lg bg-futa-primary text-white text-center w-3/5 flex m-auto h-[40px] justify-center items-center hover:bg-futa-primary-hover cursor-pointer"
                onClick={() => handleContent(1)}
              >
                Xem thêm
              </span>
            </div>
            <div className="shadow-lg w-full h-[300px] rounded-lg flex flex-col justify-between px-8 py-12 space-y-5">
              <div className="flex items-center justify-evenly">
                <img src={qna2} alt="qna" />
                <span className="text-2xl font-semibold">FUTA APP</span>
              </div>
              <span className="text-center">
                Khách hàng dễ dàng tìm kiếm các thông tin về sử dụng App, thanh
                toán, khuyến mãi ...v.v..
              </span>
              <span
                className="rounded-lg bg-futa-primary text-white text-center w-3/5 flex m-auto h-[40px] justify-center items-center hover:bg-futa-primary-hover cursor-pointer"
                onClick={() => handleContent(2)}
              >
                Xem thêm
              </span>
            </div>
            <div className="shadow-lg w-full h-[300px] rounded-lg flex flex-col justify-between px-8 py-12 space-y-5">
              <div className="flex items-center justify-evenly">
                <img src={qna3} alt="qna" />
                <span className="text-2xl font-semibold">TRUNG CHUYỂN</span>
              </div>
              <span className="text-center">
                Cập nhật các thông tin về quy định trung chuyển cụ thể
              </span>
              <span
                className="rounded-lg bg-futa-primary text-white text-center w-3/5 flex m-auto h-[40px] justify-center items-center hover:bg-futa-primary-hover cursor-pointer"
                onClick={() => handleContent(3)}
              >
                Xem thêm
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-50 py-10">
        <div className="flex flex-col justify-center border border-slate-300 items-center rounded-lg space-y-8 px-6 py-8">
          <div className="flex justify-between w-full p-4 items-center rounded-lg">
            <div
              className="cursor-pointer font-semibold"
              onClick={() => handleContent(0)}
            >
              <ArrowLeft size="24" />
            </div>
            <div className="rounded-2xl w-1/2 h-[40px] border border-futa-primary flex relative">
              <Search className="m-auto" size="24" />
              <input
                className="w-11/12 h-full outline-none pl-2"
                type="text"
                placeholder="Tìm kiếm câu hỏi"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestion(true); // Hiện danh sách khi nhập
                }}
              />
              {showSuggestion && query && (
                <ul className="mt-2 border p-2 rounded bg-white absolute w-full z-10 top-10">
                  {filteredQnA.length > 0 ? (
                    filteredQnA.map((item) => (
                      <li
                        key={item.id}
                        className="p-2 border-b last:border-b-0"
                        onClick={() => handleSelect(item)}
                      >
                        {item.question}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">Không có kết quả</li>
                  )}
                </ul>
              )}
            </div>
          </div>
          <div className="w-full">
            <div className="flex space-x-4">
              {/* câu hỏi */}
              <div className="w-1/2 bg-slate-100 rounded-lg p-2">
                {content === 1 &&
                  QnA1.map((item) => (
                    <div
                      className={`flex space-x-4 p-2 cursor-pointer ${
                        question === item.id
                          ? "text-futa-primary bg-orange-50 border-r-3 border-futa-primary"
                          : ""
                      }`}
                      key={item.id}
                      onClick={() => handleAnswer(item.id)}
                    >
                      <div className="truncate">
                        {item.id}. {item.question}
                      </div>
                    </div>
                  ))}
                {content === 2 &&
                  QnA2.map((item) => (
                    <div
                      className={`flex space-x-4 p-2 cursor-pointer ${
                        question === item.id
                          ? "text-futa-primary bg-orange-50 border-r-3 border-futa-primary"
                          : ""
                      }`}
                      key={item.id}
                      onClick={() => handleAnswer(item.id)}
                    >
                      <div className="truncate">
                        {item.id}. {item.question}
                      </div>
                    </div>
                  ))}
                {content === 3 &&
                  QnA3.map((item) => (
                    <div
                      className={`flex space-x-4 p-2 cursor-pointer ${
                        question === item.id
                          ? "text-futa-primary bg-orange-50 border-r-3 border-futa-primary"
                          : ""
                      }`}
                      key={item.id}
                      onClick={() => handleAnswer(item.id)}
                    >
                      <div className="truncate">
                        {item.id}. {item.question}
                      </div>
                    </div>
                  ))}
              </div>
              {/* câu trả lời */}
              <div className="w-full">
                {answer && (
                  <div className="space-y-4">
                    <div className="text-2xl font-semibold">
                      {answer.question}
                    </div>
                    <div className="text-lg">{answer.answer}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default QnAPage;
