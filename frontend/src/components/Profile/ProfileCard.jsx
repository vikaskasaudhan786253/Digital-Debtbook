import {
  Calendar,
  MapPin,
  Pencil,
} from "lucide-react";

const user = {
  name: "Arjun Mehta",
  email: "arjun.mehta@gmail.com",
  location: "Mumbai, India",
  joined: "January 2024",
};

export default function ProfileCard() {
  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 md:flex-row md:items-start">

        {/* Avatar */}

        <div className="relative">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
            {initials}
          </div>

          <button className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 shadow-md transition hover:bg-blue-700">
            <Pencil className="h-3.5 w-3.5 text-white" />
          </button>

        </div>

        {/* User Info */}

        <div className="flex-1">

          <h2 className="text-2xl font-bold text-slate-900">
            {user.name}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {user.email}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">

            <span className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" />
              {user.location}
            </span>

            <span className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs text-slate-500">
              <Calendar className="h-3.5 w-3.5" />
              Joined {user.joined}
            </span>

          </div>

        </div>

        {/* Edit Button */}

        <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          <Pencil className="h-4 w-4" />
          Edit
        </button>

      </div>

    </div>
  );
}
