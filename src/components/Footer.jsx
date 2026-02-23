import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-highlight/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl text-luxury mb-4">
              GreenLeaf <span className="text-highlight">Kitchen & Bar</span>
            </h3>
            <p className="text-luxury/50 text-sm leading-relaxed">
              A premium dining destination where locally-sourced ingredients
              meet contemporary culinary artistry. Experience elevated dining
              at its finest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-highlight uppercase tracking-[3px] text-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Menu", "Events", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-luxury/50 hover:text-highlight transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-highlight uppercase tracking-[3px] text-sm mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-luxury/50 text-sm">
                <MapPin size={16} className="text-highlight mt-0.5 shrink-0" />
                Kamakis, Kenya
              </li>
              <li className="flex items-start gap-3 text-luxury/50 text-sm">
                <Phone size={16} className="text-highlight mt-0.5 shrink-0" />
                0712092244
              </li>
              <li className="flex items-start gap-3 text-luxury/50 text-sm">
                <Clock size={16} className="text-highlight mt-0.5 shrink-0" />
                Mon – Sun: 9AM – 11PM
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-highlight uppercase tracking-[3px] text-sm mb-6">
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-highlight/20 flex items-center justify-center text-luxury/50 hover:bg-highlight hover:text-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-highlight/10 text-center">
          <p className="text-luxury/30 text-sm">
            © 2026 GreenLeaf Kitchen & Bar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
