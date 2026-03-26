import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for contacting N.D Pharma. We'll get back to you soon." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,40%,15%)/0.92] to-[hsl(140,35%,18%)/0.85]" />
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </motion.h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">Get in touch for product inquiries or consultations</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading title="Get in Touch" subtitle="We'd love to hear from you. Send us a message and we'll respond promptly." />
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-8 space-y-5"
            >
              {[
                { name: "name" as const, placeholder: "Your Name", type: "text" },
                { name: "phone" as const, placeholder: "Phone Number", type: "tel" },
                { name: "email" as const, placeholder: "Email Address", type: "email" },
              ].map((f) => (
                <input
                  key={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  value={form[f.name]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              ))}
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
              />
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                { icon: MapPin, title: "Address", text: "103, Sanjay Gandhi Nagar, Near Chaturvedi Building, Naubasta, Kanpur - 208021" },
                { icon: Phone, title: "Phone", text: "+91 XXXXX XXXXX" },
                { icon: Mail, title: "Email", text: "info@ndpharma.com" },
                { icon: Clock, title: "Working Hours", text: "Mon – Sat: 9:00 AM – 7:00 PM" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-sage transition-colors">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-border shadow-md">
                <iframe
                  title="N.D Pharma Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.5!2d80.31!3d26.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI3JzAwLjAiTiA4MMKwMTgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
