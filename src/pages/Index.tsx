import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf, Shield, Award, Heart, Users, Sparkles, ThumbsUp,
  Star, BadgeCheck, DollarSign, Stethoscope, FlaskConical
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => (
  <main>
    {/* ── Hero ── */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,40%,15%)/0.92] via-[hsl(140,35%,18%)/0.85] to-[hsl(130,30%,20%)/0.7]" />
      <div className="relative container mx-auto px-4 py-32">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Leaf className="w-4 h-4" /> Trusted Ayurvedic Healthcare
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Natural Healing with <span className="text-gold">Ayurvedic Excellence</span>
          </h1>
          <p className="text-lg text-primary-foreground/85 mb-8 max-w-lg">
            Trusted Ayurvedic Medicines for Better Health & Wellness. Experience the power of nature with N.D Pharma's GMP-certified herbal products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-gold">View Products</Link>
            <Link to="/contact" className="btn-outline-hero">Contact Us</Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── About Section ── */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="About N.D Pharma" subtitle="A trusted name in Ayurvedic medicine manufacturing, dedicated to natural healing and quality healthcare." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {[
            { icon: Leaf, title: "Natural Ingredients", desc: "100% pure herbal formulations sourced from nature" },
            { icon: Shield, title: "Trusted Medicines", desc: "Proven Ayurvedic formulas backed by tradition" },
            { icon: Award, title: "GMP Certified", desc: "Quality manufacturing with strict quality control" },
            { icon: Users, title: "Customer Satisfaction", desc: "Thousands of happy customers across India" },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sage flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Products Section ── */}
    <section className="section-padding bg-sage/50">
      <div className="container mx-auto">
        <SectionHeading title="Our Products" subtitle="Discover our range of quality Ayurvedic medicines crafted for your health and wellness." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <motion.div {...fadeUp} className="text-center mt-10">
          <Link to="/products" className="btn-primary">View All Products</Link>
        </motion.div>
      </div>
    </section>

    {/* ── Why Choose Us ── */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Why Choose N.D Pharma" subtitle="We combine ancient Ayurvedic wisdom with modern quality standards." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { icon: Leaf, title: "Ayurvedic & Natural" },
            { icon: BadgeCheck, title: "GMP Certified" },
            { icon: Shield, title: "Safe & Effective" },
            { icon: ThumbsUp, title: "Trusted by Customers" },
            { icon: DollarSign, title: "Affordable Pricing" },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="text-center p-5 rounded-xl hover:bg-sage transition-colors duration-300">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full gradient-gold flex items-center justify-center">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h4 className="font-heading font-semibold text-sm text-foreground">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Benefits ── */}
    <section className="section-padding gradient-primary text-primary-foreground">
      <div className="container mx-auto">
        <SectionHeading title="Benefits of Ayurvedic Medicine" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            { icon: Heart, title: "Natural Healing" },
            { icon: Sparkles, title: "No Side Effects" },
            { icon: FlaskConical, title: "Herbal Ingredients" },
            { icon: Stethoscope, title: "Doctor Recommended" },
            { icon: Award, title: "Quality Assurance" },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center">
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="font-heading font-semibold">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Testimonials ── */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="What Our Customers Say" subtitle="Real experiences from people who trust N.D Pharma." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Rajesh Kumar", text: "Best Ayurvedic medicines I've ever used. Very effective and completely natural. Highly recommended!" },
            { name: "Sunita Devi", text: "Trusted brand with quality herbal products. The Gyno Plus Syrup has been very helpful for my health." },
            { name: "Amit Sharma", text: "N.D Pharma products are affordable yet highly effective. The Coughnid Syrup works wonders for cough relief." },
            { name: "Priya Verma", text: "I've been using Maltowin Malt and it has significantly improved my energy levels. Great Ayurvedic product!" },
          ].map((t, i) => (
            <motion.div key={t.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {Array(5).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
              <p className="font-heading font-semibold text-foreground text-sm">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="section-padding gradient-cta text-primary-foreground text-center">
      <div className="container mx-auto">
        <motion.div {...fadeUp}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Improve Your Health Naturally with N.D Pharma
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Experience the healing power of Ayurveda. Reach out to us for product inquiries or consultations.
          </p>
          <Link to="/contact" className="btn-gold text-lg px-8 py-4">Contact Us Today</Link>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Index;
