import { motion } from "framer-motion";

export default function SectionTitle({ label, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            {label && (
                <p className="text-highlight uppercase tracking-[6px] text-sm mb-4">
                    {label}
                </p>
            )}
            <h2 className="font-heading text-4xl md:text-5xl text-luxury mb-6">
                {title}
            </h2>
            {description && (
                <p className="text-luxury/50 max-w-2xl mx-auto text-lg leading-relaxed">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
