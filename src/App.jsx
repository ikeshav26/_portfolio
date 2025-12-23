import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Globe, 
  Mail, 
  ArrowUpRight,
  MapPin,
  Sparkles
} from 'lucide-react';
import DiscordIcon from './icons/Discord';
import profileImage from '../public/203427446.jpeg'

const PROFILE = {
  name: "Keshav Gilhotra",
  role: "Developer",
  bio: "Full-stack developer who loves turning ideas into products and contributing to open-source communities.",
  avatar: profileImage,
  location: "Punjab, India"
};

const SOCIAL_LINKS = [
  { name: "Portfolio", url: "https://portfolio.ikeshav.tech", icon: <Globe />, desc: "Work & About Me..", color: "text-blue-400" },
  { name: "GitHub", url: "https://github.com/ikeshav26", icon: <Github />, desc: "Source Codes", color: "text-zinc-100" },
  { name: "LinkedIn", url: "https://linkedin.com/in/keshav-gilhotra", icon: <Linkedin />, desc: "Professional", color: "text-blue-600" },
  { name: "Twitter", url: "https://twitter.com/keshavgilh95", icon: <Twitter />, desc: "Broadcasts", color: "text-sky-400" },
  { name: "Discord", url: "https://discord.com/users/1353631480064245772", icon: <DiscordIcon />, desc: "Chat", color: "text-[#5865F2]" },
];

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="h-screen w-full bg-[#030303] text-[#a1a1aa] font-sans selection:bg-white/10 overflow-hidden flex items-center justify-center p-6 lg:p-12 relative"
    >
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
        }}
      />
      
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 animate-in fade-in slide-in-from-bottom-4 duration-1000 items-center">
        

        <header className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="relative inline-block mb-8 group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-800 to-zinc-400 rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-700" />
            <img 
              src={PROFILE.avatar} 
              alt={PROFILE.name}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] border border-white/10 p-1.5 bg-[#0a0a0a] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-2 right-1 bg-green-500 w-4 h-4 rounded-full border-4 border-[#030303]" />
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">
                {PROFILE.name.split(' ')[0]} <br/>
                <span className="text-zinc-500">{PROFILE.name.split(' ')[1]}</span>
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-400 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5">
                  {PROFILE.role}
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                  <MapPin size={12} className="text-zinc-700" />
                  {PROFILE.location}
                </div>
              </div>
            </div>
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium max-w-xs">
              {PROFILE.bio}
            </p>
            <div className="pt-6 flex items-center justify-center md:justify-start gap-3">
              <a
                href="mailto:keshavgilhotra4@gmail.com"
                aria-label="Send email to Keshav"
                className="h-12 w-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all text-zinc-400 hover:text-white active:scale-95 shadow-lg"
              >
                <Mail size={20} />
              </a>
              <div className="h-8 w-px bg-white/5 mx-2" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600">
                  <Sparkles size={10} className="text-yellow-500/50" />
                  Online
                </div>
                <p className="text-[10px] text-zinc-700 font-bold mt-0.5">Contactable</p>
              </div>
            </div>
          </div>
        </header>


        <main className="md:col-span-7 space-y-4">
          {SOCIAL_LINKS.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-[1.5rem] backdrop-blur-2xl transition-all duration-500 group hover:bg-white/[0.04] hover:border-white/10 hover:translate-x-2 shadow-xl"
            >
              <div className="flex items-center gap-5">
                <div className={`p-3 bg-black rounded-2xl border border-white/5 transition-all duration-500 group-hover:scale-110 shadow-inner ${link.color}`}>
                  {React.cloneElement(link.icon, { size: 22 })}
                </div>
                <div>
                  <h2 className="text-sm md:text-base font-bold text-white tracking-tight">
                    {link.name}
                  </h2>
                  <p className="text-[11px] text-zinc-600 font-bold uppercase tracking-[0.15em] mt-1">
                    {link.desc}
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/0 flex items-center justify-center group-hover:border-white/5 group-hover:bg-white/5 transition-all">
                <ArrowUpRight className="w-5 h-5 text-zinc-700 group-hover:text-white transition-all duration-300" />
              </div>
            </a>
          ))}
          
          <footer className="pt-4 flex items-center justify-between px-2 text-zinc-800 font-black uppercase tracking-[0.3em] text-[10px]">
             <span></span>
             <div className="flex gap-4">
               <span className="hover:text-zinc-600 cursor-pointer transition-colors">Designed in 2025</span>             </div>
          </footer>
        </main>

      </div>
    </div>
  );
};

export default App;