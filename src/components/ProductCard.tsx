
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export const ProductCard = ({ name, price, image, category, isNew }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({ name, price, image });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0 relative">
        <div className="overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {isNew && (
          <Badge className="absolute top-4 right-4 bg-secondary text-white">
            New Arrival
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <p className="text-sm text-gray-500 uppercase tracking-wide">{category}</p>
        <h3 className="font-display text-xl">{name}</h3>
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-semibold">${price.toFixed(2)}</p>
          <button 
            className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};
