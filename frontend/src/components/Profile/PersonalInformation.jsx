import { User, Mail, Phone } from "lucide-react";

const user = {
  name: "Arjun Mehta",
  email: "arjun.mehta@gmail.com",
  phone: "+91 98765 12345",
};

export default function PersonalInformation() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

      {/* Heading */}

      <h3 className="mb-5 text-lg font-bold text-slate-900">
        Personal Information
      </h3>

      <div className="space-y-5">

        {/* Full Name */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Full Name
          </label>

          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={user.name}
              disabled
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900"
            />
          </div>
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email Address
          </label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="email"
              value={user.email}
              disabled
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900"
            />
          </div>
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Phone Number
          </label>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={user.phone}
              disabled
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
