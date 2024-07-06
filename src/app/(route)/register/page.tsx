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

import { useForm, SubmitHandler } from "react-hook-form";
// import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  registerSchemaType,
} from "@/validationSchema/registerSchema";

import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export default function Registerpage() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<registerSchemaType>({ resolver: zodResolver(registerSchema) });

  useEffect(() => {
    if (errors.username) {
      toast({
        title: "Error with Username",
        description: errors.username.message,
      });
    }
    if (errors.email) {
      toast({
        title: "Error with email",
        description: errors.email.message,
      });
    }
    if (errors.password) {
      toast({
        title: "Error with Password",
        description: errors.password.message,
      });
    }

    return () => {};
  }, [toast, errors]);

  const onSubmit: SubmitHandler<registerSchemaType> = async (data, event) => {
    // console.log("running");
    try {
      event?.preventDefault();
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      //   console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        setError("root", errorData || "error occured in register API call");
      } else {
        return response.json();
      }
    } catch (error) {
      setError("root", error || "something went wrong with the server");
    }
  };
  //   console.log(errors);
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Register</CardTitle>
        <CardDescription>
          Enter your email below to Register your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2 my-2">
              <Label htmlFor="email">Username</Label>
              <Input
                // defaultValue={"m@example.com"}
                {...register("username")}
                id="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="grid gap-2 my-2">
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
            </div>
            <Button type="submit" className="w-full mt-4">
              Register Now
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline">
            Sign In
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
