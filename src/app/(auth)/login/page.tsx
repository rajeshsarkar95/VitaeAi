import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-2xl font-semibold mb-6 text-center">Welcome back</h1>
        <LoginForm />
      </div>
    </div>
  );
}
