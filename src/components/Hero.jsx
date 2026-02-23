import { motion } from "framer-motion";

export default function Hero({ title, subtitle, children, bgImage }) {
    return (
        <section
            className="relative h-screen flex items-center justify-center text-center overflow-hidden"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/60" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-highlight uppercase tracking-[6px] text-sm mb-6"
                >
                    {subtitle}
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl text-luxury font-bold leading-tight"
                >
                    {title}
                </motion.h1>
                {children && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-10 flex flex-wrap gap-4 justify-center"
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
