import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Input, Button } from "./index";
import { login as authLogin } from "../store/authSlice";
import { authServices } from "../Appwrite/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");

    try {
      const userData = await authServices.createAccount(data);
      navigate("/login");
      if (userData) {
        const currentUserData = await authServices.getCurrentUser();
        if (currentUserData) dispatch(authLogin(currentUserData));
        navigate("/login");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg text-white  bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl p-10 border border-black`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          SinUp to create your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Name: "
              placeholder="Enter Your Name "
              type="text"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="password"
              placeholder="Enter Your Password"
              type="password"
              {...register("password", { required: true })}
              autoComplete="current-password"
            />
            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
