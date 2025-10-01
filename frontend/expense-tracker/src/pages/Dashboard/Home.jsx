// src/pages/Dashboard/Home.jsx
import React from "react";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Home = () => {
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <h1 className="text-2xl font-bold text-center">Welcome to Dashboard</h1>
        <p className="text-gray-600 text-center mt-2">
          Here’s an overview of your income, expenses, and reports.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Home;
