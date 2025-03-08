import React, { useState } from "react";
import { SwitchLocation } from "../assets";
import { Search } from "lucide-react";
import ScheduleList from "../components/user/ScheduleComponent/ScheduleList/ScheduleList";
import LocationPicker from "../components/shared/LocationPicker/LocationPicker";

const SchedulePage = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <div className="px-50 py-10">
      <div className="flex flex-col space-y-6 items-center">
        <div className="w-screen z-10 space-y-8 sticky top-0 left-0 right-0 bg-white shadow-2xs rounded-2xl p-4">
          {/* Search schedule */}
          <LocationPicker start={start} end={end} setStart={setStart} setEnd={setEnd}/>
        </div>
        {[...Array(5)].map((_, i) => (
          <ScheduleList key={i} />
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
