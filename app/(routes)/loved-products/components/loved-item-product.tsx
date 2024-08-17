import { ProductImageMiniature } from "@/components/shared/product-image-miniature";
import { ProductTasteOrigin } from "@/components/shared/product-taste-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-product";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
  product: ProductType;
}

export const LovedItemProduct = (props: LovedItemProductProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();

  const addToCheckout = () => {
    addItem(product);
    removeLovedItem(product.id);
  };

  return (
    <div className="flex p-6 border-b">
 
       <ProductImageMiniature
        url={product.attributes.images.data[0].attributes.url}
        slug={product.attributes.slug}
      />
      <div className="flex justify-between flex-1 px-6 ">
        <ProductTasteOrigin product={product} />
      </div>
    </div>
  );
};
