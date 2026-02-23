import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=2070&q=80";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name.trim() && form.email.trim() && form.message.trim()) {
            setSubmitted(true);
        }
    };

    return (
        <div>
            <Hero title="Get in Touch" subtitle="Contact Us" bgImage={HERO_BG} />

            <section className="py-24 px-6 bg-primary">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-highlight uppercase tracking-[6px] text-sm mb-4">Reach Us</p>
                        <h2 className="font-heading text-4xl text-luxury mb-8">We'd Love to Hear From You</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin size={24} className="text-highlight shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-luxury font-semibold mb-1">Location</h4>
                                    <p className="text-luxury/50 text-sm">Kamakis, Kenya</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone size={24} className="text-highlight shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-luxury font-semibold mb-1">Phone</h4>
                                    <p className="text-luxury/50 text-sm">0712092244</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail size={24} className="text-highlight shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-luxury font-semibold mb-1">Email</h4>
                                    <p className="text-luxury/50 text-sm">info@greenleafkitchen.co.ke</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock size={24} className="text-highlight shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-luxury font-semibold mb-1">Opening Hours</h4>
                                    <p className="text-luxury/50 text-sm">Monday – Sunday: 9AM – 11PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-12 w-full h-64 bg-[#111] border border-highlight/10 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin size={40} className="text-highlight/40 mx-auto mb-3" />
                                <p className="text-luxury/30 text-sm">Google Maps Integration</p>
                                <p className="text-luxury/20 text-xs">Kamakis, Kenya</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {submitted ? (
                            <div className="bg-[#111] border border-highlight/20 p-12 text-center h-full flex flex-col items-center justify-center">
                                <CheckCircle size={56} className="text-highlight mb-6" />
                                <h3 className="font-heading text-3xl text-luxury mb-4">Message Sent!</h3>
                                <p className="text-luxury/50 text-lg mb-8">
                                    Thank you, {form.name}! We'll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                                    className="border border-highlight text-highlight uppercase tracking-widest px-8 py-3 text-sm hover:bg-highlight hover:text-primary transition-all duration-300"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-[#111] border border-highlight/10 p-10 space-y-6">
                                <p className="text-highlight uppercase tracking-[6px] text-sm mb-2">Message</p>
                                <h3 className="font-heading text-3xl text-luxury mb-6">Send Us a Message</h3>

                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                    className="w-full bg-[#0a0a0a] border border-highlight/10 focus:border-highlight/40 text-luxury text-sm px-5 py-3.5 outline-none transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                    className="w-full bg-[#0a0a0a] border border-highlight/10 focus:border-highlight/40 text-luxury text-sm px-5 py-3.5 outline-none transition-colors"
                                />
                                <textarea
                                    rows="6"
                                    placeholder="Your Message *"
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    required
                                    className="w-full bg-[#0a0a0a] border border-highlight/10 focus:border-highlight/40 text-luxury text-sm px-5 py-3.5 outline-none transition-colors resize-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-highlight text-primary font-semibold uppercase tracking-widest py-4 text-sm flex items-center justify-center gap-3 hover:bg-white transition-all duration-300"
                                >
                                    <Send size={16} />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
