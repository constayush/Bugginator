import { motion } from "framer-motion";
import {
  ClipboardCheck,
  FolderKanban,
  PlusCircle,
  UserPlus2,
} from "lucide-react";
function Index() {
      const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  return (
  <div className="flex-1 p-3 md:p-6 h-full  relative overflow-y-auto">
      
        <motion.div
          className="relative flex flex-col mt-[3.5rem] md:mt-0 gap-6 w-full max-w-6xl mx-auto p-3 md:p-8 rounded-xl shadow-2xl bg-[var(--container-color)] border border-[var(--border-color)] z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="text-2xl md:text-4xl  text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Good to see you, Ayush! ✨
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tasks Card */}
            <div className="w-full bg-[var(--dash-card-bg-color)] hover:bg-purple-500/10 transition cursor-pointer p-4 rounded-lg flex items-center gap-4 shadow-inner border border-[var(--border-color)]">
              <ClipboardCheck className="text-purple-500" />
              <div>
                <h2 className="text-lg font-semibold">Tasks Assigned To You</h2>
                <p className="text-sm opacity-75">Stay on track and knock 'em out 💥</p>
              </div>
            </div>

            {/* Projects Card */}
            <div className="w-full bg-[var(--dash-card-bg-color)] hover:bg-purple-500/10 transition cursor-pointer p-4 rounded-lg flex items-center gap-4 shadow-inner border border-[var(--border-color)]">
              <FolderKanban className="text-blue-500" />
              <div>
                <h2 className="text-lg font-semibold">Your Projects</h2>
                <p className="text-sm opacity-75">All your buggin’ zones in one place 🐞</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full text-bold">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-t text-xl h-[5rem] md:min-h-[10rem] !text-white from-purple-700 to-blue-600 font-medium px-4 py-2 rounded-md shadow-md"
            >
              <UserPlus2 size={18} />
              New Team
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r text-xl h-[5rem] md:min-h-[10rem] !text-white from-blue-400 to-blue-600 font-medium px-4 py-2 rounded-md shadow-md"
            >
              <PlusCircle size={18} />
              New Project
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r text-xl h-[5rem] md:min-h-[10rem] !text-white from-purple-400 to-purple-600 font-medium px-4 py-2 rounded-md shadow-md"
            >
              <PlusCircle size={18} />
              Create Issue
            </motion.button>
          </div>
        </motion.div>
      </div>
  )
}

export default Index