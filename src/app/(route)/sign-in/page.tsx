"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignIn } from "@/components/SignIn";

import { useForm, SubmitHandler } from "react-hook-form";
import React, { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginSchemaType } from "@/validationSchema/loginSchema";
import { z } from "zod";

type loginForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [APIError, setAPIError] = useState<string | null>(null);

  // const {
  //   register,
  //   setError,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<loginForm>();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  // const onSubmit: SubmitHandler<loginForm> = async (data, event)
  const onSubmit: SubmitHandler<loginSchemaType> = async (data, event) => {
    try {
      event?.preventDefault();
      const response = await fetch("http://localhost:3000/api/formAPI", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify(data),
      });
      console.log("Response : ", response);
      if (!response.ok) {
        const errorData = await response.json();
        setError(
          "password",
          errorData.message || "Error Occured with Error message  uring login"
        );
        setAPIError(
          errorData.message || "An error occured while trying to login"
        );
      } else {
        return response.json();
      }
    } catch (error) {
      setAPIError("Network Error");
    }
  };
  // const test = (data) => console.log(data);
  useEffect(() => {
    setError("password", { type: "minLength", message: "Password is short" });
  }, [setError]);

  console.log("Error : ", errors);
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                // defaultValue={"m@example.com"}
                {...register("email")}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center my-2">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                // defaultValue={"12345"}
                {...register("password")}
              />
              {APIError && <p>{APIError}</p>}
            </div>
            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
          </form>
          <SignIn />
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
