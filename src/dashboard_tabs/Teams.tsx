import { useState } from "react";
import { Users, Plus, UserPlus, User2 } from "lucide-react";

const mockTeams = [
  { id: 1, name: "Frontend Ninjas", members: 5 },
  { id: 2, name: "Backend Brawlers", members: 3 },
  { id: 3, name: "DevOps Legends", members: 2 },
];

function Teams() {
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  const handleTeamClick = (id: number) => {
    setSelectedTeamId(id === selectedTeamId ? null : id); // toggle select
  };

  return (
    <div className="w-full h-full  mt-[4rem] md:mt-0 p-3 md:p-0">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gradient flex gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
             <User2  className="text-purple-500" size={38} /> Teams 
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-base">
              Collaborate, assign tasks, and conquer bugs together.
            </p>
          </div>

          <div className="flex flex-wrap   gap-3">
            <button className="flex items-center grow-1 text-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 !text-white rounded-xl transition">
              <Plus size={18} /> Create Team
            </button>
            <button className="flex items-center grow-1 text-center  justify-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 !text-white rounded-xl transition">
              <UserPlus size={18} /> Join Team
            </button>
          </div>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mockTeams.map((team) => {
            const isActive = selectedTeamId === team.id;
            return (
              <div
                key={team.id}
                onClick={() => handleTeamClick(team.id)}
                className={`aspect-square flex box-shadow-card  justify-center items-center cursor-pointer  hover:bg-purple-500/10 bg-[var(--dash-card-bg-color)] p-4 rounded-xl border transition
                  ${isActive ? "border-purple-600 ring-2 ring-purple-400 shadow-lg" : "border-gray-300 dark:border-gray-700 hover:shadow-md"}
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
      </div>
    </div>
  );
}

export default Teams;
