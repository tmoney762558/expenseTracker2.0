import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";

const BankAccount = ({name, balance = 0}) => {
  return (
    <div className="flex flex-col py-[1.5rem] px-7 mt-5 bg-zinc-700 border-y border-zinc-500 cursor-pointer">
            <h3 className="text-xl">{name}</h3>
            <div className="flex justify-between mt-3">
              <CiCreditCard1 fontSize={"3rem"} />
              <div>
                <p className="text-xl text-right">{balance}</p>
                <p>Avaliable Balance</p>
              </div>
            </div>
          </div>
  )
}

export default BankAccount