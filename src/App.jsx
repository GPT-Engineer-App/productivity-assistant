import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Calendar, CheckSquare, FileText, Settings, UserPlus, User, BookOpen, Users, Target } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Tasks from "./pages/Tasks.jsx";
import CalendarPage from "./pages/Calendar.jsx";
import Notes from "./pages/Notes.jsx";
import SettingsPage from "./pages/Settings.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import PartnerPairing from "./pages/PartnerPairing.jsx";
import PerformanceAppraisal from "./pages/PerformanceAppraisal.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Tasks",
    to: "/tasks",
    icon: <CheckSquare className="h-4 w-4" />,
  },
  {
    title: "Calendar",
    to: "/calendar",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Notes",
    to: "/notes",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    title: "Register",
    to: "/register",
    icon: <UserPlus className="h-4 w-4" />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Onboarding",
    to: "/onboarding",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Partner Pairing",
    to: "/partner-pairing",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Performance Appraisal",
    to: "/performance-appraisal",
    icon: <Target className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="notes" element={<Notes />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
              <Route path="onboarding" element={<Onboarding />} />
              <Route path="partner-pairing" element={<PartnerPairing />} />
              <Route path="performance-appraisal" element={<PerformanceAppraisal />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;