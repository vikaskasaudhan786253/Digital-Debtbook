import { useState } from "react";
import {
  Wallet,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();   // Prevent page reload

    try {
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        console.log("Response Status:", response.status);

        const data = await response.json();
        console.log("Response Data:", data);
        if (data.success) {
        localStorage.setItem("token", data.token);
        alert("Login Successful and You are redirecting to Dashboard Page!!");
        navigate("/dashboard");
        }
    } catch (error) {
        console.error("Full Error:", error);
        console.error("Message:", error.message);
        console.error("Stack:", error.stack);
    }
};

    return (
        <div className="min-h-screen flex">

            {/* Left Side */}
            {/* ================= Left Panel ================= */}

<div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-12 flex-col justify-between">

    {/* Background Glow */}

    <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -top-16 left-20 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-cyan-500/15 blur-3xl"></div>

    </div>

    {/* Top Content */}

    <div className="relative z-10">

        {/* Logo */}

        <div className="flex items-center gap-3 mb-14">

            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">

                <Wallet className="w-5 h-5 text-white"/>
            </div>
            <h3 className="text-3xl font-extrabold">
                DebtBook
            </h3>

        </div>
        {/* Heading */}

        <h4 className="text-2xl xl:text-2xl font-extrabold leading-tight">

            Finally an app that keeps me organized. I know exactly who owes me and who I owe. Pure clarity.Track Every Rupee.
        </h4>
    </div>

    {/* Statistics */}

    <div className="relative z-10 mt-12 grid grid-cols-2 gap-5">

        <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

            <h3 className="text-3xl font-extrabold">
                ₹3.2L
            </h3>
            <p className="mt-2 text-sm text-slate-300">
                Money Tracked
            </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

            <h3 className="text-3xl font-extrabold">

                24

            </h3>

            <p className="mt-2 text-sm text-slate-300">

                Active Contacts

            </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

            <h3 className="text-3xl font-extrabold">

                ₹45K

            </h3>

            <p className="mt-2 text-sm text-slate-300">

                This Month

            </p>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6">

            <h3 className="text-3xl font-extrabold">

                92%

            </h3>

            <p className="mt-2 text-sm text-slate-300">

                Recovery Rate

            </p>

        </div>

    </div>

</div>

            {/* Right Side */}

            {/* ================= Login Form ================= */}

<div className="flex-1 flex items-center justify-center bg-white p-8">

    <div className="w-full max-w-md">

        {/* Mobile Logo */}

        <div className="flex items-center gap-3 mb-8 lg:hidden">

            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">

                <Wallet className="w-5 h-5 text-white" />

            </div>

            <span className="text-2xl font-extrabold text-slate-900">

                DebtBook

            </span>

        </div>

        {/* Heading */}

        <h2 className="text-3xl font-extrabold !text-black text-slate-900">

            Welcome Back

        </h2>

        <p className="mt-2 mb-8 text-slate-500">

            Sign in to your DebtBook account

        </p>

        {/* Form */}

        <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}

            <div>

                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-700">

                    Email Address

                </label>

                <div className="relative">

                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                </div>

            </div>

            {/* Password */}

            <div>

                <label htmlFor="password" className="block mb-2 text-sm font-semibold text-slate-700">

                    Password

                </label>

                <div className="relative">

                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                        id = "password"
                        name = "password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >

                        {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                        ) : (
                            <Eye className="w-4 h-4" />
                        )}

                    </button>

                </div>

            </div>

            {/* Remember Me */}

            <div className="flex items-center justify-between">

                <label className="flex items-center gap-2 cursor-pointer">

                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="accent-blue-600"
                    />

                    <span className="text-sm text-slate-600">

                        Remember me

                    </span>

                </label>

                <a
                    href="#"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >

                    Forgot password?

                </a>

            </div>

            {/* Button */}

            <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >

                Sign In

                <ArrowRight className="w-4 h-4" />

            </button>

        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-sm text-slate-500">

            Don't have an account?

            <a
                href="/register"
                className="ml-2 font-bold text-blue-600 hover:text-blue-700"
            >

                Create one free

            </a>

        </p>

    </div>

</div>
</div>
);
}
export default Login;
