"use client";
import { m } from 'framer-motion';
import { Layers, Database, Cloud, Terminal, Workflow, Zap, Shield, Cpu, Code2, Globe, Server, Smartphone } from 'lucide-react';

const Skills = () => {
    const logicPrinciples = [
        {
            title: "Performance First",
            desc: "Architecting for sub-second load times and 60fps interactions using modern rendering patterns. I don't just optimize code; I engineer speed.",
            icon: <Zap size={20} className="text-blue-500" />
        },
        {
            title: "Resilient Systems",
            desc: "Building fault-tolerant architectures that handle edge cases gracefully and ensure long-term stability and uptime.",
            icon: <Shield size={20} className="text-blue-500" />
        },
        {
            title: "Logic-Driven",
            desc: "Focusing on clean logic and efficient algorithms to solve complex problems with elegant and maintainable solutions.",
            icon: <Cpu size={20} className="text-blue-500" />
        }
    ];

    const mainSkills = [
        {
            category: "Logic_Flow_v2.0",
            desc: "Interactive system mapping and logic-driven architecture.",
            icon: <Workflow size={24} />
        },
        {
            category: "Frontend Engineering",
            desc: "Pixel-perfect, responsive UIs with modern frameworks.",
            icon: <Layers size={24} />
        },
        {
            category: "Backend Core",
            desc: "Scalable, high-performance server-side systems.",
            icon: <Database size={24} />
        },
        {
            category: "Cloud Architecture",
            desc: "Reliable data persistence and cloud infrastructure.",
            icon: <Cloud size={24} />
        }
    ];

    const technologies = [
        { name: "React", icon: <Globe size={14} /> },
        { name: "Next.js", icon: <Layers size={14} /> },
        { name: "TypeScript", icon: <Code2 size={14} /> },
        { name: "Tailwind CSS", icon: <Zap size={14} /> },
        { name: "Laravel", icon: <Server size={14} /> },
        { name: "Node.js", icon: <Terminal size={14} /> },
        { name: "PostgreSQL", icon: <Database size={14} /> },
        { name: "AWS", icon: <Cloud size={14} /> },
        { name: "Docker", icon: <Cpu size={14} /> },
        { name: "Framer Motion", icon: <Smartphone size={14} /> }
    ];

    return (
        <section id="skills" className="py-32 px-6 md:px-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* How I Build Logic Section */}
                <div className="mb-32">
                    <p className="text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">Paradigm</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-16 tracking-tight">HOW I BUILD LOGIC<span className="text-blue-500">.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {logicPrinciples.map((logic, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="mb-8 p-4 w-fit rounded-2xl bg-white/[0.02] border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-500">
                                    {logic.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight text-white/90">{logic.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-400 transition-colors">
                                    {logic.desc}
                                </p>
                            </m.div>
                        ))}
                    </div>
                </div>

                {/* The Architectural Ecosystem Section */}
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 mb-32 items-center">
                    <div>
                        <p className="text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">Engineering</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight tracking-tighter">The Architectural Ecosystem.</h2>
                        <p className="text-gray-500 max-w-xl text-lg leading-relaxed">
                            A systematic approach to building resilient digital products, leveraging years of engineering mastery in high-stakes environments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {mainSkills.map((skill, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 rounded-3xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="text-gray-400 group-hover:text-blue-500 transition-colors mb-6 relative z-10">
                                    {skill.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3 tracking-tight relative z-10">{skill.category}</h3>
                                <p className="text-[13px] text-gray-500 leading-relaxed font-normal relative z-10">{skill.desc}</p>
                            </m.div>
                        ))}
                    </div>
                </div>

                {/* Tech Arsenal Section */}
                <div className="pt-20 border-t border-white/5">
                    <p className="text-[10px] font-mono text-gray-600 tracking-[0.3em] uppercase mb-12 text-center">Technical Arsenal</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <m.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="px-6 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-[10px] font-mono text-gray-400 uppercase tracking-widest flex items-center gap-3 hover:border-blue-500/30 hover:text-blue-400 hover:bg-blue-500/5 transition-all cursor-default group"
                            >
                                <span className="text-gray-600 group-hover:text-blue-500 transition-colors">{tech.icon}</span>
                                {tech.name}
                            </m.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
