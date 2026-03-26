import { motion } from "framer-motion";
import { products } from "@/data/products";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const Products = () => (
  <main>
    {/* Hero Banner */}
    <section className="relative py-32 overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,40%,15%)/0.92] to-[hsl(140,35%,18%)/0.85]" />
      <div className="relative container mx-auto px-4 text-center text-primary-foreground">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Our Products
        </motion.h1>
        <p className="text-primary-foreground/80 max-w-lg mx-auto">Quality Ayurvedic medicines for every health need</p>
      </div>
    </section>

    {/* Products Grid */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <SectionHeading title="Complete Product Range" subtitle="Explore our full range of GMP-certified Ayurvedic medicines and herbal healthcare products." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="product-card group"
            >
              <div className="aspect-square overflow-hidden bg-sage">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-medium text-gold uppercase tracking-wider">{product.category}</span>
                <h3 className="font-heading text-xl font-semibold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <div className="pt-2">
                  <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Key Benefits:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {product.benefits.map((b) => (
                      <li key={b} className="text-xs bg-sage text-secondary-foreground px-3 py-1 rounded-full">{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Products;
