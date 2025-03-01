import React from "react";
import { ScheduleDoubleArrow } from "../../../assets";

const ScheduleList = ({Start}) => {
  return (
    <>
    <div className="text-center">Chuyến xe xuất phát từ <span className="text-futa-primary">Hồ Chí Minh</span></div>
      <div className="min-h-[30px] max-h-[150px] w-full overflow-y-auto overscroll-y-contain custom-scrollbar scrollbar-outside flex flex-col space-y-4 rounded-2xl border border-slate-200 p-2">
        <div className="flex justify-between items-center text-center h-[30px]">
          <div className="flex items-center justify-between basis-1/5">
            <span>Hồ Chí Minh</span>
            <img src={ScheduleDoubleArrow} alt="icons" />
            <span>Phan Thiết</span>
          </div>
          <span className="basis-1/6">Limousine</span>
          <span className="basis-1/6">140km</span>
          <span className="basis-1/6">3 giờ 30 phút</span>
          <span className="basis-1/6">190.000</span>
          <span className="bg-futa-primary-hover/60 text-center rounded-2xl text-white px-2 basis-1/8 hover:bg-futa-primary-hover cursor-pointer transition-all py-1">
            Tìm chuyến
          </span>
        </div>

        <div className="flex justify-between items-center text-center h-[30px]">
          <div className="flex items-center justify-between basis-1/5">
            <span>Hồ Chí Minh</span>
            <img src={ScheduleDoubleArrow} alt="icons" />
            <span>Phan Thiết</span>
          </div>
          <span className="basis-1/6">Limousine</span>
          <span className="basis-1/6">140km</span>
          <span className="basis-1/6">3 giờ 30 phút</span>
          <span className="basis-1/6">190.000</span>
          <span className="bg-futa-primary-hover/60 text-center rounded-2xl text-white px-2 basis-1/8 hover:bg-futa-primary-hover cursor-pointer transition-all py-1">
            Tìm chuyến
          </span>
        </div>

        <div className="flex justify-between items-center text-center h-[30px]">
          <div className="flex items-center justify-between basis-1/5">
            <span>Hồ Chí Minh</span>
            <img src={ScheduleDoubleArrow} alt="icons" />
            <span>Phan Thiết</span>
          </div>
          <span className="basis-1/6">Limousine</span>
          <span className="basis-1/6">140km</span>
          <span className="basis-1/6">3 giờ 30 phút</span>
          <span className="basis-1/6">190.000</span>
          <span className="bg-futa-primary-hover/60 text-center rounded-2xl text-white px-2 basis-1/8 hover:bg-futa-primary-hover cursor-pointer transition-all py-1">
            Tìm chuyến
          </span>
        </div>

        <div className="flex justify-between items-center text-center h-[30px]">
          <div className="flex items-center justify-between basis-1/5">
            <span>Hồ Chí Minh</span>
            <img src={ScheduleDoubleArrow} alt="icons" />
            <span>Phan Thiết</span>
          </div>
          <span className="basis-1/6">Limousine</span>
          <span className="basis-1/6">140km</span>
          <span className="basis-1/6">3 giờ 30 phút</span>
          <span className="basis-1/6">190.000</span>
          <span className="bg-futa-primary-hover/60 text-center rounded-2xl text-white px-2 basis-1/8 hover:bg-futa-primary-hover cursor-pointer transition-all py-1">
            Tìm chuyến
          </span>
        </div>

        <div className="flex justify-between items-center text-center h-[30px]">
          <div className="flex items-center justify-between basis-1/5">
            <span>Hồ Chí Minh</span>
            <img src={ScheduleDoubleArrow} alt="icons" />
            <span>Phan Thiết</span>
          </div>
          <span className="basis-1/6">Limousine</span>
          <span className="basis-1/6">140km</span>
          <span className="basis-1/6">3 giờ 30 phút</span>
          <span className="basis-1/6">190.000</span>
          <span className="bg-futa-primary-hover/60 text-center rounded-2xl text-white px-2 basis-1/8 hover:bg-futa-primary-hover cursor-pointer transition-all py-1">
            Tìm chuyến
          </span>
        </div>

        <div className="flex justify-between items-center text-center h-[30px]">
          <div className="flex items-center justify-between basis-1/5">
            <span>Hồ Chí Minh</span>
            <img src={ScheduleDoubleArrow} alt="icons" />
            <span>Phan Thiết</span>
          </div>
          <span className="basis-1/6">Limousine</span>
          <span className="basis-1/6">140km</span>
          <span className="basis-1/6">3 giờ 30 phút</span>
          <span className="basis-1/6">190.000</span>
          <span className="bg-futa-primary-hover/60 text-center rounded-2xl text-white px-2 basis-1/8 hover:bg-futa-primary-hover cursor-pointer transition-all py-1">
            Tìm chuyến
          </span>
        </div>
      </div>
    </>
  );
};

export default ScheduleList;
