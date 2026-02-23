import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Users, Building2, PartyPopper, CalendarDays, CheckCircle } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2070&q=80";

const EVENTS = [
    { icon: Users, title: "Private Dining", desc: "Exclusive space for intimate gatherings with personalized menus and dedicated service." },
    { icon: Building2, title: "Corporate Events", desc: "Professional settings for meetings, team celebrations, and corporate milestones." },
    { icon: PartyPopper, title: "Birthday Celebrations", desc: "Make your special day unforgettable with custom cakes, decorations, and curated menus." },
    { icon: CalendarDays, title: "Group Bookings", desc: "Perfect for family reunions, friend get-togethers, and community events." },
];

export default function Events() {
    const [form, setForm] = useState({
        name: "", phone: "", email: "", date: "", time: "", guests: "", requests: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.phone.trim()) newErrors.phone = "Phone is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
        if (!form.date) newErrors.date = "Date is required";
        if (!form.time) newErrors.time = "Time is required";
        if (!form.guests) newErrors.guests = "Number of guests is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const inputClass = (field) =>
        `w-full bg-[#111] border ${errors[field] ? "border-red-500" : "border-highlight/10 focus:border-highlight/40"
        } text-luxury text-sm px-5 py-3.5 outline-none transition-colors`;

    return (
        <div>
            <Hero title="Events & Reservations" subtitle="Celebrate With Us" bgImage={HERO_BG} />

            {/* Event Types */}
            <section className="py-24 px-6 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        label="Hosting"
                        title="Unforgettable Events"
                        description="From intimate dinners to grand celebrations, GreenLeaf is the perfect venue."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {EVENTS.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                                className="bg-[#111] border border-highlight/10 p-8 flex gap-6 items-start hover:border-highlight/25 transition-all duration-300"
                            >
                                <event.icon size={36} className="text-highlight shrink-0" />
                                <div>
                                    <h3 className="font-heading text-2xl text-luxury mb-2">{event.title}</h3>
                                    <p className="text-luxury/40 text-sm leading-relaxed">{event.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reservation Form */}
            <section className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-3xl mx-auto">
                    <SectionTitle
                        label="Reservations"
                        title="Book Your Table"
                        description="Secure your spot for an unforgettable dining experience."
                    />

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-center bg-[#111] border border-highlight/20 p-12"
                        >
                            <CheckCircle size={56} className="text-highlight mx-auto mb-6" />
                            <h3 className="font-heading text-3xl text-luxury mb-4">Reservation Received!</h3>
                            <p className="text-luxury/50 text-lg mb-8">
                                Thank you, {form.name}! We have received your reservation for{" "}
                                <span className="text-highlight">{form.guests} guests</span> on{" "}
                                <span className="text-highlight">{form.date}</span> at{" "}
                                <span className="text-highlight">{form.time}</span>.
                            </p>
                            <p className="text-luxury/40 text-sm">We will confirm your booking shortly via phone or email.</p>
                            <button
                                onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", date: "", time: "", guests: "", requests: "" }); }}
                                className="mt-8 border border-highlight text-highlight uppercase tracking-widest px-8 py-3 text-sm hover:bg-highlight hover:text-primary transition-all duration-300"
                            >
                                Make Another Reservation
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            onSubmit={handleSubmit}
                            className="bg-[#111] border border-highlight/10 p-10 space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input name="name" placeholder="Full Name *" value={form.name} onChange={handleChange} className={inputClass("name")} />
                                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <input name="phone" placeholder="Phone Number *" value={form.phone} onChange={handleChange} className={inputClass("phone")} />
                                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                                </div>
                            </div>
                            <div>
                                <input name="email" type="email" placeholder="Email Address *" value={form.email} onChange={handleChange} className={inputClass("email")} />
                                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <input name="date" type="date" value={form.date} onChange={handleChange} className={inputClass("date")} />
                                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                                </div>
                                <div>
                                    <input name="time" type="time" value={form.time} onChange={handleChange} className={inputClass("time")} />
                                    {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
                                </div>
                                <div>
                                    <input name="guests" type="number" min="1" placeholder="Guests *" value={form.guests} onChange={handleChange} className={inputClass("guests")} />
                                    {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests}</p>}
                                </div>
                            </div>
                            <textarea
                                name="requests"
                                rows="4"
                                placeholder="Special Requests (Optional)"
                                value={form.requests}
                                onChange={handleChange}
                                className="w-full bg-[#111] border border-highlight/10 focus:border-highlight/40 text-luxury text-sm px-5 py-3.5 outline-none transition-colors resize-none"
                            />
                            <button
                                type="submit"
                                className="w-full bg-highlight text-primary font-semibold uppercase tracking-widest py-4 text-sm hover:bg-white transition-all duration-300"
                            >
                                Reserve My Table
                            </button>
                        </motion.form>
                    )}
                </div>
            </section>
        </div>
    );
}
