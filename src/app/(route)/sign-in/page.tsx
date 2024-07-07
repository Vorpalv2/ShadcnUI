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
import { useToast } from "@/components/ui/use-toast";

export default function LoginForm() {
  const { toast } = useToast();

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (errors.email) {
      toast({
        title: "Email Error",
        description: errors.email.message,
      });
    }
    if (errors.password) {
      toast({
        title: "Password Error",
        description: errors.password.message,
      });
    }
    return () => {};
  }, [toast, errors]);

  const onSubmit: SubmitHandler<loginSchemaType> = async (data, event) => {
    // console.log(touchedFields);
    try {
      event?.preventDefault();
      const response = await fetch("http://localhost:3000/api/formAPI", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.log(errors);
      if (!response.ok) {
        const errorData = await response.json();
        setError(
          "password",
          errorData.message || "Error Occured with Error message during login"
        );
        toast({
          title: "Something went Wrong",
          description: errorData.message,
        });
      } else {
        toast({
          title: "Logging In",
          description: "Success",
        });
        return response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              {errors.email?.message && (
                <p className="text-sm py-2"> {errors.email.message} </p>
              )}
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
            </div>
            {errors.password?.message && (
              <p className="text-sm py-2">{errors.password.message}</p>
            )}
            <Button type="submit" className="w-full mt-4">
              Login
            </Button>
          </form>
          <SignIn />
        </div>
        <div className="mt-4 text-center text-sm">
          No Account?{" "}
          <Link href="/register" className="underline">
            Register Today
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
