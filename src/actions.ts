"use server";

import { signIn } from "./auth";

export async function handleSignupForm() {
  await signIn("github", {
    redirectTo: "/dashboard",
  });
}
