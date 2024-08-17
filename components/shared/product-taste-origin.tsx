import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-product";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { ProductTasteShared } from "./product-tast-shared";

interface ProductTasteOriginProps {
  product: ProductType;
}

export const ProductTasteOrigin = (props: ProductTasteOriginProps) => {
  const { product } = props;
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();

  const addToCheckout = () => {
    addItem(product);
    removeLovedItem(product.id);
  };

  return (
    <div>
      <div className="flex justify-between flex-1 px-6 ">
        <div>
          <h2 className="text-lg font-bold ">
            {product.attributes.productName}
          </h2>

          <p className="font-bold">{formatPrice(product.attributes.price)}</p>

        
          <ProductTasteShared
            origin={product.attributes.origin}
            taste={product.attributes.taste}
          />

          <Button className="mt-5 rounded-full " onClick={addToCheckout}>
            Añadir al carrito
          </Button>
        </div>

        <div>
          <button
            className={cn(
              " rounded-full flex items-center bg-white border shadow-md p-1 hover:scale-110 transition "
            )}
          >
            <X
              size={20}
              onClick={() => removeLovedItem(product.id)}
              className="text-black"
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
