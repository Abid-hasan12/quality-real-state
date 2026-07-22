import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "8801805030165";
        const text = `Hello, I want to send an inquiry:%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(whatsappUrl, '_blank');
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <main className="py-28 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">

                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-emerald-400 font-semibold uppercase tracking-wider text-sm bg-emerald-500/10 px-4 py-1.5 rounded-full inline-block">
                            Get in Touch
                        </span>
                        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                            We’d Love to Hear From You
                        </h1>
                        <p className="mt-4 text-slate-400 text-lg">
                            Have questions about buying, selling, or our properties? Reach out to our professional team today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Contact Info Cards */}
                        <div className="space-y-6">
                            <div className="bg-slate-900/60 border border-[rgba(255,255,255,0.08)] p-8 rounded-[2rem] backdrop-blur-xl">
                                <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Fill out the form or contact us directly through our office details below.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl shrink-0">
                                            📍
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Office Location</h4>
                                            <p className="text-slate-400 text-sm mt-1">2/1, Level-1, Road-4, Block-H, South-Banasree, Dhaka, Bangladesh</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl shrink-0">
                                            📞
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Phone Number</h4>
                                            <p className="text-slate-400 text-sm mt-1">+880 01805-030165</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl shrink-0">
                                            ✉️
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Email Address</h4>
                                            <p className="text-slate-400 text-sm mt-1">qualityrealstate.bd@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-900/60 border border-[rgba(255,255,255,0.08)] p-8 sm:p-10 rounded-[2rem] backdrop-blur-xl shadow-2xl">
                            {submitted ? (
                                <div className="text-center py-16">
                                    <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-3xl mb-4 font-bold">
                                        ✓
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                                    <p className="text-slate-400 mt-2">Thank you for reaching out. We will get back to you shortly.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400 transition"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl bg-slate-950/60 border border-[rgba(255,255,255,0.1)] px-4 py-3.5 text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="Enter your email"
                                            className="w-full rounded-xl bg-slate-950/60 border border-[rgba(255,255,255,0.1)] px-4 py-3.5 text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">Your Message</label>
                                        <textarea
                                            rows={4}
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Write your message here..."
                                            className="w-full rounded-xl bg-slate-950/60 border border-[rgba(255,255,255,0.1)] px-4 py-3.5 text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none transition resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 py-4 font-semibold text-white shadow-lg transition hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:scale-[1.02]"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;