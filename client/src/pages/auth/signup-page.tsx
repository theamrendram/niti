import SignupForm from "@/components/forms/signup-form";
const SignupPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-20">
      <div className="max-w-3xl">
        <SignupForm />
      </div>
    </section>
  );
};

export default SignupPage;
