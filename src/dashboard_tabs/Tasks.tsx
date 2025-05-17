import { CheckCircle, Clock, Trash2, PlusCircle, ClipboardCheck } from "lucide-react";

const dummyTasks = [
  {
    id: 1,
    title: "Fix login bug",
    description: "Resolve the token mismatch issue during login",
    status: "In Progress",
    due: "2025-05-20",
  },
  {
    id: 2,
    title: "Design new dashboard UI",
    description: "Implement dark mode and responsive layout",
    status: "Completed",
    due: "2025-05-18",
  },
  {
    id: 3,
    title: "Add role-based auth",
    description: "Different permissions for admin and devs",
    status: "Pending",
    due: "2025-05-25",
  },
];

export default function Tasks() {
  return (
    <div className="w-full h-[200vh] space-y-6">
      <div className="flex items-center justify-between">
         <h2 className="text-4xl font-bold flex items-center gap-3 text-[var(--primary-text-color)]">
        <ClipboardCheck  className="text-purple-500" size={38}/>
        Your Tasks
      </h2>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 !text-white rounded-md shadow">
          <PlusCircle size={18} /> New Task
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyTasks.map((task) => (
          <div
            key={task.id}
            className="bg-[var(--dash-card-bg-color)] box-shadow-card p-4 rounded-lg border border-gray-300 dark:border-gray-700 shadow flex flex-col gap-3 hover:bg-purple-500/10 transition"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-2xl">{task.title}</h3>
              {task.status === "Completed" ? (
                <CheckCircle className="text-green-500" />
              ) : task.status === "In Progress" ? (
                <Clock className="text-yellow-500" />
              ) : (
                <Clock className="text-gray-400" />
              )}
            </div>
            <p className=" opacity-80">{task.description}</p>
            <div className="flex justify-between items-center text-sm pt-2 border-t border-gray-300 dark:border-gray-700">
              <span className="opacity-60">Due: {task.due}</span>
              <button className="text-red-500 hover:text-red-600">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
