"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout(props: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="max-w-screen-2xl mx-auto p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" width={100} height={50} alt="Logo" />
          <Button asChild variant="secondary">
            <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
              {pathname === "/sign-in" ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {props.children}
        </div>
      </div>
    </main>
  );
}
