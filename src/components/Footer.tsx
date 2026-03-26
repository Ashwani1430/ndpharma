import { Link } from "react-router-dom";
import { Leaf, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="gradient-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <span className="font-heading text-xl font-bold">N.D Pharma</span>
          </div>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Trusted manufacturer of Ayurvedic medicines and herbal healthcare products. Committed to natural healing and wellness.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {["Coughnid Syrup", "Morex Expectorant", "Gyno Plus Syrup", "Batorin Oil", "Maltowin Malt"].map((p) => (
              <li key={p}>
                <Link to="/products" className="hover:text-primary-foreground transition-colors">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>103, Sanjay Gandhi Nagar, Near Chaturvedi Building, Naubasta, Kanpur - 208021</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+91 XXXXX XXXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>info@ndpharma.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} N.D Pharma. All rights reserved. | Ayurvedic Medicine Manufacturer
      </div>
    </div>
  </footer>
);

export default Footer;
