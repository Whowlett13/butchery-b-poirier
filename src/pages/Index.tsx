
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    name: "Premium Ribeye Steak",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    category: "Beef",
    isNew: true,
  },
  {
    name: "Organic Chicken Breast",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
    category: "Poultry",
  },
  {
    name: "Grass-fed Ground Beef",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    category: "Beef",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl text-white mb-6 animate-fadeIn">
            Premium Quality Meats
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Handpicked selections from local farms, expertly cut and prepared for your table.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 animate-fadeIn"
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted" id="products">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
                alt="Quality meats"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl mb-6">Our Quality Promise</h2>
              <p className="text-gray-600 mb-6">
                Every cut of meat in our selection is carefully chosen from trusted local farms
                that share our commitment to quality and sustainable practices. Our expert
                butchers prepare each piece with precision and care.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-white" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl mb-8">Visit Our Shop</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Come visit our store to see our full selection and get expert advice from our
            butchers. We're located in the heart of the city.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90">
            Get Directions
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
