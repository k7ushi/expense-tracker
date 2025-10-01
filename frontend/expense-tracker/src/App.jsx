import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import UserProvider from './context/userContext';

const App = () => {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root></Root>}></Route>
          <Route path="/login" exact element={<Login></Login>}></Route>
          <Route path="/signUp" exact element={<SignUp></SignUp>}></Route>
          <Route path="/dashboard" exact element={<Home></Home>}></Route>
          <Route path="/income" exact element={<Income></Income>}></Route>
          <Route path="/expense" exact element={<Expense></Expense>}></Route>
        </Routes>
      </Router>
    </div>
    </UserProvider>
  )
}

export default App;

const Root = () => {
  // check if token exists in localstorage
  const isAuthenticated = !!localStorage.getItem("token");

  // redirected to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/dashboard"></Navigate>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};
