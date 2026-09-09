import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import NotFound from "./NotFound";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <NotFound />;
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden bg-sage/30 aspect-square flex items-center justify-center p-8"
          >
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <span className="text-sm font-medium text-gold uppercase tracking-wider">{product.category}</span>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2">{product.name}</h1>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            
            <div className="pt-6 border-t border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Key Benefits</h3>
              <ul className="grid gap-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-8">
              <Button asChild size="lg" className="w-full md:w-auto text-lg px-8">
                <Link to="/contact">
                  Inquire About This Product
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
