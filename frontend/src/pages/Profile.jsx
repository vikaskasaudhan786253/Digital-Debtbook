// import Navbar from "../components/Navbar";

// import ProfileHeader from "../components/ProfileHeader";
// import PersonalInfoCard from "../components/PersonalInfoCard";
// import ChangePasswordCard from "../components/ChangePasswordCard";
// import AccountOverview from "../components/AccountOverview";

// function Profile() {

//     return (

//         <div className="flex min-h-screen bg-slate-100">

//             {/* Sidebar */}

//             <Navbar />

//             {/* Main Content */}

//             <div className="flex-1">

//                 {/* Top Header */}

//                 <div className="
//                     bg-white
//                     border-b
//                     px-8
//                     py-5
//                     flex
//                     justify-between
//                     items-center
//                 ">

//                     <h1 className="
//                         text-3xl
//                         font-bold
//                     ">
//                         Profile
//                     </h1>

//                     <div className="flex items-center gap-5">

//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             className="
//                                 border
//                                 rounded-full
//                                 px-5
//                                 py-2
//                                 w-64
//                                 outline-none
//                             "
//                         />

//                         <button className="text-xl">
//                             🔔
//                         </button>

//                         <div className="
//                             w-10
//                             h-10
//                             rounded-full
//                             bg-blue-600
//                             text-white
//                             flex
//                             items-center
//                             justify-center
//                             font-bold
//                         ">
//                             AM
//                         </div>

//                     </div>

//                 </div>

//                 {/* Body */}

//                 <div className="p-8 space-y-6">

//                     <ProfileHeader />

//                     <PersonalInfoCard />

//                     <ChangePasswordCard />

//                     <AccountOverview />

//                 </div>

//             </div>

//         </div>

//     );

// }

// export default Profile;



import DashboardLayout from "../components/Dashboard/DashboardLayout";
import ProfileContent from "../components/Profile/ProfileContent";

export default function Profile() {
  return (
    <DashboardLayout title="Profile">
      <ProfileContent />
    </DashboardLayout>
  );
}
