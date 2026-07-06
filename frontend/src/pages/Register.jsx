import { useState } from "react";


import {
  Wallet,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CircleCheckBig,
  Users,
  ArrowLeftRight,
  BarChart3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async () => {

        try {

            const response = await fetch(
                "http://127.0.0.1:5000/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        password
                    })
                }
            );

            const data = await response.json();

            if (data.success) {

                alert("Registration successful. Please login.");
                navigate("/login");
            }
            else {
                alert(data.message);
                navigate("/register");
            }
        } catch (error) {
            console.log(error);
            alert("Server Error");
        }
    };
    return (
        <div className="min-h-screen flex">
            {/* Left Side */}
            {/* ================= Left Panel ================= */}

<div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-14 flex-col justify-between">

    {/* Background Glow */}

    <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-16 w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>

        <div className="absolute bottom-16 right-10 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>

    </div>

    {/* Logo */}

    <div className="relative z-10">

        <div className="flex items-center gap-3 mb-20">

            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">

                <Wallet className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">
                DebtBook
            </h3>
        </div>
        {/* Heading */}
        <h3 className="text-3xl xl:text-3xl font-bold text-white leading-tight">
            Start tracking debts in under 2 minutes
        </h3>
        {/* Features */}
        <div className="mt-12 space-y-2">
            <div className="flex items-center gap-4">
                <CircleCheckBig className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300">
                    Set up your account for free
                </span>
            </div>
            <div className="flex items-center gap-4">
                <Users className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300">
                    Add your first contact instantly
                </span>
            </div>
            <div className="flex items-center gap-4">
                <ArrowLeftRight className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300">
                    Log your first transaction
                </span>
            </div>
            <div className="flex items-center gap-4">
                <BarChart3 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300">
                    See your debt overview dashboard
                </span>
            </div>
        </div>
    </div>
    {/* Bottom */}

    <div className="relative z-6">
        <p className="text-sm text-slate-400">
            Free Plan includes 10 Contacts • 50 Transactions / Month
        </p>
        <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-sm text-slate-500">
                © 2026 DebtBook. All rights reserved.
            </p>
        </div>
    </div>
</div>
            {/* Right Side */}

            {/* ================= Register Form ================= */}

<div className="flex-1 flex items-center justify-center bg-white p-8">

    <div className="w-full max-w-md">

        {/* Mobile Logo */}

        <div className="flex items-center gap-3 mb-8 lg:hidden">

            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">

                <Wallet className="w-5 h-5 text-white"/>

            </div>
            <span className="text-1xl font-extrabold text-slate-900">
                DebtBook
            </span>
        </div>

        {/* Heading */}

        <h3 className="text-3xl font-extrabold !text-black text-slate-900">
            Create your account
        </h3>

        <p className="mt-2 mb-8 text-slate-500">
            Free forever. No credit card required.
        </p>

        {/* Form */}
        <form className="space-y-5">

            {/* Full Name */}

            <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"/>
                    <input
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Arjun Mehta"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                </div>

            </div>

            {/* Email */}

            <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">

                    Email Address

                </label>

                <div className="relative">

                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"/>

                    <input
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="arjun@gmail.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                </div>

            </div>

            {/* Phone */}

            <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">

                    Phone Number

                </label>

                <div className="relative">

                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"/>

                    <input
                        type="text"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                        placeholder="+91 98765 12345"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                </div>

            </div>

            {/* Password */}

            <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">

                    Password

                </label>

                <div className="relative">

                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"/>

                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        autoComplete="new-password"
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >

                        {showPassword ?

                            <EyeOff className="w-4 h-4"/>

                            :

                            <Eye className="w-4 h-4"/>

                        }

                    </button>

                </div>

            </div>

            {/* Checkbox */}

            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    className="mt-1 accent-blue-600"/>
                <p className="text-sm text-slate-500">
                    I agree to the
                    <a
                        href="#"
                        className="text-blue-600 font-medium hover:underline mx-1">
                        Terms of Service
                    </a>
                    and
                    <a
                        href="#"
                        className="text-blue-600 font-medium hover:underline ml-1">
                        Privacy Policy
                    </a>
                </p>
            </div>
            {/* Button */}

            <button
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg flex items-center justify-center gap-2"
             type="button"
onClick={handleRegister} >

                Create Free Account

                <ArrowRight className="w-4 h-4"/>

            </button>

        </form>

        {/* Footer */}

        <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account?
            <a
                href="/login"
                className="ml-2 font-bold text-blue-600 hover:text-blue-700">
                Sign In
            </a>
        </p>
    </div>
</div>
</div>

);
}
export default Register;
