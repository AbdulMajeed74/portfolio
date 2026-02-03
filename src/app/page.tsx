"use client";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const About = dynamic(() => import('../components/About'), { ssr: false });
const Experience = dynamic(() => import('../components/Experience'), { ssr: false });
const Skills = dynamic(() => import('../components/Skills'), { ssr: false });
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });

export default function Home() {
    return (
        <main className="bg-dark min-h-screen text-white selection:bg-blue-500 selection:text-white">
            <Navbar />
            <Hero />

            {/* Sticky Split Layout for About & Experience */}
            <div className="relative w-full max-w-[1920px] mx-auto flex flex-col md:flex-row bg-[#050505]/50 border-white/5">

                {/* Sticky Sidebar Image */}
                <div className="w-full md:w-[45%] lg:w-[40%] h-[45vh] sm:h-[55vh] md:h-[80vh] md:sticky md:top-[12vh] lg:top-[10vh] left-0 z-10 p-4 md:p-8 lg:p-12 xl:p-16">
                    <div className="w-full h-full relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#050505] border border-white/5 group shadow-2xl">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none"></div>
                        <div className="absolute top-[20%] left-0 w-[70%] h-[60%] bg-blue-500/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

                        <Image
                            src="/sidebar-clean.png"
                            alt="Majeed Profile"
                            width={800}
                            height={1200}
                            quality={85}
                            priority={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 35vw"
                            className="w-full h-full object-cover object-top opacity-100 transition-all duration-1000 origin-top grayscale hover:grayscale-0 relative z-10 scale-105 group-hover:scale-110"
                        />

                        {/* Stat Card Overlay */}
                        <div className="absolute bottom-0 right-0 z-30 bg-[#0a0a0a] border-t border-l border-white/10 p-4 md:p-6 lg:p-8 rounded-tl-[1.5rem] md:rounded-tl-[2rem] shadow-2xl max-w-[140px] md:max-w-[180px] lg:max-w-[220px]">
                            <div className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-white mb-1 leading-none tracking-tighter">10+</div>
                            <div className="text-[7px] md:text-[9px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-2 border-b border-white/5 pb-2">
                                Years Experience
                            </div>
                            <p className="text-[9px] md:text-[11px] text-gray-600 leading-tight font-light">
                                Architecting scalable enterprise solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scrollable Content Column */}
                <div className="w-full md:w-[55%] lg:w-[60%] border-l border-white/5">
                    <About />
                    <Experience />
                </div>
            </div>

            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}
