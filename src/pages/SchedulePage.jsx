import React, { useState } from "react";
import { SwitchLocation } from "../assets";
import { Search } from "lucide-react";
import ScheduleList from "../components/user/ScheduleList/ScheduleList";

const SchedulePage = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const changeLocation = () => {
    const temp = start;
    setStart(end);
    setEnd(temp);
  };

  return (
    <div className="px-50 py-10">
      <div className="flex flex-col space-y-6 items-center">
        <div className="w-screen z-10 space-y-8 sticky top-0 left-0 right-0 bg-white shadow-2xs rounded-2xl p-4">
          {/* Search schedule */}
          <div className="px-50 space-y-4">
            <div className="flex relative items-center w-full space-x-4 justify-center">
              <span className="flex px-2 items-center border border-slate-200 p-2 rounded-2xl basis-1/2">
                <Search />
                <input
                  type="text"
                  className="outline-none pl-3 flex-1"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                />
              </span>
              <span
                className="absolute left-1/2 translate-x-[-50%] cursor-pointer hover:rotate-180 transition-transform duration-300"
                onClick={changeLocation}
              >
                <img src={SwitchLocation} alt="" />
              </span>
              <span className="flex px-2 items-center border border-slate-200 p-2 rounded-2xl basis-1/2">
                <Search />
                <input
                  type="text"
                  className="outline-none pl-3 flex-1"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                />
              </span>
            </div>
            {/* Data schedule */}
            <div className="min-h-[30px] flex items-center text-center justify-between w-full rounded-2xl border border-slate-200 p-2 font-semibold">
              <span className="basis-1/5">Tuyến xe</span>
              <span className="basis-1/6">Loại xe</span>
              <span className="basis-1/6">Quãng đường</span>
              <span className="basis-1/6">Thời gian hành trình</span>
              <span className="basis-1/6">Giá vé</span>
              <span className="basis-1/8"></span>
            </div>
          </div>
        </div>
        {[...Array(5)].map((_, i) => (
          <ScheduleList key={i} />
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
