import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                    ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-highlight text-2xl">🌿</span>
                    <span className="font-heading text-xl md:text-2xl text-luxury tracking-wide">
                        GreenLeaf <span className="text-highlight">Kitchen & Bar</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className={`text-sm uppercase tracking-[3px] font-body transition-colors duration-300 ${location.pathname === link.path
                                        ? "text-highlight"
                                        : "text-luxury/80 hover:text-highlight"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="https://wa.me/254712092244"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-highlight border border-highlight/30 px-4 py-2 rounded-full hover:bg-highlight/10 transition-all duration-300"
                    >
                        <MessageCircle size={16} />
                        WhatsApp
                    </a>
                    <Link
                        to="/events"
                        className="bg-highlight text-primary text-sm font-semibold uppercase tracking-widest px-6 py-2.5 hover:bg-white transition-all duration-300"
                    >
                        Book a Table
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-luxury"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="lg:hidden bg-primary/98 backdrop-blur-lg border-t border-highlight/10"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg uppercase tracking-[3px] font-body ${location.pathname === link.path
                                            ? "text-highlight"
                                            : "text-luxury/80"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-highlight/10" />
                            <a
                                href="https://wa.me/254712092244"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-highlight"
                            >
                                <MessageCircle size={18} />
                                Chat on WhatsApp
                            </a>
                            <Link
                                to="/events"
                                className="bg-highlight text-primary text-center font-semibold uppercase tracking-widest px-6 py-3"
                            >
                                Book a Table
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
