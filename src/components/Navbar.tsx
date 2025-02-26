
import { Link } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-display text-2xl">
            Boucherie B. Poirier
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/products"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
          <CartDrawer />
        </div>
      </div>
    </nav>
  );
};
