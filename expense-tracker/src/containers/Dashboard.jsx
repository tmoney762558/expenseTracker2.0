import React from "react";
import { useState, useRef } from "react";
import { DailyTrend, BankAccount, DebtAccount } from "../components";

const Dashboard = () => {
  const [currentAccount, setCurrentAccount] = useState(0);
  const [currentWindow, setCurrentWindow] = useState("dashboard");

  const [dailyChange, setDailyChange] = useState(27.36);
  const [bankAccounts, setBankAccounts] = useState([
    {
      name: "Chase Checking",
      balance: 606.62,
      transactions: [
        {
          name: "McDonald's",
          amount: 25.0,
        },
      ],
    },
  ]);
  const [debtAccounts, setDebtAccounts] = useState([
    {
      name: "Prime Visa",
      balance: 690.23,
      transactions: [
        {
          name: "McDonald's",
          amount: 29.0,
        },
      ],
    },
  ]);
  const [inputOpen, setInputOpen] = useState(false);

  function handleChangeCurrentAccount(accountId) {
    setCurrentAccount(accountId);
  }

  function handleAddAccount() {
    const temp = bankAccounts;
    temp.push({
      id: bankAccounts.length ? bankAccounts.length - 1 : 0,
      name: accountNameInp.current.value,
      balance: accountBalanceInp.current.value,
    });
    setBankAccounts(temp);
    // Left off early here
  }
  function handleAddTransaction(accountType) {
    let temp = [];
    if (accountType === "bank") {
      temp = bankAccounts;
      temp[currentAccount].balance -= expenseAmountInp.current.value;
      temp[currentAccount].transactions.push({
        name: expenseNameInp.current.value,
        amount: expenseAmountInp.current.value,
      });
      setBankAccounts(temp);
      setCurrentWindow("updating");
      setCurrentWindow("bank");
    } else {
      temp = debtAccounts;
      temp[currentAccount].transactions.push({
        name: expenseNameInp.current.value,
        amount: expenseAmountInp.current.value,
      });
      setDebtAccounts(temp);
      setCurrentWindow("updating");
      setCurrentWindow("debt");
    }
    expenseNameInp.current.value = "";
    expenseAmountInp.current.value = "";
  }

  const accountNameInp = useRef();
  const accountBalanceInp = useRef();
  const expenseNameInp = useRef();
  const expenseAmountInp = useRef();

  return (
    <div className="flex justify-center pt-[10rem] pb-[1rem]">
      {currentWindow === "dashboard" ? (
        <div className="flex flex-col items-center gap-[5rem] w-full max-w-[50rem]">
          <DailyTrend dailyChange={dailyChange}></DailyTrend>
          <div className="w-full bg-zinc-800 border border-zinc-700 rounded-md">
            <div className="flex justify-between items-center py-5 px-7">
              <h2 className="text-xl font-bold">Bank Accounts</h2>
              <span className="text-3xl cursor-pointer">+</span>
            </div>
            {bankAccounts.map((account, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentWindow("bank");
                  handleChangeCurrentAccount(index);
                }}
              >
                <BankAccount
                  name={account.name}
                  balance={account.balance}
                ></BankAccount>
              </div>
            ))}
          </div>
          <div className="w-full mt-10 bg-zinc-800 border border-zinc-700 rounded-md">
            <div className="flex justify-between items-center py-5 px-7">
              <h2 className="text-xl font-bold">Debt</h2>
              <span className="text-3xl cursor-pointer">+</span>
            </div>
            {debtAccounts.map((account, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentWindow("debt");
                  handleChangeCurrentAccount(index);
                }}
              >
                <BankAccount
                  accountId={index}
                  name={account.name}
                  balance={account.balance}
                ></BankAccount>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {currentWindow === "bank" ? (
        <div className="flex flex-col items-center w-full max-w-[20rem]">
          <h1>{bankAccounts[currentAccount].name}</h1>
          <div className="flex flex-col gap-5">
            <div>
              <p>Name:</p>
              <input
                className="text-black"
                type="text"
                ref={expenseNameInp}
                placeholder="Name:"
              ></input>
            </div>
            <div>
              <p>Amount:</p>
              <input
                className="text-black"
                type="text"
                ref={expenseAmountInp}
                placeholder="Amount:"
              ></input>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-10">
            <button
              className="w-[5rem] py-2 bg-zinc-700"
              onClick={() => {
                handleAddTransaction("bank");
                setCurrentWindow("dashboard");
              }}
            >
              Add
            </button>
            <button
              className="w-[5rem] py-2 bg-zinc-700"
              onClick={() => {
                setCurrentWindow("dashboard");
              }}
            >
              Back
            </button>
          </div>
          <div className="flex flex-col items-center w-full mt-10 mb-5">
            <h2 className="text-2xl">Transactions</h2>
            {bankAccounts[currentAccount].transactions.map(
              (transaction, index) => (
                <div
                  className="flex justify-between w-full mt-5 py-2 px-6 bg-zinc-700"
                  key={index}
                >
                  <h3>{transaction.name}</h3>
                  <p>${transaction.amount}</p>
                </div>
              )
            )}
          </div>
        </div>
      ) : null}
      {currentWindow === "debt" ? (
        <div className="flex flex-col items-center w-full max-w-[20rem]">
          <h1>{debtAccounts[currentAccount].name}</h1>
          <div className="flex flex-col gap-5">
            <div>
              <p>Name:</p>
              <input
                className="text-black"
                type="text"
                ref={expenseNameInp}
                placeholder="Name:"
              ></input>
            </div>
            <div>
              <p>Amount:</p>
              <input
                className="text-black"
                type="text"
                ref={expenseAmountInp}
                placeholder="Amount:"
              ></input>
            </div>
          </div>
          <div className="flex justify-center gap-5 mt-10">
            <button
              className="w-[5rem] py-2 bg-zinc-700"
              onClick={() => {
                handleAddTransaction("debt");
              }}
            >
              Add
            </button>
            <button
              className="w-[5rem] py-2 bg-zinc-700"
              onClick={() => {
                setCurrentWindow("dashboard");
              }}
            >
              Back
            </button>
          </div>
          <div className="flex flex-col items-center w-full mt-10 mb-5">
            <h2 className="text-2xl">Transactions</h2>
            {debtAccounts[currentAccount].transactions.map(
              (transaction, index) => (
                <div
                  className="flex justify-between w-full mt-5 py-2 px-6 bg-zinc-700"
                  key={index}
                >
                  <h3>{transaction.name}</h3>
                  <p>${transaction.amount}</p>
                </div>
              )
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
