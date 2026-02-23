import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const QUICK_OPTIONS = [
    "Book a Table",
    "View Menu",
    "Opening Hours",
    "Contact Details",
    "Events Booking",
];

const STEPS = ["name", "date", "time", "guests", "phone"];

const STEP_QUESTIONS = {
    name: "What is your name?",
    date: "What date would you like to book? (e.g., 25th March)",
    time: "What time would you prefer?",
    guests: "How many guests?",
    phone: "What is your phone number?",
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            from: "bot",
            text: "Hello 👋 I'm Lili, your GreenLeaf booking assistant. How can I help you today?",
        },
    ]);
    const [input, setInput] = useState("");
    const [bookingStep, setBookingStep] = useState(null);
    const [bookingData, setBookingData] = useState({});
    const [isTyping, setIsTyping] = useState(false);

    const addBotMessage = (text, delay = 800) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: "bot", text }]);
            setIsTyping(false);
        }, delay);
    };

    const handleQuickOption = (option) => {
        setMessages((prev) => [...prev, { from: "user", text: option }]);

        switch (option) {
            case "Book a Table":
            case "Events Booking":
                setBookingStep(0);
                addBotMessage("Wonderful! Let's get you booked. " + STEP_QUESTIONS.name);
                break;
            case "View Menu":
                addBotMessage(
                    "You can explore our full menu at the Menu page. We have Starters, Main Course, Vegetarian options, Cocktails, and Desserts! 🍽️"
                );
                break;
            case "Opening Hours":
                addBotMessage(
                    "We're open Monday – Sunday, 9AM to 11PM. We'd love to see you! 🕘"
                );
                break;
            case "Contact Details":
                addBotMessage(
                    "📍 Kamakis, Kenya\n📞 0712092244\n📧 info@greenleafkitchen.co.ke"
                );
                break;
            default:
                addBotMessage(
                    "I didn't understand that. Please choose an option below."
                );
        }
    };

    const handleBookingInput = (value) => {
        const currentField = STEPS[bookingStep];
        const newData = { ...bookingData, [currentField]: value };
        setBookingData(newData);

        setMessages((prev) => [...prev, { from: "user", text: value }]);

        if (bookingStep < STEPS.length - 1) {
            const nextStep = bookingStep + 1;
            setBookingStep(nextStep);
            addBotMessage(STEP_QUESTIONS[STEPS[nextStep]]);
        } else {
            setBookingStep(null);
            addBotMessage(
                `✅ Booking Summary:\n` +
                `👤 Name: ${newData.name}\n` +
                `📅 Date: ${newData.date}\n` +
                `🕐 Time: ${newData.time}\n` +
                `👥 Guests: ${newData.guests}\n` +
                `📞 Phone: ${newData.phone}\n\n` +
                `Thank you! Your reservation request has been received. We will contact you shortly. 🌿`
            );
            setBookingData({});
        }
    };

    const handleSend = () => {
        if (!input.trim()) return;

        if (bookingStep !== null) {
            handleBookingInput(input.trim());
        } else {
            setMessages((prev) => [...prev, { from: "user", text: input.trim() }]);
            addBotMessage(
                "I didn't understand that. Please choose an option below."
            );
        }
        setInput("");
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-luxury flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>

            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[520px] bg-[#111] border border-highlight/20 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-accent px-5 py-4 flex items-center gap-3">
                            <span className="text-2xl">🌿</span>
                            <div>
                                <p className="text-luxury font-semibold text-sm">Lili</p>
                                <p className="text-luxury/60 text-xs">GreenLeaf Assistant</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${msg.from === "user"
                                                ? "bg-accent text-luxury rounded-br-sm"
                                                : "bg-[#1a1a1a] text-luxury/80 rounded-bl-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-[#1a1a1a] px-4 py-3 rounded-2xl rounded-bl-sm">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-highlight/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-2 h-2 bg-highlight/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-2 h-2 bg-highlight/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Options */}
                        {bookingStep === null && (
                            <div className="px-4 pb-2 flex flex-wrap gap-2">
                                {QUICK_OPTIONS.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => handleQuickOption(opt)}
                                        className="text-xs border border-highlight/30 text-highlight px-3 py-1.5 rounded-full hover:bg-highlight/10 transition-all duration-300"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-3 border-t border-highlight/10 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Type a message..."
                                className="flex-1 bg-[#1a1a1a] text-luxury/80 text-sm px-4 py-2.5 rounded-full outline-none border border-highlight/10 focus:border-highlight/40 transition-colors"
                            />
                            <button
                                onClick={handleSend}
                                className="w-10 h-10 flex items-center justify-center bg-accent text-luxury rounded-full hover:bg-highlight transition-colors"
                            >
                                <Send size={16} />
                            </button>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href="https://wa.me/254712092244"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center text-xs text-highlight bg-accent/10 py-2 hover:bg-accent/20 transition-colors"
                        >
                            💬 Chat on WhatsApp
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
