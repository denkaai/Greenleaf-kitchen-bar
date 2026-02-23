import { motion } from "framer-motion";

export default function DishCard({ image, name, description, price }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden bg-[#111] border border-highlight/10"
        >
            {/* Image */}
            <div className="overflow-hidden h-64">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Info */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl text-luxury">{name}</h3>
                    <span className="text-highlight font-semibold text-lg">{price}</span>
                </div>
                <p className="text-luxury/40 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}
