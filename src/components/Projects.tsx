"use client";
import { m } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: "01",
            title: "Cortex AI",
            category: "Neural Intelligence Platform",
            desc: "Enterprise-grade generative AI platform for autonomous workflow optimization and neural content generation.",
            tags: ["React", "Python", "TensorFlow"],
            link: "#",
            github: "#"
        },
        {
            id: "02",
            title: "Zenith SaaS",
            category: "Financial Ecosystem",
            desc: "Comprehensive financial management ecosystem with real-time analytics and predictive forecasting.",
            tags: ["Next.js", "Laravel", "MySQL"],
            link: "#",
            github: "#"
        },
        {
            id: "03",
            title: "Nexus Core",
            category: "System Synchronization",
            desc: "High-concurrency microservices architecture for distributed system synchronization.",
            tags: ["Go", "Docker", "Redis"],
            link: "#",
            github: "#"
        },
        {
            id: "04",
            title: "Aura UI",
            category: "Design Framework",
            desc: "Advanced design system framework focused on performance, accessibility and kinetic motion.",
            tags: ["TypeScript", "Tailwind", "Motion"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="py-32 px-6 md:px-20 bg-[#050505] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-24">
                    <p className="text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase mb-4">Portfolio</p>
                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">Select Works<span className="text-blue-500">.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <m.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col bg-white/[0.01] border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500"
                        >
                            {/* Card Content */}
                            <div className="p-8 md:p-12 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-16">
                                    <span className="text-6xl font-display font-bold text-white/[0.03] group-hover:text-blue-500/[0.08] transition-colors duration-500 leading-none">
                                        {project.id}
                                    </span>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="p-3 rounded-full border border-white/5 bg-white/5 text-gray-500 hover:text-white hover:border-white/20 transition-all">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.link} className="p-3 rounded-full border border-white/5 bg-white/5 text-gray-500 hover:text-blue-500 hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <span className="text-[10px] font-mono text-blue-500 tracking-widest uppercase mb-4 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base group-hover:text-gray-400 transition-colors">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-[9px] font-mono text-gray-400 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-full uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-transparent group-hover:from-blue-500/[0.02] transition-all duration-700 pointer-events-none"></div>
                        </m.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a href="#projects" className="inline-flex items-center gap-6 group">
                        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-gray-500 group-hover:text-white transition-colors">
                            Explore All Projects
                        </span>
                        <div className="flex items-center">
                            <div className="w-12 h-px bg-gray-800 transition-all group-hover:w-20 group-hover:bg-blue-500"></div>
                            <ArrowUpRight size={14} className="text-gray-800 group-hover:text-blue-500 transition-all ml-[-1px]" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
