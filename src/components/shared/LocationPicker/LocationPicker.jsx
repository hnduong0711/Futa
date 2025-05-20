import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SwitchLocation } from "../../../assets";
import axios from "axios";

const LocationPicker = ({ start, setStart, end, setEnd }) => {
  const [startSuggestions, setStartSuggestions] = useState([]);
  const [endSuggestions, setEndSuggestions] = useState([]);
  const [isStartFocused, setIsStartFocused] = useState(false);
  const [isEndFocused, setIsEndFocused] = useState(false);
  const [provinceList, setProvinceList] = useState([]);
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");
  const token = localStorage.getItem("token");

  // Fetch cities from API
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/city/getAll", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setProvinceList(response.data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };
    fetchProvinces();
  }, [token]);

  // Đồng bộ input với start/end chỉ khi cần
  useEffect(() => {
    if (!startInput) {
      const city = provinceList.find((province) => province.id === start);
      setStartInput(city ? city.name : "");
    }
  }, [start, provinceList, startInput]);

  useEffect(() => {
    if (!endInput) {
      const city = provinceList.find((province) => province.id === end);
      setEndInput(city ? city.name : "");
    }
  }, [end, provinceList, endInput]);

  const changeLocation = () => {
    setStart(end);
    setEnd(start);
    setStartInput(endInput);
    setEndInput(startInput);
  };

  const handleStartChange = (e) => {
    const value = e.target.value;
    setStartInput(value);

    if (value.length > 0) {
      const filtered = provinceList.filter((province) =>
        province.name.toLowerCase().includes(value.toLowerCase())
      );
      setStartSuggestions(filtered);
    } else {
      setStartSuggestions([]);
      setStart("");
    }
  };

  const handleEndChange = (e) => {
    const value = e.target.value;
    setEndInput(value);

    if (value.length > 0) {
      const filtered = provinceList.filter((province) =>
        province.name.toLowerCase().includes(value.toLowerCase())
      );
      setEndSuggestions(filtered);
    } else {
      setEndSuggestions([]);
      setEnd("");
    }
  };

  const handleSuggestionClick = (suggestion, isStart) => {
    const cityId = suggestion.id;
    const cityName = suggestion.name;
    console.log("Selected:", { cityId, cityName, isStart });
    if (isStart) {
      setStart(cityId);
      setStartInput(cityName);
      setStartSuggestions([]);
    } else {
      setEnd(cityId);
      setEndInput(cityName);
      setEndSuggestions([]);
    }
  };

  const handleStartBlur = () => {
    setTimeout(() => {
      setIsStartFocused(false);
      const matchedCity = provinceList.find(
        (province) => province.name.toLowerCase() === startInput.toLowerCase()
      );
      console.log("Start blur:", { startInput, matchedCity });
      if (matchedCity) {
        setStart(matchedCity.id);
        setStartInput(matchedCity.name);
      } else if (!startInput) {
        setStart("");
      }
    }, 200);
  };

  const handleEndBlur = () => {
    setTimeout(() => {
      setIsEndFocused(false);
      const matchedCity = provinceList.find(
        (province) => province.name.toLowerCase() === endInput.toLowerCase()
      );
      console.log("End blur:", { endInput, matchedCity });
      if (matchedCity) {
        setEnd(matchedCity.id);
        setEndInput(matchedCity.name);
      } else if (!endInput) {
        setEnd("");
      }
    }, 200);
  };

  return (
    <div className="flex relative items-center w-full space-x-4 justify-center">
      <div className="relative basis-1/2">
        <span className="flex px-2 items-center border border-slate-200 p-2 rounded-lg">
          <Search />
          <input
            type="text"
            className="outline-none pl-3 flex-1"
            value={startInput}
            onChange={handleStartChange}
            onFocus={() => setIsStartFocused(true)}
            onBlur={handleStartBlur}
            autoComplete="off"
            placeholder="Nhập điểm đi"
          />
        </span>
        {isStartFocused && startSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-slate-200 rounded-lg mt-1 max-h-60 overflow-y-auto">
            {startSuggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion, true)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <span
        className="absolute left-1/2 z-20 translate-x-[-50%] cursor-pointer hover:rotate-180 transition-transform duration-300"
        onClick={changeLocation}
      >
        <img src={SwitchLocation} alt="" />
      </span>
      <div className="relative basis-1/2">
        <span className="flex px-2 items-center border border-slate-200 p-2 rounded-lg">
          <Search />
          <input
            type="text"
            className="outline-none pl-3 flex-1"
            value={endInput}
            onChange={handleEndChange}
            onFocus={() => setIsEndFocused(true)}
            onBlur={handleEndBlur}
            autoComplete="off"
            placeholder="Nhập điểm đến"
          />
        </span>
        {isEndFocused && endSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-slate-200 rounded-lg mt-1 max-h-60 overflow-y-auto">
            {endSuggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion, false)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LocationPicker;