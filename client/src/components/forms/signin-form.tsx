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
import { toast } from "sonner";
import { Link } from "react-router-dom";
import axiosInstance from "@/lib/axios";
import { useDispatch } from "react-redux";
import { addUser } from "@/store/user.slice";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email format",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  const dispatch = useDispatch();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data", data);
    console.log("All env vars:", import.meta.env);

    try {
      const response = await axiosInstance.post("/api/auth/signin", {
        ...data,
      });

      console.log("response", response);
      if (response.status !== 200) {
        const errorData = response.data;
        console.log(response.data);
        toast.error(`Error: ${errorData.error || "Something went wrong"}`);
        return;
      }

      toast.success("log in successful");
      dispatch(addUser(response.data?.data));

      // Handle successful login (e.g., redirect)
      window.location.href = "/dashboard";
    } catch (error: any) {
      console.log("Network error:", error);
      toast.error(error?.response.data?.error || "something went wrong");
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
          <p className="py-2 text-center">
            Already have an account{" "}
            <Link to={"/auth/signin"} className="text-blue-700 underline">
              Sign In
            </Link>
          </p>
        </Form>
      </div>
    </section>
  );
};

export default SignInForm;
