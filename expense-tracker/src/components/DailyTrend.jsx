import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const DailyTrend = ({dailyChange}) => {
  return (
    <div className="w-full h-[15rem] p-7 bg-zinc-800 border border-zinc-700 rounded-md">
      <h2 className="text-xl font-bold">Daily Trend</h2>
      <p className="mt-3 text-xl">
        You have {dailyChange < 0 ? "spent" : "made"} ${dailyChange} today.
      </p>
      <div className="flex items-center gap-3 w-full mt-7">
        <h1 className="text-2xl">
          {dailyChange < 0 ? "-" : null}${dailyChange}
        </h1>
        {dailyChange < 0 ? (
          <FaArrowDown fontSize={"1.5rem"} color="red" />
        ) : (
          <FaArrowUp fontSize={"1.5rem"} color="red" />
        )}
      </div>
    </div>
  );
};

export default DailyTrend;