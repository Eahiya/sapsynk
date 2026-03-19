import { motion } from 'motion/react';
import { 
  Bot, LineChart, Megaphone, Search, BarChart3, 
  DollarSign, Users, FileText, Zap, ArrowRight,
  ChevronRight, Sparkles
} from 'lucide-react';

const services = [
  {
    title: "Customer Communication",
    description: "AI chatbots, voice agents, automated emails, and multilingual support.",
    icon: <Bot className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Sales & Lead Automation",
    description: "AI-driven lead qualification, appointment scheduling, and sales assistance.",
    icon: <LineChart className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Marketing & Growth",
    description: "Social media generation, automated campaigns, and conversion improvement.",
    icon: <Megaphone className="w-6 h-6 text-orange-400" />,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Competitor & Market Intelligence",
    description: "Real-time tracking, social monitoring, and strategic opportunity insights.",
    icon: <Search className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Business Analytics",
    description: "AI dashboards, automated reporting, and daily performance tracking.",
    icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Financial Intelligence",
    description: "Financial data analysis, revenue insights, and performance tracking.",
    icon: <DollarSign className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "HR & Workforce",
    description: "AI recruitment, candidate screening, and payroll administration support.",
    icon: <Users className="w-6 h-6 text-pink-400" />,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Document Processing",
    description: "Invoice processing, contract analysis, and data extraction.",
    icon: <FileText className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Employee Productivity",
    description: "Assistants for HR, marketing, sales, developers, and internal knowledge.",
    icon: <Zap className="w-6 h-6 text-violet-400" />,
    color: "from-violet-500 to-purple-500"
  }
];

const team = [
  { name: "Boobesh", role: "Strategy Leader" },
  { name: "Haresh", role: "Automation Specialist" },
  { name: "Eahiya", role: "Data Scientist" },
  { name: "Shyam", role: "AI Engineer" }
];

