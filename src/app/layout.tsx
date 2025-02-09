import type { Metadata } from "next";
import { Montserrat as Fontsans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ThemeSwitcher";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import Container from "@/components/Container";

const fontSans = Fontsans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "max-h-screen max-w-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className=" flex justify-center py-10">
              <NavBar />
              <span className=" justify-end pl-5">
                <ModeToggle />
              </span>
            </div>
            <Container>{children}</Container>
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
