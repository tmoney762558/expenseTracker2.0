import React from "react";

const DebtAccount = ({name, balance = 0}) => {
  return (
    <div className="flex flex-col py-[1.5rem] px-7 bg-zinc-700 border-y border-zinc-500 cursor-pointer">
      <h3 className="text-xl">{name}</h3>
      <div className="flex justify-between mt-3">
        <div>
          <p className="text-xl text-right">{balance}</p>
          <p>Current Balance</p>
        </div>
      </div>
    </div>
  );
};

export default DebtAccount;