const Orb = ({ className, size, color1, color2, delay = 0, duration = 5 }: any) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle at 30% 30%, ${color1} 0%, ${color2} 50%, transparent 95%)`,
      boxShadow: `
        inset -10px -10px 20px rgba(0,0,0,0.1), 
        inset 10px 10px 20px rgba(255,255,255,0.8),
        0 0 40px ${color2}40
      `,
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const Crosshair = ({ className }: { className?: string }) => (
  <div className={`absolute w-6 h-6 opacity-20 pointer-events-none ${className}`}>
    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-900" />
    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-900" />
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-black/5 bg-white/50">
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2"
    >
      <span className="text-4xl font-['Grand_Hotel'] text-slate-900 tracking-wide pr-2">Sapsynk</span>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
    >
      <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
      <a href="#team" className="hover:text-slate-900 transition-colors">Team</a>
      <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
    </motion.div>
    <motion.a 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="#contact" 
      className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-md"
    >
      Book a Call
    </motion.a>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <Crosshair className="top-1/4 left-1/4" />
    <Crosshair className="bottom-1/4 right-1/4" />
    
    <Orb size={250} color1="#dbeafe" color2="#3b82f6" className="top-[15%] left-[15%] md:left-[25%]" delay={0} duration={7} />
    <Orb size={120} color1="#f3e8ff" color2="#a855f7" className="top-[25%] right-[15%] md:right-[25%]" delay={1} duration={5} />
    <Orb size={180} color1="#fce7f3" color2="#ec4899" className="bottom-[15%] left-[20%] md:left-[30%]" delay={2} duration={6} />
    <Orb size={90} color1="#ccfbf1" color2="#14b8a6" className="bottom-[25%] right-[20%] md:right-[30%]" delay={0.5} duration={4} />

    <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-black/5 mb-8 backdrop-blur-md shadow-sm"
      >
        <Sparkles className="w-4 h-4 text-purple-500" />
        <span className="text-sm font-medium text-slate-700">Welcome to Sapsynk</span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.1]"
      >
        The Intelligence <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          of Automation.
        </span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        Sapsynk is an ever-expanding ecosystem of AI solutions, built to automate operations, improve decision-making, and accelerate your business growth.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <motion.a 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#services" 
          className="px-8 py-4 rounded-full bg-slate-900 text-white font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all w-full sm:w-auto justify-center shadow-lg shadow-slate-900/20"
        >
          Explore Services <ArrowRight className="w-5 h-5" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#team" 
          className="px-8 py-4 rounded-full bg-white/60 text-slate-900 font-semibold border border-black/5 hover:bg-white/80 transition-all backdrop-blur-md w-full sm:w-auto justify-center shadow-sm"
        >
          Meet the Team
        </motion.a>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Community-Owned and Operated</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          Enter a new universe of connected services.
        </h3>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          We provide end-to-end AI solutions to automate operations, improve decision-making, and accelerate business growth. Join the revolution of intelligent workflows.
        </p>
        
        <div className="grid grid-cols-2 gap-8 mt-12 border-t border-black/5 pt-8">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">9+</div>
            <div className="text-sm text-slate-500">Core AI Services</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">24/7</div>
            <div className="text-sm text-slate-500">Automated Operations</div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[600px] w-full rounded-[2.5rem] border border-black/5 bg-gradient-to-b from-black/[0.02] to-transparent overflow-hidden flex items-center justify-center p-8 shadow-sm"
      >
        <Orb size={300} color1="#e0e7ff" color2="#6366f1" className="absolute" duration={10} />
        <Orb size={150} color1="#fce7f3" color2="#ec4899" className="absolute top-10 right-10" duration={8} delay={1} />
        <Orb size={200} color1="#ccfbf1" color2="#14b8a6" className="absolute bottom-10 left-10" duration={9} delay={2} />
        
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        
        <div className="relative z-10 w-full max-w-sm bg-white/60 backdrop-blur-xl border border-black/5 rounded-3xl p-8 shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-md">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-2">AI Core</h4>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            The heart of your automated business, connecting all services seamlessly.
          </p>
          <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ServicesSection = () => (
  <section id="services" className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4"
      >
        Our AI Services
      </motion.h2>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold text-slate-900 max-w-3xl mx-auto leading-tight tracking-tight"
      >
        The heart of the <br/> Intelligence.
      </motion.h3>
    </div>

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((service, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group relative p-8 rounded-3xl bg-white border border-black/5 hover:bg-slate-50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
        >
          <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.color} opacity-10 blur-[50px] group-hover:opacity-20 transition-opacity duration-500 rounded-full`} />
          
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-50 border border-black/5 group-hover:scale-110 transition-transform duration-500 shadow-sm">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              {service.description}
            </p>
            
            <div className="mt-8 flex items-center text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors cursor-pointer">
              Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const TeamSection = () => (
  <section id="team" className="py-32 relative z-10 px-6 max-w-7xl mx-auto border-t border-black/5">
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
      >
        Meet the worldwide <br/> community.
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-slate-600 max-w-2xl mx-auto"
      >
        Join a fast-growing team of developers and innovators connected all over the world, building the new era of the internet.
      </motion.p>
    </div>

    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {team.map((member, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className="p-8 rounded-3xl bg-white border border-black/5 text-center group hover:border-black/10 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-slate-50 border border-black/5 mb-6 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-500 shadow-sm">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <Users className="w-8 h-8 text-slate-400 group-hover:text-slate-900 transition-colors duration-500 relative z-10" />
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h4>
          <p className="text-sm text-slate-500">{member.role}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-32 relative z-10 px-6 max-w-7xl mx-auto border-t border-black/5">
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
      >
        Get in touch.
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl text-slate-600 max-w-2xl mx-auto"
      >
        Ready to automate your business? Let's discuss how Sapsynk can help you scale.
      </motion.p>
    </div>

    <div className="max-w-3xl mx-auto">
      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-8 md:p-12 rounded-[2.5rem] bg-white border border-black/5 backdrop-blur-md relative overflow-hidden shadow-xl shadow-slate-200/50"
        onSubmit={(e) => e.preventDefault()}
      >
        <Orb size={200} color1="#dbeafe" color2="#3b82f6" className="absolute -top-20 -right-20 opacity-20" duration={8} />
        
        <div className="relative z-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium text-slate-600">Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-sm font-medium text-slate-600">Email</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" />
            </div>
          </div>
          <div className="space-y-2 text-left">
            <label className="text-sm font-medium text-slate-600">Subject</label>
            <input type="text" placeholder="How can we help?" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm" />
          </div>
          <div className="space-y-2 text-left">
            <label className="text-sm font-medium text-slate-600">Message</label>
            <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-sm" />
          </div>
          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-slate-900 to-blue-950 text-white font-semibold flex items-center justify-center gap-2 hover:from-slate-800 hover:to-blue-900 transition-all shadow-lg shadow-blue-900/20"
          >
            Send Message <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.form>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-32 relative z-10 px-6 max-w-5xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-b from-blue-50 to-purple-50 border border-black/5 relative overflow-hidden shadow-xl shadow-slate-200/50"
    >
      <Orb size={400} color1="#dbeafe" color2="#3b82f6" className="absolute -top-40 -left-40 opacity-30" duration={10} />
      <Orb size={300} color1="#f3e8ff" color2="#a855f7" className="absolute -bottom-20 -right-20 opacity-30" duration={8} />
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Ready to Transform?
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Schedule a call with our experts. We'll analyze your business needs and provide a custom AI automation solution.
        </p>
        <motion.a 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="w-fit mx-auto px-8 py-4 rounded-full bg-slate-900 text-white font-semibold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
        >
          Book a Consultation <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-black/5 py-12 px-6 relative z-10 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <span className="text-3xl font-['Grand_Hotel'] text-slate-900 tracking-wide">Sapsynk</span>
      </div>
      <div className="text-sm text-slate-500">
        © {new Date().getFullYear()} Sapsynk Agency. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen text-slate-600 font-sans selection:bg-purple-200">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, #000000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200/40 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/40 blur-[120px]" />
      </div>

      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <TeamSection />
        <ContactSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
