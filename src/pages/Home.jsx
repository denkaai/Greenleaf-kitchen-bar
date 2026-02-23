import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import DishCard from "../components/DishCard";
import { Star, Quote } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2070&q=80";

const FEATURED_DISHES = [
    { name: "Grilled Salmon", description: "Pan-seared with herb butter and seasonal vegetables", price: "KES 2,800", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80" },
    { name: "Wagyu Steak", description: "Premium cut with truffle mashed potatoes", price: "KES 4,500", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80" },
    { name: "Lobster Risotto", description: "Creamy Arborio rice with fresh lobster tail", price: "KES 3,200", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80" },
    { name: "Garden Bowl", description: "Organic greens, avocado, quinoa and citrus dressing", price: "KES 1,500", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
    { name: "Truffle Pasta", description: "Handmade fettuccine with black truffle cream", price: "KES 2,400", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80" },
    { name: "Spiced Lamb Rack", description: "Slowly roasted with rosemary jus and root vegetables", price: "KES 3,800", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
];

const TESTIMONIALS = [
    { name: "Amara K.", text: "An absolutely divine dining experience. The ambiance and flavors are unmatched in Nairobi.", rating: 5 },
    { name: "David M.", text: "GreenLeaf is our go-to for celebrations. Every dish tells a story of quality and passion.", rating: 5 },
    { name: "Sofia L.", text: "From the cocktails to the desserts, every detail speaks of culinary excellence. Highly recommend!", rating: 5 },
];

const GALLERY = [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=80",
];

export default function Home() {
    return (
        <div>
            {/* Hero */}
            <Hero
                title="Fresh. Local. Elevated Dining."
                subtitle="Modern Culinary Experience"
                bgImage={HERO_BG}
            >
                <Link to="/events" className="bg-highlight text-primary font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-white transition-all duration-300 text-sm">
                    Book a Table
                </Link>
                <Link to="/menu" className="border border-highlight text-highlight font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-highlight hover:text-primary transition-all duration-300 text-sm">
                    View Menu
                </Link>
                <a href="https://wa.me/254712092244" target="_blank" rel="noopener noreferrer" className="border border-luxury/30 text-luxury font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-luxury/10 transition-all duration-300 text-sm">
                    WhatsApp Us
                </a>
            </Hero>

            {/* Featured Dishes */}
            <section className="py-24 px-6 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        label="Culinary Excellence"
                        title="Featured Dishes"
                        description="Experience premium dining crafted with passion and locally-sourced ingredients."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FEATURED_DISHES.map((dish, i) => (
                            <DishCard key={i} {...dish} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80"
                            alt="Restaurant interior"
                            className="w-full h-[500px] object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="text-highlight uppercase tracking-[6px] text-sm mb-4">Our Story</p>
                        <h2 className="font-heading text-4xl md:text-5xl text-luxury mb-6">Cultivating Flavor Since 2020</h2>
                        <p className="text-luxury/50 text-lg leading-relaxed mb-8">
                            Located in the heart of Kamakis, GreenLeaf Kitchen & Bar offers a sophisticated
                            escape where locally-sourced ingredients meet contemporary culinary techniques.
                            Every dish is a celebration of Kenya's rich agricultural heritage, elevated
                            with international flair.
                        </p>
                        <Link to="/about" className="border border-highlight text-highlight uppercase tracking-widest px-8 py-3 text-sm hover:bg-highlight hover:text-primary transition-all duration-300">
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle label="What Our Guests Say" title="Testimonials" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.15 }}
                                className="bg-[#111] border border-highlight/10 p-8"
                            >
                                <Quote size={32} className="text-highlight/30 mb-4" />
                                <p className="text-luxury/60 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-luxury font-semibold text-sm">{t.name}</span>
                                    <div className="flex gap-1">
                                        {Array.from({ length: t.rating }).map((_, j) => (
                                            <Star key={j} size={14} className="fill-highlight text-highlight" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle label="@greenleafkitchen" title="From Our Kitchen" />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {GALLERY.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="overflow-hidden group"
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${i + 1}`}
                                    className="w-full h-56 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-accent">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="font-heading text-4xl md:text-5xl text-luxury mb-6">
                        Reserve Your Table Today
                    </h2>
                    <p className="text-luxury/60 text-lg mb-10">
                        Experience an unforgettable evening of fine dining, handcrafted cocktails,
                        and warm hospitality at GreenLeaf Kitchen & Bar.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/events" className="bg-highlight text-primary font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-white transition-all duration-300 text-sm">
                            Book Now
                        </Link>
                        <a href="https://wa.me/254712092244" target="_blank" rel="noopener noreferrer" className="border border-luxury/30 text-luxury font-semibold uppercase tracking-widest px-8 py-3.5 hover:bg-luxury/10 transition-all duration-300 text-sm">
                            WhatsApp Us
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
