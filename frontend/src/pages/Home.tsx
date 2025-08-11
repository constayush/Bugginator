'use client'

import { motion,useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { CheckCircle, Users, BarChart3, ChevronDown, ArrowRight, Shield, Zap, Lock, Bug, Handshake} from 'lucide-react'
import heroImg from "../assets/hero-team.svg"

// Custom Components
const Button = ({ 
  children, 
  variant = 'default', 
  size = 'default', 
  className = '', 
  style = {},
  ...props 
}: {
  children: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  className?: string
  style?: React.CSSProperties
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    default: " shadow-sm hover:shadow-md",
    outline: "border-2 shadow-sm hover:shadow-md",
    ghost: "hover:bg-[var(--container-color)]"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}

const Badge = ({ 
  children, 
  variant = 'default', 
  className = '',
  style = {},
  ...props 
}: {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'outline'
  className?: string
  style?: React.CSSProperties
} & React.HTMLAttributes<HTMLDivElement>) => {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors"
  
  const variants = {
    default: "bg-[var(--gradient-start)] text-white",
    secondary: "bg-[var(--container-color)] border border-[var(--card-border-color)]",
    outline: "border border-[var(--card-border-color)]"
  }
  
  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

const Card = ({ 
  children, 
  className = '',
  style = {},
  ...props 
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`rounded-xl border shadow-sm bg-[var(--card-bg-color)] border-[var(--card-border-color)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

const CardHeader = ({ 
  children, 
  className = '',
  ...props 
}: {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`p-6 pb-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardContent = ({ 
  children, 
  className = '',
  ...props 
}: {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

const CardTitle = ({ 
  children, 
  className = '',
  style = {},
  ...props 
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
} & React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={`text-lg font-semibold leading-none tracking-tight text-[var(--primary-text-color)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </h3>
  )
}

const CardDescription = ({ 
  children, 
  className = '',
  style = {},
  ...props 
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
} & React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={`text-sm text-[var(--secondary-text-color)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </p>
  )
}

export default function EnterpriseLanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  // const statsRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  // const statsInView = useInView(statsRef, { once: true, amount: 0.3 })

  

  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Enterprise-grade reporting with custom dashboards, real-time metrics, and predictive insights for data-driven decisions.",
      highlight: "99.9% Uptime"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Role-Based Access Control",
      description: "Give the right people the right power — from admins to devs to viewers.",
      highlight: "Access"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Team Collaboration",
      description: "Seamless workflows with real-time collaboration, automated notifications, and integrated communication tools.",
      highlight: "Unlimited Users"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Interactive Kanban Boards",
      description: "Drag, drop, and prioritize issues in real time. Smooth like butter.",
      highlight: "Boards"
    },
    {
      icon: <Bug className="h-8 w-8 text-indigo-600" />,
      title: "Simplified Bug & Issue Tracking",
      description: "Log, assign, comment, and resolve without drowning in Jira-level bloat.",
      highlight: "Tracking"
    },
    {
      icon: <Handshake className="h-8 w-8 text-red-600" />,
      title: "Team-Centric Design",
      description: "Built for small agile teams — lightweight, fast, and actually fun to use.",
      highlight: "minimalistic"
    }
  ]

  // const testimonials = [
  //   {
  //     quote: "Bugginator transformed our development workflow. The enterprise features and security compliance made it an easy choice for our Fortune 500 company.",
  //     author: "Sarah Chen",
  //     role: "VP of Engineering",
  //     company: "TechCorp Global",
  //     rating: 5,
  //     logo: "/placeholder.svg?height=40&width=120&text=TechCorp"
  //   },
  //   {
  //     quote: "The ROI was immediate. We reduced our issue resolution time by 60% and improved team productivity across all departments.",
  //     author: "Michael Rodriguez",
  //     role: "CTO",
  //     company: "InnovateLabs",
  //     rating: 5,
  //     logo: "/placeholder.svg?height=40&width=120&text=InnovateLabs"
  //   },
  //   {
  //     quote: "Outstanding support and enterprise-grade features. The migration from our legacy system was seamless with their dedicated team.",
  //     author: "Emma Thompson",
  //     role: "Head of Operations",
  //     company: "ScaleUp Inc",
  //     rating: 5,
  //     logo: "/placeholder.svg?height=40&width=120&text=ScaleUp"
  //   }
  // ]

  const plans = [
    {
      name: "freemium",
      price: "$0",
      period: "per user/month",
      description: "Perfect for growing teams",
      features: [
        "1 Admin, 1 Project",
        "Limited Analytics",
        "Track up to 50 issues",
        "Basic Kanban Board",
        "Up to 5 team members"
      ],
      cta: "Start 30-Day Trial",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$19",
      period: "per user/month",
      description: "For large organizations",
      features: [
        "Unlimited Issues & Projects",
        "Up to 10 team members",
        " Full Dashboard Analytics",
        "Labels, Filters, Priorities",
        "Advanced Kanban Board",
      ],
      cta: "Contact Sales",
      popular: true
    },
    {
      name: "Enterprise Plus",
      price: "Custom",
      period: "tailored pricing",
      description: "For complex enterprise needs",
      features: [
        "Everything in Enterprise",
        "On-premise deployment",
        "Dedicated infrastructure",
        "White-label options",
        "Advanced compliance",
        "24/7 support"
      ],
      cta: "Schedule Consultation",
      popular: false
    }
  ]

  // const stats = [
  //   { value: "500K+", label: "Issues Resolved Daily", icon: <CheckCircle className="h-6 w-6" /> },
  //   { value: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="h-6 w-6" /> },
  //   { value: "2M+", label: "Active Users", icon: <Users className="h-6 w-6" /> },
  //   { value: "150+", label: "Countries Served", icon: <Globe className="h-6 w-6" /> }
  // ]

 const faqs = [
  {
    question: "Is Bugginator free to use?",
    answer:
      "Yep! We offer a free plan that’s perfect for solo devs or small side projects. No credit card needed — just sign up and go.",
  },
  {
    question: "Will Bugginator work for non-dev teams?",
    answer:
      "For sure. While we’re dev-friendly by design, Bugginator is flexible enough for marketing, ops, or any team that wants to track tasks and squash chaos.",
  },
  {
    question: "Is my data safe on Bugginator?",
    answer:
      "Yes. We use standard security practices and encrypt your data. We take privacy seriously, so your info stays yours.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes. You can export your project data anytime in JSON or CSV formats. No lock-in, ever.",
  },
  {
    question: "Does Bugginator integrate with other tools?",
    answer:
      "We support popular integrations like Slack, GitHub, GitLab, and more. Zapier and webhook support are also available.",
  },
];


  return (
    <div className="min-h-screen bg-[var(--bg-color)]">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-10 pb-16 px-4 sm:px-6 md:pt-24 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {/* <Badge className="bg-[var(--container-color)] border-[var(--card-border-color)] text-blue-600">
                  <Award className="h-3 w-3 mr-1" />
                  Trusted by Fortune 500 Companies
                </Badge> */}
                <h1 className="text-5xl text-center md:text-left md:text-6xl font-bold leading-tight text-[var(--primary-text-color)]">
                  Effortless
                  <span className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                    {' '}Bugginator
                  </span>
                  <br />
                  Tracking
                </h1>
                <p className="text-xl leading-relaxed text-[var(--secondary-text-color)]">
                  The most advanced issue tracking platform built for enterprise teams. 
                  Secure, scalable, and designed to accelerate your development workflow.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[var(--gradient-start)] h-full to-[var(--gradient-end)] hover:opacity-90 transition-all duration-200 text-white border-0"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="group border-[var(--card-border-color)] hover:bg-[var(--container-color)] text-[var(--primary-text-color)]"
                >
                  Login
                  <Lock className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* <div className="flex items-center space-x-6 text-sm text-[var(--secondary-text-color)]">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-blue-500" />
                  <span>SOC 2 Certified</span>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl shadow-2xl border-[var(--card-border-color)] overflow-hidden bg-[var(--card-bg-color)]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
                <img
                  src={heroImg}
                  alt="Bugginator Enterprise Dashboard"
                  width={800}
                  height={600}
                  className="relative z-10 w-full"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-[var(--card-bg-color)] rounded-lg shadow-lg p-3 border-[var(--card-border-color)]"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-[var(--primary-text-color)]">99.9% Uptime</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section ref={statsRef} className="py-16 bg-[var(--card-bg-color)] border-y border-[var(--card-border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-2 text-[var(--secondary-text-color)] transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1 text-[var(--primary-text-color)]">{stat.value}</div>
                <div className="text-sm text-[var(--secondary-text-color)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-24 bg-[var(--container-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--card-bg-color)] border-[var(--card-border-color)] text-[var(--primary-text-color)]">Enterprise Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-text-color)]">
              Bug tracking, simplified 
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-[var(--secondary-text-color)]">
             Bugginator is the simpler, faster way to track bugs, manage sprints, and ship better, Think Jira, but without the headache.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-[var(--container-color)] rounded-lg group-hover:opacity-80 transition-colors">
                        {feature.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-24 bg-[var(--bg-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--container-color)] border-[var(--card-border-color)] text-[var(--primary-text-color)]">Customer Success</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-text-color)]">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-[var(--secondary-text-color)]">
              See how enterprise teams are transforming their development workflows with Bugginator.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="mb-6 italic text-[var(--primary-text-color)]">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-[var(--primary-text-color)]">{testimonial.author}</div>
                        <div className="text-sm text-[var(--secondary-text-color)]">{testimonial.role}</div>
                        <div className="text-sm text-[var(--secondary-text-color)]">{testimonial.company}</div>
                      </div>
                      <img
                        src={testimonial.logo || "/placeholder.svg"}
                        alt={`${testimonial.company} logo`}
                        width={80}
                        height={32}
                        className="opacity-60"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[var(--container-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--card-bg-color)] border-[var(--card-border-color)] text-[var(--primary-text-color)]">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-text-color)]">
              Enterprise-Ready Pricing
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-[var(--secondary-text-color)]">
              Transparent pricing that scales with your organization. All plans include enterprise-grade security and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative ${plan.popular ? 'border-[var(--gradient-start)] shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white border-0">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[var(--primary-text-color)]">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="ml-2 text-[var(--secondary-text-color)]">{plan.period}</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--primary-text-color)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-8 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] hover:opacity-90 text-white border-0' 
                          : 'border-[var(--card-border-color)] hover:bg-[var(--container-color)] text-[var(--primary-text-color)]'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id='faq' className="py-24 bg-[var(--bg-color)] ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-32">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--container-color)] border-[var(--card-border-color)] text-[var(--primary-text-color)]">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--primary-text-color)]">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[var(--secondary-text-color)]">
              Everything you need to know about Bugginator Enterprise.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <button
                    className="w-full text-left p-6 hover:bg-[var(--container-color)] transition-colors"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold pr-4 text-[var(--primary-text-color)]">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`h-5 w-5 text-[var(--secondary-text-color)] transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="leading-relaxed text-[var(--secondary-text-color)]">{faq.answer}</p>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold !text-white">
              Ready to Transform Your Development Workflow?
            </h2>
            <p className="text-xl !text-white/80 max-w-2xl mx-auto">
              Join thousands of enterprise teams that trust Bugginator to deliver better software, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-gray-900 bg-white hover:bg-gray-100 border-0">
                Start 30-Day Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 border-2">
                Schedule Demo
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>Enterprise security</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>Dedicated support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[var(--navbar-bg-color)] text-[var(--primary-text-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] rounded-lg"></div>
                <span className="text-xl font-bold">Bugginator</span>
              </div>
              <p className="text-[var(--secondary-text-color)]">
                Enterprise issue tracking reimagined for modern development teams.
              </p>
              {/* <div className="flex space-x-4">
                <Badge variant="secondary">SOC 2 Certified</Badge>
                <Badge variant="secondary">GDPR Compliant</Badge>
              </div> */}
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-[var(--secondary-text-color)]">
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-[var(--secondary-text-color)]">
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-[var(--secondary-text-color)]">
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-[var(--primary-text-color)] transition-colors">API</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[var(--card-border-color)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--secondary-text-color)]">
              © {new Date().getFullYear()} Bugginator. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] transition-colors">Privacy</a>
              <a href="#" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] transition-colors">Terms</a>
              <a href="#" className="text-[var(--secondary-text-color)] hover:text-[var(--primary-text-color)] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
