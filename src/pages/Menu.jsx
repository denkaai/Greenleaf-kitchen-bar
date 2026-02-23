import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import { Download } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?auto=format&fit=crop&w=2070&q=80";

const CATEGORIES = ["All", "Starters", "Main Course", "Vegetarian", "Cocktails", "Drinks", "Desserts"];

const MENU_ITEMS = [
    // Starters
    { name: "Coconut Soup", description: "Creamy coconut broth with lemongrass and prawns", price: "KES 850", category: "Starters" },
    { name: "Bruschetta Trio", description: "Tomato basil, mushroom truffle, and avocado lime", price: "KES 750", category: "Starters" },
    { name: "Calamari Fritti", description: "Crispy squid rings with garlic aioli", price: "KES 950", category: "Starters" },
    { name: "Beef Carpaccio", description: "Thinly sliced raw beef with capers and parmesan", price: "KES 1,200", category: "Starters" },
    // Main Course
    { name: "Grilled Salmon", description: "Pan-seared with herb butter and seasonal vegetables", price: "KES 2,800", category: "Main Course" },
    { name: "Wagyu Steak", description: "Premium cut with truffle mashed potatoes", price: "KES 4,500", category: "Main Course" },
    { name: "Lobster Risotto", description: "Creamy Arborio rice with fresh lobster tail", price: "KES 3,200", category: "Main Course" },
    { name: "Spiced Lamb Rack", description: "Slowly roasted with rosemary jus", price: "KES 3,800", category: "Main Course" },
    { name: "Duck Confit", description: "Slow-cooked leg with orange glaze", price: "KES 3,400", category: "Main Course" },
    // Vegetarian
    { name: "Garden Bowl", description: "Organic greens, avocado, quinoa, citrus dressing", price: "KES 1,500", category: "Vegetarian" },
    { name: "Truffle Pasta", description: "Handmade fettuccine with black truffle cream", price: "KES 2,400", category: "Vegetarian" },
    { name: "Stuffed Bell Peppers", description: "Wild rice, mushroom, and cheese filling", price: "KES 1,800", category: "Vegetarian" },
    // Cocktails
    { name: "GreenLeaf Signature", description: "Gin, cucumber, mint, elderflower tonic", price: "KES 900", category: "Cocktails" },
    { name: "Kenya Sunset", description: "Rum, passion fruit, mango, lime", price: "KES 850", category: "Cocktails" },
    { name: "Gold Rush", description: "Bourbon, honey syrup, fresh lemon", price: "KES 950", category: "Cocktails" },
    { name: "Midnight Garden", description: "Vodka, basil, blackberry, tonic", price: "KES 900", category: "Cocktails" },
    // Drinks
    { name: "Fresh Juice Selection", description: "Mango, passion, watermelon, or pineapple", price: "KES 450", category: "Drinks" },
    { name: "Craft Lemonade", description: "House-made with mint and ginger", price: "KES 350", category: "Drinks" },
    { name: "Premium Coffee", description: "Single-origin Kenyan AA espresso", price: "KES 400", category: "Drinks" },
    // Desserts
    { name: "Chocolate Fondant", description: "Molten dark chocolate with vanilla ice cream", price: "KES 1,200", category: "Desserts" },
    { name: "Crème Brûlée", description: "Classic vanilla custard with caramelized sugar", price: "KES 950", category: "Desserts" },
    { name: "Tiramisu", description: "Espresso-soaked layers with mascarpone cream", price: "KES 1,100", category: "Desserts" },
];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = activeCategory === "All"
        ? MENU_ITEMS
        : MENU_ITEMS.filter((item) => item.category === activeCategory);

    return (
        <div>
            <Hero title="Our Menu" subtitle="Culinary Excellence" bgImage={HERO_BG} />

            <section className="py-24 px-6 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <SectionTitle
                        label="A Taste of GreenLeaf"
                        title="Explore Our Menu"
                        description="Every dish is carefully crafted using the finest locally-sourced ingredients."
                    />

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 text-sm uppercase tracking-[2px] border transition-all duration-300 ${activeCategory === cat
                                        ? "bg-highlight text-primary border-highlight"
                                        : "border-highlight/20 text-luxury/50 hover:border-highlight/50 hover:text-luxury"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filtered.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.05 }}
                                className="flex items-start justify-between gap-4 p-6 bg-[#111] border border-highlight/10 hover:border-highlight/25 transition-all duration-300"
                            >
                                <div className="flex-1">
                                    <h3 className="font-heading text-xl text-luxury mb-1">{item.name}</h3>
                                    <p className="text-luxury/40 text-sm">{item.description}</p>
                                </div>
                                <span className="text-highlight font-semibold text-lg whitespace-nowrap">{item.price}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Download Button */}
                    <div className="text-center mt-16">
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 border border-highlight text-highlight uppercase tracking-widest px-8 py-3.5 text-sm hover:bg-highlight hover:text-primary transition-all duration-300"
                        >
                            <Download size={18} />
                            Download Full Menu
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
