import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import axios from "axios";
const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email format",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 3 characters." }),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data);
    console.log("All env vars:", import.meta.env);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/signin`,
        {
          body: JSON.stringify(data),
          credentials: "include", // Include cookies for authentication
        },
      );

      if (response.status !== 200) {
        const errorData = await response.data;
        alert(`Error: ${errorData.error || "Something went wrong"}`);
        return;
      }

      // const result = await response.json();
      alert("Form submitted successfully!");

      // Handle successful login (e.g., redirect)
      // window.location.href = '/dashboard';
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error occurred. Please try again.");
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-blue-100">
      <div className="m-auto w-[350px] rounded-lg bg-white p-4 shadow md:max-w-[500px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SignInForm;
