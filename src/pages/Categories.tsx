
import { Navbar } from "@/components/Navbar";

const categories = [
  {
    name: "Beef",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f",
    description: "Premium cuts of beef from local farms",
  },
  {
    name: "Poultry",
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0471",
    description: "Free-range chicken and other poultry products",
  },
  {
    name: "Pork",
    image: "https://images.unsplash.com/photo-1544025162-c2e1ea00c038",
    description: "High-quality pork from sustainable farms",
  },
  {
    name: "Lamb",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7",
    description: "Tender lamb from local producers",
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl mb-12 text-center">Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative overflow-hidden rounded-lg group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-white font-display text-2xl mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-200">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
