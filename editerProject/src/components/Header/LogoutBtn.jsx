import React from "react";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { authServices } from "../../Appwrite/auth";

export default function LogoutBtn() {
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    authServices.logout().then(() => {
      dispatch(logout());
      console.log("Logout Button was Clicked!")
    });
  };

  return (
    <div
      className="	cursor-pointer inline-bock px-4 py-2 duration-200 hover:bg-blue-300 rounded-full"
      onClick={LogoutHandler}
    >
      Logout
    </div>
  );
}
