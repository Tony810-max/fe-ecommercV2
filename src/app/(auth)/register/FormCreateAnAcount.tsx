"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ROUTES from "@/types/routes";
import { registerSchema } from "./types/registerSchema";

type formRegister = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

const FormCreateAnAcount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = (data: formRegister) => {
    console.log(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
      <Input placeholder="name" {...register("name")} />
      {errors.name?.message && (
        <p className="text-red-600 font-sans text-sm capitalize">
          {errors.name?.message}
        </p>
      )}

      <Input placeholder="email" {...register("email")} />
      {errors.email?.message && (
        <p className="text-red-600 font-sans text-sm capitalize">
          {errors.email?.message}
        </p>
      )}
      <Input placeholder="phone number" {...register("phone")} />
      {errors.phone?.message && (
        <p className="text-red-600 font-sans text-sm capitalize">
          {errors.phone?.message}
        </p>
      )}

      <Input type="password" placeholder="password" {...register("password")} />
      {errors.password?.message && (
        <p className="text-red-600 font-sans text-sm capitalize">
          {errors.password?.message}
        </p>
      )}

      <Button variant={"destructive"} className="font-sans text-base w-full">
        Create Account
      </Button>
      <div className="space-x-1 text-center">
        <span className="font-sans text-sm">Already have account?</span>
        <Link
          href={ROUTES.LOGIN}
          className="font-sans text-sm hover:opacity-70 hover:underline"
        >
          Log in
        </Link>
      </div>
    </form>
  );
};

export default FormCreateAnAcount;
