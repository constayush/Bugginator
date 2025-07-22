import { LogOut, Mail, User, Lock, X } from "lucide-react";
import useAuth  from "../context/useAuth";
import { useNavigate, Link } from "react-router";
import { motion } from "framer-motion";
function Account() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handlePasswordReset = () => {
    alert("Password reset flow coming soon!");
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 50, overflowY: "hidden" }}
      animate={{ opacity: 1, y: 0, overflowY: "auto" }}
      transition={{ duration: 0.5 }}
    className="flex justify-center items-center min-h-screen bg-[var(--background-color)] px-4 relative">
      <div
      
      className="w-full md:max-w-2xl py-40 md:py-10 bg-[var(--container-color)] text-[var(--primary-text-color)] backdrop-blur-xl shadow-xl border border-[var(--border-color)] rounded-2xl p-8 space-y-6 transition-all">
        <Link
          to="/dashboard"
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[var(--container-color)] border shadow-2xl  border-[#929292] transition z-99 text-red-500 hover:text-[var(--primary-color)]"
          title="Back to Dashboard"
        >
          <X size={20} />
        </Link>
        <div className="absolute w-[40%] blur-[100px] overflow-hidden h-[40%] right-0 bg-gradient-to-r from-[#ff8080]/20 via-[#7dfce7]/20 to-[#b282ff]/20"></div>
        <div className="absolute w-[40%] blur-[100px] overflow-hidden h-[40%] bg-gradient-to-r from-[#7dfce7]/20 via-[#ff8080]/20 to-[#b282ff]/20"></div>
        {/* Header */}
       
        <div className="text-center">
          <h1 className="text-3xl font-semibold">Account</h1>
          <p className="text-sm text-[var(--secondary-text-color)] mt-1">
            Manage your profile
          </p>
        </div>

        {/* User Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User size={22} className="text-[var(--icon-muted)]" />
            <div>
              <p className="font-medium text-xl">{user?.name || "User Name"}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={22} className="text-[var(--icon-muted)]" />
            <div>
              <p className="font-medium text-xl">{user?.email || "Email"}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-6">
          <button
            onClick={handlePasswordReset}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition"
          >
            <Lock size={18} /> Reset Password
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-red-400 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Account;
