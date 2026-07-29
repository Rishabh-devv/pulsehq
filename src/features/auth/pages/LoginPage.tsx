import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { loginSchema, type LoginForm } from "../schema/LoginSchema";
import TextInput from "@/components/common/TextInput";
import Checkbox from "@/components/common/Checkbox";
import Button from "@/components/common/Button";
import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/services/authService";

function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      setServerError("");
      setIsLoading(true);
      const user = await authService.login(data.email, data.password);

      login(user);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-blue-600">
          PulseHQ
        </h1>
        <h2 className="mt-6 text-center text-2xl font-bold">Welcome back 👋</h2>

        <p className="mt-2 text-center text-gray-500">
          Sign in to continue to PulseHQ.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...register("email", {
              onChange: () => setServerError(""),
            })}
          />

          <TextInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            error={errors.password?.message}
            {...register("password", {
              onChange: () => setServerError(""),
            })}
          />

          <Checkbox
            label="Remember me"
            checked={rememberMe}
            onChange={setRememberMe}
          />
          {serverError && <p className="text-sm text-red-500">{serverError}</p>}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <p className="mt-6 text-center">
          <button
            type="button"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
