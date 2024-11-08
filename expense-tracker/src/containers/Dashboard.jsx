import React from "react";
import { useState } from "react";
import { DailyTrend, BankAccount, DebtAccount } from "../components";

const Dashboard = () => {
  const [dailyChange, setDailyChange] = useState(27.36);
  const [bankAccounts, setBankAccounts] = useState([
    { name: "Chase Checking", balance: 606.62 },
  ]);
  const [debtAccounts, setDebtAccounts] = useState([
    { name: "Prime Visa", balance: 690.23 },
  ]);

  return (
    <div className="flex justify-center pt-[10rem]">
      <div className="flex flex-col items-center gap-[5rem] w-full max-w-[50rem]">
        <DailyTrend dailyChange={dailyChange}></DailyTrend>
        <div className="w-full bg-zinc-800 border border-zinc-700 rounded-md">
          <div className="flex justify-between items-center py-5 px-7">
            <h2 className="text-xl font-bold">Bank Accounts</h2>
            <span className="text-3xl cursor-pointer">+</span>
          </div>
          {bankAccounts.map((account, index) => (
            <BankAccount
              key={index}
              name={account.name}
              balance={account.balance}
            ></BankAccount>
          ))}
        </div>
        <div className="w-full mt-10 bg-zinc-800 border border-zinc-700 rounded-md">
          <div className="flex justify-between items-center py-5 px-7">
            <h2 className="text-xl font-bold">Debt</h2>
            <span className="text-3xl cursor-pointer">+</span>
          </div>
          {debtAccounts.map((account, index) => (
            <BankAccount
              key={index}
              name={account.name}
              balance={account.balance}
            ></BankAccount>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
