import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1, "Required"),
});

export function SignInCard() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full h-full md:w-[478px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>

      <div className="p-7">
        <DottedSeparator />
      </div>

      <CardContent className="px-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Enter email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={false} size="lg" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>

      <div className="p-7">
        <DottedSeparator />
      </div>

      <CardContent className="px-7 flex flex-col gap-y-4">
        <Button disabled={false} variant="secondary" size="lg" className="w-full">
          <FcGoogle className="mr-2 size-5" />
          Login with Google
        </Button>
        <Button disabled={false} variant="secondary" size="lg" className="w-full">
          <FaGithub className="mr-2 size-5" />
          Login with Github
        </Button>
      </CardContent>

      <div className="p-7">
        <DottedSeparator />
      </div>

      <CardContent className="px-7 flex items-center justify-center text-sm">
        <p>
          Don&apos;t have an account?
          <Link href="/sign-up">
            <span className="text-blue-700">&nbsp;Sign Up</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
