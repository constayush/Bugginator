import { BarChart2, Activity, PieChart} from "lucide-react";

function Analytics() {
  return (
    <div className="w-full h-full  mt-[4rem] md:mt-0 p-3 md:p-0">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Heading */}
        <div>
          <h1 className="text-3xl md:text-4xl flex gap-3 font-bold text-[var(--primary-text-color)]">
            <BarChart2
             className="text-purple-500" size={38} />
            Analytics Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-base">
            Monitor project activity, issue stats, and team performance.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-[var(--dash-card-bg-color)] p-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <BarChart2 className="text-purple-500" size={32} />
              <div>
                <h2 className="text-lg font-semibold">Resolved Issues</h2>
                <p className="text-sm text-gray-400">248 this month</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--dash-card-bg-color)] p-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <Activity className="text-blue-500" size={32} />
              <div>
                <h2 className="text-lg font-semibold">Active Users</h2>
                <p className="text-sm text-gray-400">36 online now</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--dash-card-bg-color)] p-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <PieChart className="text-green-500" size={32} />
              <div>
                <h2 className="text-lg font-semibold">Team Efficiency</h2>
                <p className="text-sm text-gray-400">82% this week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graph Area Placeholder */}
        <div className="w-full bg-[var(--dash-card-bg-color)] rounded-xl p-6 border border-gray-300 dark:border-gray-700 shadow-inner h-80 flex items-center justify-center text-gray-400 text-sm">
          Graph or Chart component coming soon 📈
        </div>
      </div>
    </div>
  );
}

export default Analytics;
