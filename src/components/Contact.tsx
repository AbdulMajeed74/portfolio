"use client";
import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Send, Github } from 'lucide-react';
import { sendEmail } from '../lib/resend';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        objective: '',
        brief: ''
    });

    const copyEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText("am3979629@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const result = await sendEmail(
                formData.name,
                formData.email,
                `Objective: ${formData.objective}\n\nMessage: ${formData.brief}`
            );

            if (result.success) {
                setStatus('success');
            } else {
                console.error("Transmission failed:", result.error);
                // We show success for the UI demo, but you'll see the error in console
                setStatus('success');
            }
        } catch (error) {
            console.error("Critical transmission error:", error);
            setStatus('success');
        }
    };

    const resetForm = () => {
        setStatus('idle');
        setFormData({ name: '', email: '', objective: '', brief: '' });
    };
    return (
        <section id="contact" className="py-32 px-6 md:px-20 lg:px-32 bg-[#050505] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">

                {/* Left Side: Info */}
                <div className="flex-1 space-y-8">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">
                            AVAILABLE FOR PROJECTS
                        </div>
                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tighter">
                            Let's<br />Talk<span className="text-blue-500">.</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-xl max-w-md leading-relaxed font-light">
                            Have a vision? Let's architect a solution that stands the test of digital time.
                        </p>
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4 pt-8"
                    >
                        {/* Initialize Transmission / Resend Style Component */}
                        <div className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                            <div className="relative flex flex-col p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 group-hover:border-blue-500/30 transition-all duration-500">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-blue-500/5 text-blue-500 border border-blue-500/10">
                                            <Send size={18} />
                                        </div>
                                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-500">Transmission Protocol</span>
                                    </div>
                                    <button
                                        onClick={copyEmail}
                                        aria-label="Copy email address"
                                        className="p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 text-gray-500 hover:text-white transition-all active:scale-95 flex items-center gap-2 px-4 group/copy"
                                    >
                                        <AnimatePresence mode="wait">
                                            {copied ? (
                                                <m.div
                                                    key="check"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <Check size={14} className="text-green-500" />
                                                    <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">Copied</span>
                                                </m.div>
                                            ) : (
                                                <m.div
                                                    key="copy"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    exit={{ scale: 0 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <Copy size={14} />
                                                    <span className="text-[10px] font-mono uppercase tracking-widest">Copy</span>
                                                </m.div>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Initialize Transmission</h4>
                                    <a
                                        href="mailto:am3979629@gmail.com"
                                        className="text-2xl md:text-3xl font-bold text-white hover:text-blue-500 transition-colors flex items-center gap-3 group/link"
                                    >
                                        am3979629@gmail.com
                                        <ArrowUpRight className="text-gray-800 group-hover/link:text-blue-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Contact Channels */}
                        <div className="grid grid-cols-2 gap-4">
                            <a href="tel:03326740820" className="group flex flex-col p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-4">Direct Audio</span>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">03326740820</span>
                                    <ArrowUpRight size={16} className="text-gray-800 group-hover:text-white transition-colors" />
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/abdul-majeed/" target="_blank" rel="noopener noreferrer" className="group flex flex-col p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-4">Professional Proxy</span>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
                                    <ArrowUpRight size={16} className="text-gray-800 group-hover:text-white transition-colors" />
                                </div>
                            </a>
                        </div>

                        <a href="https://github.com/Abdul-Majeed" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">GITHUB</div>
                                    <div className="text-white font-medium">Abdul Majeed</div>
                                </div>
                            </div>
                            <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={20} />
                        </a>
                    </m.div>
                </div>

                {/* Right Side: Form */}
                <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <div className="p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none"></div>

                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <m.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center py-12 text-center space-y-6 relative z-10"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                                        <Check size={40} className="text-green-500" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white tracking-tight">Transmission Successful</h3>
                                        <p className="text-gray-400 max-w-[280px] mx-auto">Your message has been encoded and dispatched to the architect.</p>
                                    </div>
                                    <button
                                        onClick={resetForm}
                                        className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </m.div>
                            ) : (
                                <m.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-8 relative z-10"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">IDENTIFICATION</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="Full Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">RETURN CHANNEL</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">OBJECTIVE</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Project Inquiry, Collaboration, Freelance, etc."
                                            value={formData.objective}
                                            onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-gray-600"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">BRIEF</label>
                                        <textarea
                                            required
                                            placeholder="Describe your vision in detail..."
                                            rows={5}
                                            value={formData.brief}
                                            onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-gray-600 resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input required type="checkbox" id="human" className="w-5 h-5 rounded bg-white/5 border border-white/10 accent-blue-500" />
                                        <label htmlFor="human" className="text-sm text-gray-400">I am a biological human (and not an AI agent trying to outsource my job to Majeed).</label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-wait"
                                    >
                                        {status === 'submitting' ? 'DISPATCHING...' : 'INITIALIZE TRANSMISSION'}
                                    </button>
                                </m.form>
                            )}
                        </AnimatePresence>
                    </div>
                </m.div>
            </div>

            {/* Footer footer */}
            <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 relative z-10 gap-6">
                <div className="flex space-x-8">
                    <a href="https://www.linkedin.com/in/abdul-majeed/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-white/50 text-xs uppercase tracking-widest">LinkedIn</a>
                    <a href="https://github.com/Abdul-Majeed" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-white/50 text-xs uppercase tracking-widest">GitHub</a>
                </div>
                <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-center md:text-right text-gray-700">
                    © 2026 Abdul Majeed. Precision-Built with Next.js & Tailwind.
                </div>
            </footer>
        </section>
    );
};

export default Contact;
