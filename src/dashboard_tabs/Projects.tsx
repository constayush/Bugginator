import { FolderKanban, Pencil, Eye } from "lucide-react";

const mockProjects = [
  {
    id: 1,
    name: "Bug Tracker Pro",
    description: "A powerful issue tracking system for agile teams.",
    status: "Active",
  },
  {
    id: 2,
    name: "Client CRM",
    description: "Manage client interactions and project timelines.",
    status: "In Progress",
  },
  {
    id: 3,
    name: "AI Image Gallery",
    description: "Image generation & showcase app with Unsplash integration.",
    status: "Completed",
  },
];

function Projects() {
  return (
    <div className="space-y-6 ">
      <h2 className="text-4xl font-bold flex items-center gap-3 text-[var(--primary-text-color)]">
        <FolderKanban className="text-purple-500" size={38} />
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[var(--dash-card-bg-color)] p-4 rounded-lg border  border-gray-300 dark:border-gray-700 box-shadow-card hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className=" opacity-75 mb-3">{project.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span
                className={`px-2 py-1 rounded-md font-medium ${
                  project.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : project.status === "Completed"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
              <div className="flex gap-2">
                <button className="text-blue-500 hover:text-blue-700 transition">
                  <Eye size={16} />
                </button>
                <button className="text-purple-500 hover:text-purple-700 transition">
                  <Pencil size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
