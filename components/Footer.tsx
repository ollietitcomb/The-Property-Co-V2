import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo variant="full" className="h-12 w-auto mb-4 text-white" />
            <p className="text-brand-cloud/80 text-sm leading-relaxed">
              Your better half in property. From quick fixes to long-term growth — Brighton & Hove's better half for property solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-brand-cloud/80 hover:text-brand-teal-light transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-brand-cloud/80 hover:text-brand-teal-light transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-cloud/80 hover:text-brand-teal-light transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-brand-sand mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-brand-cloud/80">
                <Mail size={16} className="text-brand-teal-light" />
                <a
                  href="mailto:hello@betterhalfproperty.co"
                  className="hover:text-brand-teal-light transition"
                >
                  hello@betterhalfproperty.co
                </a>
              </li>
              <li className="flex items-center gap-2 text-brand-cloud/80">
                <Phone size={16} className="text-brand-teal-light" />
                <a
                  href="tel:+447344359975"
                  className="hover:text-brand-teal-light transition"
                >
                  07344 359975
                </a>
              </li>
              <li className="flex items-center gap-2 text-brand-cloud/80">
                <MessageCircle size={16} className="text-brand-teal-light" />
                <a
                  href="https://wa.me/447344359975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-teal-light transition"
                >
                  WhatsApp us
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brand-teal/20 hover:bg-brand-teal-light transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brand-teal/20 hover:bg-brand-teal-light transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brand-teal/20 hover:bg-brand-teal-light transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-cloud/10 pt-8 text-sm text-brand-cloud/60 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p>© {currentYear} The Better Half Property Co. All rights reserved.</p>
            <p>Operating across Brighton & Hove.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

