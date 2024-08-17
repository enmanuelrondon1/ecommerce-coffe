import { ProductImageMiniature } from "@/components/shared/product-image-miniature";
import { ProductTasteShared } from "@/components/shared/product-tast-shared";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";

interface CartItemProps {
  product: ProductType;
}

export const CartItem = (props: CartItemProps) => {
  const { product } = props;
  const { removeItem } = useCart();

  return (
    <li className="flex py-6 border-b ">
      <ProductImageMiniature
        url={product.attributes.images.data[0].attributes.url}
        slug={product.attributes.slug}
      />

      <div className="flex justify-between flex-1 px-6 ">
        <div>
          <h2 className="text-lg font-bold ">
            {product.attributes.productName}
          </h2>
          <p className="font-bold">{formatPrice(product.attributes.price)} </p>

          <ProductTasteShared
            origin={product.attributes.origin}
            taste={product.attributes.taste}
          />
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white border  shadow-md p-1 hover:scale-110 transition "
            )}
          >
            <X
              size={20}
              onClick={() => removeItem(product.id)}
              className="text-black"
            />
          </button>
        </div>
      </div>
    </li>
  );
};
