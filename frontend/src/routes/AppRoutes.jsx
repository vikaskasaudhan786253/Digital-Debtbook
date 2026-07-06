import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Register from "../pages/Register";

import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";

import PersonDetails from "../pages/PersonDetails";

import Reports from "../pages/Reports";

import Backup from "../pages/Backup";

import Reminders from "../pages/Reminders";

import LandingPage from "../pages/LandingPage";

import Features from "../components/Features";

import Pricing from "../components/Pricing";

import About from "../components/About";

import Blog from "../components/Blog";

import People from "../pages/People";

import Transactions from "../pages/Transactions";

import Profile from "../pages/Profile";

import Settings from "../pages/Settings";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
    path="/"
    element={<LandingPage />}
/>              <Route
                    path = "/features"
                    element={<Features/>}/>
                <Route
                    path = "/about"
                    element={<About/>}/>
                <Route
                    path = "/pricing"
                    element={<Pricing/>}/>
                <Route
                    path = "/blog"
                    element={<Blog/>}/>
                <Route
                    path="/register"
                    element={<Register />}/>
                <Route
                    path="/login"
                    element={<Login />}/>
                <Route
                    path="/dashboard"
                    element={<Dashboard />}/>
                <Route
                    path="/dashboard/people"
                    element={<People />}/>
                <Route
                    path="/dashboard/transactions"
                    element={<Transactions />}/>
                 <Route
                    path="/dashboard/reports"
                    element={<Reports />}/>
                <Route
                    path="/dashboard/profile"
                    element={<Profile />}/>
                <Route
                    path="/dashboard/settings"
                    element={<Settings />}/>

                <Route
                    path="/dashboard/people/:id"
                    element={<PersonDetails />}
                />


                <Route path="/backup"
                 element={<Backup />}/>

                <Route path="/reminders"
                 element={<Reminders />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
