import { useState } from "react";
import { LogOut, User, Mail, Lock, Upload } from "lucide-react";

function Account() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  const handleLogout = () => {
    console.log("Logging out...");
    // Your logout logic here
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-[var(--primary-text-color)]">Account Settings</h1>

      {/* Avatar Upload */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src="/default-avatar.png"
          alt="User Avatar"
          className="w-20 h-20 rounded-full border border-gray-300 object-cover"
        />
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
          <Upload size={18} />
          Change Avatar
        </button>
      </div>

      {/* Name Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-1 text-[var(--primary-text-color)]">Name</label>
        <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-[var(--input-bg)]">
          <User size={18} className="text-purple-500" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* Email Input */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-1 text-[var(--primary-text-color)]">Email</label>
        <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-[var(--input-bg)]">
          <Mail size={18} className="text-purple-500" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* Change Password */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-1 text-[var(--primary-text-color)]">Password</label>
        <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-[var(--input-bg)]">
          <Lock size={18} className="text-purple-500" />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* Save Changes Button */}
      <button className="w-full py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition mb-4">
        Save Changes
      </button>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 w-full py-2 rounded-md border text-red-500 hover:bg-red-50 transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}

export default Account;
