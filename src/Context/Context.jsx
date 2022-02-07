import React, { createContext, useState } from "react";

import { GET, POST } from "../utils/APIService";

export const AppContext = createContext(null);

export const ContextWrapper = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [postedJobs, setPostedJobs] = useState([]);
  const [metaData, setMetaData] = useState({});
  const [appliedCandidates, setAppliedCandidates] = useState([]);
  const [toast, setToast] = useState({
    show: false,
    headerMsg: "",
    bodyMsg: "",
  });

  const loginStatus = () => {
    return JSON.parse(sessionStorage.getItem("isLoggedIn"));
  };

  const closeToast = () => {
    setToast((prevState) => ({
      ...prevState,
      show: false,
    }));
  };
  const username = () => {
    return JSON.parse(sessionStorage.getItem("username"));
  };

  const login = async (email, password, callback) => {
    try {
      const data = {
        email,
        password,
      };
      const response = await POST("/auth/login", data);
      sessionStorage.setItem(
        "token",
        JSON.stringify(response.data?.data?.token)
      );
      sessionStorage.setItem("isLoggedIn", JSON.stringify(true));
      sessionStorage.setItem(
        "username",
        JSON.stringify(response.data?.data?.name)
      );
      callback(true, "Succesfully logged in");
      settingLoggedIn();
    } catch (error) {
      callback(false, error.response.data.message);
    }
  };

  const settingLoggedIn = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/#/home";
    setToast((prevState) => ({
      ...prevState,
      show: true,
      headerMsg: "Logout",
      bodyMsg: "You have successfully logout",
    }));
    setIsLoggedIn(false);
    setPostedJobs([]);
    setMetaData({});
  };

  const fetchPostedJobs = async (currentPage) => {
    const data = {
      page: currentPage,
    };
    const response = await GET("/recruiters/jobs", data);
    setPostedJobs(response.data?.data?.data);
    setMetaData(response.data?.data?.metadata);
  };

  const fetchAppliedCandidates = async (job_id, callback) => {
    const response = await GET(`recruiters/jobs/${job_id}/candidates`);
    if (response.data?.data) {
      setAppliedCandidates(response.data?.data);
    } else {
      setAppliedCandidates([]);
    }
    callback();
  };

  const value = {
    isLoggedIn,
    login,
    username,
    loginStatus,
    handleLogout,
    fetchPostedJobs,
    postedJobs,
    metaData,
    fetchAppliedCandidates,
    appliedCandidates,
    settingLoggedIn,
    toast,
    closeToast,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
