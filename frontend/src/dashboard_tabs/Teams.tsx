import { useState } from "react";
import {
  Users,
  Plus,
  UserPlus,
  User2,
  ArrowRight,
  X,
  Edit,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
const mockTeams = [
  { id: 1, name: "Frontend Ninjas", members: 5 },
  { id: 2, name: "Backend Brawlers", members: 3 },
  { id: 3, name: "DevOps Legends", members: 2 },
];

function Teams() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [isJoinTeamModelVisible, SetIsJoinTeamModelVisible] = useState(false);
  const [isCreateTeamModelVisible, SetIsCreateTeamModelVisible] =
    useState(false);
  const [joinTeamWithIDFormData, SetJoinTeamWithIDFormData] = useState({
    teamId: "",
  });
  const [isAdmin, ] = useState(true);


  const [createTeamFormData, SetCreateTeamFormData] = useState({
    teamName: "",
  });
  const teamMembers = [
    {
      id: "u1",
      name: "Ayush",
      email: "ayush@example.com",
      role: "Admin",
    },
    {
      id: "u2",
      name: "Divyanshu",
      email: "divyanshu@example.com",
      role: "Mod",
    },
    {
      id: "u3",
      name: "Kunal",
      email: "kunal@example.com",
      role: "Member",
    },
    {
      id: "u4",
      name: "Akshat",
      email: "akshat@example.com",
      role: "Member",
    },
    {
      id: "u5",
      name: "Surayansh",
      email: "surayansh@example.com",
      role: "Mod",
    },
  ];
  const [teamName, setTeamName] = useState(""); // Editable team name
  console.log(teamName);
  const [teamId, setTeamId] = useState(""); // Editable team ID
  // Array of team members
  const roles = ["Admin", "Mod", "Member"];

  // Change user role
  const handleRoleChange = (index: number) => {
    const updated = [...teamMembers];
    updated[index].role = updated[index].role === "Admin" ? "Member" : "Admin";
  };

  // Remove member
  const handleRemoveMember = (index: number) => {
    const updated = [...teamMembers];
    updated.splice(index, 1);
  };

  const handleTeamClick = (id: number) => {
    setSelectedTeamId(id === selectedTeamId ? null : id); // toggle select
  };
  const handleJoinTeamWithIDSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SetIsJoinTeamModelVisible(false);
  };
  const handleEditTeamSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // do something
  };
  const handleCreateTeamSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SetIsCreateTeamModelVisible(false);
  };
  return (
    <div className="w-full h-full  mt-[4rem] md:mt-0 p-3 md:p-0">
      <div className="max-w-6xl relative flex flex-col justify-center items-center mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-wrap gap-3 items-center justify-between ">
          <div>
            <h1 className="text-4xl font-bold text-gradient flex gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
              <User2 className="text-purple-500" size={38} /> Teams
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-base">
              Collaborate, assign tasks, and conquer bugs together.
            </p>
          </div>

          <div className="flex flex-wrap   gap-3">
            <button
              onClick={() => SetIsCreateTeamModelVisible(true)}
              className="flex items-center grow-1 text-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 !text-white rounded-xl transition"
            >
              <Plus size={18} /> Create Team
            </button>
            <button
              onClick={() => SetIsJoinTeamModelVisible(!isJoinTeamModelVisible)}
              className="flex items-center grow-1 text-center  justify-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 !text-white rounded-xl transition"
            >
              <UserPlus size={18} /> Join Team
            </button>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center relative">
          {/* JoinTeamModel */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: isJoinTeamModelVisible ? 1 : 0, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`${
              isJoinTeamModelVisible ? "flex" : "hidden"
            } absolute z-10 w-full h-[35rem] justify-center items-center bg-[var(--popup-bg-color)] backdrop-blur-2xl border rounded-lg`}
          >
            <form
              onSubmit={handleJoinTeamWithIDSubmit}
              className="mt-8 flex flex-col justify-center items-center gap-4 "
            >
              <button
                type="button"
                className="absolute rounded-full p-1 m-4 border-2 hover:opacity-100 opacity-60 top-0 right-0 z-20"
              >
                <X size={30} onClick={() => SetIsJoinTeamModelVisible(false)} />
              </button>

              <span className="text-[var(--primary-text-color) text-center mb-5 font-medium flex flex-col items-center justify-center mx-1]">
                <h1 className=" text-4xl ">Enter Your Team ID</h1>

                <p className="max-w-[70%] text-center text-[var(--secondary-text-color)]">
                  To join a team, you need a Team ID. which is generated by the
                  Team Leader or Admin. Ask them for the ID and enter it below
                  to get started!
                </p>
              </span>

              <div className="max-w-[60%] gap-4 flex flex-col justify-center items-center w-full">
                <input
                  type="password"
                  name="password"
                  required
                  className="mt-1 w-full rounded-md border px-4 py-2 bg-[#0000] text-[var(--primary-text-color)]  border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 "
                  value={joinTeamWithIDFormData.teamId}
                  onChange={(e) =>
                    SetJoinTeamWithIDFormData({ teamId: e.target.value })
                  }
                  placeholder="Team ID (ex: 1234XXXX)"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 !text-white font-semibold py-2 px-4 rounded-md shadow-md hover:opacity-90 transition-all"
                >
                  <span className="flex justify-center  items-center gap-3">
                    {" "}
                    Join Team <ArrowRight size={20} />
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* CreateTeamModel */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ x: 0, opacity: isCreateTeamModelVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`${
              isCreateTeamModelVisible ? "flex" : "hidden"
            } absolute z-10 w-full h-[35rem] justify-center items-center flex-col bg-[var(--popup-bg-color)] backdrop-blur-2xl border rounded-lg`}
          >
            <button
              onClick={() => SetIsCreateTeamModelVisible(false)}
              className="absolute rounded-full p-1 m-4 border-2 hover:opacity-100 opacity-60 top-0 right-0 z-20"
            >
              <X></X>
            </button>
            <span className="text-[var(--primary-text-color) text-center mb-5 font-medium flex flex-col items-center justify-center mx-1]">
              <h1 className=" text-4xl ">Create a New Team</h1>
            </span>
            <form onSubmit={handleCreateTeamSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium">Team Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={createTeamFormData.teamName}
                  onChange={(e) =>
                    SetCreateTeamFormData({ teamName: e.target.value })
                  }
                  className="mt-1 w-full rounded-md border px-4 py-2 bg-[#0000] text-[var(--primary-text-color)] border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 !text-white font-semibold py-2 px-4 rounded-md shadow-md hover:opacity-80 "
              >
                Create Team
              </motion.button>
            </form>
          </motion.div>

          {mockTeams.map((team) => {
            const isActive = selectedTeamId === team.id;
            return (
              <div
                key={team.id}
                onClick={() => handleTeamClick(team.id)}
                className={`aspect-square flex box-shadow-card  justify-center items-center cursor-pointer dark:hover:bg-purple-500/70   hover:bg-purple-500/10 bg-[var(--dash-card-bg-color)] p-4 rounded-xl border transition
                  ${
                    isActive
                      ? "border-purple-600 ring-2 ring-purple-400 shadow-lg border-3 bg-purple-500/10"
                      : "border-gray-300 dark:border-gray-700 hover:shadow-md"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <Users className="text-purple-500" size={36} />
                  <div>
                    <h2 className="text-2xl font-semibold">{team.name}</h2>
                    <p className="text-gray-400">{team.members} members</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* edit section  show only if user is admin of selected team */}

        {selectedTeamId && isAdmin && (
          <section className="p-6 max-w-4xl w-full mx-auto">
            <div className="flex justify-center items-center text-3xl gap-4 underline underline-offset-2 mb-6">
              <Edit />
              <h1 className="text-[var(--secondary-text-color)]">
                EDIT{" "}
                <span className="text-4xl">
                  {mockTeams.find((team) => team.id === selectedTeamId)?.name}
                </span>
              </h1>
            </div>

            <form onSubmit={handleEditTeamSubmit} className="space-y-6">
              {/* Team Name */}
              <div>
                <label className="block mb-1 font-medium text-lg">
                  Team Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-white text-black shadow-sm"
                  // value={editedTeamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>

              {/* Team ID */}
              <div>
                <label className="block mb-1 font-medium text-lg">
                  Team ID
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-white text-black shadow-sm"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                />
              </div>

              {/* Members List */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
                <ul className="space-y-4">
                  {teamMembers.map((member, idx) => (
                    <li
                      key={member.id}
                      className="flex items-center justify-between p-4 bg-gray-100 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
                          {member.name[0]}
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-gray-500">
                            {member.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Role Selector */}
                        <select
                          className="border rounded px-2 py-1"
                          value={member.role}
                          onChange={() => handleRoleChange(idx)}
                        >
                          {roles.map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>

                        {/* Remove button */}
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(idx)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </section>
        )}
      </div>
    </div>
  );
}

export default Teams;
