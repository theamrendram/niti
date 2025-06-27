"use client";
import { useState } from "react";
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
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Eye, EyeClosed } from "lucide-react";
import axiosInstance from "@/lib/axios";

const phoneRegex = new RegExp(/^[+]?[0-9\s\-()]{10,}$/);
const validatePasswordComplexity = (password: string): boolean => {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_\-+={}[\]:"'<>,.?/~\\|]/.test(password);
  return hasUpper && hasLower && hasNumber && hasSpecial;
};

const formSchema = z.object({
  firstName: z.string().min(3, "First name should be at least 3 characters"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email({ message: "Enter a valid email address" }),
  phone: z.string().regex(phoneRegex, "Invalid phone number!"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine(
      validatePasswordComplexity,
      "Password must include upper/lowercase letters, a number, and a special character.",
    ),
});

type FormValues = z.infer<typeof formSchema>;

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  async function onSubmit(data: FormValues) {
    console.log("✅ Form submitted successfully!");
    console.log("form data", data);
    try {
      const response = await axiosInstance.post("/api/auth/signup", data);
      if (response.status === 201) {
        console.log("response", response);
        toast.success("Signup successful!");
      }
    } catch (error: any) {
      toast.error(error);
    }
  }

  function onError(errors: any) {
    Object.keys(errors).forEach((fieldName) => {
      const error = errors[fieldName];

      if (error?.message) {
        const fieldDisplayName =
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
        toast.error(`${fieldDisplayName}: ${error.message}`);
      }
    });
  }

  return (
    <section
      className="m-2 rounded-lg bg-white p-4 shadow-md md:min-w-xl"
      aria-label="Signup Form"
    >
      <div className="pt-2 pb-4 text-center">
        <p className="text-3xl font-semibold">Sign Up to Niti</p>
        <p>it's easy just take a minute and provide details</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center gap-2 rounded-md bg-black py-2 text-center text-lg text-white">
          <GoogleIcon /> Continue with Google
        </div>
        <p className="text-center text-xl font-bold">OR</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="py-2">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="given-name"
                    placeholder="Enter Your first Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="py-2">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="family-name"
                    placeholder="Enter Your last Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="phone"
            render={({ field }) => (
              <FormItem className="py-2">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Phone" {...field} />
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
                  <div className="flex rounded-lg border">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="focus-visible:border-ring border-none"
                      {...field}
                    />
                    <Button
                      variant={"ghost"}
                      type="button"
                      onClick={handlePasswordToggle}
                    >
                      {showPassword ? <Eye /> : <EyeClosed />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full hover:bg-red-300" type="submit">
            {form.formState.isSubmitting ? "Submitting" : " Sign Up"}
          </Button>
        </form>
      </Form>
      <p className="py-2 text-center">
        Already have an account{" "}
        <Link to={"/auth/signin"} className="text-blue-700 underline">
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default SignupForm;

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);
