// import Navbar from "../components/Navbar";

// import AppearanceCard from "../components/AppearanceCard";
// import NotificationCard from "../components/NotificationCard";
// import SecurityCard from "../components/SecurityCard";
// import PreferenceCard from "../components/PreferenceCard";

// function Settings() {

//     return (

//         <div className="flex min-h-screen bg-slate-100">

//             {/* Sidebar */}

//             <Navbar />

//             {/* Main */}

//             <div className="flex-1">

//                 {/* Top Header */}

//                 <div
//                     className="
//                     bg-white
//                     border-b
//                     px-8
//                     py-4
//                     flex
//                     justify-between
//                     items-center
//                     "
//                 >

//                     <h1
//                         className="
//                         text-3xl
//                         font-bold
//                         "
//                     >
//                         Settings
//                     </h1>

//                     <div className="flex items-center gap-5">

//                         <input

//                             type="text"

//                             placeholder="Search..."

//                             className="
//                             border
//                             rounded-full
//                             px-5
//                             py-2
//                             w-64
//                             outline-none
//                             "

//                         />

//                         <button className="text-xl">
//                             🔔
//                         </button>

//                         <div
//                             className="
//                             w-10
//                             h-10
//                             rounded-full
//                             bg-blue-600
//                             text-white
//                             flex
//                             items-center
//                             justify-center
//                             font-bold
//                             "
//                         >
//                             AM
//                         </div>

//                     </div>

//                 </div>

//                 {/* Content */}

//                 <div className="p-8 space-y-6">

//                     <AppearanceCard />

//                     <NotificationCard />

//                     <SecurityCard />

//                     <PreferenceCard />

//                 </div>

//             </div>

//         </div>

//     );

// }

// export default Settings;





import DashboardLayout from "../components/Dashboard/DashboardLayout";
import SettingsContent from "../components/Settings/SettingsContent";

export default function Reports() {
  return (
    <DashboardLayout title="Settings">
      <SettingsContent />
    </DashboardLayout>
  );
}
