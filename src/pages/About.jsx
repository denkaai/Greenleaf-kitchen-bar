import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Leaf, Heart, Target, Eye, Award, ChefHat, Utensils, Globe } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=2070&q=80";

const WHY_CHOOSE_US = [
    { icon: Leaf, title: "Farm to Table", desc: "Locally-sourced ingredients from Kenyan farms" },
    { icon: ChefHat, title: "Expert Chefs", desc: "Internationally trained culinary artists" },
    { icon: Award, title: "Award Winning", desc: "Recognized for culinary excellence" },
    { icon: Utensils, title: "Diverse Menu", desc: "From classic to contemporary cuisines" },
    { icon: Globe, title: "Sustainability", desc: "Committed to eco-friendly practices" },
    { icon: Heart, title: "Warm Hospitality", desc: "Every guest is family at GreenLeaf" },
];

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
};

export default function About() {
    return (
        <div>
            <Hero title="Our Story" subtitle="About GreenLeaf" bgImage={HERO_BG} />

            {/* Story */}
            <section className="py-24 px-6 bg-primary">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeUp}>
                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                            alt="Restaurant Story"
                            className="w-full h-[500px] object-cover"
                        />
                    </motion.div>
                    <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.2 }}>
                        <p className="text-highlight uppercase tracking-[6px] text-sm mb-4">Est. 2020</p>
                        <h2 className="font-heading text-4xl text-luxury mb-6">A Journey of Flavor</h2>
                        <p className="text-luxury/50 text-lg leading-relaxed mb-6">
                            GreenLeaf Kitchen & Bar was born from a passion for bringing the finest
                            culinary experiences to Kamakis. What started as a small kitchen with a
                            big dream has grown into a beloved dining destination.
                        </p>
                        <p className="text-luxury/50 text-lg leading-relaxed">
                            Our founders envisioned a space where community meets cuisine — where
                            every meal becomes a memory and every guest feels like family. Today,
                            we continue to honor that vision with every dish we serve.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div {...fadeUp} className="bg-[#111] border border-highlight/10 p-10">
                        <Target size={40} className="text-highlight mb-6" />
                        <h3 className="font-heading text-3xl text-luxury mb-4">Our Mission</h3>
                        <p className="text-luxury/50 leading-relaxed">
                            To deliver an elevated dining experience that celebrates Kenya's
                            agricultural richness through innovative, seasonal menus crafted
                            with integrity, creativity, and a deep respect for our planet.
                        </p>
                    </motion.div>
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="bg-[#111] border border-highlight/10 p-10">
                        <Eye size={40} className="text-highlight mb-6" />
                        <h3 className="font-heading text-3xl text-luxury mb-4">Our Vision</h3>
                        <p className="text-luxury/50 leading-relaxed">
                            To become East Africa's most celebrated farm-to-table dining
                            destination, inspiring a movement of sustainable, locally-driven
                            culinary excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sustainability */}
            <section className="py-24 px-6 bg-primary">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeUp}>
                        <p className="text-highlight uppercase tracking-[6px] text-sm mb-4">Sustainability</p>
                        <h2 className="font-heading text-4xl text-luxury mb-6">Committed to Our Planet</h2>
                        <p className="text-luxury/50 text-lg leading-relaxed mb-6">
                            At GreenLeaf, sustainability isn't a buzzword — it's our foundation.
                            We partner with local farmers, minimize food waste through innovative
                            kitchen practices, and use eco-friendly packaging.
                        </p>
                        <ul className="space-y-3">
                            {["100% locally-sourced produce", "Zero single-use plastics", "Composting & waste reduction programs", "Energy-efficient kitchen equipment"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-luxury/60 text-sm">
                                    <Leaf size={14} className="text-highlight shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                        <img
                            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80"
                            alt="Sustainability"
                            className="w-full h-[500px] object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Meet the Chef */}
            <section className="py-24 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeUp}>
                        <img
                            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
                            alt="Executive Chef"
                            className="w-full h-[550px] object-cover"
                        />
                    </motion.div>
                    <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
                        <p className="text-highlight uppercase tracking-[6px] text-sm mb-4">Meet the Chef</p>
                        <h2 className="font-heading text-4xl text-luxury mb-2">Chef Daniel Omondi</h2>
                        <p className="text-highlight text-sm uppercase tracking-wider mb-6">Executive Chef</p>
                        <p className="text-luxury/50 text-lg leading-relaxed mb-6">
                            With over 15 years of culinary experience across Nairobi, Paris, and
                            Cape Town, Chef Daniel brings a unique blend of African heritage
                            and global sophistication to every plate at GreenLeaf.
                        </p>
                        <p className="text-luxury/50 text-lg leading-relaxed">
                            His philosophy is simple: let the ingredients speak. By championing
                            local farmers and seasonal produce, Chef Daniel creates dishes that
                            are both deeply rooted and daringly innovative.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 px-6 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle label="Excellence" title="Why Choose GreenLeaf" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_CHOOSE_US.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                                className="bg-[#111] border border-highlight/10 p-8 text-center group hover:border-highlight/30 transition-all duration-300"
                            >
                                <item.icon size={36} className="text-highlight mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h4 className="font-heading text-xl text-luxury mb-2">{item.title}</h4>
                                <p className="text-luxury/40 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
