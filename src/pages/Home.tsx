"use client"

import { motion} from "framer-motion"
import { useRef } from "react"
import heroTeam from "../assets/hero-team.svg"
import LoginButton from "../ui/LoginButton"
import SignupButton from "../ui/SignupButton"
import { CheckCircle, Users, BarChart3, Clock, ChevronDown, Star, ArrowRight } from 'lucide-react'

function Home() {
  const ref = useRef(null)
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
  }

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
  }

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
  }

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1,
      },
    },
  }

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
  }

  const fadeInUpVariant = {
    hidden: { y: 60, opacity: 0 },
    visible: (i = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      },
    }),
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const features = [
    {
      icon: <BarChart3 className="h-10 w-10 text-[var(--gradient-start)]" />,
      title: "Powerful Analytics",
      description: "Track team performance and project progress with real-time dashboards and custom reports.",
    },
    {
      icon: <Users className="h-10 w-10 text-[var(--gradient-end)]" />,
      title: "Team Collaboration",
      description: "Seamless communication with comments, mentions, and real-time updates for your entire team.",
    },
    {
      icon: <Clock className="h-10 w-10 text-indigo-500" />,
      title: "Time Tracking",
      description: "Built-in time tracking to monitor effort spent on tasks and improve estimation accuracy.",
    },
  ]

  const testimonials = [
    {
      quote:
        "Bugginator transformed how our engineering team tracks and resolves issues. The UI is intuitive and the automation features save us hours every week.",
      author: "Sarah Johnson",
      role: "CTO at TechFlow",
      rating: 5,
    },
    {
      quote:
        "We tried several issue trackers before finding Bugginator. Nothing else comes close to its flexibility and ease of use.",
      author: "Michael Chen",
      role: "Lead Developer at StartupX",
      rating: 5,
    },
    {
      quote:
        "The customizable workflows and powerful integrations make Bugginator an essential tool for our development process.",
      author: "Emma Rodriguez",
      role: "Product Manager at InnovateCorp",
      rating: 4,
    },
  ]

  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "per user/month",
      features: ["Up to 10 projects", "Basic reporting", "Email support", "5GB storage"],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$19",
      period: "per user/month",
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "25GB storage", "Custom fields"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      features: [
        "Dedicated support",
        "Custom integrations",
        "Unlimited storage",
        "SSO & advanced security",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "How does Bugginator compare to other issue trackers?",
      answer:
        "Bugginator combines the best features of traditional issue trackers with modern collaboration tools, all in a beautiful, intuitive interface. Our users consistently report higher team adoption and satisfaction compared to other tools.",
    },
    {
      question: "Can I import data from other issue trackers?",
      answer:
        "Yes! Bugginator provides import tools for all major issue tracking systems including Jira, Trello, Asana, and GitHub Issues. Our migration assistants make the transition smooth and preserve your historical data.",
    },
    {
      question: "Is there a free plan available?",
      answer:
        "We offer a free 14-day trial on all plans with no credit card required. For small teams or open source projects, we also have special pricing - please contact our sales team for details.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "All plans include email support with varying response times. Professional and Enterprise plans include priority support with faster response times, and Enterprise plans include dedicated support representatives.",
    },
  ]

  const stats = [
    { value: "Kanban Boards", label: "Visualize, organize, and streamline your workflow" },
    { value: "Teams & Comments", label: "Collaborate effortlessly and keep discussions contextual" },
    { value: "Issue Tracking", label: "Track, prioritize, and squash bugs like a pro" },
    { value: "Activity Logs", label: "See who did what, when — no guesswork" },

  ];
  

  return (
    <div className="min-h-screen w-full flex flex-col items-center text-[var(--primary-text-color)] scroll-smooth">

      <main className="relative flex flex-col justify-center items-center max-w-6xl pt-12 px-4 md:px-6 z-0 ">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            className="max-w-full lg:max-w-[55%]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div className="space-y-6 text-center md:text-left" variants={containerVariants}>
              <motion.h1
                className="bg-gradient-to-t from-[var(--primary-text-color)] via-[var(--primary-text-color)] to-[#dea5f9] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl"
                variants={itemVariants}
              >
                Bugginator
              </motion.h1>

              <motion.p className="text-xl font-medium text-[var(--primary-text-color)]" variants={itemVariants}>
                An issue tracker built for modern dev teams — powerful, flexible, and actually fun to use.
              </motion.p>

              <motion.div className="h-px w-24 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" variants={itemVariants} />

              <motion.p className="text-lg text-[var(--secondary-text-color)]" variants={itemVariants}>
                Everything your team needs in one place: Kanban boards, comments, role-based access, activity logs, and
                more
              </motion.p>
            </motion.div>

            <motion.div className="mt-10 flex flex-wrap gap-4 " variants={buttonContainerVariants}>
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
              className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] opacity-30 blur-[80px]"
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

      {/* Section Divider */}
      <div className="section-divider">
        
      </div>

      {/* Features Section */}
      <motion.section
        ref={ref}
        className="w-full py-24 bg-[var(--container-color)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" variants={fadeInUpVariant}>
            <motion.h2
              className="gradient-text text-3xl md:text-4xl font-bold mb-4"
              variants={fadeInUpVariant}
            >
              Powerful Features for Modern Teams
            </motion.h2>
            <motion.p
              className="text-lg text-[var(--secondary-text-color)] max-w-2xl mx-auto"
              variants={fadeInUpVariant}
            >
              Everything you need to track, manage, and resolve issues efficiently
            </motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={fadeInUpVariant}
                custom={index}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[var(--primary-text-color)]">{feature.title}</h3>
                <p className="text-[var(--secondary-text-color)]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="section-divider section-divider-reverse">
        <div className="noise-overlay"></div>
      </div>

      {/* Testimonials Section */}
      <motion.section
        className="w-full py-24 bg-[var(--bg-color)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" variants={fadeInUpVariant}>
            <motion.h2
              className="gradient-text text-3xl md:text-4xl font-bold mb-4"
              variants={fadeInUpVariant}
            >
              Loved by Teams Worldwide
            </motion.h2>
            <motion.p
              className="text-lg text-[var(--secondary-text-color)] max-w-2xl mx-auto"
              variants={fadeInUpVariant}
            >
              See what our customers have to say about Bugginator
            </motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="feature-card relative"
                variants={fadeInUpVariant}
                custom={index}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "var(--card-hover-shadow)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[var(--secondary-text-color)] mb-6 italic">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-[var(--primary-text-color)]">{testimonial.author}</p>
                  <p className="text-sm text-[var(--secondary-text-color)]">{testimonial.role}</p>
                </div>
                <motion.div
                  className="absolute -top-2 -left-2 h-10 w-10 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-full opacity-20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="section-divider">
        <div className="noise-overlay"></div>
      </div>

      {/* Stats Section */}
      <motion.section
        className="w-full h-fit py-16 gradient-bg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="noise-overlay"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center h-fit !text-white" variants={staggerContainer}>
            {stats.map((stat, index) => (
              <motion.div key={index} className="!text-white" variants={fadeInUpVariant} custom={index}>
                <motion.p
                  className="text-4xl md:text-5xl !text-white font-bold mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.1,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.p>
                <p className="!text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="section-divider section-divider-reverse">
        <div className="noise-overlay"></div>
      </div>

      {/* Pricing Section */}
      <motion.section
        className="w-full py-24 bg-[var(--bg-color)] !cursor-not-allowed " 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" variants={fadeInUpVariant}>
            <motion.h2
              className="gradient-text text-3xl md:text-4xl font-bold mb-4"
              variants={fadeInUpVariant}
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p
              className="text-lg text-[var(--secondary-text-color)] max-w-2xl mx-auto"
              variants={fadeInUpVariant}
            >
              Choose the plan that works best for your team
            </motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer}>
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`feature-card ${
                  plan.popular ? "border-[var(--gradient-start)] relative" : ""
                }`}
                variants={fadeInUpVariant}
                custom={index}
                whileHover={{
                  y: -10,
                  boxShadow: "var(--card-hover-shadow)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 text-[var(--primary-text-color)]">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[var(--primary-text-color)]">{plan.price}</span>
                  <span className="text-[var(--secondary-text-color)] ml-2">{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-[var(--secondary-text-color)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.popular
                      ? "bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white"
                      : "bg-[var(--container-color)] text-[var(--primary-text-color)]"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="section-divider">
        <div className="noise-overlay"></div>
      </div>

      {/* FAQ Section */}
      <motion.section
        className="w-full py-24 bg-[var(--container-color)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div className="text-center mb-16" variants={fadeInUpVariant}>
            <motion.h2
              className="gradient-text text-3xl md:text-4xl font-bold mb-4"
              variants={fadeInUpVariant}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              className="text-lg text-[var(--secondary-text-color)] max-w-2xl mx-auto"
              variants={fadeInUpVariant}
            >
              Everything you need to know about Bugginator
            </motion.p>
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                className="group bg-[var(--card-bg-color)] rounded-xl p-6 shadow-md border border-[var(--card-border-color)]"
                variants={fadeInUpVariant}
                custom={index}
              >
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-lg text-[var(--primary-text-color)]">
                  {faq.question}
                  <motion.div
                    animate={{ rotate: 0 }}
                    variants={{
                      open: { rotate: 180 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-[var(--secondary-text-color)] group-open:rotate-180 transition-transform duration-300" />
                  </motion.div>
                </summary>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-[var(--secondary-text-color)]"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="section-divider section-divider-reverse">
        <div className="noise-overlay"></div>
      </div>

      {/* CTA Section */}
      <motion.section
        className="w-full py-24 gradient-bg-br"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="noise-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" variants={fadeInUpVariant}>
            Ready to transform how your team tracks issues?
          </motion.h2>
          <motion.p className="text-xl !text-white/70 mb-10 max-w-2xl mx-auto" variants={fadeInUpVariant} custom={1}>
            Join thousands of teams that use Bugginator to ship better software, faster.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUpVariant} custom={2}>
            <motion.button
              className="bg-white !text-black font-medium py-3 px-8 rounded-lg shadow-lg flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "var(--card-hover-shadow)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
            <motion.button
              className="bg-transparent border-2 !border-white !text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Demo
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <hr  className="w-full mt-24"/>

      {/* Footer */}
      <footer className="w-full py-12 bg-[var(--navbar-bg-color)] text-[var(--primary-text-color)]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className=" flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--secondary-text-color)]">© {new Date().getFullYear()} Bugginator. All rights reserved.</p>
            <a href="https://constayush.vercel.app/" target="_blank" rel="noopener noreferrer">Built by Ayush</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
