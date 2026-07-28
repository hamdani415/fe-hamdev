import LoginForm from "@/components/dashboard/auth/loginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center">
          HAMDEV
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-8">
          Login Dashboard
        </p>

        <LoginForm />

      </div>

    </div>
  );
}