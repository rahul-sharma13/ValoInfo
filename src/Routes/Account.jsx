import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user,logOut } = UserAuth();
  const navigate = useNavigate();
  const out = () => {
    try {
      logOut();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="text-center">
      SAB DEKHNA H LA... KO
      {user?.email}
      <button
        className="ml-2 border-2 border-black px-9 py-3 rounded-xl dark:border-white"
        onClick={out}
      >
        LogOut
      </button>

    </div>
  );
};

export default Account;