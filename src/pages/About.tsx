
import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl mb-8 text-center">About Us</h1>
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                Welcome to Butcherly, your premier destination for high-quality,
                expertly cut meats. For over two decades, we've been serving our
                community with the finest selections of beef, pork, poultry, and
                lamb, all sourced from trusted local farms.
              </p>
              <img
                src="https://images.unsplash.com/photo-1542528180-a1208c5169a5"
                alt="Our butcher shop"
                className="w-full rounded-lg mb-6"
              />
              <h2 className="font-display text-2xl mb-4">Our Story</h2>
              <p className="mb-6">
                Founded in 2000, Butcherly began as a small family-owned butcher
                shop with a simple mission: to provide our customers with the
                highest quality meats while supporting local farmers and sustainable
                practices. Today, we continue to uphold these values while
                embracing modern techniques and convenience.
              </p>
              <h2 className="font-display text-2xl mb-4">Our Promise</h2>
              <p className="mb-6">
                Every cut of meat that leaves our shop is hand-selected and
                prepared with the utmost care. Our expert butchers bring decades of
                experience to ensure you receive nothing but the best. We stand
                behind the quality of our products and are committed to your
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
