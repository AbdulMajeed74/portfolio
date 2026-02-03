"use client";
import { m } from 'framer-motion';

const Experience = () => {
    const jobs = [
        {
            role: "Senior Full-Stack Developer",
            company: "Tech Architect Solution",
            date: "2023 — Present",
            items: [
                "Architected industrial-scale ERP systems reducing processing time by 40%",
                "Led a team of 5 developers to deliver a real-time POS ecosystem",
                "Optimized cloud infrastructure on AWS saving 25% in monthly costs"
            ]
        },
        {
            role: "Full-Stack Web Developer",
            company: "Digital Edge Agency",
            date: "2021 — 2023",
            items: [
                "Developed high-conversion e-commerce platforms using Next.js and Laravel",
                "Implemented advanced UI/UX patterns with Framer Motion and Tailwind CSS",
                "Mentored junior developers and standardized code review processes"
            ]
        },
        {
            role: "Junior Web Developer",
            company: "StartUp Hub",
            date: "2020 — 2021",
            items: [
                "Built and maintained client websites using React and Node.js",
                "Integrated third-party APIs for payment and notification systems",
                "Assisted in database schema design and optimization"
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-12 border-b border-white/5">
            <m.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-12"
            >
                Professional Experience
            </m.p>

            <div className="space-y-16">
                {jobs.map((job, index) => (
                    <m.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="grid md:grid-cols-[200px_1fr] gap-8"
                    >
                        <div>
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">{job.date}</span>
                            <h3 className="text-xl font-bold text-white tracking-tight">{job.company}</h3>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-medium text-blue-400">{job.role}</h4>
                            <ul className="space-y-4">
                                {job.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-400 text-sm md:text-base leading-relaxed">
                                        <span className="mr-4 mt-2 w-1.5 h-1.5 bg-blue-500/50 rounded-full flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </m.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
