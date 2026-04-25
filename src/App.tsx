/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Users, 
  Brain, 
  Globe, 
  Sparkles, 
  Mail, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  Zap,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import { FeatureCard, SectionHeader } from './components/Common';
import { PortalDashboard } from './components/Portal/Dashboard';
import { UserRole } from './types';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePortal, setActivePortal] = useState<'login' | null>(null);
  const [authenticatedUser, setAuthenticatedUser] = useState<{ name: string; role: UserRole } | null>(null);
  const [loginRole, setLoginRole] = useState<UserRole>('teacher');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login for now - will be replaced with Firebase Auth
    setAuthenticatedUser({
      name: loginRole === 'teacher' ? 'Ustadha Fatima' : 'Parent Khalid',
      role: loginRole
    });
    setActivePortal(null);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Skills', href: '#skills' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  if (authenticatedUser) {
    return (
      <div className="bg-[#FDFCFB]">
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md py-4 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => setAuthenticatedUser(null)}>
              <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-white">
                <Sparkles size={20} />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">NOOR AL-HIKMAH</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Portal v1.0.4.ai</span>
          </div>
        </nav>
        <PortalDashboard 
          role={authenticatedUser.role} 
          userName={authenticatedUser.name} 
          onLogout={() => setAuthenticatedUser(null)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 font-sans selection:bg-stone-900 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-stone-200' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-white">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">NOOR AL-HIKMAH</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => setActivePortal('login')}
              className="px-6 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-stone-900/10"
            >
              Portal Login
            </button>
          </div>
          
          <button className="md:hidden text-stone-900">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-orange-50/50 to-transparent -z-10 blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-stone-100 to-transparent -z-10 blur-3xl opacity-40" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-bold tracking-widest mb-8 border border-stone-200">
              TRADITION MEETS INNOVATION
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.9] mb-8 tracking-tighter">
              The Future of <span className="italic text-stone-500 font-light">Madrassa</span> Education.
            </h1>
            <p className="text-xl text-stone-600 mb-12 leading-relaxed max-w-xl">
              We empower rural communities through digital innovation, making AI accessible to everyone while preserving the timeless wisdom of traditional education.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-stone-900 text-white rounded-full font-medium flex items-center gap-3 hover:bg-stone-800 transition-all hover:translate-x-2"
              >
                Explore Mission <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 border border-stone-200 rounded-full font-medium text-stone-700 hover:bg-stone-50 transition-all">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-stone-100"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-serif italic">"AI is not a threat, but a tool to amplify our human potential."</p>
              </div>
            </motion.div>
            <div>
              <SectionHeader 
                title="Bridging the Digital Divide" 
                subtitle="OUR JOURNEY" 
              />
              <p className="text-lg text-stone-600 mb-8 border-l-2 border-stone-200 pl-8 py-2">
                Founded in the heart of rural innovation, Noor Al-Hikmah is more than a school. It's an ecosystem where technology serves humanity. 
              </p>
              <p className="text-stone-600 mb-8">
                We believe that premium education shouldn't be limited to urban centers. By integrating AI-driven tools into the Madrassa curriculum, we prepare students for the global digital economy while maintaining their cultural and religious roots.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-serif text-stone-900 mb-2">10k+</h4>
                  <p className="text-sm text-stone-500 uppercase tracking-widest">Students Impacted</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif text-stone-900 mb-2">50+</h4>
                  <p className="text-sm text-stone-500 uppercase tracking-widest">Digital Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Strategic Innovations" 
            subtitle="FEATURED PROJECTS" 
            centered
          />
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Brain}
              title="MadrasaGPT"
              description="A specialized AI assistant designed to help students with classical texts and linguistic translations in real-time."
              delay={0.1}
            />
            <FeatureCard 
              icon={Globe}
              title="Global Classroom"
              description="Connecting rural scholars with international mentors through a proprietary low-bandwidth video conferencing platform."
              delay={0.2}
            />
            <FeatureCard 
              icon={Zap}
              title="Ethics of AI"
              description="A certification program exploring the moral implications of technology through the lens of traditional wisdom."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-24 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader 
            title="Beyond the Classroom" 
            subtitle="OUR INITIATIVES" 
            centered
          />
          <div className="grid md:grid-cols-2 gap-12 text-left mt-16 text-white/90">
            <div className="p-12 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <GraduationCap className="mb-6 opacity-60" size={40} />
              <h3 className="text-2xl font-serif mb-4">Rural Innovation Lab</h3>
              <p className="leading-relaxed">A physical hub where locals learn to build digital products, from mobile apps to e-commerce platforms, tailored for their specific needs.</p>
            </div>
            <div className="p-12 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <ShieldCheck className="mb-6 opacity-60" size={40} />
              <h3 className="text-2xl font-serif mb-4">Social Impact Seed</h3>
              <p className="leading-relaxed">A micro-grant program for former Madrassa students who want to start social enterprises in their hometowns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <SectionHeader 
              title="Excellence in Every Field" 
              subtitle="OUR COMPETENCIES" 
            />
            <div className="flex gap-2 pb-16">
              {['Digital Literacy', 'Classical Arabic', 'Data Science', 'Logic & Philosophy'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-stone-100 rounded-full text-xs font-semibold text-stone-600 border border-stone-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Cloud Infrastructure', icon: Globe },
              { label: 'Traditional Pedagogy', icon: BookOpen },
              { label: 'Community Leadership', icon: Users },
              { label: 'Systems Design', icon: ShieldCheck },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-stone-100 rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500">
                <item.icon className="mb-4 text-stone-400" size={32} />
                <span className="font-medium text-stone-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 px-6 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader title="Measurable Change" subtitle="THE NUMBERS" centered />
          <div className="grid md:grid-cols-3 gap-16 mt-16">
            <div>
              <p className="text-6xl font-serif mb-4">85%</p>
              <p className="text-sm uppercase tracking-widest text-stone-500 font-bold">Employment Rate</p>
              <p className="text-stone-400 mt-2 text-xs">For our graduates in tech roles</p>
            </div>
            <div>
              <p className="text-6xl font-serif mb-4">12M+</p>
              <p className="text-sm uppercase tracking-widest text-stone-500 font-bold">Lines of Code</p>
              <p className="text-stone-400 mt-2 text-xs">Written by students in rural labs</p>
            </div>
            <div>
              <p className="text-6xl font-serif mb-4">4.9/5</p>
              <p className="text-sm uppercase tracking-widest text-stone-500 font-bold">Parent Satisfaction</p>
              <p className="text-stone-400 mt-2 text-xs">Based on our real-time reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-stone-900 rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-stone-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32" />
            
            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-5xl font-serif text-white mb-8">Start the conversation.</h2>
                <p className="text-stone-400 text-lg mb-12">Whether you're a parent seeking education or a partner looking to innovate—we're here to talk.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <span>hello@nooralhikmah.edu</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center">
                      <MessageSquare size={20} />
                    </div>
                    <span>Book a Virtual Tour</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full bg-stone-800 border-none rounded-xl p-4 text-white placeholder:text-stone-500 focus:ring-2 focus:ring-stone-600 transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full bg-stone-800 border-none rounded-xl p-4 text-white placeholder:text-stone-500 focus:ring-2 focus:ring-stone-600 transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-stone-800 border-none rounded-xl p-4 text-white placeholder:text-stone-500 focus:ring-2 focus:ring-stone-600 transition-all" />
                <textarea placeholder="Your Message" rows={4} className="w-full bg-stone-800 border-none rounded-xl p-4 text-white placeholder:text-stone-500 focus:ring-2 focus:ring-stone-600 transition-all"></textarea>
                <button className="w-full py-4 bg-white text-stone-900 rounded-xl font-bold hover:bg-stone-100 transition-all">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-stone-500 text-sm italic">© 2026 Noor Al-Hikmah Madrassa. All Rights Reserved.</p>
          <div className="flex gap-8">
            {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map(social => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest font-bold text-stone-400 hover:text-stone-900 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Login Portal Modal */}
      <AnimatePresence>
        {activePortal === 'login' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-stone-900/40 backdrop-blur-sm"
            onClick={() => setActivePortal(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setActivePortal(null)}
                className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-2">Welcome Back</h3>
                <p className="text-stone-500 mb-8 font-medium">Access your personalized portal</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button 
                    onClick={() => setLoginRole('teacher')}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center ${loginRole === 'teacher' ? 'border-stone-900 bg-stone-50 shadow-inner' : 'border-stone-100 hover:border-stone-400'}`}
                  >
                    <Users size={24} className={loginRole === 'teacher' ? 'text-stone-900' : 'text-stone-400'} />
                    <span className="text-xs font-bold uppercase tracking-wider mt-2">Teacher</span>
                  </button>
                  <button 
                    onClick={() => setLoginRole('parent')}
                    className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center ${loginRole === 'parent' ? 'border-stone-900 bg-stone-50 shadow-inner' : 'border-stone-100 hover:border-stone-400'}`}
                  >
                    <BookOpen size={24} className={loginRole === 'parent' ? 'text-stone-900' : 'text-stone-400'} />
                    <span className="text-xs font-bold uppercase tracking-wider mt-2">Parent</span>
                  </button>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4 text-left">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 block">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-900" placeholder="name@example.com" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2 block">Password</label>
                    <input type="password" required className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-stone-900" placeholder="••••••••" />
                  </div>
                  <button type="submit" className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all mt-6 shadow-xl shadow-stone-900/20">
                    Sign In
                  </button>
                </form>
                
                <p className="mt-8 text-stone-400 text-xs">
                  Having trouble? <a href="#" className="text-stone-900 font-bold underline underline-offset-4">Contact IT Support</a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
