import { motion } from "framer-motion";
import { Leaf, Target, Eye, Award, FlaskConical, Heart, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const About = () => (
  <main>
    {/* Hero Banner */}
    <section className="relative py-32 overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,40%,15%)/0.92] to-[hsl(140,35%,18%)/0.85]" />
      <div className="relative container mx-auto px-4 text-center text-primary-foreground">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold mb-4">
          About N.D Pharma
        </motion.h1>
        <p className="text-primary-foreground/80 max-w-lg mx-auto">Your trusted partner in Ayurvedic healthcare</p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title="Our Story" subtitle="Building trust through quality Ayurvedic healthcare" />
        <motion.div {...fadeUp} className="prose prose-lg mx-auto text-muted-foreground space-y-4 text-center">
          <p>N.D Pharma is a leading Ayurvedic medicine manufacturer based in Kanpur, dedicated to producing safe, effective, and affordable herbal healthcare products. With years of experience in Ayurvedic formulation, we combine traditional knowledge with modern manufacturing practices.</p>
          <p>Our GMP-certified facility ensures that every product meets the highest quality standards. We source the finest natural herbs and ingredients to create formulations that promote holistic health and well-being.</p>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-sage/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Target, title: "Our Mission", desc: "To provide high-quality, affordable Ayurvedic medicines that improve lives through the power of natural healing. We are committed to making traditional herbal healthcare accessible to everyone." },
            { icon: Eye, title: "Our Vision", desc: "To be India's most trusted Ayurvedic pharmaceutical company, recognized for innovation in herbal formulations, quality manufacturing, and unwavering commitment to customer wellness." },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.2 }}
              className="glass-card rounded-xl p-8">
              <div className="w-14 h-14 mb-4 rounded-full gradient-primary flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: Leaf, title: "Natural Purity", desc: "100% natural herbs and ingredients in every product" },
            { icon: Award, title: "Quality First", desc: "GMP-certified manufacturing with strict quality control" },
            { icon: Heart, title: "Customer Care", desc: "Dedicated to improving health and well-being" },
            { icon: Shield, title: "Trust & Safety", desc: "Safe, tested, and scientifically formulated medicines" },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="text-center p-6 rounded-xl hover:bg-sage transition-colors">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sage flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Manufacturing */}
    <section className="section-padding gradient-primary text-primary-foreground">
      <div className="container mx-auto text-center max-w-3xl">
        <SectionHeading title="Manufacturing Excellence" light />
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { icon: FlaskConical, title: "Research & Development", desc: "Continuous innovation in herbal formulations" },
            { icon: Award, title: "GMP Standards", desc: "State-of-the-art manufacturing facility" },
            { icon: Shield, title: "Quality Testing", desc: "Rigorous quality checks at every stage" },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary-foreground/15 flex items-center justify-center">
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="font-heading font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-primary-foreground/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
