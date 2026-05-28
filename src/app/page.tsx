import Atelier from "./components/Atelier";
import Contact from "./components/Contact";
import ExecutiveDashboard from "./components/ExecutiveDashboard";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-bg">
      <Hero />
      <ProductGrid />
      <Atelier />
      <ExecutiveDashboard />
      <Contact />
    </main>
  );
}
