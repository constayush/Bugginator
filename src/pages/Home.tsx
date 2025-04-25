"use client";

import { motion } from "framer-motion";
import heroTeam from "../assets/hero-team.svg";
import LoginButton from "../ui/LoginButton";
import SignupButton from "../ui/SignupButton";

function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.6,
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <main className=" relative flex flex-col justify-center items-center max-w-6xl pt-12 px-2 z-0">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            className="max-w-full lg:max-w-[55%]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="space-y-6 text-center md:text-left"
              variants={containerVariants}
            >
              <motion.h1
                className="bg-gradient-to-t from-[var(--primary-text-color)] via-[var(--primary-text-color)] to-[#dea5f9] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl"
                variants={itemVariants}
              >
                Bugginator
              </motion.h1>
            
              <motion.p
                className="text-xl font-medium text-slate-700 dark:text-slate-300"
                variants={itemVariants}
              >
                An issue tracker built for modern dev teams — powerful,
                flexible, and actually fun to use.
              </motion.p>

              <motion.div
                className="h-px w-24 bg-gradient-to-r from-purple-500 to-blue-500"
                variants={itemVariants}
              />

              <motion.p
                className="text-lg text-slate-600 dark:text-slate-400"
                variants={itemVariants}
              >
                Everything your team needs in one place: Kanban boards,
                comments, role-based access, activity logs, and more
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap gap-4 "
              variants={buttonContainerVariants}
            >
              <motion.div variants={buttonVariants} whileHover="hover">
                <SignupButton />
              </motion.div>

              <motion.div variants={buttonVariants} whileHover="hover">
                <LoginButton />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative border-4 rounded-lg border-[#ffffff1f] shadow-2xl w-full max-w-md lg:max-w-[45%]"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <motion.div
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 blur-[80px]"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.img
              src={heroTeam}
              alt="Team collaboration illustration"
              className="relative z-10 w-full rounded-2xl shadow-xl"
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default Home;
