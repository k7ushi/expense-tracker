import React from "react";
import { LuTrendingUpDown } from "react-icons/lu";
import StatsInfoCard from "../cards/StatsInfoCard";
import AllTransactions from "../../assets/images/AllTransactions.jpg"; 

export default function AuthLayout({ children }) {
  return (
    <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-[60vw_40vw]">
      <div className="px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Expense Tracker</h2>
        {children}
      </div>

      <div className="hidden md:block relative bg-blue-950 bg-cover bg-auth-bg-img bg-no-repeat bg-center overflow-hidden p-8">
        <div className="w-48 h-48 rounded-[40px] bg-blue-300 absolute -top-7 -left-5" />
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600 absolute top-[30%] -right-10" />
        <div className="w-48 h-48 rounded-[40px] bg-violet-500 absolute -bottom-7 -left-5" />

        <div className="relative z-20 grid gap-6">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expense"
            value="430,000"
            color="bg-blue-600"
          />
          <img
            src={AllTransactions}
            alt="All Transactions"
            className="w-64 rounded-2xl lg:w-[90%] self-end shadow-lg shadow-blue-400/15"
          />
        </div>
      </div>
    </div>
  );
}
