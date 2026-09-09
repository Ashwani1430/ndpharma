import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

const ProductCard = ({ product, index }: { product: Product; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="product-card group"
  >
    <div className="aspect-square overflow-hidden bg-white p-4 flex items-center justify-center">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={512}
        height={512}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-5 space-y-3">
      <span className="text-xs font-medium text-gold uppercase tracking-wider">{product.category}</span>
      <h3 className="font-heading text-lg font-semibold text-foreground">{product.name}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
      <Link
        to={`/products/${product.id}`}
        className="inline-block text-sm font-medium text-primary hover:text-gold transition-colors"
      >
        View Details →
      </Link>
    </div>
  </motion.div>
);

export default ProductCard;
