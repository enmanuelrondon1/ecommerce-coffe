import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";

interface ProductTasteSharedProps {
  taste: string,
  origin: string
}

export const ProductTasteShared = (props: ProductTasteSharedProps) => {
  const { origin, taste } = props;

  return (
    <div className="flex items-center justify-between gap-3 ">
      <p
        className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white
           dark:text-black w-fit "
      >
        {taste}
      </p>
      <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit ">
        {origin}
      </p>
    </div>
  );
};

