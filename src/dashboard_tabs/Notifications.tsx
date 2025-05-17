import { Bell, AlertCircle, MessageSquare, CheckCircle } from "lucide-react";

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "issue",
      icon: AlertCircle,
      message: "New bug reported in Project X",
      time: "5 mins ago",
    },
    {
      id: 2,
      type: "message",
      icon: MessageSquare,
      message: "You were mentioned in a comment",
      time: "20 mins ago",
    },
    {
      id: 3,
      type: "task",
      icon: CheckCircle,
      message: "Task 'Design login flow' was completed",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-[var(--primary-text-color)] flex items-center gap-3">
        <Bell size={38} className="text-purple-400" />
        Notifications
      </h1>

      {notifications.length > 0 ? (
        <div className="space-y-4">
          {notifications.map((note) => (
            <div
              key={note.id}
              className="flex items-start shadow-md gap-4 p-4 rounded-md border border-gray-700 bg-[var(--dash-card-bg-color)] hover:bg-purple-500/10 transition"
            >
              <note.icon size={28} className="text-purple-400 mt-1" />
              <div>
                <p className="text-sm md:text-base">{note.message}</p>
                <span className="text-xs text-gray-400">{note.time}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 text-sm mt-10">
          No new notifications. You’re all caught up 🎉
        </div>
      )}
    </div>
  );
}

export default Notifications;
