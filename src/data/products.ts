import coughnidImg from "@/assets/products/coughnid-syrup.jpg";
import morexImg from "@/assets/products/morex-expectorant.jpg";
import gynoPlusImg from "@/assets/products/gyno-plus.jpg";
import raktshodhImg from "@/assets/products/raktshodh-syrup.jpg";
import batorinImg from "@/assets/products/batorin-oil.jpg";
import maltowinImg from "@/assets/products/maltowin-malt.jpg";
import ashokaImg from "@/assets/products/ashoka-tonic.jpg";
import heptocalImg from "@/assets/products/heptocal-tonic.jpg";
import irofolImg from "@/assets/products/irofol-syrup.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  benefits: string[];
  category: string;
}

export const products: Product[] = [
  {
    id: "coughnid-syrup",
    name: "Coughnid Syrup",
    image: coughnidImg,
    description: "Effective Ayurvedic cough syrup for relief from dry and wet cough, sore throat, and respiratory discomfort.",
    benefits: ["Relieves cough & cold", "Soothes sore throat", "Herbal formulation", "Safe for all ages"],
    category: "Respiratory",
  },
  {
    id: "morex-expectorant",
    name: "Morex Expectorant",
    image: morexImg,
    description: "Herbal expectorant that helps clear chest congestion and promotes easy breathing naturally.",
    benefits: ["Clears congestion", "Promotes easy breathing", "Natural herbs", "Non-drowsy"],
    category: "Respiratory",
  },
  {
    id: "gyno-plus-syrup",
    name: "Gyno Plus Syrup",
    image: gynoPlusImg,
    description: "Ayurvedic tonic specially formulated for women's health, hormonal balance, and overall well-being.",
    benefits: ["Women's health support", "Hormonal balance", "Boosts vitality", "Natural ingredients"],
    category: "Women's Health",
  },
  {
    id: "raktshodh-syrup",
    name: "Raktshodh Syrup",
    image: rakthodhImg,
    description: "Powerful blood purifier syrup that detoxifies the body and promotes clear, healthy skin.",
    benefits: ["Blood purification", "Skin health", "Detoxification", "Immune support"],
    category: "Blood Purifier",
  },
  {
    id: "batorin-oil",
    name: "Batorin Oil",
    image: batorinImg,
    description: "Therapeutic Ayurvedic massage oil for joint pain, muscle relaxation, and body rejuvenation.",
    benefits: ["Joint pain relief", "Muscle relaxation", "Improves circulation", "Natural herbs"],
    category: "Pain Relief",
  },
  {
    id: "maltowin-malt",
    name: "Maltowin Malt",
    image: maltowinImg,
    description: "Nutritional health supplement malt enriched with Ayurvedic herbs for energy and immunity.",
    benefits: ["Energy booster", "Immunity support", "Nutritional supplement", "Great taste"],
    category: "Nutrition",
  },
  {
    id: "ashoka-uterine-tonic",
    name: "Ashoka Uterine Tonic",
    image: ashokaImg,
    description: "Traditional Ashoka-based tonic for uterine health, menstrual regulation, and female wellness.",
    benefits: ["Uterine health", "Menstrual regulation", "Herbal Ashoka extract", "Safe & effective"],
    category: "Women's Health",
  },
  {
    id: "heptocal-herbal-tonic",
    name: "Heptocal Herbal Tonic",
    image: heptocalImg,
    description: "Liver care herbal tonic that supports healthy liver function and aids digestion naturally.",
    benefits: ["Liver protection", "Aids digestion", "Detox support", "Herbal formula"],
    category: "Liver Care",
  },
  {
    id: "irofol-syrup",
    name: "Irofol Syrup",
    image: irofolImg,
    description: "Iron-rich Ayurvedic syrup to combat iron deficiency, boost hemoglobin, and improve energy levels.",
    benefits: ["Iron supplement", "Boosts hemoglobin", "Fights fatigue", "Natural iron source"],
    category: "Nutrition",
  },
];
