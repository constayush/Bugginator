import { Bug, AlertCircle, CheckCircle2 } from "lucide-react";

const issues = [
  {
    id: 1,
    title: "App crashes on invalid token",
    description: "JWT validation fails silently and throws a 500.",
    status: "Open",
  },
  {
    id: 2,
    title: "UI breaks on small screens",
    description: "Sidebar overlaps content on devices < 400px.",
    status: "In Progress",
  },
  {
    id: 3,
    title: "404 page not showing",
    description: "Fallback route not triggering properly.",
    status: "Resolved",
  },
];

export default function Issues() {
  return (
    <div className="space-y-6  mt-[4rem] md:mt-0 p-3 md:p-0">
      <h2 className="text-4xl font-bold text-[var(--primary-text-color)] flex items-center gap-3">
        <Bug  className="text-purple-500" size={38} /> Reported Issues
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {issues.map((issue) => (
          <div
            key={issue.id}
            className="bg-[var(--dash-card-bg-color)] p-4 box-shadow-card rounded-lg border border-gray-300 dark:border-gray-700  hover:bg-red-500/10 transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{issue.title}</h3>
              {issue.status === "Resolved" ? (
                <CheckCircle2 className="text-green-500" size={24} />
              ) : issue.status === "In Progress" ? (
                <AlertCircle className="text-yellow-500" size={24} />
              ) : (
                <Bug className="text-red-500" size={24} />
              )}
            </div>
            <p className="text-base opacity-80">{issue.description}</p>
            <p className="text-sm mt-2 text-gray-400">Status: {issue.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
