import { Search } from "lucide-react";
import React, { useState } from "react";
import { SwitchLocation } from "../../../assets";
import provinces from "../../../constatnts/statics/Province";

const LocationPicker = ({ start, setStart, end, setEnd }) => {
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [endSuggestions, setEndSuggestions] = useState([]);
  const [isStartFocused, setIsStartFocused] = useState(false);
  const [isEndFocused, setIsEndFocused] = useState(false);

  const changeLocation = () => {
    const temp = start;
    setStart(end);
    setEnd(temp);
  };

  const handleStartChange = (e) => {
    const value = e.target.value;
    setStart(value);
    
    if (value.length > 0) {
      const filtered = provinces.filter(province =>
        province.toLowerCase().includes(value.toLowerCase())
      );
      setStartSuggestions(filtered);
    } else {
      setStartSuggestions([]);
    }
  };

  const handleEndChange = (e) => {
    const value = e.target.value;
    setEnd(value);
    
    if (value.length > 0) {
      const filtered = provinces.filter(province =>
        province.toLowerCase().includes(value.toLowerCase())
      );
      setEndSuggestions(filtered);
    } else {
      setEndSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion, isStart) => {
    if (isStart) {
      setStart(suggestion);
      setStartSuggestions([]);
    } else {
      setEnd(suggestion);
      setEndSuggestions([]);
    }
  };

  return (
    <div className="flex relative items-center w-full space-x-4 justify-center">
      {/* Start Location Input */}
      <div className="relative basis-1/2">
        <span className="flex px-2 items-center border border-slate-200 p-2 rounded-lg">
          <Search />
          <input
            type="text"
            className="outline-none pl-3 flex-1"
            value={start}
            onChange={handleStartChange}
            onFocus={() => setIsStartFocused(true)}
            onBlur={() => setTimeout(() => setIsStartFocused(false), 200)}
            autoComplete="off"
            placeholder="Nhập điểm đi"
          />
        </span>
        {isStartFocused && startSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-slate-200 rounded-lg mt-1 max-h-60 overflow-y-auto">
            {startSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion, true)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Switch Button */}
      <span
        className="absolute left-1/2 z-20 translate-x-[-50%] cursor-pointer hover:rotate-180 transition-transform duration-300"
        onClick={changeLocation}
      >
        <img src={SwitchLocation} alt="" />
      </span>

      {/* End Location Input */}
      <div className="relative basis-1/2">
        <span className="flex px-2 items-center border border-slate-200 p-2 rounded-lg">
          <Search />
          <input
            type="text"
            className="outline-none pl-3 flex-1"
            value={end}
            onChange={handleEndChange}
            onFocus={() => setIsEndFocused(true)}
            onBlur={() => setTimeout(() => setIsEndFocused(false), 200)}
            autoComplete="off"
            placeholder="Nhập điểm đến"
          />
        </span>
        {isEndFocused && endSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-slate-200 rounded-lg mt-1 max-h-60 overflow-y-auto">
            {endSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion, false)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LocationPicker;