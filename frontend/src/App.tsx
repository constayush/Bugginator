import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Tasks from "./dashboard_tabs/Tasks";
import Projects from "./dashboard_tabs/Projects";
import Issues from "./dashboard_tabs/Issues";
import Teams from "./dashboard_tabs/Teams";
import Analytics from "./dashboard_tabs/Analytics";
import Notifications from "./dashboard_tabs/Notifications";
import Index from "./dashboard_tabs/Index";
import Account from "./dashboard_tabs/Accounts";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Index />} />
          <Route path="teams" element={<Teams />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="projects" element={<Projects />} />
          <Route path="issues" element={<Issues />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="accounts" element={<Account />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
