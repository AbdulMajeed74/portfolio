"use client";
import { m } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#050505] text-white pt-24 pb-12 px-6 md:px-12 lg:px-16 xl:px-24">
            {/* Background Grids & Gradients */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">

                {/* Text Content - Left Side */}
                <div className="flex-1 w-full text-center md:text-left order-2 md:order-1">
                    <m.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] md:text-xs font-mono text-blue-500 mb-6 tracking-[0.4em] uppercase"
                    >
                        Full Stack Engineer — 2026
                    </m.p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-display font-bold leading-[1.05] tracking-tighter mb-8 max-w-[15ch] mx-auto md:mx-0">
                        <m.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="block"
                        >
                            ARCHITECTING
                        </m.span>
                        <span className="block text-gray-600">EXCEPTIONAL</span>
                        <span className="block">DIGITAL</span>
                        <span className="block text-gray-600">EXPERIENCES</span>
                    </h1>

                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
                    >
                        <div className="hidden md:block w-12 h-[1px] bg-blue-500/30 mt-3"></div>
                        <p className="text-gray-400 max-w-md leading-relaxed text-sm lg:text-base">
                            Bridging the gap between Design and Logic. Specializing in building high-performance, resilient digital ecosystems.
                        </p>
                    </m.div>

                    {/* Mobile Only Contact Button Link */}
                    <m.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-10 md:hidden"
                    >
                        <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono tracking-widest uppercase hover:bg-blue-500/20 transition-all">
                            Initialize Contact
                        </a>
                    </m.div>
                </div>

                {/* Image Content - Right Side */}
                <div className="flex-1 w-full max-w-[300px] sm:max-w-md md:max-w-xl lg:max-w-2xl relative flex justify-center md:justify-end group order-1 md:order-2 mb-8 md:mb-0">
                    {/* Background Glow behind image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-all duration-1000"></div>

                    <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-auto lg:h-[65vh] xl:h-[75vh] max-h-[400px] md:max-h-none rounded-2xl md:rounded-none overflow-hidden md:overflow-visible z-10"
                    >
                        <Image
                            src="/profile.png"
                            alt="Abdul Majeed"
                            width={800}
                            height={1000}
                            priority
                            quality={75}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="w-full h-full object-cover md:object-contain object-bottom opacity-100 grayscale hover:grayscale-0 transition-all duration-700 relative z-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-25 bottom-0 h-1/3 md:hidden"></div>
                    </m.div>
                </div>
            </div>

            {/* Scroll Indicators */}
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 md:left-16 lg:left-24 md:translate-x-0 z-30"
            >
                <div className="hidden md:block text-[9px] text-gray-600 uppercase tracking-[0.3em] mb-2 font-mono">Descent</div>
                <div className="h-10 w-[1px] bg-blue-500/20 mx-auto md:ml-2 animate-bounce flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-500/50"></div>
                </div>
            </m.div>

            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="absolute bottom-8 right-16 lg:right-24 text-right z-30 hidden lg:block"
            >
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Status</div>
                <div className="text-sm font-medium text-green-400">Open for Hire</div>
                <a href="#contact" className="block mt-4 text-[10px] font-mono text-blue-500 hover:text-white transition-colors tracking-widest uppercase">
                    &gt; Transmission Ready
                </a>
            </m.div>
        </section>
    );
};

export default Hero;
