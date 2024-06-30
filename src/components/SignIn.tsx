import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", {
          redirectTo: "/dashboard",
        });
      }}
    >
      <Button type="submit">
        <span className="px-2">
          <GitHubLogoIcon />
        </span>
        Using GitHub
      </Button>
    </form>
  );
}
