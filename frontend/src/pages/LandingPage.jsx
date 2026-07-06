import { Link } from "react-router-dom";

import {
  Wallet,
  Users,
  Heart,
  ArrowLeftRight,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ArrowRight } from "lucide-react";

function LandingPage() {

    const faqs = [
  {
    question: "Is DebtBook free to use?",
    answer:
      "Yes. DebtBook offers a free plan for individuals. Premium features are available for power users and businesses."
  },
  {
    question: "How secure is my financial data?",
    answer:
      "Your data is encrypted using industry-standard security practices and protected through secure authentication."
  },
  {
    question: "Can I export my data?",
    answer:
      "Absolutely. You can export transactions and reports as PDF or CSV whenever you need."
  },
  {
    question: "Does DebtBook send reminders?",
    answer:
      "Yes. You can receive reminders for pending payments and upcoming due dates."
  },
  {
    question: "Can I use DebtBook on mobile?",
    answer:
      "Yes. DebtBook works beautifully on desktop, tablet and mobile devices."
  }
];

const [open, setOpen] = useState(0);

    return (

        <div className="min-h-screen bg-[#08122E]">

            {/* Navbar */}

            <nav className="fixed top-0 left-0 w-full bg-white h-14 flex items-center justify-between px-16 shadow-sm z-50">

                <div className="flex items-center gap-3">

                    <div className="
                    w-10
                    h-10
                    rounded-full
                    bg-blue-600
                    flex
                    items-center
                    justify-center
                    text-white
                    text-xl
                    ">
                        <Wallet className="w-6 h-6"/>
                    </div>

                    <h2 className="text-sm font-bold !text-black tracking-tight ">
  DebtBook
</h2>

                </div>

                <div className="
                hidden
                md:flex
                items-center
                gap-10
                text-lg
                text-black
                ">

                    <a href="/features">
                        Features
                    </a>

                    <a href="/pricing">
                        Pricing
                    </a>

                    <a href="/about">
                        About
                    </a>

                    <a href="/blog">
                        Blog
                    </a>

                </div>

                <div className="
                flex
                items-center
                gap-8
                ">

                    <Link
                        to="/login"
                        className="
                        text-slate-900
                        font-medium
                        "
                    >
                        Log In
                    </Link>

                    <Link
                        to="/register"
                        className="
                        bg-blue-600
                        text-white
                        px-4
                        py-1
                        rounded-full
                        font-semibold
                        "
                    >
                        Get Started
                    </Link>

                </div>

            </nav>

{/* ================= Hero Section ================= */}

<section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-24 pb-28">

  {/* Background Blur Effects */}

  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"></div>

    <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl"></div>

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-blue-900/20 blur-3xl"></div>

  </div>

  {/* Container */}

  <div className="relative w-full px-8 lg:px-12 xl:px-16">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}

<div>

  {/* Badge */}

            <div className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-md
                px-4
                py-2
                text-xs
                font-semibold
                shadow-lg
                shadow-blue-500/10
                mb-8
                transition-all
                duration-300
                hover:bg-white/15
                hover:border-white/30
                ">

    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

    Trusted by 50,000+ users across India

  </div>

  {/* Heading */}

  <h1 className="
            text-5xl
            lg:text-7xl
            font-extrabold
            leading-tight
            tracking-tight
            animate-fadeIn
            ">

    Track Every Rupee.

    <br />

    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">

      Settle Every Debt.

    </span>

  </h1>

  {/* Description */}

  <p className="mt-8 max-w-xl text-lg lg:text-xl leading-8 text-slate-300">

    The easiest way to track every rupee you've lent or borrowed.

    Stay organized, avoid forgotten payments, and know exactly who owes you money—all in one secure place.

  </p>

  {/* Buttons */}

  <div className="mt-10 flex flex-wrap gap-4">

    <Link
  to="/register"
  className="
    group
    inline-flex
    items-center
    gap-2
    rounded-xl
    bg-blue-600
    px-8
    py-4
    font-semibold
    text-white
    shadow-xl
    shadow-blue-600/30
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-blue-500
    hover:shadow-blue-500/50
"
>

Start for Free

<span className="transition-transform duration-300 group-hover:translate-x-1">
→
</span>

</Link>
    <Link
      to="/dashboard"
      className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
    >
      View Demo
    </Link>
  </div>
  {/* Trust Indicators */}
  <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
    <div className="flex items-center gap-2">
      <span className="text-emerald-400">✓</span>
      No Credit Card
    </div>
    <div className="flex items-center gap-2">
      <span className="text-emerald-400">✓</span>
      Free Forever
    </div>
    <div className="flex items-center gap-2">
      <span className="text-emerald-400">✓</span>
      100% Secure
    </div>
  </div>
</div>
      {/* RIGHT SIDE */}
<div className="relative hidden lg:block animate-[float_6s_ease-in-out_infinite]">

    {/* Blue Glow */}
  <div className="absolute right-10 top-16 w-96 h-96 rounded-full bg-blue-500/20 blur-[140px]"></div>

  <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-5 shadow-2xl">

    <div className="rounded-2xl bg-[#0f172a] p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-lg">
            <Wallet className="w-6 h-6"/>
          </div>

          <div>

            <h3 className="font-bold text-white">
              DebtBook
            </h3>

            <p className="text-xs text-slate-400">
              Personal Finance
            </p>

          </div>

        </div>

        <div className="flex gap-2">

          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 gap-4">

        <div className="
                rounded-xl
                bg-white/5
                border
                border-white/10
                p-4
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-white/10
                hover:border-blue-400/30
                ">

          <p className="text-xs text-slate-400">
            Total Given
          </p>

          <h2 className="mt-1 text-2xl font-bold text-blue-400">
            ₹62.5K
          </h2>

        </div>

        <div className="
            rounded-xl
            bg-white/5
            border
            border-white/10
            p-4
            transition-all
            duration-300
            hover:-translate-y-2
            hover:bg-white/10
            hover:border-blue-400/30
            ">

          <p className="text-xs text-slate-400">
            Total Borrowed
          </p>

          <h2 className="mt-1 text-2xl font-bold text-yellow-400">
            ₹36.5K
          </h2>

        </div>

        <div className="
                rounded-xl
                bg-white/5
                border
                border-white/10
                p-4
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-white/10
                hover:border-blue-400/30
                ">

          <p className="text-xs text-slate-400">
            Net Balance
          </p>

          <h2 className="mt-1 text-2xl font-bold text-emerald-400">
            ₹26K
          </h2>

        </div>

        <div className="
                rounded-xl
                bg-white/5
                border
                border-white/10
                p-4
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-white/10
                hover:border-blue-400/30
                ">

          <p className="text-xs text-slate-400">
            People
          </p>

          <h2 className="mt-1 text-2xl font-bold text-purple-400">
            8
          </h2>

        </div>

      </div>

      {/* Monthly Overview */}

      <div className="
            rounded-xl
            bg-white/5
            border
            border-white/10
            p-4
            transition-all
            duration-300
            hover:-translate-y-2
            hover:bg-white/10
            hover:border-blue-400/30

            ">

        <p className="text-xs text-slate-400 mb-4">
          Monthly Overview
        </p>

        <div className="flex items-end gap-2 h-24">

          <div className="flex-1 h-10 rounded bg-blue-500/60"></div>

          <div className="flex-1 h-16 rounded bg-yellow-500/60"></div>

          <div className="flex-1 h-12 rounded bg-blue-500/60"></div>

          <div className="flex-1 h-20 rounded bg-yellow-500/60"></div>

          <div className="flex-1 h-14 rounded bg-blue-500/60"></div>

          <div className="flex-1 h-24 rounded bg-yellow-500/60"></div>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="mt-6 space-y-3">

        <div className="flex items-center justify-between border-b border-white/5 pb-3">

          <div>

            <h4 className="text-sm font-semibold text-white">
              Rajesh Kumar
            </h4>

            <p className="text-xs text-slate-400">
              Money Given
            </p>
          </div>
          <span className="font-semibold text-blue-400">
            + ₹5,000
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <div>
            <h4 className="text-sm font-semibold text-white">
              Priya Sharma
            </h4>
            <p className="text-xs text-slate-400">
              Money Borrowed
            </p>
          </div>
          <span className="font-semibold text-yellow-400">
            - ₹8,000
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-white">
              Amit Patel
            </h4>
            <p className="text-xs text-slate-400">
              Payment Received
            </p>
          </div>
          <span className="font-semibold text-emerald-400">
            + ₹12,000
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
    {/* 👇 Scroll Indicator goes HERE */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
      <div className="w-1 h-2 mt-2 rounded-full bg-white animate-bounce"></div>
    </div>
  </div>
</section>


{/* ================= Statistics Section ================= */}
<section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-20">

  {/* Background Glow */}

    <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/4 top-0 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute right-1/4 bottom-0 w-80 h-80 rounded-full bg-cyan-300/10 blur-3xl"></div>

    </div>

    <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card */}

            <div className="group rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">

                <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
                50,000+
                </h2>

                <p className="mt-3 text-blue-100 font-medium tracking-wide">
                Active Users
                </p>

            </div>

      {/* Card */}

            <div className="group rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">

                <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
                ₹500Cr+
                </h2>

                <p className="mt-3 text-blue-100 font-medium tracking-wide">
                Amount Tracked
                </p>

            </div>

      {/* Card */}

            <div className="group rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">

                <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
                2M+
                </h2>

                <p className="mt-3 text-blue-100 font-medium tracking-wide">
                Transactions
                </p>

            </div>

      {/* Card */}

            <div className="group rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">

                <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
                99.9%
                </h2>

                <p className="mt-3 text-blue-100 font-medium tracking-wide">
                Uptime
                </p>

            </div>

        </div>

    </div>
</section>

{/* ================= Features Section ================= */}

<section className="bg-white py-24">

  {/* Heading */}

        <div className="max-w-3xl mx-auto text-center mb-20 px-6">
            <h2 className="text-4xl font-extrabold !text-black text-slate-900 leading-tight">
                Everything you need to manage debts
            </h2>
            <p className="mt-5 text-lg text-slate-500 leading-8 max-w-2xl mx-auto">
            Built for individuals, families and small businesses
            who need clarity on their <br/>
            financial relationships.
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


  {/* Cards */}

        <div className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-xl">

        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">

            <Wallet className="w-6 h-6"/>

        </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
                Smart Debt Tracking
            </h3>
            <p className="text-slate-500 text-sm leading-7">
                Track every rupee given or borrowed
                with notes, reminders and due dates.
            </p>
        </div>

        <div className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-purple-200 hover:shadow-xl">

        <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
            <Users className="w-6 h-6"/>
        </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
                People Management
            </h3>
            <p className="text-slate-500 text-sm leading-7">
                Organize contacts and instantly see
                balances and pending payments.
            </p>
        </div>

        <div className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl">

        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">

            <ArrowLeftRight className="w-6 h-6"/>
        </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
                Transaction History
            </h3>
            <p className="text-slate-500 text-sm leading-7">
                Search and filter every transaction
                by person, amount and date.
            </p>
        </div>

        <div className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-amber-200 hover:shadow-xl hover:-translate-y-1">

        <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
            <BarChart3 className="w-6 h-6" />
        </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
                Insightful Reports
            </h3>
            <p className="text-slate-500 text-sm leading-7">
                Visualize lending and borrowing with
                beautiful charts. Export reports
                as PDF or CSV anytime.
            </p>
        </div>

        <div className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-red-200 hover:shadow-xl hover:-translate-y-1">

        <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
            <Shield className="w-6 h-6"/>
        </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
                Bank-Grade Security
            </h3>
            <p className="text-slate-500 text-sm leading-7">
                Your data is encrypted with AES-256
                and protected by JWT authentication.
            </p>
        </div>

        <div className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-cyan-200 hover:shadow-xl hover:-translate-y-1">

        <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
            <Zap className="w-6 h-6"/>
        </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
                Lightning Fast
            </h3>
            <p className="text-slate-500 text-sm leading-7">
                Manage hundreds of contacts and
                thousands of transactions with
                blazing-fast performance.
            </p>
        </div>

        </div>
    </div>

</section>

{/* Testimonials Section */}

{/* ================= Testimonials ================= */}

<section className="bg-slate-50 py-24">

    {/* Heading */}

    <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl !text-black font-extrabold text-slate-900">
                Loved by thousands of users
            </h2>

            <p className="mt-4 text-lg text-slate-500">
                Real people. Real stories.
            </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}

            <div className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200">

                <div className="flex gap-1 text-amber-400 mb-5 text-lg">
                    ★★★★★
                </div>

                <p className="text-slate-600 leading-7 text-sm">

                    "DebtBook completely transformed how I manage
                    loans with suppliers and customers.
                    The dashboard gives instant visibility
                    into who owes what."

                </p>

                <div className="flex items-center gap-4 mt-8">

                    <div className="w-11 h-11 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">

                        SM

                    </div>

                    <div>

                        <h4 className="font-bold text-slate-900">

                            Suresh Menon

                        </h4>

                        <p className="text-xs text-slate-400">

                            Small Business Owner · Bangalore

                        </p>

                    </div>

                </div>

            </div>

            {/* Card 2 */}

            <div className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-200">

                <div className="flex gap-1 text-amber-400 mb-5 text-lg">
                    ★★★★★
                </div>

                <p className="text-slate-600 leading-7 text-sm">

                    "I used to forget small loans between
                    friends. DebtBook keeps everything
                    organized. It's like having a personal
                    accountant in my pocket."

                </p>

                <div className="flex items-center gap-4 mt-8">

                    <div className="w-11 h-11 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center">

                        AK

                    </div>

                    <div>

                        <h4 className="font-bold text-slate-900">

                            Ananya Krishnan

                        </h4>

                        <p className="text-xs text-slate-400">

                            Freelance Designer · Chennai

                        </p>

                    </div>

                </div>

            </div>

            {/* Card 3 */}

            <div className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-200">

                <div className="flex gap-1 text-amber-400 mb-5 text-lg">
                    ★★★★★
                </div>

                <p className="text-slate-600 leading-7 text-sm">

                    "The reports feature is incredibly
                    powerful. I can see lending patterns
                    over months and make smarter
                    financial decisions."

                </p>

                <div className="flex items-center gap-4 mt-8">
                    <div className="w-11 h-11 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center">
                        DA
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900">
                            Deepak Agarwal
                        </h4>
                        <p className="text-xs text-slate-400">
                            Software Engineer · Pune
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* FAQ Section */}

