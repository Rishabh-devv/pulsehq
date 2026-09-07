import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Eye,
  EyeOff,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

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
  const [showPassword, setShowPassword] = useState(false);

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
      } else {
        setServerError("Unable to sign in. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white dark:bg-gray-950">
      <div className="grid min-h-screen lg:grid-cols-[45%_55%]">
        {/* =====================================================
            LEFT — BRAND / PRODUCT PANEL
        ====================================================== */}
        <section
          className="
            relative hidden min-h-screen overflow-hidden
            px-10 py-10 text-white
            lg:flex lg:flex-col
            xl:px-16
          "
          style={{
            background:
              "radial-gradient(circle at 68% 4%, #2449e8 0%, #1739df 28%, #102bc5 58%, #061b9c 100%)",
          }}
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-130 w-130 rounded-full bg-blue-400/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-56 -left-40 h-150 w-150 rounded-full bg-indigo-600/30 blur-3xl"
          />

          {/* Brand */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-lg font-bold shadow-lg backdrop-blur-sm">
              P
            </div>

            <span className="text-xl font-semibold tracking-tight">
              PulseHQ
            </span>
          </div>

          {/* Hero copy */}
          <div className="relative z-10 mt-16 max-w-xl xl:mt-17">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
              Business intelligence
            </p>

            <h1 className="text-[42px] font-bold leading-[1.08] tracking-[-0.03em] xl:text-5xl">
              Turn your data
              <br />
              into <span className="text-blue-200">decisions.</span>
            </h1>

            <p className="mt-6 max-w-135 text-base leading-7 text-blue-100 xl:text-lg">
              The all-in-one dashboard for revenue, customers, analytics, and
              reports.
            </p>
          </div>

          {/* Features */}
          <div className="relative z-10 mt-10 space-y-5 xl:mt-11 xl:space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 shadow-sm">
                <BarChart3 size={20} strokeWidth={2} />
              </div>

              <div>
                <p className="text-sm font-semibold">Real-time Insights</p>

                <p className="mt-1 text-sm text-blue-100">
                  Track revenue and growth in real time.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 shadow-sm">
                <Users size={20} strokeWidth={2} />
              </div>

              <div>
                <p className="text-sm font-semibold">Customer Focused</p>

                <p className="mt-1 text-sm text-blue-100">
                  Understand your customers better.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 shadow-sm">
                <FileText size={20} strokeWidth={2} />
              </div>

              <div>
                <p className="text-sm font-semibold">Powerful Reports</p>

                <p className="mt-1 text-sm text-blue-100">
                  Create and share reports effortlessly.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              ANALYTICS VISUAL
          ================================================== */}
          <div className="relative z-10 mt-auto pb-2 pt-8">
            <div className="relative h-56.25 w-full max-w-130">
              {/* Revenue card */}
              <div
                className="
                  absolute bottom-6 left-0
                  h-45 w-73.75
                  rounded-2xl
                  border border-white/20
                  bg-white/11
                  p-5
                  shadow-2xl
                  backdrop-blur-md
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-blue-100">Total Revenue</p>

                    <p className="mt-2 text-[26px] font-bold tracking-tight">
                      $52,430
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium text-emerald-300">
                    <TrendingUp size={14} />
                    12.5%
                  </div>
                </div>

                {/* Mini chart */}
                <div className="relative mt-5 h-19.5 overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 border-b border-white/10" />

                  <div className="absolute inset-x-0 bottom-3 flex h-15.5 items-end gap-2 px-1">
                    <div className="h-3 w-5 rounded-t bg-white/25" />
                    <div className="h-5 w-5 rounded-t bg-white/35" />
                    <div className="h-4 w-5 rounded-t bg-white/25" />
                    <div className="h-8 w-5 rounded-t bg-white/40" />
                    <div className="h-6 w-5 rounded-t bg-white/35" />
                    <div className="h-12 w-5 rounded-t bg-white/55" />
                    <div className="h-9 w-5 rounded-t bg-white/45" />
                    <div className="h-16 w-5 rounded-t bg-white/65" />
                  </div>

                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 280 78"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 62 C35 56, 40 45, 65 50 S98 28, 120 39 S150 24, 174 31 S207 18, 230 23 S255 7, 272 5"
                      fill="none"
                      stroke="rgba(147,197,253,0.8)"
                      strokeWidth="2"
                    />

                    <circle cx="272" cy="5" r="3.5" fill="#bfdbfe" />
                  </svg>
                </div>
              </div>

              {/* Customer growth card */}
              <div
                className="
                  absolute bottom-3 right-0
                  h-36.25 w-47.5
                  rounded-2xl
                  border border-white/20
                  bg-white/11
                  p-4
                  shadow-2xl
                  backdrop-blur-md
                "
              >
                <p className="text-xs text-blue-100">Customer Growth</p>

                <div className="mt-3 flex items-center justify-center">
                  <div className="flex h-20.5 w-20.5 items-center justify-center rounded-full border-10 border-blue-300/50">
                    <span className="text-lg font-bold">64%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mt-3 flex items-center gap-3 text-sm text-blue-100">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck size={18} />
              </div>

              <span>Secure. Reliable. Built for growing businesses.</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            RIGHT — LOGIN
        ====================================================== */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 py-12 dark:bg-slate-950 sm:px-10 lg:px-14 xl:px-20">
          {/* Subtle background pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Soft glow behind logo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[18%] h-52 w-52 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-600/10"
          />

          <div className="relative z-10 w-full max-w-125">
            {/* Logo + heading */}
            <div className="text-center">
              <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
                P
              </div>

              <h2 className="mt-7 text-[30px] font-bold tracking-tight text-slate-900 dark:text-white">
                Welcome back 👋
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Sign in to continue to your PulseHQ workspace.
              </p>
            </div>

            {/* Login form */}
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Email */}
                <div className="relative">
                  <Mail
                    size={19}
                    strokeWidth={1.8}
                    className="pointer-events-none absolute left-4 top-10.75 z-10 text-slate-400"
                  />

                  <TextInput
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    error={errors.email?.message}
                    className="h-12.5 pl-12 pr-4 text-base"
                    {...register("email", {
                      onChange: () => setServerError(""),
                    })}
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <LockKeyhole
                    size={19}
                    strokeWidth={1.8}
                    className="pointer-events-none absolute left-4 top-10.75 z-10 text-slate-400"
                  />

                  <TextInput
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    error={errors.password?.message}
                    className="h-12.5 pl-12 pr-12 text-base"
                    {...register("password", {
                      onChange: () => setServerError(""),
                    })}
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((previous) => !previous)}
                    className="absolute right-4 top-10.5 z-10 rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>

                {/* Remember / forgot */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <Checkbox
                    label="Remember me"
                    checked={rememberMe}
                    onChange={setRememberMe}
                  />

                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Server error */}
                {serverError && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400"
                  >
                    {serverError}
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-13 w-full text-base"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              {/* Security footer */}
             <div className="mt-7 flex items-center justify-center gap-3 border-t border-slate-100 pt-5 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
                <LockKeyhole size={13} />

                <span>Your information is protected and secure.</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
