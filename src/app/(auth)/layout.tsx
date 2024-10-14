import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="max-w-screen-2xl mx-auto p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" width={100} height={50} alt="Logo" />
          <Button variant="secondary">Sign Up</Button>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {props.children}
        </div>
      </div>
    </main>
  );
}