{/* ================= FAQ ================= */}

<section className="bg-white py-24">

    <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

            <h2 className="text-4xl lg:text-5xl !text-black font-extrabold text-slate-900">

                Frequently Asked Questions

            </h2>

            <p className="mt-4 text-lg text-slate-500">

                Everything you need to know about DebtBook.

            </p>

        </div>

        {/* Accordion */}

        <div className="space-y-4">

            {faqs.map((faq, index) => (

                <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >

                    <button
                        onClick={() =>
                            setOpen(open === index ? -1 : index)
                        }
                        className="w-full flex items-center justify-between px-6 py-5 text-left"
                    >

                        <h3 className="font-semibold text-slate-900 text-lg">

                            {faq.question}

                        </h3>

                        <ChevronDown
                            className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                                open === index ? "rotate-180" : ""
                            }`}
                        />

                    </button>

                    <div
                        className={`grid transition-all duration-300 ${
                            open === index
                                ? "grid-rows-[1fr]"
                                : "grid-rows-[0fr]"
                        }`}
                    >

                        <div className="overflow-hidden">

                            <p className="px-6 pb-6 text-slate-500 leading-7">

                                {faq.answer}

                            </p>

                        </div>

                    </div>

                </div>

            ))}

        </div>

    </div>

</section>
{/* CTA Section */}

{/* ================= Call To Action ================= */}

<section className="bg-slate-50 py-24">

    <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-8 py-16 lg:px-16 text-center shadow-2xl">

            {/* Background Glow */}

            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

            {/* Content */}

            <div className="relative z-10">

                <span className="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-md">

                    🚀 Trusted by 50,000+ users

                </span>

                <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-white leading-tight">

                    Ready to take control
                    <br />

                    of your finances?

                </h2>

                <p className="mt-6 max-w-2xl mx-auto text-lg text-blue-100 leading-8">

                    Join thousands of individuals, families and businesses
                    who use DebtBook to manage lending, borrowing and
                    financial relationships with confidence.

                </p>

                <div className="mt-10">

                    <a
                        href="/register"
                        className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-100"
                    >

                        Get Started Free

                        <ArrowRight className="w-5 h-5" />

                    </a>

                </div>

            </div>

        </div>

    </div>

</section>

{/* Footer */}

{/* ================= Footer ================= */}

<footer className="bg-[#020B25] text-white pt-20 pb-8">

    <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">

            {/* Brand */}

            <div>

                <div className="flex items-center gap-3 mb-6">

                    <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">

                        <Wallet className="w-5 h-5 text-white" />

                    </div>

                    <h2 className="text-2xl font-bold text-white">

                        DebtBook

                    </h2>

                </div>

                <p className="text-slate-400 leading-7 text-sm">
                    The modern way to track personal and business
                    debts. Built with love in India for individuals,
                    families and businesses.
                </p>
            </div>

            {/* Product */}

            <div>

                <h3 className="text-white font-bold text-lg mb-5">

                    Product

                </h3>

                <ul className="space-y-3">

                    {["Features", "Pricing", "Changelog", "Roadmap"].map((item) => (

                        <li key={item}>

                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors duration-300"
                            >

                                {item}

                            </a>

                        </li>

                    ))}

                </ul>

            </div>

            {/* Company */}

            <div>

                <h3 className="text-white font-bold text-lg mb-5">

                    Company

                </h3>

                <ul className="space-y-3">

                    {["About", "Blog", "Careers", "Press"].map((item) => (

                        <li key={item}>

                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors duration-300"
                            >

                                {item}

                            </a>

                        </li>

                    ))}

                </ul>

            </div>

            {/* Support */}

            <div>

                <h3 className="text-white font-bold text-lg mb-5">

                    Support

                </h3>

                <ul className="space-y-3">

                    {[
                        "Help Center",
                        "Privacy Policy",
                        "Terms of Service",
                        "Contact",
                    ].map((item) => (

                        <li key={item}>

                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors duration-300"
                            >

                                {item}

                            </a>

                        </li>

                    ))}

                </ul>

            </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
                © 2026 DebtBook. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-400">
                Made with
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                by Vikas Kasaudhan
            </p>
        </div>
    </div>
</footer>
</div>

    );
}

export default LandingPage;
