import { LogOut, Mail, User, Lock, Clock, UserCheck } from "lucide-react";
import { useAuthStore } from '../store/useAuthStore';
import { motion } from "framer-motion";

function Account() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const userName = user?.name;
  const userEmail = user?.email;
  const userCreatedAt = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "N/A";

  const userIsVerified = user?.isVerified ? "Verified" : "Not Verified";

  const handleLogout = () => {
    logout();
  };

  const handlePasswordReset = () => {
    alert("Password reset flow coming soon!");
  };

  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center bg-[var(--background-color)] relative mt-30 md:mt-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute w-96 h-96 bg-gradient-to-r from-pink-400/10 via-cyan-300/10 to-purple-400/10 blur-[120px] rounded-full -top-10 -right-10 z-0"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/10 via-pink-300/10 to-cyan-400/10 blur-[120px] rounded-full -bottom-10 -left-10 z-0"
      ></motion.div>

      <div className="relative z-10 w-full max-w-2xl bg-[var(--container-color)] rounded-3xl shadow-xl border border-[var(--border-color)] backdrop-blur-2xl p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">👤 Your Account</h1>
        </div>

        {/* User Info */}
        <div className="space-y-5">
          {[
            {
              icon: <User className="text-[var(--primary-text-color)]" />,
              label: "Name",
              value: userName || "User",
            },
            {
              icon: <Mail className="text-[var(--primary-text-color)]" />,
              label: "Email",
              value: userEmail || "Email",
            },
            {
              icon: <Clock className="text-[var(--primary-text-color)]" />,
              label: "Joined On",
              value: userCreatedAt,
            },
            {
              icon: <UserCheck className="text-[var(--primary-text-color)]" />,
              label: "Verification",
              value: userIsVerified,
            },
          ].map((info, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl bg-[var(--dash-card-bg-color)] border border-[var(--border-color)] hover:shadow-md transition"
            >
              <div className="bg-[var(--icon-muted)] p-2 rounded-full text-white">
                {info.icon}
              </div>
              <div>
                <p className="text-sm text-[var(--secondary-text-color)]">
                  {info.label}
                </p>
                <p className="text-xl font-semibold text-[var(--primary-text-color)]">
                  {info.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <button
            onClick={handlePasswordReset}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500 text-white font-semibold transition hover:brightness-110 shadow-md"
          >
            <Lock size={18} /> Reset Password
          </button>

          <button
            onClick={handleLogout}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg border border-red-400 text-red-500 hover:bg-red-500/40 transition shadow-sm"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Account;
