import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Cpu, Smartphone, Database, Mail, Linkedin, Quote } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="px-4 pb-20 max-w-6xl mx-auto">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="p-4 md:p-6 flex justify-between items-center glass-panel m-4 sticky top-4 z-50">
      <h1 className="text-xl md:text-2xl font-bold text-gradient">Vijayaragunathan</h1>
      <nav className="hidden md:flex gap-8 items-center font-medium">
        <a href="#about" className="hover:text-accent-cyan transition-colors">About</a>
        <a href="#services" className="hover:text-accent-cyan transition-colors">Solutions</a>
        <a href="#projects" className="hover:text-accent-cyan transition-colors">Case Studies</a>
        <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-accent-purple/20 text-accent-purple rounded-full hover:bg-accent-purple hover:text-white transition-all font-bold tracking-wide border border-accent-purple/30">
          Hire Me
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative pt-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10"
      >
        <motion.p variants={fadeInUp} className="text-xl text-gray-400 mb-2 font-medium tracking-wide">
          HELLO, I'M
        </motion.p>
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-gradient-emerald">
          Vijayaragunathan R
        </motion.h1>
        <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl text-gray-300 font-light mb-8">
          Full Stack & AI Developer
        </motion.h2>
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-4 bg-accent-emerald text-black font-bold rounded-lg hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            View Case Studies
          </a>
          <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-accent-purple text-white font-bold rounded-lg hover:bg-purple-500 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.4)] flex items-center gap-2">
            Hire Me On Fiverr
          </a>
        </motion.div>
      </motion.div>
      
      {/* Decorative abstract elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent-emerald/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-accent-purple/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
}

function About() {
  const skills = [
    { name: "JavaScript / React / Node", level: 90 },
    { name: "Python / AI Solutions", level: 85 },
    { name: "Database & Cloud Architecture", level: 85 },
    { name: "Mobile App Development", level: 80 }
  ];

  return (
    <section id="about" className="py-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="mb-16"
      >
        <h2 className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-2">My Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Building AI-Powered Web Experiences</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="glass-panel p-8 md:p-10 text-lg leading-relaxed text-gray-300"
        >
          <p className="mb-4">
            I am a Full Stack Developer and AI Solutions Engineer specializing in building robust, modern web applications.
          </p>
          <p>
            I partner with businesses and startups to engineer scalable platforms, seamless user interfaces, and data-driven AI solutions that directly impact growth, operational efficiency, and user engagement.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={fadeInUp} className="glass-panel p-6 glow-hover relative overflow-hidden group">
              <div className="flex justify-between items-center mb-3 relative z-10">
                <span className="font-semibold text-gray-200">{skill.name}</span>
                <span className="text-accent-emerald font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden relative z-10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-accent-cyan to-accent-emerald"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/0 via-accent-cyan/5 to-accent-emerald/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: <Code2 size={40} />, title: "Modern Web Apps", desc: "I build responsive, high-performance interfaces and scalable backend architectures using React, Node.js, and modern frameworks." },
    { icon: <Database size={40} />, title: "AI & Data Solutions", desc: "Implementing predictive insights, machine learning models, and automated data pipelines to drive business intelligence." },
    { icon: <Smartphone size={40} />, title: "Cross-Platform Mobile", desc: "Delivering unified mobile experiences with Flutter, ensuring native-like performance across iOS and Android." },
    { icon: <Cpu size={40} />, title: "Systems Engineering", desc: "Architecting secure, highly available backend systems, load balancers, and real-time communication protocols." }
  ];

  return (
    <section id="services" className="py-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-16 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-2">What I Build</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Solutions I Offer</h3>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-8"
      >
        {services.map((srv, idx) => (
          <motion.div key={idx} variants={fadeInUp} className="glass-panel p-8 flex gap-6 items-start glow-hover group">
            <div className="text-accent-emerald group-hover:text-accent-cyan transition-colors duration-300">
              {srv.icon}
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3 text-gray-200">{srv.title}</h4>
              <p className="text-gray-400 leading-relaxed">{srv.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Experience() {
  const experiences = [
    { type: "Internship", title: "AI/ML Intern", place: "VDart Technologies", desc: "Gained practical exposure to AI and ML paradigms, working on data-driven models and advanced algorithms to improve data processing workflows." },
    { type: "Leadership", title: "App Developer & Technical Lead", place: "Institution's Innovation Council", desc: "Contributed as a lead App Developer. Actively mentored peers and managed technical workshops to broaden organizational capabilities." },
    { type: "Academic Base", title: "B.Tech in CSE", place: "Amrita Vishwa Vidyapeetham", desc: "Deepened foundation in Systems Engineering, Machine Learning, Operating Systems, and Distributed Databases." }
  ];

  return (
    <section id="experience" className="py-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-16 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-2">Track Record</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Professional Experience</h3>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-8 pl-8 md:pl-12 flex flex-col gap-12">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-accent-emerald shadow-[0_0_10px_rgba(16,185,129,0.8)] border-2 border-[#050505]" />
            
            <div className="glass-panel p-8 glow-hover">
              <span className="inline-block py-1 px-3 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold tracking-wider mb-4 uppercase">
                {exp.type}
              </span>
              <h4 className="text-2xl font-bold text-gray-100 mb-2">{exp.title}</h4>
              <h5 className="text-gray-400 font-medium mb-4">{exp.place}</h5>
              <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { title: "FarmSmart Analytics", techStack: ["React", "Node.js", "Predictive Analytics"], desc: "Built responsive analytics dashboard with predictive insights and interactive visualizations for agricultural market analysis.", link: "https://github.com/vj450-cpu/FarmSmart", img: "/img/farmsmart.png" },
    { title: "Secured Enterprise Chat", techStack: ["JavaScript", "AES-256", "WebSockets"], desc: "Engineered a real-time, end-to-end encrypted communication platform achieving sub-50ms latency with SFA Authentication.", link: "https://github.com/vj450-cpu/Secured-Chat-system", img: "/img/chat.png" },
    { title: "GoBeam Load Balancer", techStack: ["Go", "Docker", "Systems"], desc: "Developed a high-throughput Layer 7 load balancer handling 10k+ concurrent connections with built-in health tracking metrics.", link: "https://github.com/vj450-cpu/GoBeam", img: "/img/gobeam.png" },
    { title: "Targeted Ad Engine", techStack: ["Python", "TensorFlow", "Data Sci"], desc: "Created machine learning pipelines to analyze user behavior, identifying patterns to optimize marketing conversion strategies.", link: "https://github.com/vj450-cpu/data-driven-targeted-advertising" },
    { title: "BloodNet Network", techStack: ["Flutter", "Firebase", "Dart"], desc: "Deployed a cross-platform mobile app enabling real-time geolocation matching for critical medical supply logistics.", link: "https://github.com/vj450-cpu/Blood-Donation-Application" },
    { title: "3D Rendering Engine", techStack: ["C++", "OpenGL", "Math"], desc: "Built a highly optimized 3D graphics engine to render complex interactive environments at a consistent 60 FPS.", link: "https://github.com/vj450-cpu/Computer-Graphics-Project" }
  ];

  return (
    <section id="projects" className="py-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-16 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-2">My Work</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Featured Case Studies</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <motion.div 
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="glass-panel overflow-hidden group flex flex-col h-full"
          >
            <div className="h-48 bg-white/5 relative overflow-hidden flex items-center justify-center">
              {proj.img ? (
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#222] flex items-center justify-center">
                  <span className="text-4xl text-white/20 font-bold">{proj.title.substring(0, 2)}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
            </div>
            
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <h4 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-white transition-colors">{proj.title}</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.techStack.map((tech, i) => (
                  <span key={i} className="text-[11px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-white/5 text-accent-cyan border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed">{proj.desc}</p>
              
              <a href={proj.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-medium hover:text-accent-emerald transition-colors mt-auto">
                <Github size={18} />
                <span>View Repository</span>
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const feedback = [
    { text: "Vijayaragunathan's work on our data models directly improved our workflow efficiency. He is highly analytical and delivers robust solutions.", author: "AI/ML Lead", org: "VDart Technologies" },
    { text: "Outstanding technical abilities and a great team player. His ability to architect full-stack applications while maintaining code quality is impressive.", author: "Project Manager", org: "Innovation Council" }
  ];

  return (
    <section className="py-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mb-16 text-center"
      >
        <h2 className="text-sm font-bold tracking-widest text-accent-cyan uppercase mb-2">Feedback</h2>
        <h3 className="text-4xl md:text-5xl font-bold">What People Say</h3>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {feedback.map((item, idx) => (
          <motion.div 
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-panel p-8 relative"
          >
            <Quote className="absolute top-6 right-6 text-white/5" size={80} />
            <p className="text-lg text-gray-300 italic mb-8 relative z-10">"{item.text}"</p>
            <div className="relative z-10">
              <h5 className="font-bold text-white">{item.author}</h5>
              <span className="text-sm text-accent-emerald">{item.org}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="glass-panel p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-emerald/10 -z-10"></div>
        <h2 className="text-4xl font-bold mb-4">Ready to build something amazing?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to new opportunities. Let's discuss your next project!
        </p>
        <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer" className="inline-block px-10 py-5 bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all transform hover:-translate-y-1">
          Hire Me On Fiverr
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-30"></div>
      
      <h2 className="text-3xl font-bold text-gradient mb-2">Vijayaragunathan R</h2>
      <p className="text-gray-400 mb-8">Full Stack & AI Developer</p>
      
      <div className="flex justify-center gap-6 mb-10">
        <a href="https://www.linkedin.com/in/vijayaragunathan-r-bb296931b" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-accent-cyan hover:border-accent-cyan transition-all glow-hover">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/vj450-cpu" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-accent-cyan hover:border-accent-cyan transition-all glow-hover">
          <Github size={20} />
        </a>
        <a href="mailto:vijayaragunathan450@gmail.com" className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-accent-cyan hover:border-accent-cyan transition-all glow-hover">
          <Mail size={20} />
        </a>
      </div>
      
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Vijayaragunathan R. Built with modern web technologies.
      </p>
    </footer>
  );
}

export default App;
