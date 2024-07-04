"use client";

import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { handleSignupForm } from "@/actions";
export function SignIn() {
  return (
    <>
      <form action={handleSignupForm}>
        <Button variant="outline" className="w-full" type="submit">
          <span className="px-2">
            <GitHubLogoIcon />
          </span>
          Signin Using GitHub
        </Button>
      </form>
    </>
  );
}
