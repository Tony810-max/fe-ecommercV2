"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ROUTES from "@/types/routes";
import { loginSchema } from "./types/loginSchema";

type formLogin = {
  email: string;
  password: string;
};

const FormLogIn = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: formLogin) => {
    console.log(data);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
      <Input placeholder="enter your email" {...register("email")} />
      <Input
        type="password"
        placeholder="enter your password"
        {...register("password")}
      />
      <div className="flex items-center justify-between">
        <Button
          variant={"destructive"}
          className="font-sans text-base py-4 px-12"
        >
          Log in
        </Button>
        <Link
          href={ROUTES.FORGOTPASSWORD}
          className="font-sans text-sm text-red-600 hover:opacity-70 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};

export default FormLogIn;
