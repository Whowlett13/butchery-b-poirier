
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";

const products = [
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
  {
    name: "Fresh Lamb Chops",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7",
    category: "Lamb",
  },
  {
    name: "Premium Pork Tenderloin",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1544025162-c2e1ea00c038",
    category: "Pork",
  },
  {
    name: "Wild-caught Salmon",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975",
    category: "Seafood",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl mb-12 text-center">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
