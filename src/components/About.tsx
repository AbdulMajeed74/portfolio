"use client";
import { m } from 'framer-motion';

const About = () => {
    const philosophies = [
        {
            id: "01",
            title: "Clean Architect",
            desc: "Readable & Maintainable"
        },
        {
            id: "02",
            title: "Full-Velocity",
            desc: "Optimized Performance"
        },
        {
            id: "03",
            title: "Global Scope",
            desc: "Remote-Ready Product"
        },
        {
            id: "04",
            title: "Pure Focus",
            desc: "Precision Driven"
        }
    ];

    return (
        <section id="about" className="py-32 px-6 md:px-12 border-b border-white/5 bg-[#050505]/30">
            <div className="max-w-4xl">
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-8">
                        <div className="w-10 h-px bg-blue-500/50"></div>
                        <span className="text-blue-500 font-mono text-[10px] tracking-[0.3em] uppercase">Philosophy</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-10 tracking-tighter">
                        Built on Precision.<br />
                        <span className="text-gray-500">Driven by Logic.</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                        I don't just write code; I architect systems. My philosophy centers on building digital products that are not only high-performing but also structurally sound and human-centric.
                    </p>
                </m.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-px md:bg-white/5 border-white/5 rounded-[2rem] overflow-hidden">
                    {philosophies.map((item, index) => (
                        <m.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-10 bg-[#050505] hover:bg-white/[0.02] transition-all duration-500 flex flex-col justify-between min-h-[180px]"
                        >
                            <span className="text-[10px] font-mono text-gray-700 group-hover:text-blue-500 shadow-blue-500/20 transition-colors uppercase tracking-widest">
                                {item.id} // Logic_Module
                            </span>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white/90 group-hover:translate-x-1 transition-transform tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-500 font-mono uppercase tracking-[0.2em]">
                                    {item.desc}
                                </p>
                            </div>
                        </m.div>
                    ))}
                </div>

                <m.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex items-center gap-4 text-gray-700"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em]">Mastering the core</span>
                </m.div>
            </div>
        </section>
    );
};

export default About;
